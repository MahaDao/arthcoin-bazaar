import React, { Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { NavProvider, NavContent, NavNotFoundBoundary } from 'react-navi';
import { hot } from 'react-hot-loader';
import { GenericNotFound } from 'pages/NotFound';
import store from './store';
import theme from 'styles/theme';

const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

function App() {
  return (
    <Body>
      <NavNotFoundBoundary render={GenericNotFound}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavContent />
        </Suspense>
      </NavNotFoundBoundary>
    </Body>
  );
}

function AppWithContext({ navigation }) {
  return (
    <NavProvider navigation={navigation}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ThemeProvider>
    </NavProvider>
  );
}

export default hot(module)(AppWithContext);
