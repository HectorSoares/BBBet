import { Box, Typography, Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brother from "../../../../domain/model/Brother";
import Bet from "../../../../domain/model/manager/Bet";
import Week from "../../../../domain/model/manager/Week";
import User from "../../../../domain/model/User";
import UserService from "../../../../services/UserService";
import { RootState } from "../../../../store/reducers";
import { questions } from "../../../../util/constants";
import { returnActiveBet, returnActiveWeek } from "../../../../util/functions";
import AutocompleteBet from "../../../atoms/autocomplete";
import SimpleBackdrop from "../../../atoms/backdrop";
import CustomizedSnackbar from "../../../atoms/customized-snackbar";
import BetConclusionModal from "../../../molecules/bet-conclusion-modal";
import { setListUser } from "../../competition-page/store/actions";
import { setUser } from "../../login-page/store/actions";
import { setBrothers, setListBetManager } from "../store/actions";

const BetPage = () => {
  const dispatch = useDispatch();

  const brothers: Brother[] | undefined = useSelector(
    (state: RootState) => state.betPage.brothers
  )?.filter((b) => !b.eliminated);
  const weeks: Week[] | undefined = useSelector(
    (state: RootState) => state.betPage.weeks
  );
  const user: User | undefined = useSelector(
    (state: RootState) => state.user.user
  );
  //const users: User[] | undefined = useSelector((state: RootState) => state.listUser.users );

  const [leader, setLeader] = useState<Brother | undefined>(undefined);
  const [angel, setAngel] = useState<Brother | undefined>(undefined);
  const [bigPhone, setBigPhone] = useState<Brother | undefined>(undefined);
  const [angelImmunized, setAngelImmunized] = useState<Brother | undefined>(
    undefined
  );
  const [firstIndicated, setFirstIndicated] = useState<Brother | undefined>(
    undefined
  );
  const [secondIndicated, setSecondIndicated] = useState<Brother | undefined>(
    undefined
  );
  const [thirdIndicated, setThirdIndicated] = useState<Brother | undefined>(
    undefined
  );
  const [fourthIndicated, setFourthIndicated] = useState<Brother | undefined>(
    undefined
  );
  const [fifthIndicated, setFifthIndicated] = useState<Brother | undefined>(
    undefined
  );
  const [backForth, setBackForth] = useState<Brother | undefined>(undefined);
  const [eliminatedParticipant, setEliminatedParticipant] = useState<
    Brother | undefined
  >(undefined);
  const [eliminationPercentage, setEliminationPercentage] = useState<
    number | undefined
  >(undefined);
  const [activeWeek, setActiveWeek] = useState<Week | undefined>(
    returnActiveWeek(weeks)
  );
  const [activeBet, setActiveBet] = useState<Bet | undefined>(
    returnActiveBet(activeWeek)
  );
  const users: User[] | undefined = useSelector(
    (state: RootState) => state.listUser.users
  );

  const clearFields = () => {
    setLeader(undefined);
    setAngel(undefined);
    setBigPhone(undefined);
    setAngelImmunized(undefined);
    setFirstIndicated(undefined);
    setSecondIndicated(undefined);
    setThirdIndicated(undefined);
    setFourthIndicated(undefined);
    setFifthIndicated(undefined);
    setBackForth(undefined);
    setEliminatedParticipant(undefined);
    setEliminationPercentage(undefined);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const bet = {
      leader: leader?.id,
      angel: angel?.id,
      bigPhone: bigPhone?.id,
      backForth: backForth?.id,
      angelImmunized: angelImmunized?.id,
      firstIndicated: firstIndicated?.id,
      secondIndicated: secondIndicated?.id,
      thirdIndicated: thirdIndicated?.id,
      fourthIndicated: fourthIndicated?.id,
      fifthIndicated: fifthIndicated?.id,
      eliminatedParticipant: eliminatedParticipant?.id,
      eliminationPercentage: eliminationPercentage,
    };
    const response = await UserService.addBet(user?.id, bet, activeWeek?.week);
    console.log("resposta: ", response);
    if (response.data.status != 200) {
      setOpenSnackBar(true);
      setSnackBarType("error");
      setSnackBarLabel("Não existe aposta aberta!");
    } else {
      setOpenModal(true);
      clearFields();
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarType, setSnackBarType] = useState<
    "error" | "warning" | "info" | "success"
  >("info");
  const [snackBarLabel, setSnackBarLabel] = useState<string>("");

  useEffect(
    function () {
      async function setData() {
        if (!users || !user) {
          setLoading(true);
          dispatch(
            setUser(
              (await Auth.currentAuthenticatedUser().then((user) => user))
                .username
            )
          );
          dispatch(await setListBetManager());
          dispatch(await setBrothers());
          dispatch(await setListUser());
          setLoading(false);
        }
      }
      setData();
    },
    [dispatch]
  );

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

  const onChangeEliminationPercentage =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEliminationPercentage(
        parseFloat(event.target.value.replace(",", "."))
      );
    };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CustomizedSnackbar
        open={openSnackBar}
        type={snackBarType}
        setOpen={setOpenSnackBar}
        label={snackBarLabel}
      />
      <BetConclusionModal open={openModal} closeModal={closeModalHandler} />
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography component="h4" variant="h6">
          {user?.firstName}, sua pontuação total é: {user?.totalPoints}
        </Typography>
        {activeBet ? (
          <>
            <SimpleBackdrop open={loading} />
            <Typography component="h1" variant="h6"></Typography>
            <Box
              component="form"
              noValidate
              sx={{
                mt: 1,
                width: "70%",
              }}
            >
              {activeBet?.leader && (
                <AutocompleteBet
                  items={brothers}
                  label={questions.leader}
                  onChange={(item: Brother) => {
                    setLeader(item);
                  }}
                />
              )}
              {activeBet?.angel && (
                <AutocompleteBet
                  items={brothers}
                  label={questions.angel}
                  onChange={(item: Brother) => {
                    setAngel(item);
                  }}
                />
              )}
              {activeBet?.bigPhone && (
                <AutocompleteBet
                  items={brothers}
                  label={activeBet?.bigPhoneText || questions.bigPhone}
                  onChange={(item: Brother) => {
                    setBigPhone(item);
                  }}
                />
              )}
              {activeBet?.angelImmunized && (
                <AutocompleteBet
                  items={brothers}
                  label={questions.angelImmunized}
                  onChange={(item: Brother) => {
                    setAngelImmunized(item);
                  }}
                />
              )}
              {activeBet?.firstIndicated && (
                <AutocompleteBet
                  items={brothers}
                  label={
                    activeBet?.firstIndicatedText || questions.firstIndicated
                  }
                  onChange={(item: Brother) => {
                    setFirstIndicated(item);
                  }}
                />
              )}
              {activeBet?.secondIndicated && (
                <AutocompleteBet
                  items={brothers}
                  label={
                    activeBet?.secondIndicatedText || questions.secondIndicated
                  }
                  onChange={(item: Brother) => {
                    setSecondIndicated(item);
                  }}
                />
              )}
              {activeBet?.thirdIndicated && (
                <AutocompleteBet
                  items={brothers}
                  label={
                    activeBet?.thirdIndicatedText || questions.thirdIndicated
                  }
                  onChange={(item: Brother) => {
                    setThirdIndicated(item);
                  }}
                />
              )}
              {activeBet?.fourthIndicated && (
                <AutocompleteBet
                  items={brothers}
                  label={
                    activeBet?.fourthIndicatedText || questions.fourthIndicated
                  }
                  onChange={(item: Brother) => {
                    setFourthIndicated(item);
                  }}
                />
              )}
              {activeBet?.fifthIndicated && (
                <AutocompleteBet
                  items={brothers}
                  label={
                    activeBet?.fifthIndicatedText || questions.fifthIndicated
                  }
                  onChange={(item: Brother) => {
                    setFifthIndicated(item);
                  }}
                />
              )}
              {activeBet?.backForth && (
                <AutocompleteBet
                  items={brothers}
                  label={questions.backForth}
                  onChange={(item: Brother) => {
                    setBackForth(item);
                  }}
                />
              )}
              {activeBet?.eliminatedParticipant && (
                <AutocompleteBet
                  items={brothers?.filter((b) => b?.bigWall)}
                  label={questions.eliminatedParticipant}
                  onChange={(item: Brother) => {
                    setEliminatedParticipant(item);
                  }}
                />
              )}
              {activeBet?.eliminationPercentage && (
                <TextField
                  sx={{ mt: 1 }}
                  label={questions.eliminationPercentage}
                  variant="outlined"
                  onChange={onChangeEliminationPercentage()}
                ></TextField>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
                onClick={handleSubmit}
              >
                Apostar
              </Button>
            </Box>
          </>
        ) : (
          <Typography component="h1" variant="h6">
            Sem aposta aberta
          </Typography>
        )}
      </Box>
    </>
  );
};

export default BetPage;
