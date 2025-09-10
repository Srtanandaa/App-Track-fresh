import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './projeto/Pages/Landing/landing'; 
import CadastroScreen from './projeto/Pages/Cadastro/cadastro'; 
import LoginScreen from './projeto/Pages/Login/login'; 
import EntregasScreen from './projeto/Pages/Entregas/entregas';
import PerfilScreen from './projeto/Pages/Perfil/perfil';
import CheckinScreen from './projeto/Pages/Checkin/checkin';
import ProdutoScreen from './projeto/Pages/Produto/produto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="entregas" component={EntregasScreen} />
        <Stack.Screen name="checkin" component={CheckinScreen} />
        <Stack.Screen name="perfil" component={PerfilScreen} />
        <Stack.Screen name="produto" component={ProdutoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
