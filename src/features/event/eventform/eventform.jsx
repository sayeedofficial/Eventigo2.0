import cuid from "cuid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/textInput";
import Textarea from "../../../app/common/form/textarea";
import SelectInput from "../../../app/common/form/selectInput";
import {
  combineValidators,
  composeValidators,
  hasLengthGreaterThan,
  isRequired,
} from "revalidate";
import Dateinput from "../../../app/common/form/dateinput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  return {
    initialValues: event,
  };
};

const actions = {
  createEvent,
  updateEvent,
};

const validate = combineValidators({
  title: isRequired({ message: "The Event title is required" }),
  category: isRequired({ message: "The Category is Required" }),
  description: composeValidators(
    isRequired({
      message: "Please enter description",
    }),
    hasLengthGreaterThan(10)({
      message: "Description needs to be atleast greater than 10 characters",
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date"),
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
  { key: "code", text: "Code", value: "code" },
];

class Eventform extends Component {
  onFormSubmit = (values) => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...this.values,
        id: cuid(),
        hostPhotoURL: `/assets/user.png`,
        hostedBy: "Bob",
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/event/${newEvent.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine,
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                component={TextInput}
                placeholder="What is your event about"
                type="text"
                multiple={true}
                component={SelectInput}
                options={category}
              />
              <Field
                name="description"
                component={Textarea}
                rows={3}
                placeholder="Tell us about the event description"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={TextInput}
                placeholder="Event city"
              />
              <Field
                name="venue"
                component={Textarea}
                placeholder="Event venue"
              />
              <Field
                name="date"
                component={Dateinput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Event date"
                type={Date}
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm", validate })(Eventform));
