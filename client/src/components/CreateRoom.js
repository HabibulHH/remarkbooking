import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRooms } from "../actions";
import { Uploader } from "./Uploader";
const axios = require("axios");
const styles = {
  display: "flex",
};
class CreateRoom extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getFilesUrl = this.getFilesUrl.bind(this);
    this.state = {
      title: "",
      description: "",
      location: "",
      imageUrls: [],
      city: "",
      mobile: "",
      availableFrom: new Date(),
      availableTill: new Date(),
      capacity: "",
    };
  }
  handleChange(event) {
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
    //const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {}

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    if (this.state.title && this.state.imageUrls) {
      console.log(this.state);
      axios
        .post("/save", { ...this.state })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(this.state);
    } else {
      alert("You can not keep fileds empty");
      return;
    }
  }
  getFilesUrl(url, remove) {
    alert(url);
    let urls = [];
    if (remove === "removed") {
      urls = urls.filter((item) => item === url);
    } else {
      urls.push(url);
      this.setState({
        imageUrls: this.state.imageUrls.concat(url),
      });
    }
  }
  render() {
    return (
      <div className="row col-md-4 offset-4">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="inputEmail4">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="description">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="inputAddress">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="inputAddress">
                Capacity
              </label>
              <input
                type="text"
                className="form-control"
                id="capacity"
                name="capacity"
                value={this.state.capacity}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="city">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label style={styles} htmlFor="inputZip">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label style={styles} htmlFor="availableFrom">
                Available From
              </label>
              <input
                class="form-control"
                type="date"
                id="availableFrom"
                name="availableFrom"
                value={this.state.availableFrom}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label style={styles} htmlFor="availableTill">
                Available Till
              </label>{" "}
              <input
                class="form-control"
                type="date"
                id="availableTill"
                name="availableTill"
                value={this.state.availableTill}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-12">
              <Uploader getFiles={this.getFilesUrl} />
            </div>
          </div>

          <button
            onClick={this.handleSubmit}
            className="btn btn-success btn-lg btn-block"
          >
            Save Room
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => {};
export default connect(mapStateToProps, { fetchRooms })(CreateRoom);
