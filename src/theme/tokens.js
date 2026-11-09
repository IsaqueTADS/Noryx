/** Shared by Tailwind (Node) and the native UI. Values follow noryx-decisoes.md. */
const tokens = {
  colors: {
    primary: '#7C4DFF',
    secondary: '#582DE1',
    success: '#22C55E',
    danger: '#EF4444',
    background: '#0B0D17',
    surface: '#161A2E',
    foreground: '#F3F4F6',
    muted: '#B9B4CC',
    border: '#49405F',
  },
  fontFamily: {
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  radius: { sm: 8, md: 16, lg: 24 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  icon: { sm: 20, md: 24, lg: 40 },
};

module.exports = tokens;
