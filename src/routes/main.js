import React from 'react';
import Page from "../containers/page";
import Home from "../containers/home";
import { Switch, BrowserRouter, Route } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:id' component={Page} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}