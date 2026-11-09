# Noryx — decisões do produto e arquitetura

> Documento de referência — versão 0.1.0  
> Nome provisório: **Noryx**  
> Plataforma inicial: **Android**

## 1. Visão do produto

O Noryx é um aplicativo de proteção digital pessoal. Seu objetivo é ajudar o usuário a controlar a exposição a conteúdos e domínios indesejados durante a navegação.

**Posicionamento:** autonomia digital, privacidade e navegação mais segura.

**Mensagem da marca:** “Seu espaço digital, sob seu controle.”

**Slogan internacional:** “Your digital space. Your rules.”

O Noryx não deve ser apresentado como uma solução capaz de bloquear absolutamente todo conteúdo da internet. A comunicação precisa explicar os limites técnicos de filtros DNS e das permissões do Android.

## 2. Público e plataforma

- **Público:** pessoas que desejam controlar o próprio acesso a conteúdos indesejados.
- **Plataforma inicial:** Android.
- **Estilo visual:** premium, minimalista e tecnológico.
- **Direção do nome:** internacional, curto e inventado.
- **Nome:** Noryx, provisório até a verificação de marcas, domínios e identificadores nas lojas.

## 3. Identidade visual

### Personalidade

- Moderna e tecnológica.
- Discreta e confiável.
- Não infantilizada e sem linguagem alarmista.
- Focada em autonomia e privacidade.

### Símbolo e tipografia

- Símbolo sugerido: escudo geométrico com a letra “N”.
- Ícone do aplicativo: símbolo isolado, sem o nome.
- Tipografia: Inter.
- Ícones: Lucide.

### Paleta inicial

| Token | Cor | Uso |
|---|---|---|
| Roxo principal | `#7C4DFF` | Ações e elementos de marca |
| Roxo secundário | `#582DE1` | Estados ativos e ênfase |
| Verde | `#22C55E` | Proteção confirmada/sucesso |
| Vermelho | `#EF4444` | Bloqueio/atenção |
| Fundo escuro | `#0B0D17` | Fundo principal |
| Superfície | `#161A2E` | Cards e painéis |
| Texto claro | `#F3F4F6` | Texto no modo escuro |

O modo escuro será a apresentação principal. O modo claro poderá ser adicionado como preferência de aparência.

## 4. Navegação e telas

A navegação principal terá quatro abas:

1. **Início:** estado real da proteção, resumo e indicadores.
2. **Proteção:** categorias, regras e gerenciamento de sites.
3. **Atividade:** histórico e estatísticas locais.
4. **Ajustes:** privacidade, PIN, biometria, aparência e informações do app.

### Funcionalidades planejadas

- Bloqueio por categorias automáticas.
- Listas personalizadas de domínios permitidos e bloqueados.
- Filtro de domínios adultos.
- Bloqueio de domínios de anúncios e rastreadores conhecidos.
- Bloqueio de domínios maliciosos conhecidos.
- Categorias opcionais, como apostas e redes sociais.
- SafeSearch quando suportado pelo mecanismo de busca.
- Histórico local e estatísticas.
- PIN e biometria para proteger alterações.
- Rotinas e horários de proteção em uma etapa posterior.

## 5. Decisões técnicas confirmadas

| Tema | Decisão |
|---|---|
| Bloqueio | Automático por categorias + listas personalizadas |
| Proteção | VPN local no próprio Android |
| Armazenamento | Local no dispositivo |
| Conta | Não necessária no MVP |
| Sincronização | Fora do MVP; poderá ser opcional no futuro |
| Plataforma | Android primeiro |

“VPN local” significa que o aplicativo usa a API `VpnService` para criar uma interface de rede no dispositivo. Não significa que haverá um servidor VPN remoto próprio.

Mesmo com armazenamento local, o processamento DNS pode envolver um resolvedor externo. A escolha e a configuração desse resolvedor precisam ser documentadas, pois consultas DNS podem revelar domínios acessados.

## 6. Arquitetura técnica

### Camada de interface

- React Native.
- TypeScript.
- Expo com Development Build e módulos nativos.
- Expo Router.
- Zustand para estado de interface.
- Zod para validação.
- SQLite para regras, preferências e histórico.
- SecureStore para pequenos segredos locais, nunca para armazenar PIN em texto puro.

Expo Go não é suficiente para desenvolver e testar o módulo Kotlin personalizado.

### Camada nativa Android

Módulo Kotlin responsável por:

