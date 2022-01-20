import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import User from '../../../domain/model/User';
import { setUser } from '../../pages/identificate-page/store/actions';
import AutocompleteBet from '../../atoms/autocomplete';


export default function IdentificateBox() {
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUser(currentUser));
  };

  const [currentUser, setCurrentUser] = React.useState<User | undefined>(undefined);

  
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ 
              mt: 1, 
              width: '70%' }}>
            <AutocompleteBet
              items={brothers}
              label="Quem é você?"
              onChange={(item: User) => {setCurrentUser(item)}}
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        </>
  );
}