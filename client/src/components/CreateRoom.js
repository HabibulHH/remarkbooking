import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRooms } from "../actions";

class CreateRoom extends Component {
  componentDidMount() {}

  render() {
    return <div>{"this will be your create rooms form"}</div>;
  }
}

const mapStateToProps = () => {};
export default connect(mapStateToProps, { fetchRooms })(CreateRoom);
