import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../containers/Home";
import Location from "../containers/Location";
import Settings from "../containers/Settings";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import NotFound from "../containers/NotFound";

import { useStore } from "../hooks/index";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [{ auth }] = useStore();
  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/login" component={Login} /> */}
    <Route path="/location/:id" component={Location} />
    <ProtectedRoute path="/settings" component={Settings} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
