import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CardUI from './CardUI';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridGap: '1rem',
    padding: '3rem 2rem',
    [theme.breakpoints.only('xs')]: {
      padding: '1.5rem 1rem'
    }
  }
}));

const bioSections = [
  {
    label: 'Our Mission',
    icon: 'rocket',
    content:
      'To capitalize on the efficiency of Information Technology Industry to serve Clients. WE strive constantly to make KUS a winning competitor.'
  },
  {
    label: 'Our Vision',
    icon: 'lightbulb-o',
    content:
      'KUS provides demand-driven supply chain management and enterprise software solutions that drive value for companies regardless of market conditions.'
  },
  {
    label: 'Our Values',
    icon: 'users',
    content:
      'KUS provides exceptional thought leadership to every industry, with particular expertise in subscription-based e-commerce and financial services enterprises.'
  }
];

const Bio = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {bioSections.map(bio => (
        <Grid item key={bio.label}>
          <CardUI {...bio} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Bio;
