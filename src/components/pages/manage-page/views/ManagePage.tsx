import { Box, Button, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Switch, Typography } from "@mui/material";
import React from "react";
import BetManagerService from "../../../../services/BetManagerService";
import { questions } from "../../../../util/constants";

const ManagePage = () => {


  const handleSubmit = () => console.log('submuit');

  const [bet, setBet] = React.useState({
    leader: false,
    angel: false,
    bigPhone: false,
    firstIndicated: false,
    secondIndicated: false,
    thirdIndicated: false,
    fourthIndicated: false,
    fifthIndicated: false,
    eliminatedParticipant: false,
    eliminationPercentage: false,
  });

  const [defaultOption, setDefaultOption] = React.useState({
    sunday: false,
    thursday: false,
    tuesday: false,
  });

  const [loading, setLoading] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBet({
      ...bet,
      [event.target.name]: event.target.checked,
    })};

    const handleChangeSunday = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBet({
      ...bet,
      firstIndicated:  event.target.checked,
      secondIndicated:  event.target.checked,
      thirdIndicated:  event.target.checked,
      fourthIndicated:  event.target.checked,
      fifthIndicated:  event.target.checked,
      });
      setDefaultOption({
        ...defaultOption,
        sunday: event.target.checked,
      })
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
      })
    };


    const handleChangeTuesday = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBet({
      ...bet,
      eliminatedParticipant:  event.target.checked,
      eliminationPercentage:  event.target.checked,
      });
      setDefaultOption({
        ...defaultOption,
        tuesday: event.target.checked,
      })
    };

    const createNewBet = async () => {
      setLoading(true);
      await BetManagerService.createBetManager(bet);
      setLoading(false);
      
    }


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
            O que será apostado nesse ciclo de apostas?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ 
              mt: 1, 
              width: '70%' }}>

                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={defaultOption.thursday} onChange={handleChangeThursday} name="leader" />
                      }
                      label="Aposta padrão de Quinta"
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={defaultOption.sunday} onChange={handleChangeSunday} name="leader" />
                      }
                      label="Aposta padrão de Domingo"
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={defaultOption.tuesday} onChange={handleChangeTuesday} name="leader" />
                      }
                      label="Aposta padrão de Terça"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.leader} onChange={handleChange} name="leader" />
                      }
                      label={questions.leader}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.angel} onChange={handleChange} name="angel" />
                      }
                      label={questions.angel}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.bigPhone} onChange={handleChange} name="bigPhone" />
                      }
                      label={questions.bigPhone}
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.firstIndicated} onChange={handleChange} name="firstIndicated" />
                      }
                      label={questions.firstIndicated}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.secondIndicated} onChange={handleChange} name="secondIndicated" />
                      }
                      label={questions.secondIndicated}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.thirdIndicated} onChange={handleChange} name="thirdIndicated" />
                      }
                      label={questions.thirdIndicated}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.fourthIndicated} onChange={handleChange} name="fourthIndicated" />
                      }
                      label={questions.fourthIndicated}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.fifthIndicated} onChange={handleChange} name="fifthIndicated" />
                      }
                      label={questions.fifthIndicated}
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.eliminatedParticipant} onChange={handleChange} name="eliminatedParticipant" />
                      }
                      label={questions.eliminatedParticipant}
                    />
                    <FormControlLabel
                      control={
                        <Switch checked={bet.eliminationPercentage} onChange={handleChange} name="eliminationPercentage" />
                      }
                      label={questions.eliminationPercentage}
                    />
                  </FormGroup>
                </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              onClick={createNewBet}
            >
              Abrir aposta
            </Button>
          </Box>
        </Box>
        </>
  );
};

export default ManagePage;