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
import Bet from '../../../icons/Bet';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import {  NavLink  } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import User from '../../../domain/model/User';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@material-ui/core';
import EasterEgg from '../../../icons/EasterEgg';
import UserService from '../../../services/UserService';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function MenuBar(props: Props) {
  const { window  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user: User | undefined = useSelector((state: RootState) => state.user.user );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOnClickEaster = () => {
    UserService.easterEgg(user?.id);
  }

  const menuItems = [ {
      label: "Apostar",
      icon: <Bet />,      
      route: "/bet"
    },
    {
      label: "Competição",
      icon: <MilitaryTechOutlinedIcon />,      
      route: "/rank"
    },    
    {
      label: "Gerenciamento",
      icon: <SettingsOutlinedIcon />,      
      route: "/config",
      admin: true
    },
    {
      label: "Resultados",
      icon: <BarChartIcon />,      
      route: "/results"
    }
]

  const drawer = (
    <>
      <Toolbar >
        <IconButton href="https://youtu.be/ky6VyDwze9c" target="_blank" onClick={handleOnClickEaster}>
        <EasterEgg/>
        </IconButton>
        </Toolbar >
      <Divider />
      <List>
        {menuItems.map((item, index) => {
          
          return (
            (!item.admin || user?.admin) &&
            <NavLink  to={item.route} 
            key={index}
             style={{
              textDecoration: 'none',
              color: 'rgba(0, 0, 0, 0.54)'
            }}>
              <ListItem button key={item.label}>
                  <ListItemIcon >
                    {item.icon}
                  </ListItemIcon >
                <ListItemText primary={item.label} />
              </ListItem>
            </NavLink >
          );
        })}
      </List>
      </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 190px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{width: '100%'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
          <Typography variant="h6" noWrap component="div">
            BBBet do Chupa Bola
          </Typography>
          
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => Auth.signOut()}
                color="inherit"
              >
            <LogoutIcon />
          </IconButton>
          </Grid>
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
            keepMounted: false, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          open
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false, 
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 190 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar >
        </Toolbar>
      </Box>
    </Box>
  );
}
