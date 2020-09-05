import React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '250px',
    minHeight: '280px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.5)'
    }
  },
  cardHeader: {
    color: theme.palette.primary.main,
    padding: '0 1rem',
    // minHeight: '50px',
    margin: 0
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  cardContent: {
    textAlign: 'justify'
  },
  cardImgWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  cardImg: {
    width: '100%'
  }
}));

const ServiceCard = ({ title, media, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.cardImgWrapper}>
        <CardMedia component="img" image={media} alt={title} className={classes.cardImg} />
      </div>
      <CardHeader title={title} className={classes.cardHeader} classes={{ title: classes.cardTitle }} />
      {content && <CardContent className={classes.cardContent}>{content}</CardContent>}
    </Card>
  );
};

export default ServiceCard;
