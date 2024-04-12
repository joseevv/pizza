import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import styles from './style/global';

export default function App() {
  return (
    <View style={styles.container}>
         <Image source={require('./assets/pizza.png')} style={styles.imagemTitulo}></Image>
        
        <View>
        <Text style={styles.titulo}>Pizzaria Los Hermanos</Text>
      </View>   

      <Text style={styles.titulo2}>
        LOGIN
      </Text>
      <Text style={styles.titulo3}>
        que bom te ver novamente!
      </Text>

      <TextInput style={styles.input} placeholder='Email'>
      </TextInput>
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true}>
      </TextInput>

      <Button title='Entre agora!' color={'red'}></Button>
      <Text style={styles.textoBaixo}>
        não tem conta?
      </Text>
      <Button title='Cadastre-se!' color={'red'}></Button>
      <StatusBar style="auto" />
      <Text style={styles.textoBaixo}>
        ou use alguma das opções abaixo
      </Text>
      <View style={styles.fixToText}>
        <Image source={require('./assets/logoGoogle.jpg')} style={styles.icons}></Image>
        <Image source={require('./assets/feice.png')} style={styles.icons}></Image>
      </View>

      
    </View>
  );
}
