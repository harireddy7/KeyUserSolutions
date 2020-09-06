import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '65px'
  },
  appBar: {
    boxShadow: 'none',
    background: theme.palette.light.main,
    justifyContent: 'space-between'
  },
  desktopNav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  mobileNav: {
    display: 'none',
    [theme.breakpoints.only('xs')]: {
      display: 'block'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  title: {
    // flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: theme.palette.primary.main
  },
  subTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    fontSize: '0.65rem'
  },
  menuItem: {
    marginRight: '1.5rem',
    borderRadius: 0,
    transition: '0.5s all ease-in-out',
    '&:hover': {
      borderBottom: '1px solid',
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      transition: '0.5s all ease-in-out'
    }
  },
  activePage: {
    borderBottom: '1px solid',
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.main
  },
  activePageMobile: {
    background: theme.palette.light.light,
    color: theme.palette.primary.main
  },
  drawer: {
    width: '80vw',
    height: '100vh'
  },
  mobileMenuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  menuList: {
    width: '100%',
    background: theme.palette.light.main,
    color: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuListItem: {
    justifyContent: 'center',
    margin: '1rem 0'
  },
  menuListItemLogo: {
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamilyRoboto
  },
  headerWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '5px'
  }
}));

export const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const navigateMobile = path => {
    toggleDrawer(false);
  };

  const renderMainMenu = (
    <>
      {menuItems.map(menu => (
        <Button
          to={menu.path}
          exact
          component={NavLink}
          key={menu.label}
          className={classes.menuItem}
          activeClassName={classes.activePage}
        >
          {menu.label}
        </Button>
      ))}
    </>
  );

  const renderMobileMenu = (
    <>
      <Tooltip title="Open Menu">
        <IconButton color="inherit" onClick={toggleDrawer}>
          <FontAwesomeIcon icon="bars" />
        </IconButton>
      </Tooltip>
      <Drawer open={drawer} anchor="left" onClose={toggleDrawer} PaperProps={{ classes: { root: classes.drawer } }}>
        <div className={classes.mobileMenuWrapper}>
          <div>
            <Typography className={classes.menuListItemLogo} variant="h6">
              KUS
            </Typography>
            <Divider component="li" />
          </div>
          <List className={classes.menuList}>
            {menuItems.map(menu => (
              <ListItem
                button
                to={menu.path}
                exact
                component={NavLink}
                activeClassName={classes.activePageMobile}
                key={menu.label}
                className={classes.menuListItem}
                onClick={() => navigateMobile(menu.path)}
              >
                {menu.label}
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.headerWrapper}>
          <NavLink className={classes.title} to="/">
            <Typography component={Zoom} left cascade>
              <span className="mainTitle">KUS</span>
            </Typography>
            <Typography variant="subtitle2" className={classes.subTitle}>
              KEYUSER SOLUTIONS
            </Typography>
          </NavLink>
          <div className={classes.desktopNav}>{renderMainMenu}</div>
          <div className={classes.mobileNav}>{renderMobileMenu}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
