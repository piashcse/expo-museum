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
import configureAppStore from '@/src/store/Store';
import { PaperProvider } from 'react-native-paper';
import * as Font from '@expo-google-fonts/inter';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  const [loaded] = useFonts({
    Inter_400Regular: Font.Inter_400Regular,
    Inter_600SemiBold: Font.Inter_600SemiBold,
    Inter_500Medium: Font.Inter_500Medium,
    Inter_700Bold: Font.Inter_700Bold,
  });

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
  const store = configureAppStore();
  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>
              <Stack>
                <Stack.Screen name="index" options={{ title: 'Expo museum' }} />
                <Stack.Screen
                  name="rtkquery"
                  options={{ title: 'RTK Query' }}
                />
                <Stack.Screen name="(tabs)" options={{ title: 'Tab View' }} />
                <Stack.Screen
                  name="filepicker"
                  options={{ title: 'File Picker' }}
                />
                <Stack.Screen
                  name="permission"
                  options={{ title: 'Permission' }}
                />
                <Stack.Screen
                  name="bottomsheet"
                  options={{ title: 'Bottom Sheet' }}
                />
                <Stack.Screen
                  name="modal"
                  options={{ presentation: 'modal' }}
                />
              </Stack>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
