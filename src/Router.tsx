import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import BetPage from "./components/pages/bet-page/views/BetPage";
import ManagePage from "./components/pages/manage-page";
import { pageRoutes } from "./util/constants";
import CompetitionPage from "./components/pages/competition-page";
import ResultsPage from "./components/pages/results-page";

export default function Router(): JSX.Element {
  const routes: JSX.Element = (
    <Switch>
      <Route path={pageRoutes.bet}>
        <BetPage />
      </Route>
      <Route path={pageRoutes.config}>
        <ManagePage />
      </Route>
      <Route path={pageRoutes.rank}>
        <CompetitionPage />
      </Route>
      <Route path={pageRoutes.results}>
        <ResultsPage />
      </Route>
      <Redirect to={pageRoutes.bet} />
    </Switch>
  );

  const AppRoutes = withRouter(() => routes);

  return <AppRoutes />;
}
