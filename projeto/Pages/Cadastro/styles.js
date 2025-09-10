import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e73c7", 
    padding: 24,
  },
  card: { 
    width: "100%", 
    maxWidth: 420, 
    backgroundColor: "#fff", 
    borderRadius: 20, 
    padding: 24, 
    gap: 15, 
    elevation: 3,
    alignSelf: "center"
  },
  title: { 
    fontSize: 40, 
    fontWeight: "800", 
    textAlign: "center", 
    color: "#1e73c7",
    marginRight: "32%"
  },
  titleRow: {
    flexDirection: 'row',       
    alignItems: 'center',       
    justifyContent: 'center',   
    gap: 10, 
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
    marginBottom: 1
  },
  label: { 
    fontSize: 17, 
    fontWeight: "600", 
    marginTop: 1,
    color: "#1e73c7" 
  },
  input: { 
    height: 48, 
    borderWidth: 1, 
    borderColor: "#1e73c7", 
    borderRadius: 12, 
    paddingHorizontal: 12, 
    backgroundColor: "#fff",
    marginTop: 1
  },
  passwordRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8,
    marginTop: 5
  },
  button: { 
    height: 50, 
    borderRadius: 14, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#1e73c7",  
    marginTop: 20
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "700" 
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
