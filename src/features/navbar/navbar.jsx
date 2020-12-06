import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import Signedin from "./menus/signedin";
import Signedout from "./menus/signedout";

class Navbar extends Component {
  state = {
    authenticated: false, 
  };
  handleSignIn = () => {
    this.setState({ authenticated: true });
  };
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="assets/logo.png" alt="logo" />
            SIT-Events
          </Menu.Item>
          <Menu.Item exact={true} name="Events" as={NavLink} to="/events" />
          <Menu.Item name="People" as={NavLink} to="/people" />
          <Menu.Item name="Test" as={NavLink} to="/test" />

          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <Signedin signedOut={this.handleSignOut} />
          ) : (
            <Signedout signedIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(Navbar);
