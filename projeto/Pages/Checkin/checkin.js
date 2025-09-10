import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Keyboard, 
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import * as Location from "expo-location"; 
import { useNavigation, useRoute } from "@react-navigation/native";
import { db, auth } from "../../firebaseConfig"; 
import { collection, getDocs, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker"; 
import styles from "./styles";

export default function CheckinScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const entregaPreSelecionada = route.params?.entregaSelecionada || null;

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  const [entregas, setEntregas] = useState([]);
  const [entregaSelecionada, setEntregaSelecionada] = useState(null);


  useEffect(() => {
    if (entregaPreSelecionada) {
      setEntregaSelecionada(entregaPreSelecionada.id);
      setNome(entregaPreSelecionada.entregador || "");
      setCpf(entregaPreSelecionada.cpf || "");
    }
  }, [entregaPreSelecionada]);

  const carregarEntregas = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const usuariosSnap = await getDocs(collection(db, "usuarios"));
      let nomeCompleto = null;

      usuariosSnap.forEach((doc) => {
        if (doc.data().email === user.email) {
          nomeCompleto = `${doc.data().nome} ${doc.data().sobrenome}`;
        }
      });

      if (!nomeCompleto) return;

      const snapshot = await getDocs(collection(db, "entregas"));
      const pendentes = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((e) => e.entregador === nomeCompleto && e.status !== "Entregue");

      setEntregas(pendentes);
    } catch (error) {
      console.log("Erro ao carregar entregas:", error.message);
    }
  };

  useEffect(() => {
    carregarEntregas();
  }, []);

  const formatarCPF = (value) => {
    let cpfNumeros = value.replace(/\D/g, "");
    cpfNumeros = cpfNumeros.slice(0, 11);
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d)/, "$1.$2");
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d)/, "$1.$2");
    cpfNumeros = cpfNumeros.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpfNumeros;
  };

  const handleCheckin = async () => {
    if (!nome || !cpf || !entregaSelecionada) {
      Alert.alert("Erro", "Preencha todos os campos e selecione uma entrega");
      return;
    }

    setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada", "Permita acesso à localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const [endereco] = await Location.reverseGeocodeAsync({ latitude, longitude });

      const rua = endereco.street || endereco.name || "Não disponível";
      const bairro = endereco.district || "Não disponível";
      const cidade = endereco.city || "Não disponível";
      const estado = endereco.region || "Não disponível";

      await addDoc(collection(db, "checkins"), {
        nome,
        cpf,
        entregaId: entregaSelecionada,
        latitude,
        longitude,
        rua,
        bairro,
        cidade,
        estado,
        createdAt: serverTimestamp(),
      });

      const entregaRef = doc(db, "entregas", entregaSelecionada);
      await updateDoc(entregaRef, { status: "Entregue" });

      Alert.alert("Sucesso", "Check-in realizado e entrega finalizada!");
      setNome("");
      setCpf("");
      setEntregaSelecionada(null);

      carregarEntregas();
    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
   
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
         <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
        <View style={styles.container}>
          <View style={styles.topo}></View>

          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.conteudoCentral}>
              <Text style={styles.titulo}>Check-in</Text>

              <View style={styles.formulario}>
                <Text style={styles.label}>Selecione a entrega</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={entregaSelecionada}
                    onValueChange={(value) => setEntregaSelecionada(value)}
                    enabled={!entregaPreSelecionada}
                  >
                    <Picker.Item label="Selecione uma entrega" value={null} />
                    {entregas.map((entrega) => (
                      <Picker.Item
                        key={entrega.id}
                        label={`${entrega.escola} (${entrega.endereco})`}
                        value={entrega.id}
                      />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.label}>Nome do responsável</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o nome"
                  value={nome}
                  onChangeText={setNome}
                />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o CPF"
                  value={cpf}
                  onChangeText={(text) => setCpf(formatarCPF(text))}
                  keyboardType="numeric"
                />

                <TouchableOpacity
                  style={styles.botaoCheckin}
                  onPress={handleCheckin}
                  disabled={loading}
                >
                  <Text style={styles.textoBotao}>
                    {loading ? "Salvando..." : "Check-in"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <View style={styles.navegacaoInferior}>
            <TouchableOpacity
              style={styles.itemNavegacao}
              onPress={() => navigation.navigate("entregas")}
            >
              <Ionicons name="cube-outline" size={30} color="#1e73c7" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.itemNavegacao}
              onPress={() => navigation.navigate("checkin")}
            >
              <Ionicons name="location-outline" size={30} color="#1e73c7" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.itemNavegacao}
              onPress={() => navigation.navigate("perfil")}
            >
              <Ionicons name="person-circle" size={30} color="#1e73c7" />
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    
  );
}
