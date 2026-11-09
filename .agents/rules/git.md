# Git e commits

## Conventional Commits

- Todo novo commit deve seguir o formato `tipo(escopo opcional): descrição`.
- Usar tipos em inglês: `feat`, `fix`, `refactor`, `docs`, `test`, `style`, `perf`, `build`, `ci`, `chore` ou `revert`.
- Escrever uma descrição curta, objetiva e em português, indicando a mudança realizada. Preferir título de até 72 caracteres, sem ponto final.
- Usar escopo quando ajudar a identificar a área: `protecao`, `navegacao`, `estilos`, `expo`, `agents` ou `persistencia`.
- `feat` adiciona comportamento; `fix` corrige defeito; `refactor` reorganiza sem mudar comportamento; `style` trata apenas formatação de código. Mudanças visuais funcionais devem usar o tipo apropriado, não `style` automaticamente.
- Mudanças incompatíveis devem ser sinalizadas com `!` após tipo/escopo e explicadas no rodapé `BREAKING CHANGE:`. Não marcar incompatibilidade sem uma quebra real de contrato.
- Exemplos: `feat(protecao): adicionar lista de dominios bloqueados`, `fix(navegacao): corrigir retorno para a tela inicial`, `docs(agents): definir regras de commits`.

## Commits pequenos e coesos

- Fazer um commit por pequena funcionalidade, correção ou objetivo técnico concluído. Separar mudanças independentes, mesmo que tenham sido feitas na mesma sessão.
- Não acumular funcionalidades, refatorações, formatação e documentação sem relação em um único commit genérico.
- Agrupar somente arquivos necessários à mesma mudança lógica. Não impor um limite arbitrário de arquivos nem fragmentar uma funcionalidade por arquivo: código, testes, configuração e lockfile relacionados podem pertencer ao mesmo commit.
- Cada commit deve ser compreensível, revisável e reversível isoladamente. Organizar commits dependentes em ordem e evitar estados intermediários quebrados.
- Antes de commitar, conferir `git status`, selecionar caminhos ou trechos explicitamente e revisar `git diff --cached`. Não incluir alterações alheias à tarefa nem usar `git add .` sem revisar todo o conteúdo.
- Executar as verificações relevantes e informar limitações reais. Não commitar segredos, `.env` privados, `node_modules`, builds ou arquivos locais gerados.
- Ao implementar trabalho autorizado, registrar as unidades concluídas em commits conforme estas regras. Se uma alteração não puder ser validada ou incluída com segurança, explicar o que ficou pendente.
- Não reescrever commits existentes, fazer amend, descartar mudanças ou realizar push forçado sem autorização específica. A regra vale para novos commits; o commit inicial criado automaticamente pelo Expo é histórico e deve ser preservado.
- A branch principal deste repositório é `main`. Criar um repositório local não autoriza criar/publicar um remoto nem enviar commits a terceiros.
