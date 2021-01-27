import React, { Component } from "react";
import { connect } from "react-redux";
import { showDetails, fetchRooms } from "../actions";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "./Search";
import "./styles.css";

const divStyle = {
  marginTop: "70px",
};

class RoomList extends Component {
  componentDidMount() {
    this.props.fetchRooms();
  }
  renderList() {
    return this.props.rooms.map((room) => {
      return (
        <div key={uuidv4()}>
          <span>
            <p>{room.title}</p>
            <p>{room.rating}</p>
            <button
              className="btn btn-lg btn-outline-success"
              onClick={() => this.props.showDetails(room)}
            >
              Show details
            </button>
          </span>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <div style={divStyle}>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ rooms }) => {
  return { rooms: rooms };
};
export default connect(mapStateToProps, { showDetails, fetchRooms })(RoomList);
