import React from 'react';
import {TextInputProps, StyleSheet} from 'react-native';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#fff"
      {...rest}
      style={styles.border}
    />
  </Container>
);

const styles = StyleSheet.create({
  border: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});

export default Input;
