# TypeScript

- Manter `extends: expo/tsconfig.base` e `strict: true`. Não enfraquecer verificações para acomodar erros.
- Usar `.tsx` para JSX e `.ts` para módulos sem JSX. Imports do aplicativo usam `@/`, apontando para `src/`. Usar `import type` quando o import só existir para tipagem.
- Tipar props, contratos nativos, parâmetros e resultados nas fronteiras. Preferir inferência local; evitar anotações redundantes e abstrações genéricas sem necessidade.
- Não usar `any`, `@ts-ignore`, casts duplos ou `!` para esconder casos não tratados. Dados desconhecidos entram como `unknown`, são validados e estreitados antes de uso.
- TypeScript não valida JSON, banco, deep links ou eventos Kotlin em runtime. Usar Zod nas fronteiras quando implementadas, além da normalização de domínios exigida pelo produto.
- Representar estados assíncronos como uniões discriminadas quando necessário. O estado do serviço deve distinguir inicialização, autorização, operação, parada, revogação e erro; um booleano local não comprova proteção.
- Não mutar contratos readonly nem estado React. `catch` deve tratar valores desconhecidos e preservar uma mensagem segura para o usuário, sem dados sensíveis.
- Rodar `npm run typecheck` e `npm run lint` após mudanças. Testar comportamento com casos relevantes; não criar testes que só repetem a implementação.

## Fontes oficiais

Consultadas em 09/11/2026. As convenções de nomes/imports e de estados acima são decisões locais fundamentadas nestas referências.

- [TypeScript no Expo](https://docs.expo.dev/guides/typescript/)
- [TSConfig strict](https://www.typescriptlang.org/tsconfig/strict.html)
- [Narrowing e uniões discriminadas](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
