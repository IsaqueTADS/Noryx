import '../../global.css';
import 'react-native-reanimated';

import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import tokens from '@/theme/tokens';

export { ErrorBoundary } from 'expo-router';

void SplashScreen.preventAutoHideAsync().catch(() => {
  // A splash screen may not be present in a web preview.
});

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: tokens.colors.primary,
    background: tokens.colors.background,
    card: tokens.colors.surface,
    text: tokens.colors.foreground,
    border: tokens.colors.border,
    notification: tokens.colors.danger,
  },
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void SplashScreen.hideAsync().catch(() => {
        // Already hidden, or running without a native splash screen.
      });
    }
  }, [fontsLoaded, fontError]);

  if (fontError) throw fontError;
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={theme}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
