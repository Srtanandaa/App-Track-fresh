import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e73c7", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 24,
  },
  card: { 
    width: "100%", 
    maxWidth: 420, 
    backgroundColor: "#fff", 
    borderRadius: 20, 
    padding: 24, 
    gap: 10, 
    elevation: 3,
    height: "75%"
  },
  title: { 
    fontSize: 40, 
    fontWeight: "800", 
    textAlign: "center", 
    color: "#1e73c7",
    marginRight: "32%",
  },
  titleRow: {
    flexDirection: 'row',       
    alignItems: 'center',       
    justifyContent: 'center',   
    gap: 10,          
    marginLeft: "6%"  
  },
  title2: { 
    fontSize: 40,
    fontWeight: "800",
    color: "#1e73c7", 
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  subtitle: { 
    fontSize: 18, 
    color: "#555", 
    textAlign: "center", 
    marginTop: 30,
    marginBottom: 30
  },
  label: { 
    fontSize: 17, 
    fontWeight: "600", 
    marginTop: 1,
    color: "#1e73c7", 
    marginBottom: 5
  },
  input: { 
    height: 48, 
    borderWidth: 1, 
    borderColor: "#1e73c7", 
    borderRadius: 12, 
    paddingHorizontal: 12, 
    backgroundColor: "#fff",
    marginBottom: 25
  },
  passwordRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8 
  },
  showBtn: { 
    paddingHorizontal: 12, 
    height: 48, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    justifyContent: "center" 
  },
  showBtnText: { 
    fontWeight: "600" 
  },
  button: { 
    height: 50, 
    borderRadius: 14, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#1e73c7",  
    marginTop: 15
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "700" 
  },
  helper: { 
    marginTop: 10, 
    textAlign: "center", 
    color: "#555" 
  },
  registerText: {
    color: "#1e73c7",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 13,
  },
});

export default styles;
