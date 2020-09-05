import React from 'react';
import { Grid, Typography, Divider, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import servicesList, { clientsList } from '../utils/services-data';
import ServiceCard from '../components/ServiceCard';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1200px',
    margin: '2rem auto',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0.5rem'
    }
  },
  sectionTitleWrapper: {
    height: '70px',
    padding: '0 3rem',
    boxShadow: 'none',
    background: theme.palette.light.main,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: theme.palette.primary.main,
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
  servicesWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '1rem',
    padding: '3rem 2rem',
    marginBottom: '2rem',
    [theme.breakpoints.only('xs')]: {
      // padding: '1.5rem 1rem'
      padding: '1.5rem 0'
    }
  },
  clientsWrapper: {
    marginBottom: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 150px)',
    gridGap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 150px)'
    },
    '@media (max-width: 430px)': {
      gridTemplateColumns: '150px'
    }
  },
  clientContainer: {
    minWidth: '120px',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem'
  },
  clientImg: {
    width: '100%'
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.sectionTitleWrapper}>
        <CardContent>
          <Typography component="h3" className={classes.title} color="primary">
            Our Services
          </Typography>
          <Divider className={classes.titleDivider} variant="middle" />
        </CardContent>
      </Card>
      <Grid item container className={classes.servicesWrapper}>
        {servicesList.map(service => (
          <Grid item key={service.title}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
      <Card elevation={0} className={classes.sectionTitleWrapper}>
        <CardContent>
          <Typography component="h3" className={classes.title} color="primary">
            Our Clients
          </Typography>
          <Divider className={classes.titleDivider} variant="middle" />
        </CardContent>
      </Card>
      <div className={classes.clientsWrapper}>
        {clientsList.map(({ title, media }) => (
          <Card key={title} className={classes.clientContainer}>
            <CardMedia component="img" image={media} alt={title} className={classes.clientImg} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
