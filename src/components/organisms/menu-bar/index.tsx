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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function MenuBar(props: Props) {
  const { window  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleSignOut = () => {
  //   console.log('sair');
  //   //Auth.signOut();
  //   console.log('sair');
  // }

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_BETRESULTS_API);

  const menuItems = [ {
      label: "Inicio",
      icon: <HomeIcon />,
      handleOnClick: console.log("Inicio"),
      route: "/home"
    },
    {
      label: "Competição",
      icon: <MilitaryTechOutlinedIcon />,
      handleOnClick: console.log("Competição"),
      route: "/rank"
    },
    {
      label: "Apostar",
      icon: <Bet />,
      handleOnClick: console.log("Apostar"),
      route: "/bet"
    },
    {
      label: "Gerenciamento",
      icon: <SettingsOutlinedIcon />,
      handleOnClick: console.log("Gerenciamento"),
      route: "/config"
    },
    {
      label: "Resultados",
      icon: <BarChartIcon />,
      handleOnClick: console.log("Resultados"),
      route: "/results"
    },
    {
      label: "Sair",
      icon: <LogoutIcon />,
      handleOnClick: console.log("Sair"),
      route: "/"
    }
]

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => {
          return (
            <>
            <Link to={item.route}>
              <ListItem button key={item.label} onClick={() => {console.log(item.label)}}>
                  <ListItemIcon >
                    {item.icon}
                  </ListItemIcon >
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
            </>
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
        <Toolbar />
      </Box>
    </Box>
  );
}
