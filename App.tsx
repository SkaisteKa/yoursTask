/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {GetRepos} from './src/actions/ReposActions';
import {RootStore} from './Store';

const App = () => {
  const dispatch = useDispatch();
  const reposState = useSelector((state: RootStore) => state.repos);
  const handleSubmit = () => {
    dispatch(GetRepos('rails', 'rails') as any);
  };
  console.log('reposState', reposState);
  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default App;
