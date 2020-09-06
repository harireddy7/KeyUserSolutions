import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  fadeRoot: {
    minWidth: '250px',
    minHeight: '200px',
    height: '100%'
  },
  root: {
    height: '100%',
    // margin: '0.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: '0.3s transform ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.01)',
      boxShadow: '0 5px 10px #aaa',
      transition: '0.3s transform ease-in-out'
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
    textAlign: 'center',
    maxHeight: '120px',
    paddingBottom: '1.5rem'
  }
}));

const CardUI = ({ label, icon, content }) => {
  const classes = useStyles();
  return (
    <Fade up>
      <div className={classes.fadeRoot}>
        <Card className={classes.root}>
          <FontAwesomeIcon icon={icon} className={classes.cardIcon} />
          <CardHeader title={label} className={classes.cardHeader} classes={{ title: classes.cardTitle }} />
          <CardContent className={classes.cardContent}>{content}</CardContent>
        </Card>
      </div>
    </Fade>
  );
};

export default CardUI;
