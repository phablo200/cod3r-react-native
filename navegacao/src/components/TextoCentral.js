import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextoCentral = props => {
  return (
    <View
      style={[styles.container, {backgroundColor: props.corFundo ?? '#000'}]}>
      <Text style={[styles.texto, {color: props.corTexto ?? '#FFF'}]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 50,
  },
});

export default TextoCentral;
