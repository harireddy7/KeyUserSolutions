import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    background: theme.palette.light.light
    // borderBottom: '1px solid'
  },
  content: {
    textAlign: 'justify',
    padding: '1rem 2rem',
    color: theme.palette.primary.dark,
    background: theme.palette.light.main
  },
  actions: {
    background: theme.palette.light.light
  }
}));

const ProductDetails = ({ open, closeDialog, product }) => {
  const { title, content } = product;
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={closeDialog} className={classes.root}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent className={classes.content}>{content}</DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="contained" color="primary" fullWidth onClick={closeDialog}>
          &lt;&lt; Back to Products
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetails;
