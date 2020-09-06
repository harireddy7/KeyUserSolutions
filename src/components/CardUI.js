import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '250px',
    minHeight: '200px',
    height: '100%',
    // margin: '0.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.5)'
    }
  },
  cardIcon: {
    fontSize: '4rem',
    color: theme.palette.primary.dark,
    margin: '1rem 0'
  },
  cardHeader: {
    color: theme.palette.primary.main,
    padding: '0 1rem'
  },
  cardTitle: {
    fontWeight: 'bold'
  },
  cardContent: {
    textAlign: 'center'
  }
}));

const CardUI = ({ label, icon, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <FontAwesomeIcon icon={icon} className={classes.cardIcon} />
      <CardHeader title={label} className={classes.cardHeader} classes={{ title: classes.cardTitle }} />
      <CardContent className={classes.cardContent}>{content}</CardContent>
    </Card>
  );
};

export default CardUI;
