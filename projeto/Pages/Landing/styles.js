import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white', 
    fontWeight: 'bold',
    marginBottom: 360,
    textAlign: 'center',
},
  button: {
   width: 140,
    height: 50,
    backgroundColor: 'white', 
    borderRadius: 40,
    borderWidth: 2, 
    borderColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 110,
  },
  buttonText:{
    fontSize: 18,
    color: '#1e73c7', 
    fontWeight: 'bold',
  },
});

export default styles;