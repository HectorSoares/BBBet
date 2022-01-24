import { Box, Typography, Button } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brother from "../../../../domain/model/Brother";
import { RootState } from "../../../../store/reducers";
import { questions } from "../../../../util/constants";
import AutocompleteBet from "../../../atoms/autocomplete";
import { setUser } from "../../identificate-page/store/actions";
import { setBrothers } from "../store/actions";

const BetPage = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(leader, angel,bigPhone);
  };
const brothers: Brother[] | undefined = useSelector((state: RootState) => state.brothers.brothers );


const [leader, setLeader] = useState<Brother | undefined>(undefined);
const [angel, setAngel] = useState<Brother | undefined>(undefined);
const [bigPhone, setBigPhone] = useState<Brother | undefined>(undefined);
    useEffect(function () {
        async function setCurrentUser(){
          dispatch(setUser((await Auth.currentAuthenticatedUser().then(user => user)).username));
        }

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
            <AutocompleteBet
              items={brothers}
              label={questions.Leader}
              onChange={(item: Brother) => {setLeader(item)}}
              />
            <AutocompleteBet
              items={brothers}
              label={questions.Angel}
              onChange={(item: Brother) => {setAngel(item)}}
              />
            <AutocompleteBet
              items={brothers}
              label={questions.BigPhone}
              onChange={(item: Brother) => {setBigPhone(item)}}
              />
            
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
