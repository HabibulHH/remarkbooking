import React, { Component } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

const DateRnage = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <DateRange
      editableDateInputs={true}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={true}
      onChange={(item) => {
        setState([item.selection]);
      }}
    />
  );
};

export default DateRnage;
