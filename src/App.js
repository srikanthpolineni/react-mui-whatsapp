import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Background from './Background';
import Foreground from './Foreground';
import GlobalStyles from './GlobalStyles';
import SideBar from './SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Chat from './Chat';

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          '@media (min-width: 600px)': {
            paddingLeft: "5px",
            paddingRight: "25px"
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Background>
        <Foreground>
          <SideBar />
          <Chat />
        </Foreground>
      </Background>

    </ThemeProvider>
  );
}