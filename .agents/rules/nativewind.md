# NativeWind e design tokens

- Esta fundação usa NativeWind 4.2.7 estável com Tailwind CSS 3.4. Não misturar o setup v4 com instruções v5 RC/Tailwind 4. Confirmar compatibilidade antes de qualquer migração.
- Babel usa babel-preset-expo com jsxImportSource nativewind e o preset nativewind/babel. Metro parte de expo/metro-config e é envolvido por withNativeWind com input global.css.
- Importar global.css no layout raiz do Router. Declarar tipos em nativewind-env.d.ts, nunca nativewind.d.ts. Incluir src/**/*.{js,jsx,ts,tsx} nos caminhos content do Tailwind.
- Estilizar os componentes React Native com className. Classes devem ser literais completas ou selecionadas de um mapa tipado, sem interpolar fragmentos como bg- + color.
- Centralizar cores, raios, espaços e tipografia em `src/theme/tokens.js`; Tailwind e APIs nativas devem consumir essa fonte comum. Não espalhar valores hexadecimais pelo JSX.
- A paleta inicial segue as decisões do produto. O arquivo Pencil é referência visual; divergências precisam de decisão explícita. Não recriar a identidade inteira nesta etapa de scaffolding.
- Usar props próprias para tamanho/cor de ícones Lucide e style para valores dinâmicos/APIs que não aceitam className. cssInterop/remapProps só quando necessário e conforme a documentação.
- Reiniciar Metro com cache limpo após mudar Babel/Metro. Validar bundle Android e o uso real de className, além de passar no TypeScript.

## Fontes oficiais

Consultadas em 09/11/2026.

- [Instalação NativeWind 4 e compatibilidade SDK 57](https://www.nativewind.dev/docs/getting-started/installation)
- [Componentes de terceiros](https://www.nativewind.dev/docs/guides/third-party-components)
- [Detecção de classes Tailwind 3](https://v3.tailwindcss.com/docs/content-configuration)
