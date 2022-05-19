import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {RootStore} from '../../Store';
import IterationButton from '../components/IterationButton';
import {useDispatch} from 'react-redux';
import {GetRepos} from '../actions/ReposActions';

export const IssuesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const reposState = useSelector((state: RootStore) => state.repos);
  const inputsState = useSelector((state: RootStore) => state.inputs);

  const owner = inputsState.inputs.owner;
  const repository = inputsState.inputs.repository;
  const [currentPage, setCurrentPage] = useState(1);

  const [issueState, setIssueState] = useState('open');

  const handleIssueList = item => {
    return (
      <View key={item.number}>
        <Text style={styles.item}>{item.title}</Text>
      </View>
    );
  };
  useEffect(() => {
    dispatch(GetRepos(owner, repository, issueState, 5, currentPage) as any);
  }, [currentPage, issueState]);

  const handleIterationButtonPress = (pagesToMove: number) => {
    const pageToMove = currentPage + pagesToMove;
    if (pageToMove > 0) {
      setCurrentPage(pageToMove);
    }

    // const requiredPage = currentPage + pagesToMove;
    // if (requiredPage > 0 && requiredPage < totalPages) {
    //   setCurrentPage(currentPage + pagesToMove);
    // }
  };
  console.log(' currentPage', currentPage);
  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 200, paddingLeft: 50}}>
        <IterationButton onButtonPress={() => setIssueState('open')}>
          Open
        </IterationButton>
        <IterationButton onButtonPress={() => setIssueState('closed')}>
          Closed
        </IterationButton>
        Current Page:{currentPage}
      </Text>
      <ScrollView>
        {reposState.repos
          ? reposState.repos.map(item => handleIssueList(item))
          : null}
      </ScrollView>
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
    padding: 50,
    flex: 1,
    backgroundColor: '#636B92',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  iterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
