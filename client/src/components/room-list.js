import React, { Component, components } from "react";

import { connect } from "react-redux";

class RoomList extends Component {
  render() {
    return (
      <div>
        {this.props.rooms.map((room) => {
          return <p>{room.title}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { rooms: state.rooms };
};
export default connect(mapStateToProps)(RoomList);
