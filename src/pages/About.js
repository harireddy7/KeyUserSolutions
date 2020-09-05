import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, Divider, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import aboutUsImg from '../assets/team.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto 2rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  aboutContent: {
    padding: '0 3rem',
    boxShadow: 'none',
    background: theme.palette.light.main,
    width: '40%',
    display: 'flex',
    flex: 1,
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
  { label: 'Contact Us', path: '/contact', variant: 'contained', color: 'primary' },
  { label: 'Our Services', path: '/services', variant: 'outlined', color: 'default' }
];

const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Card elevation={0} className={classes.showcaseImgWrapper}>
          <CardMedia image={aboutUsImg} component="img" alt="showcase-image" className={classes.showcaseImg} />
        </Card>
        <Card elevation={0} className={classes.aboutContent}>
          <Typography component="h3" color="primary" className={classes.title}>
            About Us
            <Divider className={classes.titleDivider} variant="middle" />
          </Typography>
          <CardContent>
            <Typography variant="subtitle1" className={`${classes.subTitle} bg-shape-1`}>
              We provide services to clients from various industries like Hospitality, Healthcare, Services, Tourism, IT
              Companies, Infrastructure, Retailers, Real Estate, Manufacturing, Banks & Online Media houses. We
              understand that for the success of any project Time, Quality and Support has to be top class, for this our
              planning & quality control team make sure that your projects are very planned & designed to be delivered
              on time & also the quality of the project is more than what you have expected.
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
    </>
  );
};

export default About;
