import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Listing from "../containers/Listing";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Contact from "../containers/Contact";
import ListingDetail from "../containers/ListingDetail";
import Buy from "../containers/Buy";
import Profile from "../containers/Profile";
import NotFound from "../containers/NotFound";
import Brought from "../containers/Brought";
import Doctors from "../containers/Doctors";
import Analytics from "../containers/Analytics";
import LandingPage from "../containers/LandingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
