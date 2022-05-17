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
// import {Button, StyleSheet, View} from 'react-native';
// import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import {GetRepos} from './src/actions/ReposActions';
// import {RootStore} from './Store';

const Stack = createNativeStackNavigator();
const App = () => {
  // const dispatch = useDispatch();
  // const reposState = useSelector((state: RootStore) => state.repos);
  // const handleSubmit = () => {
  //   dispatch(GetRepos('rails', 'rails') as any);
  // };
  // console.log('reposState', reposState);
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
