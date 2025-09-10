import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 
import { db } from "../../firebaseConfig"; 
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebaseConfig"; 
import styles from "./styles";

export default function EntregasScreen() {
  const navigation = useNavigation();
  const [buscar, setBuscar] = useState("");
  const [entregas, setEntregas] = useState([]);

  const carregarEntregas = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const usuariosSnap = await getDocs(collection(db, "usuarios"));
      let nomeCompleto = null;

      usuariosSnap.forEach(doc => {
        if (doc.data().email === user.email) {
          nomeCompleto = `${doc.data().nome} ${doc.data().sobrenome}`;
        }
      });

      if (!nomeCompleto) return;

      const snapshot = await getDocs(collection(db, "entregas"));

      const entregasUsuario = snapshot.docs
        .map(doc => {
          const data = doc.data();
          if (data.entregador === nomeCompleto) {  
            return {
              id: doc.id,
              escola: data.escola,
              endereco: data.endereco,
              quantidade: data.quantidade,
              status: data.status || "Pendente" 
            };
          }
          return null;
        })
        .filter(e => e !== null);

      setEntregas(entregasUsuario);
    } catch (error) {
      console.log("Erro ao carregar entregas:", error.message);
    }
  };

  useEffect(() => {
    carregarEntregas();
  }, []);

  const entregasFiltradas = entregas.filter(entrega =>
    entrega.escola.toLowerCase().includes(buscar.toLowerCase())
  );

  
  const marcarComoEntregue = async (id) => {
    try {
      const entregaRef = doc(db, "entregas", id);
      await updateDoc(entregaRef, { status: "Entregue" });

      
      setEntregas(prev =>
        prev.map(e => e.id === id ? { ...e, status: "Entregue" } : e)
      );
    } catch (error) {
      console.log("Erro ao atualizar status:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topo1}></View>
      
      <View style={styles.topo}>
        <View style={styles.buscarContainer}>
          <Ionicons name="search" size={18} color="#1e73c7" style={{ marginLeft: 6 }} />
          <TextInput
            style={styles.buscarInput}
            placeholder="Buscar entrega..."
            placeholderTextColor="#1e73c7"
            value={buscar}
            onChangeText={setBuscar}
          />
          {buscar.length > 0 && (
            <TouchableOpacity onPress={() => setBuscar("")}>
              <Ionicons name="close" size={18} color="#1e73c7" style={{ marginRight: 6 }} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.titulo}>Minhas Entregas</Text>

      <FlatList
  data={entregasFiltradas}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => {
    const corStatus = item.status === "Entregue" ? "green" : "red";
    const bgStatus = item.status === "Entregue" ? "#e5ffe5" : "#ffe5e5";

    return (
      <TouchableOpacity
        style={styles.itemLista}
        onPress={() => navigation.navigate("produto", { entrega: item })} 
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.itemTexto}>{item.escola}</Text>
          <Text style={styles.enderecoTexto}>{item.endereco}</Text>
        </View>

        <View style={[styles.statusContainer, { backgroundColor: bgStatus }]}>
          <View style={[styles.statusDot, { backgroundColor: corStatus }]} />
          <Text style={[styles.statusTexto, { color: corStatus }]}>
            {item.status}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#1e73c7" />
      </TouchableOpacity>
    );
  }}
/>



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
