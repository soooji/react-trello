import { Layout } from "components";
import { ReactElement, Suspense } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import history from "utils/history";
import theme from "utils/theme";
import GlobalStyle from "GlobalStyle";

//  Views
import { Board } from "views";

const IndexRouterCMP = ({
  className,
}: {
  className?: string;
}): ReactElement => {
  return (
    <div className={className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
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
        </Layout>
      </ThemeProvider>
    </div>
  );
};

const IndexRouter = styled(IndexRouterCMP)``;

export default IndexRouter;
