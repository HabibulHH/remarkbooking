import "./styles.css";
import React, { Component, useState } from "react";
import Select from "react-select";
import DateRnage from "./Date";
import { Selector } from "./Selector";
import { connect } from "react-redux";
import { searchRooms } from "../actions";
import { useDispatch, mapStateToProps } from "react-redux";
import * as CONSTANTS from "../constants/redux-constants";

let toggle = true;

function SearchBar(props) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleLocationChange = (locaiton) => {
    setLocation(locaiton.value);
  };

  const showHideModal = () => {
    toggle = toggle ? false : true;
  };

  const handleSearch = () => {
    console.log("............");

    props.searchRooms({
      availableFrom: startDate,
      availableTill: endDate,
      city: location,
    });
  };

  const openModal = () => {
    return true;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    let value;
    if (target.type === "checkbox") {
      value = target.checked;
    } else if (target.type === "date") {
      value = target.valueAsDate.toJSON().slice(0, 10);
    } else {
      value = target.value;
    }
    const name = target.name;
    if (name === "startDate") setStartDate(value);
    if (name === "endDate") setEndDate(value);
  };

  return (
    <section id="searchBar">
      <div className="container bg-img py-3">
        <div className="title-texts">
          <h2>Resorts</h2>
          <p>
            Treat yourself! Your dream resort stay is just a few clicks away.
          </p>
        </div>
        <form action="javascript:" className="filter">
          <div className="search-input">
            <DropDown handleChange={handleLocationChange} />
          </div>
          <div className="date-range">
            <div className="row">
              <input
                class="form-control col-md-6"
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleChange}
              />
              <input
                class="form-control col-md-6"
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div onClick={showHideModal} className="room-select">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <Selector />
              </div>
            </div>
          </div>
          <div className="search-button">
            <button onClick={handleSearch}>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default connect(null, { searchRooms })(SearchBar);
const options = [
  { value: "Coxs Bazar", label: "Coxs Bazar" },
  { value: "Shajek", label: "Shajek" },
  { value: "Bandarban", label: "Bandarban" },
  { value: "Dhaka", label: "Dhaka" },
];

const DropDown = (props) => (
  <Select onChange={(value) => props.handleChange(value)} options={options} />
);
