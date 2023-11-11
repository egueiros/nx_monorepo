import React from 'react';

import {Pressable, StyleSheet, Text} from 'react-native';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) =>
      [styles.button, { backgroundColor: pressed ? 'red' : 'blue'}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default Button;
