# React e React Native

- Componentes funcionais com props tipadas, render puro e estado imutável. Hooks apenas no topo de componentes ou hooks próprios; nunca em condicionais, loops ou callbacks comuns.
- Efeitos sincronizam recursos externos. Não copiar estado derivável para outro estado com useEffect. Assinaturas e listeners devem ter cleanup; tratar cancelamento e respostas obsoletas de tarefas assíncronas.
- Separar telas finas, componentes reutilizáveis e lógica de domínio/serviços. Regras de DNS, persistência e VPN não pertencem ao JSX. Não bloquear a thread JS nem a thread principal Android com processamento de pacotes.
- Respeitar safe areas, teclado, botão Voltar do Android, escala de fonte e telas pequenas. Usar layout flexível; não copiar coordenadas de mockups como dimensões rígidas do dispositivo.
- Usar Pressable e controles nativos apropriados. Botões só com ícone precisam de rótulo acessível. Informar role, estado disabled/checked e feedback de carregamento; não depender somente de cor.
- Preservar ampliação de texto e foco. Validar os fluxos com TalkBack em Android quando houver ambiente de execução.
- Usar listas virtualizadas para históricos longos, chaves estáveis e paginação quando necessário. Não renderizar toda uma coleção grande em ScrollView. getItemLayout só quando as dimensões forem conhecidas.
- Medir antes de adicionar memoização. Avaliar desempenho em release; development build não representa o desempenho final. Não registrar domínios, segredos ou tráfego em console.
- Preferir módulos compatíveis com a versão React Native escolhida pelo Expo. A UI web auxilia na validação, mas não substitui testes Android de permissões, serviço, rede, ciclo de vida e bateria.

## Fontes oficiais

Consultadas em 09/11/2026; conferir a versão do React Native instalada ao usar uma API específica.

- [Regras de React: componentes e hooks puros](https://react.dev/reference/rules/components-and-hooks-must-be-pure)
- [Acessibilidade no React Native](https://reactnative.dev/docs/accessibility)
- [Desempenho no React Native](https://reactnative.dev/docs/performance)
