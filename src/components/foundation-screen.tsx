import type { PropsWithChildren } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FoundationScreenProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function FoundationScreen({ title, description, children }: FoundationScreenProps) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-background">
      <ScrollView contentContainerClassName="grow gap-lg p-lg">
        <View className="gap-sm">
          <Text accessibilityRole="header" className="font-bold text-3xl text-foreground">
            {title}
          </Text>
          <Text className="font-sans text-base leading-6 text-muted">{description}</Text>
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
