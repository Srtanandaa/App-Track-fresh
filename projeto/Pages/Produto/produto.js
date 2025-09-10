import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function ProdutoScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { entrega } = route.params;
  const [checkin, setCheckin] = useState(null);


const carregarCheckin = async () => {
  try {
    const checkinsRef = collection(db, "checkins");
    const q = query(checkinsRef, where("entregaId", "==", entrega.id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const dadosCheckin = querySnapshot.docs[0].data(); 
      setCheckin(dadosCheckin);
    } else {
      setCheckin(null);
    }
  } catch (err) {
    console.log("Erro ao carregar check-in:", err.message);
  }
};

  
  useFocusEffect(
    useCallback(() => {
      carregarCheckin();
    }, [entrega.id])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topo}></View>
      <Text style={styles.titulo}>Informações</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>🏫 Escola: {entrega.escola}</Text>
        <Text style={styles.subtitulo}>📍 Endereço: {entrega.endereco}</Text>
        <Text style={styles.subtitulo}>📦 Quantidade: {entrega.quantidade}</Text>
      </View>

      {checkin ? (
  <View style={styles.checkinCard}>
    <Text style={styles.checkinTitulo}>✅ Check-in feito:</Text>
    <Text style={styles.checkinTexto}>Nome: {checkin.nome}</Text>
    <Text style={styles.checkinTexto}>CPF: {checkin.cpf}</Text>
    <Text style={styles.checkinTexto}>Cidade: {checkin.cidade}</Text>
    <Text style={styles.checkinTexto}>
      Horário: {checkin.createdAt.toDate().toLocaleString("pt-BR")}
    </Text>
  </View>
) : (
  <TouchableOpacity
    style={styles.botao}
    onPress={() =>
      navigation.navigate("checkin", {
        entregaSelecionada: entrega,
        onCheckinDone: carregarCheckin,
      })
    }
  >
    <Text style={styles.botaoTexto}>Fazer Check-in</Text>
  </TouchableOpacity>
)}


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
  );
}
