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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 18
  },

  statusContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginRight: 10,
  backgroundColor: "#ffe5e5",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 12,
},

statusDot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "red",
  marginRight: 6,
},

statusTexto: {
  color: "red",
  fontWeight: "bold",
  fontSize: 14,
},

enderecoTexto: {
  fontSize: 12,
  color: "#555",
},


  topo1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1e73c7",
    justifyContent: "space-between",
  },


  buscarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    height: 36,
  },

  buscarInput: {
    flex: 1,
    marginLeft: 6,
    color: "#1e73c7",
    fontSize: 14,
  },

  botaoCadastrar: {
    backgroundColor: "#1e73c7",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  textoCadastrar: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1e73c7",
    marginBottom: 40,
  },

  itemLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
  },

  itemTexto: {
    fontSize: 16,
    color: "#333",
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
