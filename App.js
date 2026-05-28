
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Image,TextInput} from 'react-native';
import { use, useState } from 'react';
import ResultCard from './src/components/ResultCard';
import MyButton from './src/components/MyButton';

export default function App() {
  const [gas,setGas] = useState('');
  const [etanol,setEtanol] = useState('');
  const [precbom,setPrecbom] = useState('');
  const [porc,setPorc] = useState('');
  const img = require("./assets/gasolina.webp");

  function obtprecbom(){
    gas * 0.7 > etanol ?  setPrecbom ("Etanol"):  setPrecbom("Gasolina");
    setPorc(etanol*100/gas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Etanol ou Gasolina</Text>
    <Image
    source = {img}
    />
      <Text>Etanol</Text>
      <TextInput
        style={styles.input}
        placeholder='Coloque preço do etanol'
        onChangeText={setEtanol}
        value={etanol}
      />
        <Text>Gasolina</Text>
        <TextInput
        style={styles.input}
        placeholder='Coloque preço da gasolina'
        onChangeText={setGas}
        value={gas}
      />

      <MyButton obtprecbom={obtprecbom}/>
      <ResultCard precbom={precbom} porc={porc}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  },

  texto:{
    marginTop: 30,
    color:'red',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input:{
    borderWidth:1,
    borderColor:'red',
    borderRadius:10,
    height:32,
    width:'90%',
    margin:10,
    padding:5,
    margin: 20,
  }

});