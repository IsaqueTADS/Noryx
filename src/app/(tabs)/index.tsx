import { ShieldOff } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { FoundationScreen } from '@/components/foundation-screen';
import tokens from '@/theme/tokens';

export default function HomeScreen() {
  return (
    <FoundationScreen title="Noryx" description="Seu espaço digital, sob seu controle.">
      <View className="gap-md rounded-lg border border-border bg-surface p-lg">
        <ShieldOff color={tokens.colors.muted} size={tokens.icon.lg} accessibilityElementsHidden importantForAccessibility="no" />
        <Text className="font-semibold text-xl text-foreground">Proteção indisponível</Text>
        <Text className="font-sans text-base leading-6 text-muted">
          O serviço de proteção ainda não foi implementado. Esta versão inicial não bloqueia domínios.
        </Text>
      </View>
    </FoundationScreen>
  );
}
