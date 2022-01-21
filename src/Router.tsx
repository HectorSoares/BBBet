import { Auth } from 'aws-amplify';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import MenuBar from './components/organisms/menu-bar';
import BetPage from './components/pages/bet-page/views/BetPage';
import { pageRoutes } from './util/constants';



export default function Router(): JSX.Element {
  let routes: JSX.Element;

  Auth.currentAuthenticatedUser().then(user => console.log(user));



    routes = ( <Switch>
          <Route path={pageRoutes.Bbbet}>
            <MenuBar />
            <BetPage/>         
          </Route>
          <Redirect to={pageRoutes.Bbbet} />
        </Switch>
    )
  

  const AppRoutes = withRouter(() => routes);

  return <AppRoutes />;
}
