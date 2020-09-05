import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Divider, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import showcasePersonDesktop from '../assets/showcase-full.png';
import { NavLink } from 'react-router-dom';
import Bio from '../components/Bio';
// import showcasePersonMobile from '../assets/research.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  showcaseContent: {
    padding: '0 3rem',
    boxShadow: 'none',
    background: theme.palette.light.main,
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '70%',
      margin: '1rem auto'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem 0',
      width: '85%'
    },
    '@media (max-width: 400px)': {
      padding: 0,
      width: '100%',
      margin: '1rem auto'
    }
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '7px',
    textAlign: 'center',
    '@media (max-width: 300px)': {
      fontSize: '0.95rem'
    }
  },
  titleDivider: {
    marginBottom: '10px'
  },
  subTitle: {
    textAlign: 'justify'
  },
  showcaseImgWrapper: {
    boxShadow: 'none',
    background: theme.palette.light.main,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 0,
    maxHeight: '570px',
    maxWidth: '900px',
    padding: '1rem',
    margin: '0 auto'
  },
  showcaseImg: {
    width: '100%',
    height: '100%'
  },
  actionsWrapper: {},
  actionBtn: {}
}));

const additionalActions = [
  { label: 'About Us', path: '/about', variant: 'contained', color: 'primary' },
  { label: 'Our Services', path: '/services', variant: 'outlined', color: 'default' }
];

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Card elevation={0} className={classes.showcaseImgWrapper}>
          <CardMedia
            image={showcasePersonDesktop}
            component="img"
            alt="showcase-image"
            className={classes.showcaseImg}
          />
        </Card>
        <Card elevation={0} className={classes.showcaseContent}>
          <CardContent>
            <Typography component="h3" color="primary" className={classes.title}>
              Welcome To SAP Solutions
            </Typography>
            <Divider className={classes.titleDivider} variant="middle" />
            <Typography variant="subtitle1" className={`${classes.subTitle} bg-shape-1`}>
              We as a company working with countries over the globe and counting, you can be rest assured that your
              achievements and goals scale boundaries and roles. Employee growth is exponential for people who choose to
              go the extra mile.
            </Typography>
          </CardContent>
          <CardActions className={classes.actionsWrapper}>
            {additionalActions.map(({ label, path, variant, color }) => (
              <Button
                to={path}
                component={NavLink}
                key={label}
                variant={variant}
                color={color}
                className={classes.actionBtn}
              >
                {label}
              </Button>
            ))}
          </CardActions>
        </Card>
      </div>
      <Bio />
    </>
  );
};

export default Home;
