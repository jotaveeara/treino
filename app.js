/* =========================================================
   PROJETO PATROLA — dados do treino + lógica do app
   Os dados dos treinos ficam salvos no navegador (localStorage),
   por isso o histórico é local a cada celular/navegador.
========================================================= */

const DIAS_SEMANA = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const DIAS_ABREVIADOS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const ORDEM_SEMANA = [1, 2, 3, 4, 5, 6, 0];

let diaSelecionado = new Date().getDay();

const TREINOS = {
  1: { // Segunda
    foco: 'Costas, Peito, Bíceps e Tríceps',
    grupos: [
      { nome: 'Costas', exercicios: [
        { id: 'seg-remada-articulada', nome: 'Remada articulada', alvo: '4×12' },
        { id: 'seg-remada-curvada', nome: 'Remada curvada', alvo: '4×12' },
      ]},
      { nome: 'Peito', exercicios: [
        { id: 'seg-supino-inclinado-halteres', nome: 'Supino inclinado com halteres', alvo: '5×10' },
        { id: 'seg-supino-reto-maquina', nome: 'Supino reto máquina', alvo: '5×12' },
        { id: 'seg-voador', nome: 'Voador', alvo: '5×13' },
        { id: 'seg-crossover-inferior', nome: 'Cross over inferior', alvo: '5×12' },
      ]},
      { nome: 'Bíceps e Tríceps', exercicios: [
        { id: 'seg-triceps-polia-cross', nome: 'Tríceps na polia (cross)', alvo: '4×10' },
        { id: 'seg-triceps-corda-cross', nome: 'Tríceps corda (cross)', alvo: '4×10' },
        { id: 'seg-martelo', nome: 'Rosca martelo', alvo: '4×10' },
        { id: 'seg-rosca-alternada', nome: 'Rosca alternada', alvo: '4×10' },
      ]},
    ],
    cardio: '25 minutos',
  },
  2: { // Terça
    foco: 'Quadríceps com Posterior',
    grupos: [
      { nome: 'Pernas', exercicios: [
        { id: 'ter-mesa-flexora', nome: 'Mesa flexora', alvo: '5×15' },
        { id: 'ter-cadeira-extensora', nome: 'Cadeira extensora', alvo: '5×15' },
        { id: 'ter-leg-press-45', nome: 'Leg press 45°', alvo: '4×12' },
        { id: 'ter-agachamento-livre', nome: 'Agachamento livre', alvo: '4×12' },
        { id: 'ter-cadeira-adutora', nome: 'Cadeira adutora', alvo: '4×12' },
        { id: 'ter-panturrilha-horizontal', nome: 'Panturrilha no leg horizontal', alvo: '4×15' },
      ]},
    ],
    cardio: '25 minutos',
  },
  3: { // Quarta
    foco: 'Costas, Tríceps e Bíceps',
    grupos: [
      { nome: 'Costas', exercicios: [
        { id: 'qua-puxador-alto-frente', nome: 'Puxador alto pela frente', alvo: '6×15' },
        { id: 'qua-remada-baixa', nome: 'Remada baixa', alvo: '5×12' },
        { id: 'qua-pull-down', nome: 'Pull down', alvo: '5×12' },
        { id: 'qua-serrote', nome: 'Serrote', alvo: '4×10-12' },
        { id: 'qua-terra-lombar', nome: 'Terra lombar', alvo: '4×10' },
      ]},
      { nome: 'Tríceps e Bíceps', exercicios: [
        { id: 'qua-scott-maquina', nome: 'Scott máquina', alvo: '4×12' },
        { id: 'qua-rosca-direta-barra', nome: 'Rosca direta na barra', alvo: '4×12' },
        { id: 'qua-polia-barra-reta', nome: 'Polia barra reta', alvo: '4×12' },
        { id: 'qua-rosca-concentrada', nome: 'Rosca concentrada', alvo: '4×12' },
      ]},
    ],
    cardio: '25 minutos',
  },
  4: { // Quinta
    foco: 'Descanso',
    grupos: [],
    cardio: '1 hora',
    descanso: true,
  },
  5: { // Sexta
    foco: 'Posterior de Perna com Quadríceps',
    grupos: [
      { nome: 'Pernas', exercicios: [
        { id: 'sex-cadeira-adutora', nome: 'Cadeira adutora', alvo: '4×12' },
        { id: 'sex-cadeira-flexora', nome: 'Cadeira flexora', alvo: '4×12' },
        { id: 'sex-agachamento-guiado', nome: 'Agachamento guiado ou livre', alvo: '4×12' },
        { id: 'sex-elevacao-pelvica', nome: 'Elevação pélvica', alvo: '4×12' },
        { id: 'sex-cadeira-abdutora', nome: 'Cadeira abdutora', alvo: '4×12' },
        { id: 'sex-agachamento-hack-smith', nome: 'Agachamento no hack ou smith', alvo: '5×15' },
      ]},
    ],
    cardio: null,
  },
  6: { // Sábado
    foco: 'Ombro e Costas',
    grupos: [
      { nome: 'Ombro', exercicios: [
        { id: 'sab-desenvolvimento-maquina', nome: 'Desenvolvimento máquina', alvo: '4×12' },
        { id: 'sab-elevacao-lateral', nome: 'Elevação lateral', alvo: '3×12' },
        { id: 'sab-elevacao-frontal', nome: 'Elevação frontal', alvo: '4×12' },
        { id: 'sab-crucifixo-invertido', nome: 'Crucifixo invertido com halteres (2 cargas)', alvo: '4×12' },
        { id: 'sab-encolhimento-barra', nome: 'Encolhimento com barra', alvo: '4×12' },
        { id: 'sab-banco-romano', nome: 'Banco romano', alvo: '4×15' },
      ]},
      { nome: 'Costas', exercicios: [
        { id: 'sab-puxador-alto-articulado', nome: 'Puxador alto articulado', alvo: '4×12' },
        { id: 'sab-serrote-sabado', nome: 'Serrote', alvo: '4×12' },
      ]},
    ],
    cardio: null,
  },
  0: { // Domingo
    foco: 'Descanso',
    grupos: [],
    cardio: null,
    descanso: true,
  },
};

