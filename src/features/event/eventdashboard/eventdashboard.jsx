import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Eventlist from "../evenlist/eventlist";

import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
const mapState = (state) => ({
  events: state.events,
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent,
};

class EventDashboard extends Component {
  // state = {
  //   isOpen: false,
  //   selectedEvent: null,
  // };

  // handleisOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen,
  //   }));
  // };

  // handleCreateFormOpen = () => {
  //   this.setState({
  //     isOpen: true,
  //     selectedEvent: null,
  //   });
  // };
  // handleFormCancel = () => {
  //   this.setState({
  //     isOpen: false,
  //   });
  // };

  // handleCreateEvent = (newEvent) => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  // this.props.createEvent(newEvent);
  // this.setState(({ events }) => ({
  //   isOpen: false,
  // }));
  //   this.props.createEvent(newEvent);
  // };

  // handleSelectEvent = (event) => {
  //   this.setState({
  //     selectedEvent: event,
  //     isOpen: true,
  //   });
  // };

  // handleUpdateEvent = (updatedEvent) => {
  //   this.props.updateEvent(updatedEvent);
  // this.setState(({ events }) => ({
  // events: events.map((event) => {
  //   if (event.id === updatedEvent.id) {
  //     return { ...updatedEvent };
  //   } else {
  //     return event;
  //   }
  // }),
  //   isOpen: false,
  //   selectedEvent: null,
  // }));
  // };

  handleDeleteEvent = (id) => {
    // this.setState(({ events }) => ({
    //   events: events.filter((e) => e.id !== id),
    // }));
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Eventlist deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState, actions)(EventDashboard);
