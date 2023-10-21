import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, StatusBar, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const frases = [
    "Acredite em você mesmo e tudo é possível.",
    "O sucesso nasce do desejo, determinação e persistência.",
    "O otimismo é a fé que leva à realização.",
    "Você é mais forte do que pensa.",
    "Pequenas atitudes, grandes resultados.",
    "A jornada de mil milhas começa com um único passo.",
    "O fracasso é o trampolim para o sucesso.",
    "A persistência é o caminho do êxito.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é curta, faça cada dia valer a pena."
  ]
  const [fraseAtual, setFraseAtual] = useState('');
  const [imagemAtual, setImagemAtual] = useState(require('./assets/img/biscoito.webp'));
  const quebrarBiscoito = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const novaFrase = frases[indiceAleatorio];
    setFraseAtual(novaFrase);
    setImagemAtual(require('./assets/img/biscoito-aberto.jpeg'))
  }
  return (
    <View style={styles.container}>{}
      <Image style={styles.img} source={imagemAtual}></Image>
      <Text style={styles.texto}>{fraseAtual}</Text>
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.botao}>
        <View>
          <Text style={styles.textoBtn}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems:'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  texto:{
    fontSize: 30,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    borderColor: '#dd7b22',
    borderWidth: 1,
    padding: 10,
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  },
  textoBtn:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
