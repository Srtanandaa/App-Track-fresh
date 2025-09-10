import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles'; 

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/Tela.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
