import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ola from "./src/components/ola"
import { TextInput } from 'react-native';
import { use, useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const [gas,setGas] = useState('');
  const [etanol,setEtanol] = useState('');
  const [precbom,setPrecbom] = useState('');

  function obtprecbom(){
    gas * 0.7 > etanol ? 
    //setNomecomp(`${nome} ${sobren}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <TextInput
        style={styles.input}
        placeholder='Coloque seu nome'
        onChangeText={setNome}
        value={nome}
      />
        <TextInput
        style={styles.input}
        placeholder='Coloque seu sobrenome'
        onChangeText={setSobren}
        value={sobren}
      />
      <Button
      title='Nome completo'
      onPress={obtnomecom}
      />
      <Text>{nomecomp}</Text>
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

  texto:{
    color:'red',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input:{
    borderWidth:1,
    borderColor:'red',
    borderRadius:10,
    height:32,
    width:'90%',
    margin:10,
    padding:5,
  }

});
