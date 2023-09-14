import { ActivityIndicator} from 'react-native';
import { ThemeProvider } from 'styled-components';
import  theme  from '@theme/index';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Groups } from '@screens/Groups';


export default function App() {
  const [fontsloaded] =useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
   {fontsloaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
  
}



