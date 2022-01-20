import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AppBar,  Box,  IconButton,  Toolbar } from '@mui/material';
//import { makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';

//const drawerWidth = 0;

// const useStyles = makeStyles((theme: any) => {
//     return {
//         appbar: {
//             width: `calc(100% - ${drawerWidth}px)`
//         },
//         toolbar: theme.mixins.toolbar,           
//     }
// });


export default function MenuBar() {

    // const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BBBet do Chupa Bola
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}