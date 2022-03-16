import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SimpleBackdrop from "../../../atoms/backdrop";
import { setIsLogged, setUser } from "../store/actions";
import { useDispatch } from "react-redux";
import CustomizedSnackbar from "../../../atoms/customized-snackbar";
import ForgetPasswordPage from "./ForgetPasswordPage";

const theme = createTheme();

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgetPasswordVisibility, setForgetPasswordVisibility] =
    useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    try {
      setLoading(true);
      const user = await Auth.signIn(username, password);
      console.log("user", user);
      dispatch(setUser(user.username));
      dispatch(setIsLogged(true));
      setLoading(false);
    } catch (error: any) {
      setSnackBarType("error");
      setOpenSnackBar(true);
      console.log(error);
      setSnackBarLabel(error?.message || "Erro!");
      setLoading(false);
    }
  };

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarType, setSnackBarType] = useState<
    "error" | "warning" | "info" | "success"
  >("info");
  const [snackBarLabel, setSnackBarLabel] = useState<string>("");

  return (
    <>
      <CustomizedSnackbar
        open={openSnackBar}
        type={snackBarType}
        setOpen={setOpenSnackBar}
        label={snackBarLabel}
      />
      <SimpleBackdrop open={loading} />
      {!forgetPasswordVisibility ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Login"
                  onChange={(event) => setUsername(event?.target.value)}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  onChange={(event) => setPassword(event?.target.value)}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ mt: 0, mb: 2 }}
                      onClick={() => {
                        setForgetPasswordVisibility(true);
                      }}
                    >
                      Esqueci a senha
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2"></Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      ) : (
        <ForgetPasswordPage
          setForgetPasswordVisibility={setForgetPasswordVisibility}
        />
      )}
    </>
  );
}
