import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FontAwesome from 'react-fontawesome';

const useStyles = makeStyles(theme => ({
  address: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5px'
  },
  addressItem: {
    padding: '0.5rem 0',
    color: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.dark : theme.palette.light.light),
    fontWeight: 'normal'
  },
  addressIcon: {
    color: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.dark : theme.palette.light.main),
    fontSize: '1.5rem',
    minWidth: '30px',
    maxWidth: '30px',
    height: '30px'
  },
  colorPrimary: {},
  addressText: {
    color: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.main : theme.palette.light.light),
    '@media (max-width: 300px)': {
      fontSize: '0.9rem'
    }
  }
}));

const Address = ({ addressList, themeType }) => {
  const classes = useStyles({ themeType });
  return (
    <List className={classes.address}>
      {addressList.map(({ content, link, icon }) => (
        <ListItem key={icon} className={classes.addressItem}>
          <ListItemIcon classes={{ root: classes.addressIcon }}>
            <FontAwesome name={icon} />
          </ListItemIcon>
          <ListItemText>
            <Link href={link} target="blank" classes={{ root: classes.addressText }}>
              {content}
            </Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Address;
