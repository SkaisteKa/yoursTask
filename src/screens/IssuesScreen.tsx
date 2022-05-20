import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import {RootStore} from '../../Store';
import IterationButton from '../components/IterationButton';
import {useDispatch} from 'react-redux';
import {GetRepos} from '../actions/ReposActions';
import StateButton from '../components/StateButton';
import IssueTab from '../components/IssueTab';

interface IssuesScreenProps {}

export const IssuesScreen: React.FC<IssuesScreenProps> = () => {
  const dispatch = useDispatch();
  const reposState = useSelector((state: RootStore) => state.repos);
  const inputsState = useSelector((state: RootStore) => state.inputs);
  const dataState = useSelector((state: RootStore) => state.total);

  const owner = inputsState.inputs.owner;
  const repository = inputsState.inputs.repository;
  const [currentPage, setCurrentPage] = useState(1);
  const [issueState, setIssueState] = useState('open');

  useEffect(() => {
    dispatch(GetRepos(owner, repository, issueState, 20, currentPage) as any);
  }, [currentPage, issueState]);

  const handleIterationButtonPress = (pagesToMove: number) => {
    const pageToMove = currentPage + pagesToMove;
    if (pageToMove > 0) {
      setCurrentPage(pageToMove);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.totalNumberWrapper}>
          <Text style={styles.totalNumberText}>Issues:</Text>
          <View style={styles.totalNumberCount}>
            <Text style={styles.totalNumberCountText}>{dataState.total}</Text>
          </View>
        </View>
        <View style={styles.stateChange}>
          <StateButton
            icon="open"
            number={dataState.total}
            onButtonPress={() => setIssueState('open')}>
            Open
          </StateButton>
          <StateButton
            icon="closed"
            onButtonPress={() => setIssueState('closed')}>
            Closed
          </StateButton>
        </View>
        <ScrollView>
          {reposState.repos
            ? reposState.repos.map(item => (
                <IssueTab item={item} icon={issueState} key={item.number} />
              ))
            : null}
        </ScrollView>
      </View>
      <View style={styles.iterButtons}>
        <IterationButton
          icon="left"
          onButtonPress={() => handleIterationButtonPress(-1)}>
          Previous
        </IterationButton>
        <IterationButton
          icon="right"
          onButtonPress={() => handleIterationButtonPress(1)}>
          Next
        </IterationButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040C28',
    padding: 0,
  },
  header: {
    paddingTop: 48,
    paddingLeft: 24,
  },
  logo: {
    width: 98,
    height: 74,
  },
  totalNumberWrapper: {
    flexDirection: 'row',
    paddingBottom: 26,
  },
  totalNumberText: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingTop: 36,
    paddingLeft: 24,
    width: 107,
  },
  totalNumberCount: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 36,
    width: 37,
    height: 24,
    borderRadius: 20,
  },
  totalNumberCountText: {
    color: 'rgba(230, 231, 233, 0.5)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 3,
  },
  body: {
    flex: 1,
  },
  stateChange: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    height: 49,
  },
  iterButtons: {
    height: 124,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
