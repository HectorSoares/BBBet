import Amplify, { Auth } from 'aws-amplify';
import {   withAuthenticator  } from 'aws-amplify-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import store from './store/index';
import { AmplifyTheme } from 'aws-amplify-react';
import { customTheme } from './customTheme';


const authTheme = {
    ...AmplifyTheme,
    ...customTheme
    
}

const signUpConfig = {
  header: 'Sign Up',
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 2,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      }
    ]
}

Amplify.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_1XZuOrkxb',
      identityPoolId: 'us-east-1:d2bdd298-d5e1-430a-bf44-6503782ceea5',
      userPoolWebClientId: '6foh6g3r3egj757uf8avh2oodf',
      language: "br",
    });
    Auth.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_1XZuOrkxb',
      identityPoolId: 'us-east-1:d2bdd298-d5e1-430a-bf44-6503782ceea5',
      userPoolWebClientId: '6foh6g3r3egj757uf8avh2oodf',
      language: "br",
    });


const App = () => {


  return (
    <BrowserRouter>    
      <Provider store = {store}>
        
            <Router />
                   
      </Provider>  
    </BrowserRouter> 
  );
}

export default withAuthenticator(App, false, undefined, null, authTheme, signUpConfig);