const CHAVE_HISTORICO = 'treinoPedro_historico_v1';

/* ---------- Persistência ---------- */

function carregarHistorico() {
  try {
    const bruto = localStorage.getItem(CHAVE_HISTORICO);
    return bruto ? JSON.parse(bruto) : {};
  } catch (e) {
    return {};
  }
}

function salvarHistorico(historico) {
  localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico));
}

function registrarSerie(exercicioId, series) {
  const historico = carregarHistorico();
  if (!historico[exercicioId]) historico[exercicioId] = [];
  const hoje = new Date();
  const dataISO = hoje.toISOString().slice(0, 10);

  const listaExistente = historico[exercicioId];
  const indiceHoje = listaExistente.findIndex((registro) => registro.data === dataISO);
  const registro = { data: dataISO, series };

  if (indiceHoje >= 0) {
    listaExistente[indiceHoje] = registro;
  } else {
    listaExistente.push(registro);
  }
  historico[exercicioId] = listaExistente;
  salvarHistorico(historico);
}

function ultimoRegistro(exercicioId) {
  const historico = carregarHistorico();
  const lista = historico[exercicioId];
  if (!lista || lista.length === 0) return null;
  return lista[lista.length - 1];
}

/* ---------- Utilidades ---------- */

function parseNumeroSeries(alvo) {
  const match = alvo.match(/^(\d+)×/);
  return match ? parseInt(match[1], 10) : 3;
}

