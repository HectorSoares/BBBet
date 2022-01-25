import Amplify, { Auth } from 'aws-amplify';
import {   withAuthenticator  } from 'aws-amplify-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import store from './store/index';
import { AmplifyTheme } from 'aws-amplify-react';
import { customTheme } from './customTheme';
import MenuBar from './components/organisms/menu-bar';


const authTheme = {
    ...AmplifyTheme,
    ...customTheme
    
}

const signUpConfig = {
  header: 'Sign Up',
    hideAllDefaults: true,
    signUpFields: [      
      {
        label: 'First Name',
        key: 'name',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Last Name',
        key: 'middle_name',
        required: true,
        displayOrder: 2,
        type: 'string'
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 4,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 5,
        type: 'password'
      }
    ]
}

Amplify.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_uLswvAQVZ',
      identityPoolId: 'us-east-1:42d8b7b6-b929-4c80-949e-ea27af8e6cbb',
      userPoolWebClientId: 'actqpfaf00m1cg8cvccck1s9k',
      language: "br",
    });
    Auth.configure({
       mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_uLswvAQVZ',
      identityPoolId: 'us-east-1:42d8b7b6-b929-4c80-949e-ea27af8e6cbb',
      userPoolWebClientId: 'actqpfaf00m1cg8cvccck1s9k',
      language: "br",
    });


const App = () => {


  return (
    <BrowserRouter>    
      <Provider store = {store}>
            
            <MenuBar />
            <Router />
                   
      </Provider>  
    </BrowserRouter> 
  );
}

export default withAuthenticator(App, false, undefined, null, authTheme, signUpConfig);
