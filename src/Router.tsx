import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import MenuBar from './components/organisms/menu-bar';
import BetPage from './components/pages/bet-page/views/BetPage';
import { pageRoutes } from './util/constants';

interface RouterProps {
  user: any,
  signOut: any
}


export default function Router({user, signOut}: RouterProps): JSX.Element {
  let routes: JSX.Element;

  console.log('user', user);



    routes = ( <Switch>
          <Route path={pageRoutes.Bbbet}>
            <MenuBar signOut={signOut}/>
            <BetPage/>         
          </Route>
          <Redirect to={pageRoutes.Bbbet} />
        </Switch>
    )
  

  const AppRoutes = withRouter(() => routes);

  return <AppRoutes />;
}
