
import '@aws-amplify/ui/dist/style.css'
import { Box,  CssBaseline, Paper, Typography, } from '@mui/material';



export default function MantenancePage() {

  return (
      <div>
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
          <Paper variant="outlined">
            <img src={require("./image.png")} alt="joaoChupaBola.png" />
          </Paper>
        </Box>
    </div>
  );
}
