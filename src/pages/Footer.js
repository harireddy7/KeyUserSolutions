import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { ListItem, List, Typography } from '@material-ui/core';
import { menuItems } from './Header';
import { NavLink } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';
import Address from '../components/Address';

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    color: theme.palette.light.light,
    background: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column'
  },
  socialRoutes: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '2rem 2rem 0',
    '@media (min-width: 501px)': {
      // padding: '1rem 1rem 0',
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
    color: theme.palette.light.light,
    fontWeight: 'normal',
    '&::before': {
      content: '">"',
      marginRight: '5px'
    }
  },
  socialAddress: {
    flex: 1.2,
    padding: '1rem 0.5rem 0',
    color: theme.palette.light.light,
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 950px)': {
      display: 'block'
    },
    '@media (min-width: 501px)': {
      alignItems: 'center'
    }
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5px'
  },
  addressItem: {
    padding: '0.5rem 0',
    color: theme.palette.light.light,
    fontWeight: 'normal'
  },
  addressIcon: {
    color: theme.palette.light.main,
    fontSize: '1.5rem',
    minWidth: '30px',
    maxWidth: '30px',
    height: '30px'
  },
  copy: {
    background: theme.palette.primary.dark,
    color: theme.palette.light.main,
    padding: '1rem 5px',
    textAlign: 'center',
    '@media (max-width:400px)': {
      fontSize: '0.7rem'
    }
  }
}));

const addressList = [
  { content: 'Nizampet, Hyderabad 500090', icon: 'map-marker', link: 'https://maps.google.com/?q=Hyderabad,Telangana' },
  { content: '7989785982', icon: 'phone', link: 'tel://7989785982' },
  { content: 'sales@keyusersolutions.com', icon: 'envelope', link: 'mailto:sales@keyusersolutions.com' }
];

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.socialRoutes}>
        <div className={classes.routes}>
          <Typography variant="h6">SAP SOLS</Typography>
          <List className={classes.menuList}>
            {menuItems.map(menu => (
              <ListItem to={menu.path} exact component={NavLink} key={menu.label} className={classes.menuListItem}>
                {menu.label}
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.socialAddress}>
          <SocialMedia />
          <Address addressList={addressList} themeType={theme.palette.type === 'light' ? 'dark' : 'light'} />
        </div>
      </div>
      <div className={classes.copy}>&copy; CopyRight AllRights Reserved By SAP SOLS</div>
    </div>
  );
};

export default Footer;
