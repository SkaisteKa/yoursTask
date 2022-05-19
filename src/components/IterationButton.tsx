import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

const IterationButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
      {props.icon === 'left' && (
        <Icon name="angle-left" size={30} color="#ffffff" />
      )}
      <Text style={styles.btnText}>{props.children}</Text>
      {props.icon === 'right' && (
        <Icon name="angle-right" size={30} color="#ffffff" />
      )}
    </TouchableOpacity>
  );
};

export default IterationButton;

const styles = StyleSheet.create({
  button: {
    width: 120,
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
