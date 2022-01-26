import { Box, Typography, Button } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brother from "../../../../domain/model/Brother";
import Week from "../../../../domain/model/manager/Week";
import { RootState } from "../../../../store/reducers";
import { questions } from "../../../../util/constants";
import AutocompleteBet from "../../../atoms/autocomplete";
import { setUser } from "../../identificate-page/store/actions";
import { setBrothers, setListBetManager } from "../store/actions";

const BetPage = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(leader, angel,bigPhone, firstIndicated,
secondIndicated,
thirdIndicated,
fourthIndicated,
fifthIndicated,
eliminatedParticipant,
eliminationPercentage);
  };
const brothers: Brother[] | undefined = useSelector((state: RootState) => state.betPage.brothers );
const weeks: Week[] | undefined = useSelector((state: RootState) => state.betPage.weeks );

const weekActivated = weeks?.find((w) => w.active);

const betActivated = weekActivated?.bets?.find((b) => b.active);

console.log(betActivated);


const [leader, setLeader] = useState<Brother | undefined>(undefined);
const [angel, setAngel] = useState<Brother | undefined>(undefined);
const [bigPhone, setBigPhone] = useState<Brother | undefined>(undefined);
const [firstIndicated,setFirstIndicated] = useState<Brother | undefined>(undefined);
const [secondIndicated,setSecondIndicated] = useState<Brother | undefined>(undefined);
const [thirdIndicated,setThirdIndicated] = useState<Brother | undefined>(undefined);
const [fourthIndicated,setFourthIndicated] = useState<Brother | undefined>(undefined);
const [fifthIndicated,setFifthIndicated] = useState<Brother | undefined>(undefined);
const [eliminatedParticipant,setEliminatedParticipant] = useState<Brother | undefined>(undefined);
const [eliminationPercentage,setEliminationPercentage] = useState<Brother | undefined>(undefined);

const [activeWeek,setActiveWeek] = useState<Brother | undefined>(undefined);

    useEffect(function () {
        async function setCurrentUser(){
          dispatch(setUser((await Auth.currentAuthenticatedUser().then(user => user)).username));
        }
        dispatch(setListBetManager());
        dispatch(setBrothers());
        setCurrentUser();
      }, [dispatch])



  return (
    <>
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h6">
            Aposta da semana X
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ 
              mt: 1, 
              width: '70%' }}>
            {
              betActivated?.leader &&
              <AutocompleteBet
              items={brothers}
              label={questions.leader}
              onChange={(item: Brother) => {setLeader(item)}}
              />}
            {
              betActivated?.angel &&
              <AutocompleteBet
              items={brothers}
              label={questions.angel}
              onChange={(item: Brother) => {setAngel(item)}}
              />}
            {
              betActivated?.firstIndicated &&
              <AutocompleteBet
              items={brothers}
              label={questions.firstIndicated}
              onChange={(item: Brother) => {setFirstIndicated(item)}}
              />}
            {
            betActivated?.secondIndicated &&
             <AutocompleteBet
              items={brothers}
              label={questions.secondIndicated}
              onChange={(item: Brother) => {setSecondIndicated(item)}}
              />}
            {
            betActivated?.thirdIndicated &&
             <AutocompleteBet
              items={brothers}
              label={questions.thirdIndicated}
              onChange={(item: Brother) => {setThirdIndicated(item)}}
              />}
            {
            betActivated?.fourthIndicated &&
             <AutocompleteBet
              items={brothers}
              label={questions.fourthIndicated}
              onChange={(item: Brother) => {setFourthIndicated(item)}}
              />}
            {
            betActivated?.fifthIndicated &&
             <AutocompleteBet
              items={brothers}
              label={questions.fifthIndicated}
              onChange={(item: Brother) => {setFifthIndicated(item)}}
              />}
            {
            betActivated?.eliminatedParticipant &&
             <AutocompleteBet
              items={brothers}
              label={questions.eliminatedParticipant}
              onChange={(item: Brother) => {setEliminatedParticipant(item)}}
              />}
            {
            betActivated?.eliminationPercentage &&
             <AutocompleteBet
              items={brothers}
              label={questions.eliminationPercentage}
              onChange={(item: Brother) => {setEliminationPercentage(item)}}
              />}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
            >
              Apostar
            </Button>
          </Box>
        </Box>
        </>
  );
};

export default BetPage;
