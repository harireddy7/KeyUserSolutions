import React, { useState } from 'react';
import { Grid, Typography, Divider, Card, CardContent, CardMedia, CardHeader, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import productsList, { clientsList, servicesList } from '../utils/services-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import ProductDetails from '../components/ProductDetails';

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: '1200px',
    margin: '2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0.5rem'
    }
  },
  servicesContainer: {
    margin: '5rem 0'
  },
  productsContainer: {
    margin: '6rem 0'
  },
  clientssContainer: {
    margin: '6rem 0'
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
    // margin: '3rem 0 5rem',
    gridTemplateColumns: 'minmax(150px, 250px)',
    justifyContent: 'center',
    gridGap: '1rem',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 250px))'
    }
  },
  serviceCard: {
    padding: '0.5rem',
    textAlign: 'center',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s transform ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.01)',
      boxShadow: '0 5px 10px #aaa',
      transition: '0.3s transform ease-in-out'
    }
  },
  serviceCardIcon: {
    fontSize: '3rem',
    color: theme.palette.primary.dark
  },
  serviceHeader: {
    padding: 0,
    fontWeight: 'bold'
  },
  serviceCardHeaderTitle: {
    fontSize: '1rem',
    color: theme.palette.primary.main
  },
  productsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyContent: 'center',
    alignItems: 'stretch',
    gridGap: '1rem',
    padding: '0 2rem',
    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'minmax(150px, 1fr)',
      padding: '0 0.5rem'
    }
  },
  productCard: {
    maxWidth: '450px',
    maxHeight: '450px',
    padding: '0.5rem',
    margin: '0 auto',
    transition: '0.3s transform ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.01)',
      boxShadow: '0 5px 10px #aaa',
      transition: '0.3s transform ease-in-out'
    }
  },
  productCardImg: {
    padding: '0.5rem 1rem',
    width: '100%',
    height: '100%'
    // border: '1px solid'
  },
  productCardHeader: {
    padding: '0.5rem',
    fontWeight: 'bolder'
  },
  productCardHeaderTitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: theme.palette.primary.main
  },
  clientsWrapper: {
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
    padding: '0 1rem',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.01)',
      boxShadow: '0 5px 10px #aaa',
      transition: '0.3s all ease-in-out'
    }
  },
  clientImg: {
    width: '100%'
  }
}));

const Services = () => {
  const classes = useStyles();
  const [activeProduct, setActiveProduct] = useState(null);

  const selectProduct = productId => {
    setActiveProduct(productId);
  };

  const closeProductDialog = () => {
    setActiveProduct(null);
  };

  const RenderHeaderTitle = ({ title, Component = Fade }) => (
    <Card elevation={0} className={classes.sectionTitleWrapper}>
      <CardContent>
        <Typography component="h3" className={classes.title} color="primary">
          <Component right cascade>
            {title}
          </Component>
        </Typography>
        <Divider className={classes.titleDivider} variant="middle" />
      </CardContent>
    </Card>
  );

  return (
    <div className={classes.root}>
      <div className={classes.servicesContainer}>
        <RenderHeaderTitle title="Our Services" Component={Zoom} />
        <Grid item container className={classes.servicesWrapper}>
          {servicesList.map(({ title, icon }) => (
            <Grid item key={icon}>
              <Fade up>
                <Card className={classes.serviceCard}>
                  <FontAwesomeIcon icon={icon} className={classes.serviceCardIcon} />
                  <CardHeader
                    title={title}
                    className={classes.serviceCardHeader}
                    classes={{ title: classes.serviceCardHeaderTitle }}
                  />
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.productsContainer}>
        <RenderHeaderTitle title="Our Products" />
        <Grid item container className={classes.productsWrapper}>
          {productsList.map(product => (
            <Grid item key={`${product.id}-${product.title}`}>
              <Fade up>
                <Card className={classes.productCard}>
                  <CardActionArea onClick={() => selectProduct(product.id)}>
                    <CardMedia
                      component="img"
                      alt={product.title}
                      image={product.media}
                      className={classes.productCardImg}
                    />
                    <CardHeader
                      title={product.title}
                      className={classes.productCardHeader}
                      classes={{ title: classes.productCardHeaderTitle }}
                    />
                  </CardActionArea>
                </Card>
              </Fade>
            </Grid>
          ))}
          {activeProduct !== null && (
            <ProductDetails open closeDialog={closeProductDialog} product={productsList[activeProduct]} />
          )}
        </Grid>
      </div>
      <div className={classes.clientsContainer}>
        <RenderHeaderTitle title="Our Clients" />
        <Fade up>
          <div className={classes.clientsWrapper}>
            {clientsList.map(({ title, media }) => (
              <Card elevation={0} key={title} className={classes.clientContainer}>
                <CardMedia component="img" image={media} alt={title} className={classes.clientImg} />
              </Card>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
