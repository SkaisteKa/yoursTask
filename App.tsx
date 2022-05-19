/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FirstScreen} from './src/screens/FirstScreen';
import {IssuesScreen} from './src/screens/IssuesScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="IssuesScreen" component={IssuesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
