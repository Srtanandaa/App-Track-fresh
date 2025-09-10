import { StyleSheet } from "react-native";

export default StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 40,
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1e73c7",
    justifyContent: "space-between",
  },

  perfilContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  nome: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#333",
  },

  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },

  botaoLogout: {
  position: "absolute",
  bottom: 100,   
  right: 20,
},

navegacaoInferior: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: "auto",
    backgroundColor: "#fff",
  },

  itemNavegacao: {
    alignItems: "center",
    justifyContent: "center",
  },
});
