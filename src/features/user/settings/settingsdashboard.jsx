import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Aboutpage from "./aboutpage";
import Accountpage from "./accountpage";
import Basicpage from "./basicpage";
import Photospage from "./photospage";
import Settingsnav from "./settingsnav";

export const Settingsdashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Redirect exact from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={Basicpage}></Route>
        <Route path="/settings/about" component={Aboutpage}></Route>
        <Route path="/settings/photos" component={Photospage}></Route>
        <Route path="/settings/account" component={Accountpage}></Route>
      </Grid.Column>
      <Grid.Column width={4}>
        <Settingsnav />
      </Grid.Column>
    </Grid>
  );
};
