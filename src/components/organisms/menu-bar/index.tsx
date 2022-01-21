import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import Bet from '../../../icons/Bet';
import LogoutIcon from '@mui/icons-material/Logout';
import { Auth } from 'aws-amplify';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function MenuBar(props: Props) {
  const { window  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log(mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = () => {
    Auth.signOut();
  }

  console.log(mobileOpen);

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {['Inicio', 'Competição', 'Apostar'].map((text, index) => {
          return (
            <ListItem button key={text}>
              <ListItemIcon>
                {text == 'Inicio' && <HomeIcon />}
                {text == 'Competição' && <BarChartIcon />}
                {text == 'Apostar' && <Bet />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BBBet do Chupa Bola
          </Typography>
          <IconButton
              color="inherit"
              edge="end"
              onClick={handleSignOut}
               sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <LogoutIcon />
            </IconButton>


        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
