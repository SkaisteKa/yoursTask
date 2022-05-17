import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {RootStore} from '../../Store';
import IterationButton from '../components/IterationButton';

export const IssuesScreen = ({navigation}) => {
  const reposState = useSelector((state: RootStore) => state.repos);
  const [currentPage, setCurrentPage] = useState(1);
  const totalIssuesNumber = reposState.repos ? reposState.repos?.length : 0;
  let totalPages = Math.floor(totalIssuesNumber / 7);
  if (totalIssuesNumber % 7 > 0) totalPages++;

  const handleIssueList = item => {
    return (
      <View>
        <Text style={styles.item}>{item.title}</Text>
      </View>
    );
  };

  const handleIterationButtonPress = (pagesToMove: number) => {
    const requiredPage = currentPage + pagesToMove;
    if (requiredPage > 0 && requiredPage < totalPages) {
      setCurrentPage(currentPage + pagesToMove);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 200, paddingLeft: 50}}>
        Total Issues: {totalIssuesNumber}, Total pages {totalPages}
      </Text>
      <ScrollView>
        {reposState.repos
          ? reposState.repos
              .filter(
                (elem, index) =>
                  index >= (currentPage - 1) * 7 && index < currentPage * 7,
              )
              .map(item => handleIssueList(item))
          : null}
      </ScrollView>
      <IterationButton onButtonPress={() => handleIterationButtonPress(-1)}>
        Previous
      </IterationButton>
      <IterationButton onButtonPress={() => handleIterationButtonPress(1)}>
        Next
      </IterationButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
