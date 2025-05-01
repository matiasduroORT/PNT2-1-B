import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './components/Card';

export default function App() {
  return (
    <Card/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:{
    backgroundColor: "#F5F111",
    padding: 20,
  },
  titulo: {
    color: 'red',
    fontSize: 20,
    fontWeight: 700
  }
});
