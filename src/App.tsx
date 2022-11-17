import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo'; 
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <Text>Dangel 2</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);