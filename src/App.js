import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import appTheme from './utils/app-theme';
import Header from './pages/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

const useStyles = makeStyles({
  main: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    background: '#fff'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <div className={classes.main}>
          <ScrollToTop />
          <Header />

          <Switch>
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
