const { createMuiTheme } = require('@material-ui/core');

const appTheme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', 'sans-serif'",
    fontFamilyRoboto: "'Roboto', sans-serif"
  },
  palette: {
    primary: {
      main: '#5E2CED',
      dark: '#051441'
    },
    light: {
      main: '#FFF',
      light: '#F1EBFE',
      dark: '#EEEEEE'
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#F4F4F4',
        color: '#051441'
      }
    }
  }
});

export default appTheme;
