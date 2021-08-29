/** @format */

import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { FC } from "react";

interface PrivateRouteProps {
  component: FC;
  path: string;
  [key: string]: any | any[];
}

const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { component: Component, path, ...rest } = props;
  const loginPath = "/signin";

  const auth = true; // TODO: Dynamic it as user authentication status

  return auth ? (
    <Route path={path} {...rest}></Route>
  ) : (
    <Redirect to={loginPath} />
  );
};

export default PrivateRoute;
