import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useFonts, Sora_400Regular} from '@expo-google-fonts/sora';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {light} from './src/themes/light';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <View style={styles.container}>
          <Text style={{fontFamily: 'Sora_400Regular'}}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </NavigationContainer>
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
