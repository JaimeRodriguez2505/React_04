import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';


export default function ImageUpload() {
  return (
    <View style={styles.container}>
      <Text>Subir Imagen</Text>
      <Button title="Subir Imagen" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
