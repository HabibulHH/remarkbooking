import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class List extends Component {
  renderList() {
    if (this.props.rooms.length > 0) {
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
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default List;
