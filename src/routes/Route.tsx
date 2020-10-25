import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return <Component />;
      }}
    />
  );
};

export default Route;
