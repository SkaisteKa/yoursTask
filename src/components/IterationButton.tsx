import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

const IterationButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
      {props.icon === 'left' && (
        <Icon name="angle-left" size={20} color="#e6e7e980" />
      )}
      <Text
        style={[
          styles.btnText,
          props.icon === 'left' ? styles.btnTLeft : styles.btnRight,
        ]}>
        {props.children}
      </Text>
      {props.icon === 'right' && (
        <Icon name="angle-right" size={20} color="#3267F0" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTLeft: {
    color: '#e6e7e980',
  },
  btnRight: {
    color: '#3267F0',
  },
  btnText: {
    color: '#e6e7e980',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
