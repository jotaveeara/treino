# Treino do Pedro

App de academia feito sob medida com o treino da planilha do Pedro. Mostra o treino do dia automaticamente, deixa registrar peso e repetições de cada série, e guarda o histórico no próprio celular para acompanhar o progresso.

## Como colocar no GitHub (igual ao repositório de exemplo)

1. Crie um repositório novo no GitHub, por exemplo `treino-pedro`.
2. Envie os arquivos desta pasta (`index.html`, `style.css`, `app.js`, `manifest.json`, `icon.svg`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Em alguns minutos o GitHub mostra o link do site, algo como:
   `https://SEU-USUARIO.github.io/treino-pedro/`
6. Abra esse link no celular. No Chrome/Safari, use "Adicionar à tela inicial" para ele funcionar como um aplicativo.

## Como funciona

- **Aba Hoje**: mostra automaticamente o treino do dia da semana (segunda a sábado, com domingo como descanso). Para cada exercício dá pra preencher o peso (kg) e as repetições de cada série e apertar **Salvar**. É possível adicionar mais séries com o botão **+ série**.
- **Aba Semana**: visão geral de todos os dias da semana, com o dia atual destacado em laranja.
- **Aba Progresso**: escolha um exercício e veja o histórico de todos os treinos salvos, incluindo a maior carga já registrada e um gráfico simples da evolução.

## Onde ficam os dados

Tudo é salvo com `localStorage`, direto no navegador do celular — não depende de internet nem de login. Isso quer dizer que o histórico fica **naquele aparelho/navegador específico**; se abrir em outro celular ou limpar os dados do navegador, o histórico não aparece junto.

## Atualizar o treino no futuro

Os exercícios de cada dia estão no arquivo `app.js`, dentro do objeto `TREINOS`. Cada dia da semana (0 = domingo, 1 = segunda... 6 = sábado) tem uma lista de grupos musculares e exercícios com o alvo de séries×repetições. Basta editar esse arquivo e subir a alteração para o GitHub para o site atualizar.
