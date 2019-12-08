import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest}
    render={(props) => {
      return (isAuthenticated ? <Component props/> : <Redirect to='/login' />)}
    } 
  />
)