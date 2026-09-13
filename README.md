# Projeto Patrola

App de academia feito sob medida com o treino da planilha do Pedro. Mostra o treino do dia automaticamente, deixa trocar qual treino está sendo visto (por exemplo, fazer o treino de quinta no sábado se faltou naquele dia), registra peso e repetições de cada série e guarda o histórico no próprio celular para acompanhar o progresso.

## Como colocar no GitHub (igual ao repositório de exemplo)

1. Crie um repositório novo no GitHub, por exemplo `projeto-patrola`.
2. Envie os arquivos desta pasta (`index.html`, `style.css`, `app.js`, `manifest.json`, `icon.svg`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Em alguns minutos o GitHub mostra o link do site, algo como:
   `https://SEU-USUARIO.github.io/projeto-patrola/`
6. Abra esse link no celular. No Chrome/Safari, use "Adicionar à tela inicial" para ele funcionar como um aplicativo.

## Como funciona

- **Aba Hoje**: mostra automaticamente o treino do dia da semana atual. Tem uma fileira de botões (Seg, Ter, Qua...) no topo para trocar manualmente qual treino está sendo exibido — útil se faltou um dia e quer compensar em outro: por exemplo, faltou na quinta e quer fazer aquele treino no sábado, é só tocar em "Qui" mesmo estando no sábado. O botão do dia real da semana fica com um contorno mais claro para você sempre saber em que dia está de verdade. Para cada exercício dá pra preencher o peso (kg) e as repetições de cada série e apertar **Salvar**. É possível adicionar mais séries com o botão **+ série**.
- **Aba Semana**: visão geral de todos os dias da semana, com o dia atual destacado em laranja. Tocar em qualquer dia já abre o treino dele na aba Hoje.
- **Aba Progresso**: escolha um exercício e veja o histórico de todos os treinos salvos, incluindo a maior carga já registrada e um gráfico simples da evolução.

## Onde ficam os dados

Tudo é salvo com `localStorage`, direto no navegador do celular — não depende de internet nem de login. Isso quer dizer que o histórico fica **naquele aparelho/navegador específico**; se abrir em outro celular ou limpar os dados do navegador, o histórico não aparece junto.

## Atualizar o treino no futuro

Os exercícios de cada dia estão no arquivo `app.js`, dentro do objeto `TREINOS`. Cada dia da semana (0 = domingo, 1 = segunda... 6 = sábado) tem uma lista de grupos musculares e exercícios com o alvo de séries×repetições. Basta editar esse arquivo e subir a alteração para o GitHub para o site atualizar.
