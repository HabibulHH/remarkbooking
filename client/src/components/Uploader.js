import React, { useCallback } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
const axios = require("axios");

export const Uploader = ({ getFiles }) => {
  const getUploadParams = (file, { meta }) => {
    console.log(file);
    const url = "https://httpbin.org/post";
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
    };
  };

  //const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(file);
    axios
      .post("/image", file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (status === "done") {
      getFiles(meta.fileUrl);
    }
    if (status === "removed") {
      getFiles(meta.fileUrl, "remove");
    }
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*,audio/*,video/*"
      inputContent={(files, extra) =>
        extra.reject ? "Image, audio and video files only" : "Drag Files"
      }
      styles={{
        dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
        inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
      }}
    />
  );
};
