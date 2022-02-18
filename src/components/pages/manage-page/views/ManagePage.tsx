import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BetManagerService from "../../../../services/BetManagerService";
import { questions } from "../../../../util/constants";
import {
  returnActiveBet,
  returnActiveWeek,
  returnDescriptionBet,
  returnLastBet,
} from "../../../../util/functions";
import Week from "../../../../domain/model/manager/Week";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers";
import Bet from "../../../../domain/model/manager/Bet";
import CloseBetDialog from "../../../organisms/closeBetDialog";
import SimpleBackdrop from "../../../atoms/backdrop";
import BetResultsService from "../../../../services/BetResultsService";
import BetResults from "../../../../domain/model/results/BetResults";
import { setListBetManager } from "../../bet-page/store/actions";

const ManagePage = () => {
  const dispatch = useDispatch();

  const weeks: Week[] | undefined = useSelector(
    (state: RootState) => state.betPage.weeks
  );

  const [activeWeek, setActiveWeek] = useState<Week | undefined>(
    returnActiveWeek(weeks)
  );
  const [activeBet, setActiveBet] = useState<Bet | undefined>(
    returnActiveBet(activeWeek)
  );
  const [lastBet, setLastBet] = useState<Bet | undefined>(
    returnLastBet(activeWeek)
  );

  const [hasBetOptionChecked, setHasBetOptionChecked] =
    useState<boolean>(false);

  const defaultBet = {
    leader: false,
    angel: false,
    bigPhone: false,
    backForth: false,
    angelImmunized: false,
    firstIndicated: false,
    secondIndicated: false,
    secondIndicatedText: questions.secondIndicated,
    thirdIndicated: false,
    thirdIndicatedText: questions.thirdIndicated,
    fourthIndicated: false,
    fourthIndicatedText: questions.fourthIndicated,
    fifthIndicated: false,
    fifthIndicatedText: questions.fifthIndicated,
    eliminatedParticipant: false,
    eliminationPercentage: false,
  };

  useEffect(
    function () {
      setActiveWeek(returnActiveWeek(weeks));
    },
    [weeks]
  );

  useEffect(
    function () {
      setActiveBet(returnActiveBet(activeWeek));
    },
    [activeWeek]
  );

  useEffect(
    function () {
      setLastBet(returnLastBet(activeWeek));
    },
    [activeWeek]
  );

  const [bet, setBet] = React.useState(defaultBet);

  useEffect(
    function () {
      setHasBetOptionChecked(
        // Object.keys(bet).some((key: string) => {
        //   bet[key] === true;
        // })
        true
      );
    },
    [bet]
  );

  const [defaultOption, setDefaultOption] = React.useState({
    sunday: false,
    thursday: false,
    tuesday: false,
  });

  const [openDialogResult, setOpenDialogResult] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSunday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      angelImmunized: event.target.checked,
      firstIndicated: event.target.checked,
      secondIndicated: event.target.checked,
      thirdIndicated: event.target.checked,
      fourthIndicated: event.target.checked,
      fifthIndicated: event.target.checked,
      backForth: event.target.checked,
    });
    setDefaultOption({
      ...defaultOption,
      sunday: event.target.checked,
    });
  };

  const handleChangeThursday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      leader: event.target.checked,
      angel: event.target.checked,
      bigPhone: event.target.checked,
    });
    setDefaultOption({
      ...defaultOption,
      thursday: event.target.checked,
    });
  };

  const handleChangeTuesday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      eliminatedParticipant: event.target.checked,
      eliminationPercentage: event.target.checked,
    });
    setDefaultOption({
      ...defaultOption,
      tuesday: event.target.checked,
    });
  };

  const createNewBet = async () => {
    setLoading(true);
    await BetManagerService.createBetManager(bet);
    setActiveBet(bet);
    setDefaultOption({ sunday: false, thursday: false, tuesday: false });
    dispatch(await setListBetManager());
    setBet(defaultBet);
    setLoading(false);
  };

  const closeWeek = async () => {
    setLoading(true);
    await BetManagerService.closeWeek(activeWeek?.week);
    dispatch(await setListBetManager());
    setLoading(false);
  };

  const closeBet = async () => {
    setLoading(true);
    await BetManagerService.closeBet(activeWeek?.week);
    dispatch(await setListBetManager());
    setLoading(false);
  };

  const addResult = async () => {
    setOpenDialogResult(true);
  };
  const confirmAddResult = async (bet: BetResults) => {
    setLoading(true);
    setOpenDialogResult(false);
    await BetResultsService.addResult(activeWeek, bet);
    dispatch(await setListBetManager());
    setLoading(false);
  };

  const cancelAddResult = () => {
    setOpenDialogResult(false);
  };

  return (
    <>
      <SimpleBackdrop open={loading} />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography component="h6" variant="h6">
          {returnDescriptionBet(activeWeek)} aposta da semana {activeWeek?.week}
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormControl
            component="fieldset"
            variant="standard"
            disabled={!!activeBet}
          >
            <FormGroup>
              <Paper elevation={3} sx={{ mb: "15px", padding: "15px" }}>
                <Typography component="h6" variant="subtitle1">
                  Aposta padrão
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={defaultOption.thursday}
                      onChange={handleChangeThursday}
                      name="leader"
                    />
                  }
                  label="Quinta"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={defaultOption.sunday}
                      onChange={handleChangeSunday}
                      name="leader"
                    />
                  }
                  label="Domingo"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={defaultOption.tuesday}
                      onChange={handleChangeTuesday}
                      name="leader"
                    />
                  }
                  label="Terça"
                />
              </Paper>

              <Divider />

              <Paper elevation={3} sx={{ mb: "5px", padding: "15px" }}>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  disabled={!!activeBet}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.leader}
                        onChange={handleChange}
                        name="leader"
                      />
                    }
                    label={questions.leader}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.angel}
                        onChange={handleChange}
                        name="angel"
                      />
                    }
                    label={questions.angel}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.bigPhone}
                        onChange={handleChange}
                        name="bigPhone"
                      />
                    }
                    label={questions.bigPhone}
                  />
                </FormControl>
              </Paper>

              <Divider />

              <Paper elevation={3} sx={{ mb: "5px", padding: "15px" }}>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  disabled={!!activeBet}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.angelImmunized}
                        onChange={handleChange}
                        name="angelImmunized"
                      />
                    }
                    label={questions.angelImmunized}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.firstIndicated}
                        onChange={handleChange}
                        name="firstIndicated"
                      />
                    }
                    label={questions.firstIndicated}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.secondIndicated}
                        onChange={handleChange}
                        name="secondIndicated"
                      />
                    }
                    label={questions.secondIndicated}
                  />
                  <TextField
                    size="small"
                    variant="outlined"
                    defaultValue={questions.secondIndicated}
                    disabled={!bet.secondIndicated}
                    value={bet.secondIndicatedText}
                    name="secondIndicatedText"
                    onChange={handleChangeText}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.thirdIndicated}
                        onChange={handleChange}
                        name="thirdIndicated"
                      />
                    }
                    label={questions.thirdIndicated}
                  />
                  <TextField
                    size="small"
                    variant="outlined"
                    defaultValue={questions.thirdIndicated}
                    disabled={!bet.thirdIndicated}
                    value={bet.thirdIndicatedText}
                    name="thirdIndicatedText"
                    onChange={handleChangeText}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.fourthIndicated}
                        onChange={handleChange}
                        name="fourthIndicated"
                      />
                    }
                    label={questions.fourthIndicated}
                  />
                  <TextField
                    size="small"
                    variant="outlined"
                    defaultValue={questions.fourthIndicated}
                    disabled={!bet.fourthIndicated}
                    value={bet.fourthIndicatedText}
                    name="fourthIndicatedText"
                    onChange={handleChangeText}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.fifthIndicated}
                        onChange={handleChange}
                        name="fifthIndicated"
                      />
                    }
                    label={questions.fifthIndicated}
                  />
                  <TextField
                    size="small"
                    variant="outlined"
                    defaultValue={questions.fifthIndicated}
                    disabled={!bet.fifthIndicated}
                    value={bet.fifthIndicatedText}
                    name="fifthIndicatedText"
                    onChange={handleChangeText}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.backForth}
                        onChange={handleChange}
                        name="backForth"
                      />
                    }
                    label={questions.backForth}
                  />
                </FormControl>
              </Paper>
              <Divider />
              <Paper elevation={3} sx={{ mb: "5px", padding: "15px" }}>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  disabled={!!activeBet}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.eliminatedParticipant}
                        onChange={handleChange}
                        name="eliminatedParticipant"
                      />
                    }
                    label={questions.eliminatedParticipant}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={bet.eliminationPercentage}
                        onChange={handleChange}
                        name="eliminationPercentage"
                      />
                    }
                    label={questions.eliminationPercentage}
                  />
                </FormControl>
              </Paper>
            </FormGroup>
            <Grid container>
              <Button
                variant="contained"
                sx={{ mt: 3, mb: 1, width: "46%", mr: "6%" }}
                onClick={createNewBet}
                disabled={!!activeBet || !!lastBet /*|| !hasBetOptionChecked*/}
              >
                Abrir aposta
              </Button>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#4ac157",
                  width: "46%",
                  "&:hover": { backgroundColor: "#369740" },
                }}
                onClick={addResult}
                disabled={!lastBet || !!activeBet}
              >
                Adicionar resultado
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#ff5114",
                  width: "46%",
                  mr: "6%",
                  "&:hover": { backgroundColor: "#db4612" },
                }}
                onClick={closeBet}
                disabled={!activeBet}
              >
                Fechar aposta
              </Button>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#f32121",
                  width: "46%",
                  "&:hover": { backgroundColor: "#d71c1c" },
                }}
                onClick={closeWeek}
                disabled={!!activeBet || !!lastBet || !activeWeek}
              >
                Fechar semana {activeWeek?.week}
              </Button>
            </Grid>
          </FormControl>
        </Box>
      </Box>
      <CloseBetDialog
        open={openDialogResult}
        title={"Qual foi o resultado da aposta?"}
        cancelText={"Cancelar"}
        submitText={"Adicionar"}
        lastBet={lastBet}
        cancelAction={cancelAddResult}
        submitAction={confirmAddResult}
      />
    </>
  );
};

export default ManagePage;
