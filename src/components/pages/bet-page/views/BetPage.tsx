import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import Brother from "../../../../domain/model/Brother";
import { questions } from "../../../../util/constants";
import AutocompleteBet from "../../../atoms/autocomplete";

const BetPage = () => {

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(leader,
angel,
bigPhone,);
      };

    const [leader, setLeader] = useState<Brother | undefined>(undefined);
    const [angel, setAngel] = useState<Brother | undefined>(undefined);
    const [bigPhone, setBigPhone] = useState<Brother | undefined>(undefined);

    const brothers = [
        { name: 'Jessiale', id: '1994' },
        { name: 'Tiago', id: '1972' },
        { name: 'Eslovenia', id: '1974' },
        { name: 'Luiz', id: '2008' },
        { name: 'Marcio', id: '1957' },
        { name: "Lucas", id: '1993' },
        { name: 'Amaral', id: '1994' }
    ];


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