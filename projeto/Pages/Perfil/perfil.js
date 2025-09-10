import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styles from "./style";

export default function PerfilScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUser();
  }, []);

 
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        
        navigation.reset({
          index: 0,
          routes: [{ name: "Landing" }], 
        });
      })
      .catch((error) => Alert.alert("Erro ao sair", error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topo}></View>

      <View style={styles.perfilContainer}>
        <Ionicons name="person-circle" size={100} color="#1e73c7" />
        <Text style={styles.nome}>
          {userData?.nome} {userData?.sobrenome}
        </Text>
        <Text style={styles.email}>E-mail: {userData?.email}</Text>
      </View>

      <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={32} color="#1e73c7" />
      </TouchableOpacity>

    
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
