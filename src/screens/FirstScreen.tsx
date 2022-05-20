import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'; //  TouchableOpacity
import {TextField} from '../components/TextField';
import {RootStore} from '../../Store';
import {GetRepos} from '../actions/ReposActions';
import {setOwnerData, setRepoData} from '../actions/InputsActions';
import {issueTotal} from '../actions/DataActions';
export const FirstScreen = ({navigation}) => {
  const [owner, setOwner] = useState('');
  const [repository, setRepository] = useState('');
  const [validateOwner, setValidateOwner] = useState(false);
  const [validateRepository, setValidateRepository] = useState(false);
  const dispatch = useDispatch();
  const reposState = useSelector((state: RootStore) => state.repos);

  useEffect(() => {
    if (!reposState.loading) {
      if (reposState.repos) {
        dispatch(issueTotal(reposState.repos[0].number));
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
      dispatch(setOwnerData(owner) as any);
      dispatch(setRepoData(repository) as any);
      dispatch(GetRepos(owner, repository, 'open', 20) as any);
      navigation.navigate('IssuesScreen');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={require('../../assets/gradientbg.png')}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040C28',
  },
  backgroundImg: {
    flex: 1,
    height: 630,
  },
  header: {
    flex: 3,
    paddingTop: 48,
    paddingLeft: 24,
  },
  logo: {
    width: 98,
    height: 74,
  },
  body: {
    flex: 9,
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
