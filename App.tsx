import {useFonts, Sora_400Regular} from '@expo-google-fonts/sora';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {light} from './src/themes/light';
import {AuthStack} from './src/navigation/auth-stack';

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
        <AuthStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}
