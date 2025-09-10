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
    marginBottom: 90,
    backgroundColor: "#1e73c7",
    justifyContent: "space-between",
  },


  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1e73c7",
    marginBottom: 60,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 18,
    color: "#333",
    marginBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
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

  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  

checkinCard: {
  backgroundColor: "#fff",   
  padding: 16,
  borderRadius: 12,
  marginVertical: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,  
},

checkinTitulo: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#1e73c7",
  marginBottom: 30,
},

checkinTexto: {
  fontSize: 18,
  marginBottom: 20,
  color: "#333",
},


  botao: {
    backgroundColor: "#1e73c7",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 50,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
