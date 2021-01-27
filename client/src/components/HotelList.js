import React, { Component } from "react";
import { connect } from "react-redux";
import { showDetails, fetchRooms } from "../actions";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "./Search";
import "./RoomItem.css";
import RoomItem from "./RoomItem";

const divStyle = {
  marginTop: "70px",
};
class HotelList extends Component {
  componentDidMount() {
    this.props.fetchRooms();
  }
  renderList() {
    return this.props.rooms.map((room) => {
      return <RoomItem room={room} />;
    });
  }
  render() {
    return (
      <div>
        <SearchBar />

        <div className="container">
          <div style={divStyle}>{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ rooms }) => {
  return { rooms: rooms };
};
export default connect(mapStateToProps, { showDetails, fetchRooms })(HotelList);
