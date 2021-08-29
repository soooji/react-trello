/** @format */

import { FC } from "react";
import { Route } from "react-router-dom";

type PublicRouteProps = {
  component: FC;
  path: string;
  [key: string]: any | any[];
};

const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, path, ...rest } = props;

  return (
    <Route path={path} {...rest}>
      {Component}
    </Route>
  );
};

export default PublicRoute;
