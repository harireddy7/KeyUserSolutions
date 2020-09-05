import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ListItem, List } from '@material-ui/core';
import { menuItems } from './Header';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    color: theme.palette.primary.dark,
    background: theme.palette.light.dark,
    display: 'flex',
    flexDirection: 'column'
  },
  footerTitle: {
    fontFamily: theme.typography.fontFamilyRoboto
  },
  footerLogoRoutes: {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media (min-width: 501px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 500px)': {
      padding: '1rem 1rem 0',
      justifyContent: 'flex-start'
    },
    '@media (max-width: 450px)': {
      padding: '1rem 0 0',
      flexDirection: 'column'
    }
  },
  routes: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 501px)': {
      alignItems: 'center'
    }
  },
  menuListItem: {
    padding: '0.5rem 0',
    color: theme.palette.primary.dark,
    fontWeight: 'normal',
    transition: '0.3s transform ease-in-out',
    '&::before': {
      content: '">"',
      marginRight: '5px'
    },
    '&:hover': {
      transition: '0.3s transform ease-in-out',
      transform: 'translateX(10px) scale(1.1)'
    }
  },
  footerLogo: {
    flex: 1,
    color: theme.palette.light.light,
    display: 'flex',
    justifyContent: 'center',
    '& > img': {
      width: '250px'
    }
  },
  copy: {
    color: theme.palette.primary.dark,
    background: theme.palette.light.dark,
    padding: '1rem 5px',
    textAlign: 'center',
    '@media (max-width:400px)': {
      fontSize: '0.7rem'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerLogoRoutes}>
        <div className={classes.routes}>
          <List className={classes.menuList}>
            {menuItems.map(menu => (
              <ListItem to={menu.path} exact component={NavLink} key={menu.label} className={classes.menuListItem}>
                {menu.label}
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.footerLogo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={classes.copy}>&copy; CopyRight AllRights Reserved By KeyUser</div>
    </div>
  );
};

export default Footer;
