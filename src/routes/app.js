import React from "react";
import Main from "./main";
import Login from "../containers/login";
import { PrivateRoute } from "./privateRoute";
import { connect } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "../assets/main.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Main} isAuthenticated={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticated
  };
};
export default connect(mapStateToProps, null)(App);
