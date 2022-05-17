import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const IterationButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
      <Text style={styles.btnText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default IterationButton;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 20,
    marginLeft: 80,
    backgroundColor: '#9A41EA',
    padding: 15,
    borderRadius: 8,
  },

  btnText: {
    color: '#3267F0',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
