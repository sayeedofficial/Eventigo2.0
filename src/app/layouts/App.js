import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventdashboard/eventdashboard";
import eventdetailedpage from "../../features/event/eventdetailedpage/eventdetailedpage";
import Eventform from "../../features/event/eventform/eventform";
import { homepage } from "../../features/home/homepage";
import Navbar from "../../features/navbar/navbar";
import testcomponent from "../../features/testarea/testcomponent";
import { peopledashboard } from "../../features/user/PeopleDashboard/peopledashboard";
import { Settingsdashboard } from "../../features/user/settings/settingsdashboard";

import { userdetailed } from "../../features/user/userdetailed/userdetailed";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={homepage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Navbar />
              <Container className="main">
                <Switch>
                  <Route exact path="/" component={homepage} />
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={eventdetailedpage} />
                  <Route path="/people" component={peopledashboard} />
                  <Route path="/profile/:id" component={userdetailed} />
                  <Route path="/settings" component={Settingsdashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={Eventform}
                  />
                  <Route path="/test" component={testcomponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}
export default withRouter(App);
