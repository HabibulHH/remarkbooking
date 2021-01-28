import React, { useCallback } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { formatBytes } from "react-dropzone-uploader";
import { Form } from "react-bootstrap";
const axios = require("axios");

export const Uploader = ({ getFiles }) => {
  const getUploadParams = (file, { meta }) => {
    console.log(file, ".........");
    const url = "http://localhost:5000/rooms/";
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
    };
  };

  //const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(file);
    let formData = new FormData();
    formData.append("rooms", file);
    formData.append("single", { value: true });
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/upload", formData, config)
      .then((response) => {
        // console.log("response.....", response);
        getFiles(response.data.profile_url);
      })
      .catch((error) => {});
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
