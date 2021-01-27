import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRooms } from "../actions";
import { Uploader } from "./Uploader";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

class CreateRoom extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }
  getFilesUrl(url, remove) {
    let urls = [];
    if (remove === "removed") {
      urls = urls.filter((item) => item === url);
    } else {
      urls.push(url);
    }
  }
  render() {
    return (
      <div>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6  column col-sm-offset-0 col-md-offset-2 col-lg-offset-3">
              <form onSubmit={this.handleSubmit} className="form-horizontal">
                <fieldset>
                  {/* Form Name */}
                  <legend>Create your room </legend>
                  {/* Select Basic */}
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label"
                      htmlFor="selectbasic"
                    >
                      Select Location
                    </label>
                    <div className="col-md-9">
                      <select
                        id="selectbasic"
                        name="selectbasic"
                        className="form-control"
                      >
                        <option value={1}>Coxs Bazar</option>
                        <option value={2}>Shajek</option>
                        <option value={3}>Bandarban</option>
                      </select>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label"
                      htmlFor="textinput"
                    >
                      Room Capacity
                    </label>
                    <div className="col-md-3">
                      <input
                        id="textinput"
                        name="textinput"
                        type="text"
                        placeholder="placeholder"
                        className="form-control input-md"
                      />
                    </div>
                    {/* Multiple Radios (inline) */}
                    <label className="col-md-3 control-label" htmlFor="radios">
                      Post as add
                    </label>
                    <div className="col-md-3">
                      <label className="radio-inline" htmlFor="radios-0">
                        <input
                          type="radio"
                          name="radios"
                          id="radios-0"
                          defaultValue={1}
                          defaultChecked="checked"
                        />
                        Yes
                      </label>
                      <label className="radio-inline" htmlFor="radios-1">
                        <input
                          type="radio"
                          name="radios"
                          id="radios-1"
                          defaultValue={2}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label"
                      htmlFor="textinput"
                    >
                      Available from :{" "}
                    </label>
                    <div className="col-md-4">
                      <input
                        id="textinput"
                        name="textinput"
                        type="date"
                        placeholder="placeholder"
                        className="form-control input-md"
                      />
                    </div>
                    <label
                      className="col-md-1 control-label"
                      htmlFor="textinput"
                    >
                      Availabe till:{" "}
                    </label>
                    <div className="col-md-4">
                      <input
                        id="textinput"
                        name="textinput"
                        type="date"
                        placeholder="placeholder"
                        className="form-control input-md"
                      />
                    </div>
                  </div>
                  {/* Textarea */}
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label"
                      htmlFor="textarea"
                    >
                      Title
                    </label>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        id="textarea"
                        name="textarea"
                        defaultValue={"Write your description here"}
                      />
                    </div>
                  </div>
                  {/* Button (Double) */}

                  <div className="form-group">
                    <div className="col-md-12">
                      <Uploader getFiles={this.getFilesUrl} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label"
                      htmlFor="button1id"
                    />
                    <div className="col-md-8">
                      <button
                        id="button1id"
                        name="button1id"
                        className="btn btn-success btn-lg"
                      >
                        Save
                      </button>
                      <button
                        id="button2id"
                        name="button2id"
                        className="btn btn-danger btn-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {};
export default connect(mapStateToProps, { fetchRooms })(CreateRoom);
