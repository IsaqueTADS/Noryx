# Noryx

Fundação Android do aplicativo Noryx: React Native com Expo SDK 57, TypeScript, Expo Router, NativeWind 4.2.7 e development builds.

Criado com o preset oficial de navegação `tabs@57`:

```powershell
npx create-expo-app@5.0.0 . --template tabs@57 --no-install --yes
```

O SDK 57 foi escolhido para usar uma combinação explicitamente documentada pelo NativeWind estável. Não misturar esta configuração com NativeWind 5 RC/Tailwind 4. Os arquivos gerados do exemplo foram substituídos pela estrutura inicial do Noryx.

## Executar

Pré-requisitos: Node 24 LTS (a versão utilizada está em `.nvmrc`), npm e, para compilar Android localmente, JDK e Android SDK compatíveis com o SDK Expo instalado. O version manager da máquina precisa selecionar a versão Node antes de rodar os comandos.

```powershell
cd C:\Users\isaque\Documents\Noryx\Noryx
nvm use 24.21.0
npm ci
npm start
```

`npm start` inicia Metro para um **development build já instalado**. Expo Go não é o ambiente de execução deste projeto.

Para gerar e instalar o development build local em um Android conectado ou emulador disponível:

```powershell
npm run android
```

Esse comando executa `expo run:android`, gera a pasta nativa quando necessário e requer o ambiente Android local configurado. Após mudar módulos nativos ou app config, recompilar o binário. Para escolher um dispositivo: `npx expo run:android --device`.

O perfil `development` do `eas.json` também está preparado para um APK com dev client. Para usar a nuvem, primeiro autenticar e vincular o projeto real com `npx eas-cli@latest login` e `npx eas-cli@latest init`; então executar `npx eas-cli@latest build --platform android --profile development`. Nenhum projeto remoto, credencial ou build em nuvem foi criado nesta etapa. O identificador Android `com.noryx.app` é inicial e deve ser confirmado antes da publicação.

## Estrutura

```text
src/app/                  Rotas e layouts do Expo Router
src/app/(tabs)/           Início, Proteção, Atividade e Ajustes
src/components/           Componentes compartilhados
src/theme/tokens.js       Fonte comum de tokens para Tailwind e APIs nativas
.agents/rules/            Produto, TypeScript, React Native, Expo Router e NativeWind
AGENTS.md                 Carregamento explícito das regras por agentes
global.css                Entrada Tailwind/NativeWind
eas.json                  Perfis development, preview e production
```

`android/` e `ios/` são gerados via CNG e não são a fonte de personalizações. Futuros módulos Kotlin deverão ficar em módulo local e/ou config plugin, preservados entre prebuilds.

## Escopo atual

- Navegação inicial com quatro abas e rotas tipadas.
- NativeWind com Babel, Metro, tipos e tokens compartilhados.
- Fonte Inter, ícones Lucide e tema escuro inicial.
- Dev client instalado e perfil de development build configurado.
- Documento de decisões original preservado em `.agents/rules/noryx-decisoes.md` e regras técnicas com fontes oficiais.

As telas são placeholders da fundação. A reprodução completa do design está em `../design/Noryx-design.pen`, para a etapa de interface. Os ícones/splash binários ainda são os provisórios do template Expo.

**Não implementado:** VPN, Kotlin, TUN, DNS, bloqueios, Zustand, Zod, persistência, histórico, PIN, biometria ou rotinas. O app informa que a proteção está indisponível e não apresenta contadores fictícios.

O documento recebido descreve uma fundação anterior na seção 10. Essa seção foi preservada na cópia original; o código e este README registram o estado real desta implementação.

## Verificações

```powershell
npm run typecheck
npm run lint
npm run check:dependencies
npm run doctor
npm run export:android
```

Exportar o bundle Android valida a compilação JavaScript/NativeWind, não a instalação nativa nem a operação de VPN. A validação em dispositivo e o primeiro APK ficam para a etapa de build.

TypeScript, lint, compatibilidade do SDK, Expo Doctor (21/21 verificações) e exportação Android com bytecode Hermes passaram em 09/11/2026. O teste de transformação do Babel também confirmou o NativeWind. O compilador Hermes precisou de acesso à pasta temporária normal da máquina, pois a pasta temporária do ambiente isolado negou a gravação.

Se o Expo Doctor parar na checagem de npm/yarn nesta máquina, confira a ativação do Node no NVM: o atalho `yarnpkg.exe` de uma instalação sem versão ativa pode travar a checagem. A validação pode usar o diretório real de Node/npm no PATH da sessão, sem os atalhos inativos do NVM. Este projeto usa npm e não precisa de Yarn.

### Pendências das dependências

A auditoria npm de 09/11/2026 reportou **14 alertas transitivos: 11 moderados e 3 altos**, sem críticos. Os altos vêm da cadeia `expo-router → query-string → decode-uri-component`; os moderados incluem ferramentas de lint/fingerprint e minimatch/glob.

Não foi aplicado `npm audit fix --force`: as sugestões incluem trocar a série do Expo/Router e até retornar pacotes a versões antigas. Forçar `decode-uri-component` 0.5.1 também muda CommonJS para ESM e não é uma substituição direta para o consumidor atual. Rever atualizações compatíveis do SDK e repetir a auditoria antes de distribuir o aplicativo; os alertas continuam pendentes.

- [Advisory de decodificação de URLs](https://github.com/advisories/GHSA-qr28-fpjm-wq7f)

## Referências

- [Preset oficial Expo](https://docs.expo.dev/more/create-expo/)
- [Documentação SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [NativeWind estável](https://www.nativewind.dev/docs/getting-started/installation)
- [Development builds](https://docs.expo.dev/develop/development-builds/introduction/)

Pesquisa de práticas e compatibilidade: 09/11/2026. Demais fontes estão nos arquivos de regras correspondentes.
