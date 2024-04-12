import * as React from 'react';
import { View, Button, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import styles from './estilo/estilo.js';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem Vindo a o Site Los Hermanos pizzaria!!!</Text>
      <Text>O QUE PODEMOS AJUDAR?</Text>
      <Image
        style={styles.subb}
        source={require('./assets/Wvua.gif')}
      />
      <Button title="CATALOGO" onPress={() => navigation.navigate('Catalogo')} />
      <Button title="COMPRAR" onPress={() => navigation.navigate('Comprar')} />
      <Button title="SAIR" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}
function Cadastro({ navigation }) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.subb}
        
        source={require('./assets/gifgif.gif')}
        />
        <TextInput placeholder='Nome'
        style={{height: 50,
          width: 250,
          margin: 1,
          borderWidth: 1,
          padding: 10,}}
          
      />
      <TextInput placeholder='Email'
        style={{height: 50,
          width: 250,
          margin: 1,
          borderWidth: 1,
          padding: 10,}}
          
      />
      <TextInput placeholder='Senha'
        style={{height: 50,
          width: 250,
          margin: 3,
          borderWidth: 1,
          padding: 10,}}
      />
      <View style={styles.viewbutton2}>
          <TouchableOpacity style={styles.touchbutton}>
            <Text style={styles.textbutton}>Acessar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
function Cadastrar({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder='Email'
        style={{height: 35,
          width: 201,
          margin: 1,
          borderWidth: 1,
          padding: 10,}}
      />
      <TextInput placeholder='Nova senha'
        style={{height: 35,
          width: 201,
          margin: 3,
          borderWidth: 1,
          padding: 10,}}
          
      />
      <TextInput placeholder='Confirmar senha'
        style={{height: 35,
          width: 201,
          margin: 1,
          borderWidth: 1,
          padding: 10,}}
      />
      <Button title="Finalizar cadastro" onPress={() => navigation.navigate('Profile')} />
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Catalogo({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>produto 1 🛒 </Text>
      <Text>produto 2 🛒 ✔ </Text>
      <Text>produto 3 🛒 </Text>
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Comprar({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>produto 1  ✔ </Text>
      <Text>produto 2  ✔ </Text>
      <Text>produto 3  ✔ </Text>
      <Text> Pix ☐ </Text>
      <Text> Dinheiro ☑</Text>
      <Text> Cartão ☐ </Text>
      <Button title="voltar" onPress={() => navigation.goBack()} />
      <Button title="Finalizar Compra" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'red' },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Catalogo"
        component={Catalogo}
        options={{
          title: 'Catalogo',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Comprar"
        component={Comprar}
        options={{
          title: 'Comprar',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          title: 'Cadastrar',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
    </Stack.Navigator>
  );
}
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Itajuba234</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
