import React from 'react';
import { PaperProvider } from 'react-native-paper';

import { AppNavigator } from './navigation';

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
