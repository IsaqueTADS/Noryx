import { ScrollViewStyleReset } from 'expo-router/html';
import type { ReactNode } from 'react';

import tokens from '@/theme/tokens';

export default function Root({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ScrollViewStyleReset />
      </head>
      <body style={{ backgroundColor: tokens.colors.background }}>{children}</body>
    </html>
  );
}
