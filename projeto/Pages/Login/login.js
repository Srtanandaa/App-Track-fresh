import React, { useState } from "react";
import { 
  Alert, 
  Image, 
  KeyboardAvoidingView, 
  Keyboard,
  Platform, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  View,
  TouchableWithoutFeedback
} from "react-native";
import styles from '../Login/styles'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function isValidEmail(v) {
    return /\S+@\S+\.\S+/.test(v);
  }

  async function handleLogin() {
    if (!isValidEmail(email)) {
      Alert.alert("E-mail inválido");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Senha curta", "Sua senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("entregas");
    } catch (error) {
      let mensagem = "";
      switch(error.code){
        case "auth/user-not-found":
          mensagem = "Usuário não encontrado.";
          break;
        case "auth/wrong-password":
          mensagem = "Senha incorreta.";
          break;
        case "auth/invalid-email":
          mensagem = "E-mail inválido.";
          break;
        default:
          mensagem = "Falha no login. Tente novamente.";
      }
      Alert.alert("Erro no login", mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={styles.card}>
            <Text style={styles.title}>INOVE</Text>
            <View style={styles.titleRow}>
              <Image source={require("../../assets/box.png")} style={styles.image} />
              <Text style={styles.title2}>TRACK</Text>
            </View>

            <Text style={styles.subtitle}>Seja bem vindo!</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email..."
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="••••••••"
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.button, loading && { opacity: 0.7 }]}
              disabled={loading}
            >
              <Text style={styles.buttonText}>{loading ? "Entrando..." : "Entrar"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Cadastro")}
              style={{ marginTop: 15 }}
            >
              <Text style={styles.registerText}>
                Não tem acesso? Clique aqui para se cadastrar!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
