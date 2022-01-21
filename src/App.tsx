import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, withAuthenticator } from 'aws-amplify-react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import store from './store/index';
import { AmplifyTheme } from 'aws-amplify-react';


const authTheme = {
    ...AmplifyTheme,
    
};

interface AppProps {
  signOut: any,
  user: any,
}

Amplify.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_1XZuOrkxb',
      identityPoolId: 'us-east-1:d2bdd298-d5e1-430a-bf44-6503782ceea5',
      userPoolWebClientId: '6foh6g3r3egj757uf8avh2oodf'
    });
    Auth.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_1XZuOrkxb',
      identityPoolId: 'us-east-1:d2bdd298-d5e1-430a-bf44-6503782ceea5',
      userPoolWebClientId: '6foh6g3r3egj757uf8avh2oodf'
    });


const App = ({ signOut, user }: AppProps) => {

  console.log(user);

  return (
    <>   
    <BrowserRouter>    
      <Provider store = {store}>
            <Router user={user} signOut={signOut}/>
      </Provider>  
    </BrowserRouter> 
    </>
  );
}

export default withAuthenticator(App, false, undefined, null, authTheme);
