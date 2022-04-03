import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Router from "./Router";
import store from "./store/index";
import MenuBar from "./components/organisms/menu-bar";
import { amplifyConfigure } from "./aws_credencials";
import "@aws-amplify/ui/dist/style.css";
import LoginPage from "./components/pages/login-page/views/LoginPage";
import { useEffect, useState } from "react";
import { RootState } from "./store/reducers";
import { setIsLogged } from "./components/pages/login-page/store/actions";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Week from "./domain/model/manager/Week";
import SimpleBackdrop from "./components/atoms/backdrop";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

Amplify.configure(amplifyConfigure);

const App = () => {
  const loggedIn: boolean | undefined = useSelector(
    (state: RootState) => state.user.isLogged
  );
  const dispatch = useDispatch();

  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((sess) => {
        dispatch(setIsLogged(true));
      })
      .catch(() => {
        dispatch(setIsLogged(false));
      });
  };

  useEffect(() => {
    assessLoggedInState();
  }, []);

  const weeks: Week[] | undefined = useSelector(
    (state: RootState) => state.betPage.weeks
  );

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      setLoading(!weeks);
    },
    [weeks]
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          {loggedIn ? (
            <>
              {loading && <SimpleBackdrop open={loading} />}
              <MenuBar />
              <Router />
            </>
          ) : (
            <>
              <LoginPage />
            </>
          )}
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
