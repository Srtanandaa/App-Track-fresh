import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 40,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e73c7",
    marginBottom: 20,
    textAlign: "center",
  },

  formulario: {
    marginTop: 20,
  },

  label: {
    fontSize: 18,
    color: "#1e73c7",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#1e73c7",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16,
    color: "#1e73c7",
  },

    topo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 90,
    backgroundColor: "#1e73c7",
    justifyContent: "space-between",
  },

  pickerContainer: {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  marginBottom: 12,
  backgroundColor: "#fff"
},


  botaoCheckin: {
    backgroundColor: "#1e73c7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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
