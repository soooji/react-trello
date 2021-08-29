/** @format */

import { FC } from "react";
import { Board } from "views";

type RouteItem = {
  component: FC;
  path: string;
  auth: boolean;
};

const routes: RouteItem[] = [
  {
    component: Board,
    path: "/",
    auth: false,
  },
];

export default routes;
