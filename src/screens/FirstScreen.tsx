import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; //  TouchableOpacity
import {TextField} from '../components/TextField';
import {RootStore} from '../../Store';
import {GetRepos} from '../actions/ReposActions';

export const FirstScreen = ({navigation}) => {
  const [owner, setOwner] = useState('');
  const [repository, setRepository] = useState('');
  const [validateOwner, setValidateOwner] = useState(false);
  const [validateRepository, setValidateRepository] = useState(false);

  const dispatch = useDispatch();
  const reposState = useSelector((state: RootStore) => state.repos);

  useEffect(() => {
    console.log('Repos state in UE', reposState);

    if (!reposState.loading) {
      if (reposState.repos) {
        console.log('ready for next steps');
        navigation.navigate('IssuesScreen');
      } else {
        console.log('no such user or repo');
      }
    }
  }, [reposState]);

  const handleButtonPress = () => {
    setValidateOwner(!owner);
    setValidateRepository(!repository);
    if (owner && repository) {
      dispatch(GetRepos(owner, repository) as any);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <View style={styles.signInView}>
          <TextField
            label="Owner"
            placeholder="Owner name"
            onChangeText={setOwner}
            validate={validateOwner}
          />

          <TextField
            label="Repository"
            placeholder="Repository name"
            onChangeText={setRepository}
            validate={validateRepository}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.btnText}>Show Issues</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636B92',
  },

  navigation: {
    flex: 2,
    background: 'grey',
  },

  body: {
    flex: 9,
    background: 'yellow',
  },

  signInView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  button: {
    width: 200,
    marginTop: 20,
    marginLeft: 80,
    backgroundColor: '#9A41EA',
    padding: 15,
    borderRadius: 8,
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
