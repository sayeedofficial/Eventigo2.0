import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./eventDetailedHeader";
import EventDetailedChat from "./eventDetailedChats";
import EventDetailedInfo from "./eventDetailedInfo";
import EventDetailedSideBar from "./eventDetailedSideBar";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  return {
    event,
  };
};

const eventdetailedpage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(eventdetailedpage);