function formatarDataCurta(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano.slice(2)}`;
}

function mostrarToast(mensagem) {
  const toast = document.getElementById('toast');
  toast.textContent = mensagem;
  toast.classList.add('is-visible');
  clearTimeout(mostrarToast._timer);
  mostrarToast._timer = setTimeout(() => toast.classList.remove('is-visible'), 1800);
}

/* ---------- Renderização: ABA HOJE ---------- */

function renderSeletorDia() {
  const hojeReal = new Date().getDay();
  const container = document.getElementById('seletorDia');
  container.innerHTML = '';

  ORDEM_SEMANA.forEach((diaIndex) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'seletor-dia__botao';
    if (diaIndex === hojeReal) botao.classList.add('is-real-hoje');
    if (diaIndex === diaSelecionado) botao.classList.add('is-selecionado');
    botao.textContent = DIAS_ABREVIADOS[diaIndex];
    botao.addEventListener('click', () => {
      diaSelecionado = diaIndex;
      renderHoje();
    });
    container.appendChild(botao);
  });
}

function renderHoje() {
  const hoje = new Date();
  const hojeReal = hoje.getDay();
  const treino = TREINOS[diaSelecionado];

  renderSeletorDia();

  const diaLabel = document.getElementById('diaLabel');
  diaLabel.textContent = diaSelecionado === hojeReal ? 'Hoje é' : 'Treino escolhido:';

  document.getElementById('diaNome').textContent = DIAS_SEMANA[diaSelecionado];
  document.getElementById('diaFoco').textContent = treino.foco;

  const dataAtual = document.getElementById('dataAtual');
  dataAtual.textContent = hoje.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  const lista = document.getElementById('listaExercicios');
  lista.innerHTML = '';

  treino.grupos.forEach((grupo) => {
    const grupoEl = document.createElement('div');
    grupoEl.className = 'grupo';

    const titulo = document.createElement('h3');
    titulo.className = 'grupo__titulo';
    titulo.textContent = grupo.nome;
    grupoEl.appendChild(titulo);

    grupo.exercicios.forEach((ex) => {
      grupoEl.appendChild(criarCardExercicio(ex));
    });

    lista.appendChild(grupoEl);
  });

  const cardioBloco = document.getElementById('cardioBloco');
  const cardioTexto = document.getElementById('cardioTexto');
  if (treino.cardio) {
    cardioBloco.hidden = false;
    cardioTexto.textContent = treino.cardio;
  } else {
    cardioBloco.hidden = true;
  }

  document.getElementById('descansoBloco').hidden = !treino.descanso;
}

function criarCardExercicio(ex) {
  const numSeries = parseNumeroSeries(ex.alvo);
  const registro = ultimoRegistro(ex.id);

  const card = document.createElement('div');
  card.className = 'exercicio';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'exercicio__cabecalho';
  cabecalho.innerHTML = `
    <div>
      <p class="exercicio__nome">${ex.nome}</p>
      <div class="exercicio__meta">
        <span class="exercicio__alvo">Alvo: ${ex.alvo}</span>
        ${registro ? `<span class="exercicio__ultimo">Último em ${formatarDataCurta(registro.data)}</span>` : ''}
      </div>
    </div>
  `;
  card.appendChild(cabecalho);

  const tabela = document.createElement('div');
  tabela.className = 'series-tabela';
  tabela.dataset.exercicioId = ex.id;

  const seriesIniciais = registro ? registro.series : [];
  const totalLinhas = Math.max(numSeries, seriesIniciais.length);

  for (let i = 0; i < totalLinhas; i++) {
    tabela.appendChild(criarLinhaSerie(i + 1, seriesIniciais[i]));
  }

  card.appendChild(tabela);

  const acoes = document.createElement('div');
  acoes.className = 'exercicio__acoes';

  const btnMaisSerie = document.createElement('button');
  btnMaisSerie.type = 'button';
  btnMaisSerie.className = 'btn-serie';
  btnMaisSerie.textContent = '+ série';
  btnMaisSerie.addEventListener('click', () => {
    const proximoNumero = tabela.children.length + 1;
    tabela.appendChild(criarLinhaSerie(proximoNumero));
  });

  const btnSalvar = document.createElement('button');
  btnSalvar.type = 'button';
  btnSalvar.className = 'btn-salvar';
  btnSalvar.textContent = 'Salvar';
  btnSalvar.addEventListener('click', () => {
    const linhas = Array.from(tabela.querySelectorAll('.serie-linha'));
    const series = linhas
      .map((linha) => {
        const peso = linha.querySelector('.input-peso').value.trim();
        const reps = linha.querySelector('.input-reps').value.trim();
        return { peso, reps };
      })
      .filter((s) => s.peso !== '' || s.reps !== '');

    if (series.length === 0) {
      mostrarToast('Preencha ao menos uma série');
      return;
    }

    registrarSerie(ex.id, series);
    mostrarToast('Treino salvo!');
    const novoUltimo = cabecalho.querySelector('.exercicio__ultimo');
    const textoNovo = `Último em ${formatarDataCurta(new Date().toISOString().slice(0, 10))}`;
    if (novoUltimo) {
      novoUltimo.textContent = textoNovo;
    } else {
      cabecalho.querySelector('.exercicio__meta').insertAdjacentHTML('beforeend', `<span class="exercicio__ultimo">${textoNovo}</span>`);
    }
  });

  acoes.appendChild(btnMaisSerie);
  acoes.appendChild(btnSalvar);
  card.appendChild(acoes);

  return card;
}

function criarLinhaSerie(numero, valoresExistentes) {
  const linha = document.createElement('div');
  linha.className = 'serie-linha';
  linha.innerHTML = `
    <span class="serie-linha__numero">${numero}</span>
    <input class="input-peso" type="number" inputmode="decimal" placeholder="kg" step="0.5" value="${valoresExistentes ? valoresExistentes.peso : ''}">
    <input class="input-reps" type="number" inputmode="numeric" placeholder="reps" value="${valoresExistentes ? valoresExistentes.reps : ''}">
  `;
  return linha;
}

/* ---------- Renderização: ABA SEMANA ---------- */

function renderSemana() {
  const hoje = new Date().getDay();
  const lista = document.getElementById('listaSemana');
  lista.innerHTML = '';

  const ordem = [1, 2, 3, 4, 5, 6, 0];

  ordem.forEach((diaIndex) => {
    const treino = TREINOS[diaIndex];
    const card = document.createElement('div');
    card.className = 'semana-card' + (diaIndex === hoje ? ' is-hoje' : '');

    const totalExercicios = treino.grupos.reduce((soma, g) => soma + g.exercicios.length, 0);
    const extra = treino.descanso
      ? (treino.cardio ? `Cardio ${treino.cardio}` : 'Sem treino de musculação')
      : `${totalExercicios} exercícios${treino.cardio ? ' · cardio ' + treino.cardio : ''}`;

    card.innerHTML = `
      <span class="semana-card__dia">${DIAS_SEMANA[diaIndex].split('-')[0]}</span>
      <div class="semana-card__info">
        <p class="semana-card__foco">${treino.foco}</p>
        <p class="semana-card__extra">${extra}</p>
      </div>
    `;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      diaSelecionado = diaIndex;
      trocarAba('hoje');
    });
    lista.appendChild(card);
  });
}

/* ---------- Renderização: ABA PROGRESSO ---------- */

function listaTodosExercicios() {
  const todos = [];
  Object.values(TREINOS).forEach((treino) => {
    treino.grupos.forEach((grupo) => {
      grupo.exercicios.forEach((ex) => {
        if (!todos.find((e) => e.id === ex.id)) todos.push(ex);
      });
    });
  });
  return todos;
}

function renderProgresso() {
  const seletor = document.getElementById('seletorExercicio');
  const todos = listaTodosExercicios();

  if (seletor.dataset.preenchido !== 'true') {
    seletor.innerHTML = todos.map((ex) => `<option value="${ex.id}">${ex.nome}</option>`).join('');
    seletor.dataset.preenchido = 'true';
    seletor.addEventListener('change', () => renderGraficoProgresso(seletor.value));
  }

  const idAtual = seletor.value || (todos[0] && todos[0].id);
  if (idAtual) renderGraficoProgresso(idAtual);
}

function renderGraficoProgresso(exercicioId) {
  const container = document.getElementById('progressoConteudo');
  const historico = carregarHistorico();
  const registros = historico[exercicioId] || [];

  if (registros.length === 0) {
    container.innerHTML = '<p class="progresso-vazio">Ainda não há registros salvos para este exercício.<br>Vá até a aba Hoje e registre sua primeira série.</p>';
    return;
  }

  const registrosOrdenados = [...registros].sort((a, b) => a.data.localeCompare(b.data));

  const pesoMaximoPorRegistro = registrosOrdenados.map((r) => {
    const pesos = r.series.map((s) => parseFloat(s.peso)).filter((n) => !isNaN(n));
    return pesos.length ? Math.max(...pesos) : 0;
  });

  const recorde = Math.max(...pesoMaximoPorRegistro, 0);

  let svg = '';
  if (registrosOrdenados.length >= 2) {
    svg = construirSvgProgresso(pesoMaximoPorRegistro);
  }

  const historicoHtml = [...registrosOrdenados].reverse().map((r) => {
    const seriesTexto = r.series.map((s) => `${s.peso || '-'}kg×${s.reps || '-'}`).join(' · ');
    return `
      <div class="hist-item">
        <span class="hist-item__data">${formatarDataCurta(r.data)}</span>
        <span class="hist-item__series">${seriesTexto}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="progresso-grafico">
      <div class="progresso-grafico__topo">
        <span class="progresso-grafico__max">${recorde}kg</span>
        <span class="progresso-grafico__label">maior carga registrada</span>
      </div>
      ${svg}
    </div>
    <div class="progresso-historico">${historicoHtml}</div>
  `;
}

function construirSvgProgresso(valores) {
  const largura = 500;
  const altura = 100;
  const min = Math.min(...valores);
  const max = Math.max(...valores);
  const faixa = max - min || 1;
  const passoX = largura / (valores.length - 1);

  const pontos = valores.map((v, i) => {
    const x = i * passoX;
    const y = altura - ((v - min) / faixa) * (altura - 16) - 8;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const pontosStr = pontos.join(' ');
  const circulos = pontos.map((p) => {
    const [x, y] = p.split(',');
    return `<circle cx="${x}" cy="${y}" r="4" fill="#ff6a1a" />`;
  }).join('');

  return `
    <svg viewBox="0 0 ${largura} ${altura}" width="100%" height="${altura}" preserveAspectRatio="none" style="margin-top:8px;">
      <polyline points="${pontosStr}" fill="none" stroke="#ff6a1a" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
      ${circulos}
    </svg>
  `;
}

/* ---------- Navegação por abas ---------- */

function trocarAba(nomeAba) {
  document.querySelectorAll('.view').forEach((view) => { view.hidden = true; });
  document.getElementById(`view-${nomeAba}`).hidden = false;

  document.querySelectorAll('.tabbar__item').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.view === nomeAba);
  });

  if (nomeAba === 'semana') renderSemana();
  if (nomeAba === 'progresso') renderProgresso();
}

document.querySelectorAll('.tabbar__item').forEach((btn) => {
  btn.addEventListener('click', () => trocarAba(btn.dataset.view));
});

/* ---------- Inicialização ---------- */

renderHoje();
