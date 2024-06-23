import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../screens/TaskList/index';
import TaskForm from '../screens/TaskForm/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Tasks' }}  />
        <Stack.Screen name="TaskForm" component={TaskForm} options={{ title: 'Task Form' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
