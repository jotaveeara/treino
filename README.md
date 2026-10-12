# Projeto Patrola — versão 2

Aplicativo de treino responsivo em preto e vermelho. HTML, CSS e JavaScript sem build, pronto para GitHub Pages na raiz de `main`.

## Uso

- Informe o nome no primeiro acesso. A saudação acompanha o relógio local.
- A ficha fornecida contém 31 exercícios: A segunda (6), B terça (6), C quarta (7), D quinta (5), E sexta (7). Todos têm 4 séries, com as repetições da ficha original. Os dois exercícios com duas cargas têm dois campos de peso.
- Abra o treino do dia ou escolha outro pela aba Minha ficha. Sem treino programado no sábado e domingo por padrão.
- Informe carga opcional e repetições em cada linha. Toque em Finalizar série para registrar; toque novamente para desfazer. Todas as séries concluídas finalizam o treino automaticamente.
- Descanso é opcional e começa desativado, pois a ficha não fornece intervalos. Ative pela tela do treino. O contador usa tempo absoluto; notificações em segundo plano não são garantidas.
- Minha ficha permite criar, editar, excluir e reordenar exercícios, definir séries/repetições e associar o treino a um dia. Ao ocupar um dia existente, o treino anterior fica sem dia fixo, após confirmação.
- Uma sessão por treino por data local. A sessão começa em Iniciar ou ao registrar uma série/carga. Ela guarda uma cópia da ficha para que edições posteriores não alterem o histórico. Edições afetam sessões ainda não iniciadas.
- Histórico reúne séries concluídas e permite consultar registros do aplicativo anterior.
- Perfil permite exportar/importar backup JSON e alterar o nome. Importar substitui os registros da versão 2 após confirmação.

## Dados e offline

Os dados ficam em `localStorage`, chave `patrola_v2`, no aparelho/navegador. Não há conta, servidor ou sincronização entre aparelhos. A chave antiga `treinoPedro_historico_v1` é preservada e pode ser consultada. Exporte antes de limpar o navegador ou trocar de aparelho.

O service worker armazena o aplicativo após a primeira visita online para abertura offline. Fontes externas têm fallback local. Instalação e cache dependem do navegador; o Safari oferece Adicionar à Tela de Início. Ao atualizar o app, feche e reabra as abas se necessário.

## Publicação e verificação

GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root). Não requer dependências ou build.

Validação de sintaxe: `node --check app.js` e `node --check sw.js`.
Não há vínculo com a Rivlo; a experiência de acompanhamento série a série foi usada como referência funcional.
