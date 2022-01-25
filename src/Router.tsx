import { Auth } from 'aws-amplify';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import BetPage from './components/pages/bet-page/views/BetPage';
import ManagePage from './components/pages/manage-page';
import { pageRoutes } from './util/constants';



export default function Router(): JSX.Element {
  let routes: JSX.Element;

  Auth.currentAuthenticatedUser().then(user => console.log(user));



    routes = ( <Switch>
          <Route path={pageRoutes.bet}>
            <BetPage/>         
          </Route>
          <Route path={pageRoutes.config}>
            <ManagePage/>         
          </Route>
          <Redirect to={pageRoutes.bet} />
        </Switch>
    )
  

  const AppRoutes = withRouter(() => routes);

  return <AppRoutes />;
}
