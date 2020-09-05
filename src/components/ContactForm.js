import React, { useReducer, useState } from 'react';
import { TextField, Button, Typography, Dialog, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '7px 10px',
    // border: '1px solid',
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    margin: '0.5rem 0'
  },
  errorMsg: {
    marginTop: '5px',
    textAlign: 'center',
    color: 'red',
    display: 'block'
  },
  successDialog: {
    padding: '1rem 0.2rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem 2rem'
    }
  }
}));

const initialFormState = {
  values: {
    fullName: '',
    email: '',
    mobile: '',
    message: ''
  },
  errors: {
    fullName: false,
    email: false,
    message: false
  }
};

const ContactForm = () => {
  const classes = useStyles();

  const [formState, setFormState] = useReducer((initial, next) => ({ ...initial, ...next }), initialFormState);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isFormInValid, setIsFormInValid] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const { values, errors } = formState;

  const validateEmail = email => {
    if (email === '') {
      setInvalidEmail(false);
      return true;
    }
    const regEx = /^[a-zA-Z]([a-zA-Z0-9]){1,}@([a-zA-Z]{2,})\.([a-zA-Z]){2,5}$/gi;
    if (!regEx.test(email)) {
      setInvalidEmail(true);
      return true;
    }
    return false;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormState({
      values: {
        ...formState.values,
        [name]: value
      },
      errors: {
        ...formState.errors,
        ...(name === 'mobile' ? {} : { [name]: name === 'email' ? validateEmail(value) : value === '' })
      }
    });
  };

  const handleInputBlur = e => {
    const { name, value } = e.target;
    setFormState({
      errors: {
        ...formState.errors,
        ...(name === 'mobile' ? {} : { [name]: name === 'email' ? validateEmail(value) : value === '' })
      }
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const { fullName, email, message } = values;
    if ((fullName !== '', email !== '', message !== '')) {
      setIsFormInValid(false);
      setFormSubmitting(true);
      console.log(values);

      setTimeout(() => {
        setFormSubmitting(false);
        setFormState(initialFormState);
        setIsFormInValid(false);
        setInvalidEmail(false);

        // Message Sent
        setMessageSent(true);
        // setTimeout(() => setMessageSent(false), 2000);
      }, 2000);
    } else {
      setIsFormInValid(true);
    }
  };

  const handleCloseDialog = () => setMessageSent(false);

  return (
    <form className={classes.root} onSubmit={handleFormSubmit}>
      <div className={classes.formGroup}>
        <TextField
          name="fullName"
          id="fullName"
          label="Full Name*"
          error={errors.fullName}
          helperText={errors.fullName ? 'Enter full name' : null}
          variant="outlined"
          fullWidth
          size="small"
          autoComplete="off"
          value={values.fullName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          type="email"
          name="email"
          id="email"
          label="Email*"
          error={errors.email}
          helperText={errors.email ? (invalidEmail ? 'Invalid email format' : 'Enter email') : null}
          variant="outlined"
          fullWidth
          size="small"
          autoComplete="off"
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          type="tel"
          name="mobile"
          id="mobile"
          label="Mobile"
          variant="outlined"
          fullWidth
          size="small"
          autoComplete="off"
          value={values.mobile}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          multiline
          rows={4}
          name="message"
          id="message"
          label="Message*"
          error={errors.message}
          helperText={errors.message ? 'Enter Message' : null}
          fullWidth
          variant="outlined"
          size="small"
          autoComplete="off"
          value={values.message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={classes.formGroup}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ pointerEvents: formSubmitting ? 'none' : 'all' }}
          disabled={Object.values(errors).some(val => val)}
        >
          {formSubmitting ? 'Sending Mesage...' : 'Send Message'}
        </Button>
        {isFormInValid && <small className={classes.errorMsg}>Please fill in the form</small>}

        {messageSent && (
          <Dialog open={messageSent} onClose={handleCloseDialog}>
            <Typography className={classes.successDialog}>Thanks for the message, will contact you shortly!</Typography>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={handleCloseDialog}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
