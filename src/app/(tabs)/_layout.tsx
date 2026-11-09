import { Tabs } from 'expo-router';
import { ChartNoAxesColumnIncreasing, House, Settings, Shield } from 'lucide-react-native';

import tokens from '@/theme/tokens';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.muted,
        tabBarStyle: {
          backgroundColor: tokens.colors.surface,
          borderTopColor: tokens.colors.border,
        },
        tabBarLabelStyle: { fontFamily: tokens.fontFamily.regular },
        sceneStyle: { backgroundColor: tokens.colors.background },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: ({ color, size }) => <House color={color} size={size} /> }} />
      <Tabs.Screen name="protecao" options={{ title: 'Proteção', tabBarIcon: ({ color, size }) => <Shield color={color} size={size} /> }} />
      <Tabs.Screen name="atividade" options={{ title: 'Atividade', tabBarIcon: ({ color, size }) => <ChartNoAxesColumnIncreasing color={color} size={size} /> }} />
      <Tabs.Screen name="ajustes" options={{ title: 'Ajustes', tabBarIcon: ({ color, size }) => <Settings color={color} size={size} /> }} />
    </Tabs>
  );
}
