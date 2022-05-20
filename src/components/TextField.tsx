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
    <View style={styles.container}>
      <View style={styles.labelSection}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.star}> *</Text>
      </View>
      <View
        style={[
          styles.body,
          validate && empty ? styles.validationBorder : null,
        ]}>
        <TextInput
          style={styles.textField}
          placeholder={placeholder}
          placeholderTextColor="#ffffff66"
          onChangeText={text => handleOnChangeText(text)}
        />
      </View>
      <Text style={styles.validationText}>
        {validate && empty ? 'This field required' : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  body: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    width: 300,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
  },
  labelSection: {
    flexDirection: 'row',
    lexWrap: 'wrap',
    paddingBottom: 10,
  },
  label: {
    color: '#e6e7e9',
    opacity: 0.8,
    fontSize: 20,
    fontWeight: '500',
  },
  star: {
    color: '#FF0000',
    fontSize: 20,
  },
  textField: {
    color: '#E6E7E9',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 22,
  },
  validationText: {
    color: '#FF0000',
    textAlign: 'right',
  },
  validationBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
