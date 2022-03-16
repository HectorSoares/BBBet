import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth } from "aws-amplify";
import { useState } from "react";
import SimpleBackdrop from "../../../atoms/backdrop";
import { useDispatch } from "react-redux";
import CustomizedSnackbar from "../../../atoms/customized-snackbar";

const theme = createTheme();

const ForgetPasswordPage = ({ setForgetPasswordVisibility }: any) => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendVerificationCode, setSendVerificationCode] = useState(false);
  const dispatch = useDispatch();

  const sendCode = async () => {
    try {
      setLoading(true);
      await Auth.forgotPassword(username).then((data) => {
        setSnackBarType("success");
        setSnackBarLabel("Código de verificação enviado no email");
        setOpenSnackBar(true);
        setSendVerificationCode(true);
      });
      setLoading(false);
    } catch (error: any) {
      setSnackBarType("error");
      setOpenSnackBar(true);
      console.log(error);
      setSnackBarLabel("Erro ao enviar o código de verificação");
      setLoading(false);
    }
  };

  const changePassword = async () => {
    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(
        username,
        verificationCode,
        newPassword
      ).then((data) => {
        setSnackBarType("success");
        setSnackBarLabel("Senha alterada com sucesso!");
        setOpenSnackBar(true);
      });
      setForgetPasswordVisibility(false);
      setLoading(false);
    } catch (error: any) {
      setSnackBarType("error");
      setOpenSnackBar(true);
      console.log(error);
      setSnackBarLabel("Erro ao trocar a senha");
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
            {!sendVerificationCode ? (
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  onChange={(event) => setUsername(event?.target.value)}
                  name="login"
                  autoComplete="login"
                  autoFocus
                />
                <Button
                  onClick={sendCode}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enviar código
                </Button>
              </Box>
            ) : (
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  onChange={(event) => setUsername(event?.target.value)}
                  name="login"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Código de verificação"
                  onChange={(event) => setVerificationCode(event?.target.value)}
                  name="code"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  type="password"
                  label="Nova senha"
                  onChange={(event) => setNewPassword(event?.target.value)}
                  name="password"
                />

                <Button
                  onClick={changePassword}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Alterar senha
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ForgetPasswordPage;
