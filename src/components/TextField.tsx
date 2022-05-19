import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface TextFieldProps {
  label: string;
  placeholder: string;
  onChangeText: Function; //is this what we use for f?
  validate: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  onChangeText,
  validate,
}) => {
  const [empty, setEmpty] = useState(true);
  const handleOnChangeText = (text: string) => {
    onChangeText(text);
    setEmpty(text.length < 1);
  };

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder={placeholder}
          onChangeText={text => handleOnChangeText(text)}
        />
      </View>
      <Text>{validate && empty ? 'This field required' : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#CBCBCB',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textField: {
    flex: 1,
    height: 50,
    fontSize: 20,
    color: '#000',
  },
});
