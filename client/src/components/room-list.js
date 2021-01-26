import React, { Component, components } from "react";
import { connect } from "react-redux";
import { showDetails } from "../actions";
import { v4 as uuidv4 } from "uuid";

class RoomList extends Component {
  renderList() {
    return this.props.rooms.map((room) => {
      return (
        <div key={uuidv4()}>
          <span>
            <p>{room.title}</p>
            <button onClick={() => this.props.showDetails(room)}>
              Show details
            </button>
          </span>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state.selectedRoom);
  return { rooms: state.rooms };
};
export default connect(mapStateToProps, { showDetails })(RoomList);
