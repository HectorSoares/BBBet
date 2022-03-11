import Amplify from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import store from "./store/index";
import { customTheme } from "./customTheme";
import MenuBar from "./components/organisms/menu-bar";
import { amplifyConfigure } from "./aws_credencials";
import "@aws-amplify/ui/dist/style.css";

const authTheme = {
  ...AmplifyTheme,
  ...customTheme,
};
//

const signUpConfig = {
  header: "Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "First Name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Last Name",
      key: "middle_name",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 4,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 5,
      type: "password",
    },
  ],
};

Amplify.configure(amplifyConfigure);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MenuBar />
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default withAuthenticator(
  App,
  false,
  undefined,
  null,
  authTheme,
  signUpConfig
);
