/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import ThemeProvider from './theme/ThemeProvider';
import Demo from './screens/Demo';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Demo />
    </ThemeProvider>
  );
}

export default App;
