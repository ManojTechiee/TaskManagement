// App.js
import React from 'react';
import { TaskProvider } from './src/context/index';
import AppNavigator from './src/Navigation/main';

const App = () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
};

export default App;
