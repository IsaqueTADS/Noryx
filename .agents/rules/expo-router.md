# Expo, Expo Router e development builds

## Versão e dependências

- Conferir `package.json`, o lockfile e a documentação versionada antes de usar APIs Expo/React Native. Esta fundação usa Expo SDK 57; não aplicar exemplos de SDK 58 sem verificar compatibilidade.
- npm é o gerenciador deste projeto. Versionar `package-lock.json`, usar `npm ci` em instalações reproduzíveis e `npx expo install` para adicionar bibliotecas, sobretudo dependências nativas.
- Usar a CLI local `npx expo`, nunca o antigo pacote global expo-cli. Rodar `npx expo install --check` e `npx expo-doctor` após alterações de dependências/configuração.
- Validar mudanças com typecheck, lint e bundle Android. Informar separadamente o que foi testado em dispositivo e o que foi apenas compilado/exportado.

## Rotas

- Rotas em `src/app/`, cada tela com export default. `_layout.tsx` compõe Stack/Tabs, providers, fontes e splash. Componentes, hooks, constantes e serviços ficam fora da pasta de rotas.
- Usar Expo Router para navegação, com Link, router e useLocalSearchParams de expo-router. Não criar NavigationContainer próprio em paralelo.
- Manter typedRoutes habilitado. Preferir destinos tipados e parâmetros mínimos serializáveis, como identificadores. Não usar casts para forçar rotas inválidas.
- Grupos como `(tabs)` organizam o layout sem criar um segmento de URL. `index.tsx` da árvore inicial corresponde à rota `/`. Tratar rotas inexistentes e a navegação Voltar.
- Parâmetros e deep links são entrada externa: validar tipo, presença e conteúdo. Nunca passar PIN, tokens ou histórico sensível na URL.
- A navegação do Noryx tem quatro abas. Não adicionar abas/fluxos de exemplos ao produto por conveniência do template.

## Desenvolvimento nativo

- `expo-dev-client` é obrigatório. `npm start` inicia Metro com `--dev-client`; Expo Go não testa o futuro módulo Kotlin.
- Configuração de development build no perfil `development` de `eas.json`: developmentClient true e distribution internal. EAS remoto exige conta, projeto vinculado e credenciais; não inventar projectId nem declarar build concluído sem artefato.
- Para build local Android, usar `npm run android` (expo run:android), com Java/Android SDK e dispositivo/emulador disponíveis. Compilar iOS localmente requer macOS.
- Após mudar dependências nativas ou configuração nativa, recompilar o development build. Reiniciar Metro não adiciona módulos ao binário já instalado.
- Adotar Continuous Native Generation: `android/` e `ios/` são gerados e ignorados. Guardar personalizações em app config, config plugins e futuros módulos locais em `modules/`.
- Não editar manualmente diretórios gerados para manter alterações duradouras. Antes de prebuild --clean, verificar se há código nativo manual que precisa ser preservado.
- Só solicitar permissões necessárias quando a funcionalidade correspondente existir. Autorização VPN é ação explícita do usuário, não uma permissão fictícia inserida nesta fundação.
- Variáveis `EXPO_PUBLIC_*` entram no bundle e são públicas. Não usá-las para segredos. Nunca colocar credenciais, PIN ou chaves privadas em app.json, código ou logs.

## Fontes oficiais

Consultadas em 09/11/2026.

- [SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Índice oficial e correções de APIs](https://docs.expo.dev/llms.txt)
- [Templates create-expo-app](https://docs.expo.dev/more/create-expo/)
- [Conceitos de rotas](https://docs.expo.dev/router/basics/core-concepts/)
- [Typed routes](https://docs.expo.dev/router/reference/typed-routes/)
- [Tabs JavaScript](https://docs.expo.dev/router/advanced/tabs/)
- [Development builds](https://docs.expo.dev/develop/development-builds/introduction/)
- [DevClient no SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/dev-client/)
- [Perfis eas.json](https://docs.expo.dev/build/eas-json/)
- [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)
- [Variáveis de ambiente](https://docs.expo.dev/guides/environment-variables/)
