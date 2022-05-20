import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const IssueTab = ({item, icon}) => {

  const showIcon = (iconName?: string) => {
    if (iconName === 'open') {
      return <Image source={require('../../assets/openIcon.png')} />;
    }
    if (iconName === 'closed') {
      return <Image source={require('../../assets/closedIcon.png')} />;
    }
    return null;
  };
  return (
    <View style={styles.container} key={item.number}>
      <View style={styles.issueDetails}>
        <View style={styles.icon}>{showIcon(icon)}</View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.info}>
            {`#${item.number} opened on ${item.created_at.split('T')[0]} by ${
              item.user.login
            }`}
          </Text>
        </View>
        <View style={styles.commentWrapper}>
          {item.comments > 0 && (
            <>
              <Image source={require('../../assets/commentIcon.png')} />
              <Text style={styles.info}>{item.comments}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default IssueTab;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 116,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ffffff33',
  },
  issueDetails: {
    flexDirection: 'row',
  },
  textWrapper: {
    width: '75%',
    paddingTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  info: {
    color: '#E6E7E9',
    fontSize: 14,
  },
  icon: {
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 8,
  },
  commentWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 5,
  },
});
