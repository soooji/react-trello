import { ReactElement, Suspense } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import history from "utils/history";
import { Board } from "views";

const IndexRouterCMP = ({
  className,
}: {
  className?: string;
}): ReactElement => {
  return (
    <div className={className}>
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/board" />
            </Route>
            <Route path="/board" exact>
              <Board />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

const IndexRouter = styled(IndexRouterCMP)``;

export default IndexRouter;
