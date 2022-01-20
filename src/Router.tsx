import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import MenuBar from './components/organisms/menu-bar';
import BetPage from './components/pages/bet-page/views/BetPage';
import IdentificatePage from './components/pages/identificate-page';
import { RootState } from './store/reducers';
import { pageRoutes } from './util/constants';


export default function Router(): JSX.Element {
  let routes: JSX.Element;

  const isAuthenticated = useSelector((state: RootState) => state.user.user != null);

  if(isAuthenticated){
    routes = ( <Switch>
          <Route path={pageRoutes.Bbbet}>
            <MenuBar/>
            <BetPage/>         
          </Route>
          <Redirect to={pageRoutes.Bbbet} />
        </Switch>
    )
  } else {
  routes = (
        <Switch>
          <Route path={pageRoutes.Login}>
            <IdentificatePage/>
          </Route>
        </Switch> )
  }
  

  const AppRoutes = withRouter(() => routes);

  return <AppRoutes />;
}
