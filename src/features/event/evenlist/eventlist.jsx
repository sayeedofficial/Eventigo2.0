import React, { Component, Fragment } from "react";
import Eventlistitem from "./eventlistitem";

class Eventlist extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <Eventlistitem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}
export default Eventlist;
