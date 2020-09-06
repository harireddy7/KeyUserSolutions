import React from 'react';
import { Typography, Divider, Card, CardContent, CardMedia, CardHeader } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

import contactImg from '../assets/contact.png';
import Address from '../components/Address';
import ContactForm from '../components/ContactForm';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0.5rem'
    }
  },
  sectionTitleWrapper: {
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
  contactMainWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 2rem',
    '@media (max-width: 500px)': {
      margin: '0 0.5rem'
    },
    '@media (max-width: 330px)': {
      margin: 0,
      justifyContent: 'flex-start'
    }
  },
  contactWrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridGap: '1rem',
    marginTop: 0,
    marginBottom: '2rem',
    '@media (max-width: 330px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
    }
  },
  officeAddress: {
    color: theme.palette.primary.dark
  },
  contactInfo: {},
  socialMedia: {},
  contactImgWrapper: {
    flex: 1,
    boxShadow: 'none',
    border: 'none',
    maxWidth: '500px'
  },
  formHeader: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  subtitle1: {
    '@media (max-width: 768px)': {
      fontSize: '0.9rem'
    }
  },
  headerTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 700
  },
  contactFormWraper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    '@media (max-width: 900px)': {
      flexDirection: 'column-reverse',
      width: '100%'
    }
  },
  contactForm: {
    flex: 2,
    '@media (max-width: 900px)': {
      width: '90vw',
      maxWidth: '600px',
      margin: '0 auto'
    }
  },
  contactImg: {
    boxShadow: 'none',
    '@media (max-width: 900px)': {
      width: '70vw',
      maxWidth: '400px',
      margin: '0 auto'
    }
  }
}));

const addressList = [
  { content: '7989785982', icon: 'phone-alt', link: 'tel://7989785982' },
  { content: 'sales@keyusersolutions.com', icon: 'envelope', link: 'mailto:sales@keyusersolutions.com' }
];

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.sectionTitleWrapper}>
        <CardContent>
          <Typography component="h3" className={classes.title} color="primary">
            CONTACT US
          </Typography>
          <Divider className={classes.titleDivider} variant="middle" />
        </CardContent>
      </Card>
      <div className={classes.contactMainWrapper}>
        <div className={classes.contactWrapper}>
          <Card className={classes.officeAddress}>
            <CardHeader title="Office Address" classes={{ title: classes.headerTitle }} />
            <Divider className={classes.titleDivider} variant="middle" />
            <CardContent>
              <Typography className={classes.subtitle1} variant="subtitle1">
                2-119/cp/402, Nizampet Village, Hyderabad 500090
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.contactInfo}>
            <CardHeader title="Contact Info" classes={{ title: classes.headerTitle }} />
            <Divider className={classes.titleDivider} variant="middle" />
            <CardContent style={{ paddingTop: '0.2rem' }}>
              <Address addressList={addressList} themeType={theme.palette.type} />
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className={classes.contactFormWraper}>
        <CardContent className={classes.contactForm}>
          <Card className={classes.sectionTitleWrapper}>
            <Typography component="h3" className={classes.title} color="primary">
              GET IN TOUCH
              <Divider className={classes.titleDivider} variant="middle" />
            </Typography>
            <Typography variant="subtitle2" align="center" component="h6"></Typography>
          </Card>
          <ContactForm />
        </CardContent>
        <Card elevation={0} className={classes.contactImg}>
          <CardMedia
            component="img"
            alt="send message image"
            image={contactImg}
            className={classes.contactImgWrapper}
          />
        </Card>
      </Card>
    </div>
  );
};

export default Contact;
