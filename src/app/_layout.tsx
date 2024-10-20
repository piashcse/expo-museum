import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/src/components/useColorScheme';
import { Provider } from 'react-redux';
import configurationAppStore from '@/src/redux/Store';
import { PaperProvider } from 'react-native-paper';
import SpaceMonoRegular from '../assets/fonts/SpaceMono-Regular.ttf';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: SpaceMonoRegular,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const store = configurationAppStore();
  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="index" options={{ title: 'Expo museum' }} />
            <Stack.Screen name="rtkquery" options={{ title: 'RTK Query' }} />
            <Stack.Screen name="(tabs)" options={{ title: 'Tab View' }} />
            <Stack.Screen
              name="filepicker"
              options={{ title: 'File Picker' }}
            />
            <Stack.Screen name="permission" options={{ title: 'Permission' }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
