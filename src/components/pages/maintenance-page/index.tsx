
import '@aws-amplify/ui/dist/style.css'
import { Box,  CssBaseline, Typography, } from '@mui/material';



export default function MantenancePage() {

  return (
      <div>
          <img src="./image.png" alt="MISSING JPG"/> 
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
            Página em manutenção!!!
          </Typography> 
          <img src="./image.png" alt="joaoChupaBola.png"/> 
        </Box>
    </div>
  );
}