- Solicitar autorização VPN com `VpnService.prepare`.
- Iniciar e encerrar o serviço por ação explícita do usuário.
- Manter notificação persistente enquanto a VPN estiver ativa.
- Criar e fechar a interface TUN.
- Processar pacotes sem bloquear a thread principal.
- Interpretar consultas DNS com validação.
- Aplicar regras automáticas e personalizadas.
- Encaminhar consultas permitidas a um resolvedor configurado.
- Tratar revogação, troca de rede e encerramento do serviço.
- Reportar ao React Native o estado real do serviço.

### Persistência local sugerida

Tabelas SQLite:

- `categorias`: identificador, nome, ativa e origem.
- `regras_dominio`: domínio normalizado, ação, origem e data de criação.
- `eventos_bloqueio`: categoria, domínio minimizado ou hash e data.
- `preferencias`: chave e valor.

Regras de privacidade:

- Não armazenar conteúdo de páginas.
- Não armazenar termos pesquisados.
- Minimizar dados de domínio no histórico.
- Definir retenção limitada e opção para apagar o histórico.
- Validar e normalizar domínios antes de salvar regras.

## 7. Limitações técnicas que devem ser consideradas

- DNS bloqueia domínios, não elementos individuais de páginas.
- Anúncios servidos pelo mesmo domínio do conteúdo podem não ser bloqueados.
- SafeSearch depende do suporte do mecanismo de busca e não permite interceptar livremente todo conteúdo HTTPS.
- DNS over HTTPS (DoH), DNS over TLS (DoT), DNS privado do Android e caminhos alternativos podem reduzir a cobertura do filtro.
- IPv4, IPv6, UDP, TCP, troca de rede e coexistência com outros serviços VPN precisam ser testados.
- Um serviço VPN local precisa encaminhar corretamente o tráfego capturado; capturar pacotes sem encaminhamento funcional interrompe a conectividade.
- Não declarar “proteção ativa” até o serviço confirmar o túnel operacional e os testes de tráfego passarem.

## 8. Escopo do MVP

### Essencial

- Ativar e desativar proteção.
- Categorias de bloqueio.
- Regras personalizadas para permitir e bloquear domínios.
- Bloqueio de domínios adultos conhecidos.
- Bloqueio de domínios maliciosos conhecidos.
- Bloqueio de domínios conhecidos de anúncios/rastreadores.
- Persistência local.
- Estado real do serviço Android.

### Depois do núcleo funcional

- Histórico e estatísticas.
- PIN e biometria.
- Rotinas programadas.
- Backup e sincronização opcional.
- Conta e recursos de nuvem, se houver justificativa.

## 9. Roadmap de desenvolvimento

1. **Fundação visual:** design system, navegação e componentes.
2. **Persistência:** SQLite, preferências, categorias e regras.
3. **Módulo Kotlin:** integração React Native e autorização VPN.
4. **Serviço VPN:** ciclo de vida, foreground service e interface TUN.
5. **Motor DNS:** parser, encaminhamento, cache e aplicação de regras.
6. **Integração:** estado real, eventos e telas.
7. **Testes:** conectividade, IPv4/IPv6, UDP/TCP, DoH/DoT, DNS privado, bateria e estabilidade.
8. **Publicação:** revisão de privacidade, permissões e políticas do Google Play.

## 10. Estado atual da implementação

A fundação inicial contém:

- Estrutura React Native com Expo Router.
- Quatro abas de navegação.
- Tokens de identidade visual.
- Telas iniciais de Início, Proteção, Atividade e Ajustes.
- Store Zustand para preferências de categorias.
- Contrato inicial para o serviço de proteção.
- Documentação inicial da integração Android.

**Ainda não implementado:** `VpnService`, interface TUN, parser DNS, encaminhamento de pacotes, listas de bloqueio funcionais e histórico real. Os dados demonstrativos da interface não representam bloqueios reais.

## 11. Critério de conclusão do primeiro marco técnico

O primeiro marco estará concluído quando:

1. O Android solicitar e receber o consentimento VPN.
2. O serviço local iniciar e reportar seu estado real.
3. Uma consulta DNS de domínio incluído na lista de bloqueio for bloqueada.
4. Uma consulta DNS permitida for resolvida corretamente.
5. O tráfego normal continuar funcionando após iniciar e encerrar o serviço.
6. A interface mostrar proteção ativa somente quando o serviço estiver realmente operacional.
7. O comportamento for validado em testes de rede documentados.

---

**Princípio de engenharia do Noryx:** priorizar privacidade, transparência e proteção verificável. Não apresentar indicadores simulados como resultados reais e não prometer bloqueio absoluto.
