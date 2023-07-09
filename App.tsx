import {useFonts, Sora_400Regular} from '@expo-google-fonts/sora';
import {ThemeProvider} from 'styled-components';
import {light} from './src/themes/light';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/store/store';
import AppRoute from '@navigation/AppRoute';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <AppRoute />
      </ThemeProvider>
    </Provider>
  );
}
