import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
interface StateButtonProps {
  icon?: string;
  onButtonPress(): any;
  children?: string;
  number?: number;
}

export const StateButton: React.FC<StateButtonProps> = props => {
  const showIcon = (iconName?: string) => {
    if (iconName === 'open') {
      return (
        <Image
          style={styles.icon}
          source={require('../../assets/openGreyIcon.png')}
        />
      );
    }
    if (iconName === 'closed') {
      return (
        <Image
          style={styles.icon}
          source={require('../../assets/closedGreyIcon.png')}
        />
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
      {showIcon(props.icon)}
      <Text style={styles.btnText}>{`${props.number ? props.number : ''} ${
        props.children
      }`}</Text>
    </TouchableOpacity>
  );
};

export default StateButton;

const styles = StyleSheet.create({
  button: {
    width: 110,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    width: 18,
    justifyContent: 'center',
  },
});
