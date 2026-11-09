# Produto e escopo

- Leia integralmente `noryx-decisoes.md` antes de implementar funcionalidades. Preserve a cópia original para rastreabilidade.
- Android primeiro, proteção pessoal, armazenamento local e nenhuma conta obrigatória no MVP. Não adicionar nuvem, analytics ou envio de domínios sem uma decisão explícita do produto.
- Interface: React Native, TypeScript, Expo com development build, Expo Router e NativeWind. Zustand, Zod, SQLite e SecureStore entram quando suas funcionalidades forem implementadas.
- Abas: Início, Proteção, Atividade e Ajustes. Gerenciamento de sites pertence a Proteção. PIN, biometria, histórico e rotinas são posteriores ao núcleo funcional.
- Não simular proteção operacional, contadores de bloqueio ou resultados de rede. Nunca ativar uma indicação de sucesso somente porque um botão foi pressionado. O serviço nativo deve confirmar seu estado operacional.
- A VPN é local, baseada em VpnService. DNS filtra domínios e tem limites: anúncios no mesmo domínio, DoH/DoT, DNS privado, IPv6 e outras VPNs. Não prometer bloqueio absoluto.
- Antes de implementar regras conflitantes de permitir/bloquear, escolher resolvedor, retenção ou origem das listas, registrar a decisão de produto. Essas políticas ainda não estão fechadas no documento.
- Dados de páginas, pesquisas e PIN em texto puro não podem ser persistidos ou registrados em logs. Minimizar domínios no histórico, definir retenção e oferecer exclusão quando essa etapa existir.
- A paleta do documento de produto é a referência inicial do código: secundária `#582DE1` e atenção `#EF4444`. O desenho no Pencil usa pequenas variações; não alterar os dois lados silenciosamente. Inter e Lucide são as fontes visuais do produto.

## Estado real desta etapa

A seção 10 do documento original é uma descrição histórica recebida, não uma prova de implementação. Esta etapa cria somente a fundação Expo, navegação, estilos e documentação. Não considerar Zustand, persistência, contrato nativo, VPN, parser DNS, encaminhamento, estatísticas, PIN ou biometria concluídos sem código e validação correspondentes. Verificar `README.md` e o código antes de reportar progresso.

## Aceitação futura do núcleo

Consentimento VPN, serviço real, domínio bloqueado, domínio permitido resolvido, conectividade preservada ao iniciar/parar, interface fiel ao estado do túnel e testes de rede documentados. Testes web ou mocks não comprovam funcionamento da VPN Android.
