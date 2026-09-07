/* ============================================================
   Lia Aprova ♥  motor da aplicação
   Aula em micro-passos, missões de questão (objetiva ou
   dissertativa), quiz, prática com questões reais e progresso
   salvo em progresso.json pelo server.py.
   ============================================================ */

window.MODULOS = window.MODULOS || [];
const CFG = Object.assign({ provas: [], grupos: [], cronograma: {}, subtitulo: '' }, window.CONFIG || {});

let P = { modulos: {}, respostas: {}, auto: {} };
let telaAtual = 'home';

// ---------- utilidades ----------

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function textoCurto(html, n) {
  const t = String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n).trim() + '...' : t;
}

function dias(iso) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.round((new Date(iso + 'T00:00:00') - hoje) / 86400000);
}

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const DIAS_SEMANA = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

function fmtData(iso) { const p = iso.split('-'); return p[2] + '/' + p[1]; }
function fmtDataLonga(iso) { const p = iso.split('-'); return parseInt(p[2], 10) + ' de ' + MESES[parseInt(p[1], 10) - 1] + ' de ' + p[0]; }

const FRASES = [
  'Arrasou, Lia!', 'Isso aí, mais um passinho.', 'Orgulho de você!', 'Você é incrível, continue assim.',
  'Cada questão te deixa mais perto da aprovação.', 'Mandou muito bem!', 'Brilhou!', 'Que capricho, Lia!',
  'Uau, acertou de primeira!', 'Continue assim, futura universitária!',
];
function frase() { return FRASES[Math.floor(Math.random() * FRASES.length)] + ' ♥'; }

function saudacaoHora() {
  const h = new Date().getHours();
  return h < 12 ? 'Bom dia' : (h < 18 ? 'Boa tarde' : 'Boa noite');
}

// ---------- progresso: navegador sempre; servidor local (python3 server.py) quando existir ----------

const CHAVE_LOCAL = 'liaAprova.progresso';
let modoLocal = false; // true quando o servidor Python está respondendo (uso no PC do Carlos)

function lerNavegador() {
  try { const t = localStorage.getItem(CHAVE_LOCAL); return t ? JSON.parse(t) : null; } catch (e) { return null; }
}

function gravarNavegador() {
  try { localStorage.setItem(CHAVE_LOCAL, JSON.stringify(P)); } catch (e) { /* modo privado ou sem espaço */ }
}

function pontosProgresso(d) {
  if (!d || !d.modulos) return 0;
  let n = 0;
  Object.keys(d.modulos).forEach(k => {
    const e = d.modulos[k] || {};
    n += (e.passo || 0) + (e.quizMelhor || 0) + Object.keys(e.exFeitos || {}).length + Object.keys(e.misFeitas || {}).length;
  });
  return n;
}

async function carregarProgresso() {
  const doNavegador = lerNavegador();
  let doServidor = null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 1500);
    const r = await fetch('api/progresso', { signal: ctrl.signal, cache: 'no-store' });
    clearTimeout(t);
    if (r.ok && (r.headers.get('content-type') || '').indexOf('json') !== -1) {
      doServidor = await r.json();
      modoLocal = true;
    }
  } catch (e) { /* sem servidor: site publicado, progresso só no navegador */ }
  const base = pontosProgresso(doServidor) >= pontosProgresso(doNavegador) ? (doServidor || doNavegador) : doNavegador;
  P = Object.assign({ modulos: {}, respostas: {}, auto: {} }, base || {});
  P.modulos = P.modulos || {};
  P.respostas = P.respostas || {};
  P.auto = P.auto || {};
  gravarNavegador();
}

let salvarTimer = null;
function salvarProgresso() {
  gravarNavegador();
  if (!modoLocal) return;
  clearTimeout(salvarTimer);
  salvarTimer = setTimeout(() => {
    fetch('api/progresso', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(P) }).catch(() => {});
  }, 400);
}

// código de backup: leva o progresso do PC para o celular (e vice-versa) sem precisar de conta
function codificarProgresso() {
  return 'LIA1.' + btoa(unescape(encodeURIComponent(JSON.stringify(P))));
}

function restaurarProgresso(cod) {
  try {
    if (!cod || cod.indexOf('LIA1.') !== 0) return false;
    const dados = JSON.parse(decodeURIComponent(escape(atob(cod.slice(5).replace(/\s+/g, '')))));
    if (!dados || typeof dados !== 'object' || !dados.modulos) return false;
    P = Object.assign({ modulos: {}, respostas: {}, auto: {} }, dados);
    return true;
  } catch (e) { return false; }
}

function estadoModulo(m) {
  P.modulos[m.id] = P.modulos[m.id] || { passo: 0, quizMelhor: null, exFeitos: {}, misFeitas: {} };
  const e = P.modulos[m.id];
  e.exFeitos = e.exFeitos || {};
  e.misFeitas = e.misFeitas || {};
  if (e.quizMelhor === undefined) e.quizMelhor = null;
  return e;
}

function contarFeitas(m, e) { return m.pratica.filter(q => e.exFeitos[q.id]).length; }

function pctModulo(m) {
  const e = estadoModulo(m);
  const partes = [];
  if (m.aula.length) partes.push([0.4, Math.min(1, e.passo / m.aula.length)]);
  if (m.quiz.length) partes.push([0.3, e.quizMelhor === null ? 0 : e.quizMelhor / m.quiz.length]);
  if (m.pratica.length) partes.push([0.3, contarFeitas(m, e) / m.pratica.length]);
  const peso = partes.reduce((s, p) => s + p[0], 0) || 1;
  return Math.round(partes.reduce((s, p) => s + p[0] * p[1], 0) / peso * 100);
}

function proximaEtapa(m) {
  const e = estadoModulo(m);
  if (m.aula.length && e.passo < m.aula.length) {
    return { aba: 'aula', rotulo: e.passo === 0 ? 'Começar a aula' : 'Continuar a aula (passo ' + e.passo + ' de ' + m.aula.length + ')' };
  }
  if (m.quiz.length && (e.quizMelhor === null || e.quizMelhor < m.quiz.length)) {
    return { aba: 'quiz', rotulo: e.quizMelhor === null ? 'Fazer o quiz' : 'Refazer o quiz (melhor: ' + e.quizMelhor + ' de ' + m.quiz.length + ')' };
  }
  const feitas = contarFeitas(m, e);
  if (m.pratica.length && feitas < m.pratica.length) {
    return { aba: 'pratica', rotulo: 'Praticar (' + feitas + ' de ' + m.pratica.length + ' questões)' };
  }
  return { aba: 'aula', rotulo: 'Módulo completo ♥', completo: true };
}

// ---------- corações ----------

function coracoes(pct, n) {
  n = n || 5;
  let h = '<span class="coracoes" title="' + pct + '%">';
  for (let i = 0; i < n; i++) {
    const cheio = Math.max(0, Math.min(1, (pct / 100) * n - i));
    h += '<span class="coracao"><span class="coracao-cheio" style="width:' + Math.round(cheio * 100) + '%">♥</span>♥</span>';
  }
  return h + '</span>';
}

function celebrar(ancora) {
  if (!ancora || !ancora.getBoundingClientRect) return;
  const r = ancora.getBoundingClientRect();
  const simbolos = ['♥', '♡', '♥', '✿', '♥', '✦', '♥'];
  for (let i = 0; i < simbolos.length; i++) {
    const c = el('span', 'coracao-voa', simbolos[i]);
    c.style.left = (r.left + r.width / 2 + (Math.random() - 0.5) * Math.min(160, r.width + 40)) + 'px';
    c.style.top = (r.top + r.height / 2) + 'px';
    c.style.animationDelay = (i * 0.06) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1700);
  }
}

// ---------- navegação ----------

function irPara(tela, aba) {
  telaAtual = tela;
  window.scrollTo(0, 0);
  if (tela === 'home') desenharHome();
  else desenharModulo(tela.slice(4), aba || 'aula');
  desenharTrilha();
}

// ---------- trilha lateral ----------

function desenharTrilha() {
  const nav = document.getElementById('trilha');
  nav.innerHTML = '';
  const grupos = CFG.grupos.length ? CFG.grupos : [{ rotulo: 'Módulos', ids: MODULOS.map(m => m.id) }];
  grupos.forEach(g => {
    const bloco = el('div', 'trilha-bloco');
    bloco.appendChild(el('div', 'trilha-titulo', '<span>' + g.rotulo + '</span>'));
    g.ids.forEach(id => {
      const m = MODULOS.find(x => x.id === id);
      if (!m) return;
      const pct = pctModulo(m);
      const item = el('div', 'trilha-item' + (telaAtual === 'mod:' + id ? ' ativo' : '') + (pct >= 100 ? ' completo' : ''));
      item.innerHTML = '<span class="pino">' + (pct >= 100 ? '♥' : m.icone) + '</span>' +
        '<span class="trilha-nome">' + m.titulo + '</span>' +
        '<span class="trilha-prog">' + coracoes(pct, 3) + '</span>';
      item.onclick = () => irPara('mod:' + id);
      bloco.appendChild(item);
    });
    nav.appendChild(bloco);
  });
  if (telaAtual.indexOf('mod:') === 0) {
    const m = MODULOS.find(x => x.id === telaAtual.slice(4));
    if (m) atualizarAbas(m);
  }
}

function desenharContagem() {
  const alvo = document.getElementById('topo-contagem');
  const proxima = CFG.provas.map(p => ({ p, d: dias(p.data) })).filter(x => x.d >= 0).sort((a, b) => a.d - b.d)[0];
  if (!proxima) { alvo.innerHTML = 'todas as provas já passaram ♥'; return; }
  if (proxima.d === 0) { alvo.innerHTML = '<b>' + proxima.p.nome + '</b> é hoje! Vai com tudo ♥'; return; }
  alvo.innerHTML = 'faltam <b>' + proxima.d + '</b> dia' + (proxima.d === 1 ? '' : 's') + ' para a <b>' + proxima.p.nome + '</b>';
}

// ---------- home ----------

function planoDeHoje() {
  const dia = new Date().getDay();
  const plano = CFG.cronograma[dia] || CFG.cronograma[String(dia)];
  let ids = plano ? (plano.ids || []) : [];
  let tema = plano ? (plano.tema || '') : '';
  let automatico = false;
  if (!ids.length) {
    ids = MODULOS.slice().sort((a, b) => pctModulo(a) - pctModulo(b)).slice(0, 3).map(m => m.id);
    tema = 'Sugestão: os módulos que mais precisam de carinho hoje';
    automatico = true;
  }
  return { tema, automatico, itens: ids.map(id => MODULOS.find(m => m.id === id)).filter(Boolean) };
}

function questoesFeitas() {
  const lista = [];
  MODULOS.forEach(m => {
    const e = estadoModulo(m);
    m.pratica.forEach(q => { if (e.exFeitos[q.id]) lista.push({ m, q }); });
    m.aula.forEach(p => { if (p.t === 'missao' && e.misFeitas[p.id]) lista.push({ m, q: p }); });
  });
  return lista;
}

function revisaoDoDia() {
  const feitas = questoesFeitas();
  if (!feitas.length) return [];
  const hoje = new Date();
  const dia = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000);
  const a = feitas[dia % feitas.length];
  const b = feitas[(dia * 7 + Math.floor(feitas.length / 2) + 1) % feitas.length];
  return a === b ? [a] : [a, b];
}

function desenharHome() {
  const palco = document.getElementById('palco');
  palco.innerHTML = '';
  const hoje = new Date();

  const sauda = el('div', 'saudacao');
  sauda.innerHTML = '<h1>' + saudacaoHora() + ', Lia <span class="coracao-titulo">♥</span></h1>' +
    '<p class="home-sub">' + (CFG.subtitulo || 'Seu cantinho de estudos para a UEL, a UniFil e a Prova Paraná. Um passinho por dia e a aprovação chega.') + '</p>' +
    '<p class="home-data">Hoje é ' + DIAS_SEMANA[hoje.getDay()] + ', ' + hoje.getDate() + ' de ' + MESES[hoje.getMonth()] + '.</p>';
  palco.appendChild(sauda);

  // continuar de onde parou
  if (P.ultimo && P.ultimo.modulo) {
    const m = MODULOS.find(x => x.id === P.ultimo.modulo);
    if (m) {
      const et = proximaEtapa(m);
      if (!et.completo) {
        const c = el('div', 'continuar-card');
        c.innerHTML = '<div><div class="rotulo">Continuar de onde parei</div><div class="continuar-titulo">' + m.icone + ' ' + m.titulo + '</div><div class="continuar-etapa">' + et.rotulo + '</div></div>';
        const b = el('button', 'btn', 'Continuar ♥');
        b.onclick = () => irPara('mod:' + m.id, et.aba);
        c.appendChild(b);
        palco.appendChild(c);
      }
    }
  }

  // contagem regressiva
  palco.appendChild(el('h2', 'home-secao', 'Contagem regressiva'));
  const cartoes = el('div', 'cartoes-prova');
  CFG.provas.forEach((p, i) => {
    const d = dias(p.data);
    const mods = MODULOS.filter(m => (m.provas || []).includes(p.id));
    const pct = mods.length ? Math.round(mods.reduce((s, m) => s + pctModulo(m), 0) / mods.length) : 0;
    const c = el('div', 'cartao-prova tom-' + (p.cor || ['rosa', 'lilas', 'menta', 'dourado'][i % 4]));
    c.innerHTML = '<div class="cartao-prova-nome">' + p.nome + '</div>' +
      '<div class="cartao-prova-dias">' + (d < 0 ? 'já passou' : (d === 0 ? 'é hoje!' : '<b>' + d + '</b> dia' + (d === 1 ? '' : 's'))) + '</div>' +
      '<div class="cartao-prova-data">' + fmtDataLonga(p.data) + (p.dataConfirmada === false ? ' <span class="a-confirmar">(data a confirmar)</span>' : '') + '</div>' +
      (p.descricao ? '<div class="cartao-prova-desc">' + p.descricao + '</div>' : '') +
      '<div class="cartao-prova-prog">' + coracoes(pct) + '<span>' + pct + '% preparada</span></div>';
    if (p.link) c.innerHTML += '<a class="cartao-prova-link" href="' + p.link + '" target="_blank" rel="noopener">site oficial</a>';
    cartoes.appendChild(c);
  });
  palco.appendChild(cartoes);

  // o que estudar hoje
  palco.appendChild(el('h2', 'home-secao', 'O que estudar hoje'));
  const plano = planoDeHoje();
  const caixaHoje = el('div', 'hoje');
  caixaHoje.appendChild(el('div', 'hoje-tema', plano.tema));
  plano.itens.forEach(m => {
    const et = proximaEtapa(m);
    const linha = el('div', 'hoje-item' + (et.completo ? ' completo' : ''));
    linha.innerHTML = '<span class="hoje-icone">' + m.icone + '</span>' +
      '<span class="hoje-txt"><b>' + m.titulo + '</b><span class="hoje-etapa">' + et.rotulo + '</span></span>';
    const b = el('button', 'btn btn-mini', et.completo ? 'Rever' : 'Ir ♥');
    b.onclick = () => irPara('mod:' + m.id, et.aba);
    linha.appendChild(b);
    caixaHoje.appendChild(linha);
  });
  if (!plano.itens.length) caixaHoje.appendChild(el('div', 'hoje-vazio', 'Nenhum módulo carregado ainda.'));
  palco.appendChild(caixaHoje);

  // revisão do dia
  palco.appendChild(el('h2', 'home-secao', 'Revisão do dia'));
  const rev = revisaoDoDia();
  const caixaRev = el('div', 'revisao');
  if (!rev.length) {
    caixaRev.appendChild(el('div', 'revisao-vazia', 'Quando você resolver questões nas missões e na prática, duas delas voltam aqui todo dia para você revisar. Repetição espaçada é o segredo ♥'));
  } else {
    caixaRev.appendChild(el('p', 'revisao-intro', 'Duas questões que você já fez, escolhidas para hoje. Refazer sem olhar a resposta é o que fixa de verdade.'));
    rev.forEach(item => {
      caixaRev.appendChild(montarQuestao(item.q, { modo: 'treino', rotulo: 'Revisão · ' + item.m.titulo }));
    });
  }
  palco.appendChild(caixaRev);

  // progresso por disciplina
  palco.appendChild(el('h2', 'home-secao', 'Seu progresso'));
  const lista = el('div', 'lista-modulos');
  MODULOS.forEach((m, i) => {
    const e = estadoModulo(m);
    const pct = pctModulo(m);
    const c = el('div', 'modulo-cartao' + (pct >= 100 ? ' completo' : ''));
    c.style.animationDelay = (i * 0.03) + 's';
    c.innerHTML = '<div class="icone">' + m.icone + '</div>' +
      '<div class="meio"><div class="disciplina-tag">' + (m.disciplina || '') + '</div><h3>' + m.titulo + '</h3><div class="desc">' + (m.descricao || '') + '</div>' +
      '<div class="modulo-prog">' + coracoes(pct) + '<span>' + pct + '%</span></div></div>' +
      '<div class="status">' +
      (m.aula.length ? '<div>aula ' + Math.min(e.passo, m.aula.length) + '/' + m.aula.length + '</div>' : '') +
      (m.quiz.length ? '<div>quiz ' + (e.quizMelhor === null ? '0' : e.quizMelhor) + '/' + m.quiz.length + '</div>' : '') +
      (m.pratica.length ? '<div>prática ' + contarFeitas(m, e) + '/' + m.pratica.length + '</div>' : '') +
      '</div>';
    c.onclick = () => irPara('mod:' + m.id);
    lista.appendChild(c);
  });
  palco.appendChild(lista);

  // backup do progresso e instalação como app
  palco.appendChild(el('h2', 'home-secao', 'Backup e instalação'));
  const bk = el('div', 'backup');
  bk.innerHTML = '<p>' + (modoLocal
    ? 'Seu progresso fica salvo neste computador (arquivo progresso.json) e neste navegador.'
    : 'Seu progresso fica salvo neste navegador, neste aparelho.') +
    ' Para levar para outro aparelho, gere o código aqui, envie para você mesma (WhatsApp, e-mail) e cole lá em "Restaurar".</p>';
  const ta = el('textarea', 'backup-codigo');
  ta.placeholder = 'Cole aqui um código de backup para restaurar, ou clique em "Gerar código" para copiar o seu.';
  ta.rows = 3;
  const acoes = el('div', 'acoes');
  const bGerar = el('button', 'btn btn-fantasma', 'Gerar código de backup');
  bGerar.onclick = () => {
    const cod = codificarProgresso();
    ta.value = cod;
    ta.select();
    try { navigator.clipboard.writeText(cod).then(() => { bGerar.textContent = 'Copiado ♥'; }); } catch (e) { bGerar.textContent = 'Código gerado acima'; }
  };
  const bRestaurar = el('button', 'btn btn-fantasma', 'Restaurar deste código');
  bRestaurar.onclick = () => {
    if (restaurarProgresso(ta.value.trim())) {
      salvarProgresso();
      desenharContagem();
      irPara('home');
    } else {
      alert('Esse código não parece válido. Confira se copiou o código inteiro, começando por LIA1.');
    }
  };
  acoes.appendChild(bGerar);
  acoes.appendChild(bRestaurar);
  bk.appendChild(ta);
  bk.appendChild(acoes);
  if (!modoLocal) {
    bk.appendChild(el('p', 'instalar-dica',
      '<b>Instalar como app:</b> no celular Android, toque em "Instalar" ou no menu do navegador em "Adicionar à tela inicial"; ' +
      'no iPhone, no Safari, toque em Compartilhar e depois em "Adicionar à Tela de Início"; ' +
      'no computador, use o ícone de instalar na barra de endereço do Chrome ou do Edge. As atualizações chegam sozinhas ao abrir.'));
  }
  palco.appendChild(bk);
}

// ---------- página do módulo ----------

function infoAbas(m) {
  const e = estadoModulo(m);
  return [
    ['aula', 'Aula', Math.min(e.passo, m.aula.length) + '/' + m.aula.length, m.aula.length],
    ['quiz', 'Quiz', (e.quizMelhor === null ? '0' : e.quizMelhor) + '/' + m.quiz.length, m.quiz.length],
    ['pratica', 'Prática', contarFeitas(m, e) + '/' + m.pratica.length, m.pratica.length],
  ].filter(d => d[3] > 0);
}

// redesenha os contadores das abas (chamado sempre que o progresso muda)
function atualizarAbas(m) {
  const abas = document.getElementById('abas');
  if (!abas) return;
  const ativa = abas.dataset.ativa;
  abas.innerHTML = '';
  infoAbas(m).forEach(([chave, rotulo, info]) => {
    const a = el('div', 'aba' + (ativa === chave ? ' ativa' : ''), rotulo + '<span class="aba-pct">' + info + '</span>');
    a.onclick = () => desenharModulo(m.id, chave);
    abas.appendChild(a);
  });
}

function desenharModulo(id, aba) {
  const m = MODULOS.find(x => x.id === id);
  if (!m) { irPara('home'); return; }
  const palco = document.getElementById('palco');
  palco.innerHTML = '';

  const disponiveis = infoAbas(m);
  if (!disponiveis.some(d => d[0] === aba)) aba = disponiveis.length ? disponiveis[0][0] : 'aula';

  P.ultimo = { modulo: id, aba: aba };
  salvarProgresso();

  const voltar = el('div', 'voltar', '← voltar para o início');
  voltar.onclick = () => irPara('home');
  palco.appendChild(voltar);

  const provas = (m.provas || []).map(pid => CFG.provas.find(p => p.id === pid)).filter(Boolean);
  const cab = el('div', 'mod-cabeca');
  cab.innerHTML = '<div class="disciplina-tag">' + (m.disciplina || '') + '</div>' +
    '<h1><span class="mod-icone">' + m.icone + '</span> ' + m.titulo + '</h1>' +
    '<p>' + (m.descricao || '') + '</p>' +
    (provas.length ? '<div class="mod-provas">' + provas.map(p => '<span class="prova-badge">' + p.nome + '</span>').join('') + '</div>' : '');
  palco.appendChild(cab);

  const abas = el('div', 'abas');
  abas.id = 'abas';
  abas.dataset.ativa = aba;
  palco.appendChild(abas);
  atualizarAbas(m);

  const corpo = el('div');
  palco.appendChild(corpo);
  if (aba === 'aula') desenharAula(m, corpo);
  else if (aba === 'quiz') desenharQuiz(m, corpo);
  else desenharPratica(m, corpo);
  desenharTrilha();
}

// ---------- aula em micro-passos ----------

function desenharAula(m, corpo) {
  const e = estadoModulo(m);
  corpo.innerHTML = '';
  const ate = Math.min(e.passo, m.aula.length - 1);
  for (let i = 0; i <= ate && i < m.aula.length; i++) corpo.appendChild(montarPasso(m, i));
  montarRodapeAula(m, corpo);
}

function montarPasso(m, i) {
  const p = m.aula[i];
  const d = el('div', 'passo');
  d.dataset.indice = i;
  if (p.t === 'h') d.innerHTML = '<h2>' + p.html + '</h2>';
  else if (p.t === 'p') d.innerHTML = '<p>' + p.html + '</p>';
  else if (p.t === 'lista') d.innerHTML = '<ul>' + p.itens.map(x => '<li>' + x + '</li>').join('') + '</ul>';
  else if (p.t === 'destaque') d.innerHTML = '<div class="destaque"><div class="destaque-titulo">' + (p.titulo || 'Para lembrar ♥') + '</div>' + p.html + '</div>';
  else if (p.t === 'exemplo') d.innerHTML = '<div class="exemplo"><div class="exemplo-titulo">' + (p.titulo || 'Exemplo resolvido') + '</div>' + p.html + '</div>';
  else if (p.t === 'imagem') d.innerHTML = '<figure class="figura"><img src="' + p.src + '" alt="' + esc(p.legenda || '') + '">' + (p.legenda ? '<figcaption>' + p.legenda + '</figcaption>' : '') + '</figure>';
  else if (p.t === 'tabela') d.innerHTML = montarTabela(p);
  else if (p.t === 'check') montarCheck(m, i, p, d);
  else if (p.t === 'missao') montarMissao(m, i, p, d);
  else d.innerHTML = '<p>' + (p.html || '') + '</p>';
  return d;
}

function montarTabela(p) {
  let h = '<div class="tabela-wrap"><table class="tabela">';
  if (p.cabecalho) h += '<thead><tr>' + p.cabecalho.map(c => '<th>' + c + '</th>').join('') + '</tr></thead>';
  h += '<tbody>' + (p.linhas || []).map(l => '<tr>' + l.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  if (p.legenda) h += '<div class="tabela-legenda">' + p.legenda + '</div>';
  return h;
}

function liberar(d) {
  if (d.dataset.liberado === '1') return;
  d.dataset.liberado = '1';
  const rodape = document.getElementById('rodape-aula');
  if (rodape) rodape.dispatchEvent(new Event('liberar'));
}

function montarCheck(m, indice, p, d) {
  const e = estadoModulo(m);
  const respondido = e.passo > indice;
  const caixa = el('div', 'cheque');
  caixa.appendChild(montarQuestao(Object.assign({ tipo: 'objetiva' }, p), {
    modo: 'treino', semFonte: !p.fonte, rotulo: 'Checagem rápida: responda para continuar',
    respondida: respondido, aoConcluir: () => liberar(d),
  }));
  d.appendChild(caixa);
  if (respondido) d.dataset.liberado = '1';
}

// ---------- missão: questão de prova para continuar ----------

function montarMissao(m, indice, p, d) {
  const e = estadoModulo(m);
  const feito = !!e.misFeitas[p.id];
  const liberado = feito || e.passo > indice;
  const caixa = el('div', 'missao');
  caixa.appendChild(el('div', 'rotulo', '✿ Missão: uma questão de prova para continuar'));
  if (p.titulo) caixa.appendChild(el('div', 'missao-titulo', p.titulo));
  caixa.appendChild(montarQuestao(p, {
    modo: 'treino', chaveResposta: p.id, respondida: liberado,
    aoConcluir: () => { e.misFeitas[p.id] = true; salvarProgresso(); liberar(d); },
  }));
  d.appendChild(caixa);
  if (liberado) d.dataset.liberado = '1';
}

// ---------- questão (usada por check, missão, quiz, prática e revisão) ----------

function normalizarQuestao(q) {
  return {
    id: q.id,
    tipo: q.tipo || (q.opcoes ? 'objetiva' : 'dissertativa'),
    enunciado: q.enunciado || q.pergunta || '',
    imagens: q.imagens || (q.imagem ? [q.imagem] : []),
    opcoes: q.opcoes || [],
    correta: q.correta,
    resolucao: q.resolucao || q.explica || '',
    gabarito: q.gabarito || '',
    criterios: q.criterios || '',
    dica: q.dica || q.erroDica || '',
    fonte: q.fonte || 'Autoral',
    link: q.link || '',
    minimo: q.minimo || 30,
    nivel: q.nivel || '',
    tema: q.tema || '',
  };
}

function badgeFonte(fonte) {
  return fonte === 'Autoral'
    ? '<span class="fonte-badge fonte-autoral">✎ questão autoral</span>'
    : '<span class="fonte-badge fonte-real">★ ' + fonte + '</span>';
}

const NIVEIS = { facil: 'fácil', medio: 'médio', dificil: 'difícil' };

function montarQuestao(q0, opts) {
  const q = normalizarQuestao(q0);
  opts = opts || {};
  const modo = opts.modo || 'treino';
  const raiz = el('div', 'questao' + (opts.classe ? ' ' + opts.classe : ''));

  let cab = '';
  if (opts.rotulo) cab += '<div class="rotulo">' + opts.rotulo + '</div>';
  let meta = '';
  if (!opts.semFonte) meta += badgeFonte(q.fonte);
  if (q.nivel) meta += '<span class="nivel-badge nivel-' + q.nivel + '">' + (NIVEIS[q.nivel] || q.nivel) + '</span>';
  if (q.tema) meta += '<span class="tema-badge">' + q.tema + '</span>';
  if (q.link) meta += '<a class="link-prova" href="' + q.link + '" target="_blank" rel="noopener">ver a prova</a>';
  if (meta) cab += '<div class="questao-meta">' + meta + '</div>';
  raiz.innerHTML = cab + '<div class="pergunta-txt">' + q.enunciado + '</div>' +
    q.imagens.map(src => '<figure class="figura questao-figura"><img src="' + src + '" alt="questão da prova original"></figure>').join('');

  if (q.dica && modo === 'treino' && !opts.respondida) {
    const dica = el('details', 'dica-caixa');
    dica.innerHTML = '<summary>✿ Dica (abra só se travar)</summary><div>' + q.dica + '</div>';
    raiz.appendChild(dica);
  }

  const area = el('div', 'area-explica');
  const letras = 'abcdefg';

  if (q.tipo === 'objetiva') {
    const ops = el('div', 'ops');
    q.opcoes.forEach((op, oi) => {
      const b = el('button', 'opcao', '<span class="letra">' + letras[oi] + ')</span><span class="opcao-txt">' + op + '</span>');
      if (opts.respondida) { b.disabled = true; if (oi === q.correta) b.classList.add('certa'); }
      b.onclick = () => {
        if (oi === q.correta) {
          ops.querySelectorAll('.opcao').forEach(x => x.disabled = true);
          b.classList.add('certa');
          area.innerHTML = '<div class="explica ok"><b>' + frase() + '</b> ' + q.resolucao + '</div>';
          celebrar(b);
          if (opts.aoConcluir) opts.aoConcluir(true);
        } else {
          b.classList.add('errada');
          b.disabled = true;
          if (modo === 'prova') {
            ops.querySelectorAll('.opcao').forEach(x => x.disabled = true);
            if (ops.children[q.correta]) ops.children[q.correta].classList.add('certa');
            area.innerHTML = '<div class="explica erro"><b>Ainda não.</b> A resposta certa é a <b>' + letras[q.correta] + ')</b>. ' + q.resolucao + '</div>';
            if (opts.aoConcluir) opts.aoConcluir(false);
          } else {
            area.innerHTML = '<div class="explica erro"><b>Quase!</b> ' + (q.dica || 'Releia o enunciado com calma e tente outra alternativa. Errar aqui não desconta nada.') + '</div>';
          }
        }
      };
      ops.appendChild(b);
    });
    raiz.appendChild(ops);
    if (opts.respondida) area.innerHTML = '<div class="explica ok"><b>Feita ♥</b> ' + q.resolucao + '</div>';
  } else {
    const ta = el('textarea', 'resposta');
    ta.placeholder = 'Escreva sua resposta aqui, com calma e com as suas palavras...';
    ta.value = (opts.chaveResposta && P.respostas[opts.chaveResposta]) || '';
    const acoes = el('div', 'acoes');
    const btn = el('button', 'btn', 'Enviar resposta e ver o gabarito');
    const contador = el('span', 'contador');
    function atualizarContador() {
      const n = ta.value.trim().length;
      contador.textContent = n < q.minimo ? 'escreva pelo menos ' + q.minimo + ' caracteres (' + n + ')' : n + ' caracteres, pode enviar';
      btn.disabled = n < q.minimo;
    }
    ta.addEventListener('input', () => {
      if (opts.chaveResposta) { P.respostas[opts.chaveResposta] = ta.value; salvarProgresso(); }
      atualizarContador();
    });
    function mostrarGabarito(jaFeita) {
      ta.readOnly = true;
      acoes.style.display = 'none';
      let h = '<div class="gabarito"><div class="gabarito-titulo">' + (q.fonte === 'Autoral' ? 'Resposta esperada' : 'Gabarito oficial') + '</div>' + (q.gabarito || '<i>sem gabarito cadastrado</i>') + '</div>';
      if (q.criterios) h += '<div class="criterios"><div class="gabarito-titulo">Critérios de correção</div>' + q.criterios + '</div>';
      if (q.resolucao) h += '<div class="explica ok">' + q.resolucao + '</div>';
      area.innerHTML = h;
      if (!jaFeita) {
        const auto = el('div', 'autoavaliacao');
        auto.innerHTML = '<div class="autoavaliacao-txt">Compare com o que você escreveu. Como foi?</div>';
        [['acertei', 'Acertei ♥'], ['parcial', 'Acertei em parte'], ['revisar', 'Preciso revisar']].forEach(([v, r]) => {
          const b = el('button', 'btn btn-' + v, r);
          b.onclick = () => {
            if (opts.chaveResposta) { P.auto[opts.chaveResposta] = v; salvarProgresso(); }
            auto.innerHTML = '<div class="explica ok"><b>' + (v === 'acertei' ? frase() : 'Anotado. Essa questão volta na revisão do dia para você fixar ♥') + '</b></div>';
            celebrar(b);
            if (opts.aoConcluir) opts.aoConcluir(v === 'acertei');
          };
          auto.appendChild(b);
        });
        area.appendChild(auto);
      } else if (opts.chaveResposta && P.auto[opts.chaveResposta]) {
        const v = P.auto[opts.chaveResposta];
        area.appendChild(el('div', 'autoavaliacao-feita', 'Sua autoavaliação: <b>' + ({ acertei: 'acertei', parcial: 'acertei em parte', revisar: 'preciso revisar' })[v] + '</b>'));
      }
    }
    btn.onclick = () => { if (ta.value.trim().length >= q.minimo) mostrarGabarito(false); };
    atualizarContador();
    acoes.appendChild(btn);
    acoes.appendChild(contador);
    raiz.appendChild(ta);
    raiz.appendChild(acoes);
    if (opts.respondida) mostrarGabarito(true);
  }

  raiz.appendChild(area);
  return raiz;
}

// ---------- rodapé da aula (botão Continuar) ----------

function montarRodapeAula(m, corpo) {
  const e = estadoModulo(m);
  const antigo = document.getElementById('rodape-aula');
  if (antigo) antigo.remove();
  const rodape = el('div');
  rodape.id = 'rodape-aula';
  corpo.appendChild(rodape);

  function atualizar() {
    rodape.innerHTML = '';
    if (e.passo >= m.aula.length) {
      const fim = el('div', 'aula-fim');
      fim.innerHTML = '<div class="aula-fim-coracao">♥</div><b>Aula concluída, Lia!</b> ' +
        (m.quiz.length ? 'Agora faça o <b>quiz</b> até gabaritar e depois as questões da <b>prática</b>. É nelas que o conteúdo vira nota.' : (m.pratica.length ? 'Agora vá para as questões da <b>prática</b>.' : 'Volte para o início e escolha o próximo módulo.'));
      rodape.appendChild(fim);
      const b = el('button', 'btn', m.quiz.length ? 'Ir para o quiz ♥' : (m.pratica.length ? 'Ir para a prática ♥' : 'Voltar para o início ♥'));
      b.style.marginTop = '14px';
      b.onclick = () => { if (m.quiz.length) desenharModulo(m.id, 'quiz'); else if (m.pratica.length) desenharModulo(m.id, 'pratica'); else irPara('home'); };
      rodape.appendChild(b);
      return;
    }
    const atual = corpo.querySelector('.passo[data-indice="' + Math.min(e.passo, m.aula.length - 1) + '"]');
    const tipoAtual = m.aula[e.passo] && m.aula[e.passo].t;
    const precisa = atual && (tipoAtual === 'check' || tipoAtual === 'missao') && atual.dataset.liberado !== '1';
    if (precisa) return; // o check ou a missão liberam via evento
    const b = el('button', 'btn btn-continuar', e.passo === 0 ? 'Começar a aula ♥' : 'Continuar ♥');
    b.onclick = () => {
      e.passo++;
      salvarProgresso();
      if (e.passo < m.aula.length) {
        const novo = montarPasso(m, e.passo);
        corpo.insertBefore(novo, rodape);
        atualizar();
        setTimeout(() => novo.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
      } else {
        atualizar();
        celebrar(rodape);
      }
      desenharTrilha();
    };
    rodape.appendChild(b);
  }

  rodape.addEventListener('liberar', () => {
    const e2 = estadoModulo(m);
    const t2 = m.aula[e2.passo] && m.aula[e2.passo].t;
    if (t2 === 'check' || t2 === 'missao') { e2.passo++; salvarProgresso(); }
    if (e2.passo < m.aula.length) {
      const novo = montarPasso(m, e2.passo);
      corpo.insertBefore(novo, rodape);
      setTimeout(() => novo.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
    }
    atualizar();
    desenharTrilha();
  });
  atualizar();
}

// ---------- quiz ----------

function desenharQuiz(m, corpo) {
  corpo.innerHTML = '';
  let idx = 0, acertos = 0;

  function pergunta() {
    corpo.innerHTML = '';
    if (idx >= m.quiz.length) { resultado(); return; }
    const q = m.quiz[idx];
    const d = el('div', 'quiz-q passo');
    d.appendChild(el('div', 'quiz-cabeca', 'questão ' + (idx + 1) + ' de ' + m.quiz.length + ' · acertos até aqui: ' + acertos));
    const bloco = montarQuestao(Object.assign({ tipo: 'objetiva' }, q), {
      modo: 'prova', semFonte: !q.fonte,
      aoConcluir: (acertou) => {
        if (acertou) acertos++;
        const prox = el('button', 'btn', idx + 1 >= m.quiz.length ? 'Ver resultado ♥' : 'Próxima questão ♥');
        prox.style.marginTop = '12px';
        prox.onclick = () => { idx++; pergunta(); };
        bloco.querySelector('.area-explica').appendChild(prox);
      },
    });
    d.appendChild(bloco);
    corpo.appendChild(d);
  }

  function resultado() {
    const e = estadoModulo(m);
    if (e.quizMelhor === null || acertos > e.quizMelhor) e.quizMelhor = acertos;
    salvarProgresso();
    const pct = Math.round((acertos / m.quiz.length) * 100);
    const d = el('div', 'quiz-resultado passo');
    const medalha = pct === 100 ? '🏆' : (pct >= 70 ? '💗' : '🌷');
    d.innerHTML = '<div class="medalha">' + medalha + '</div>' +
      '<div class="nota-grande">' + acertos + ' de ' + m.quiz.length + '</div>' +
      '<div class="quiz-coracoes">' + coracoes(pct) + '</div>' +
      '<p>' + (pct === 100
        ? 'Gabaritou! Você está pronta para essa parte, Lia. Agora vá para a prática e resolva as questões de prova de verdade.'
        : (pct >= 70 ? 'Muito bem! Releia as explicações das que errou e refaça o quiz para gabaritar.'
          : 'Sem pressa. Volte na aula com calma e tente de novo, cada tentativa conta.')) +
      (e.quizMelhor !== null ? '<br><small>Sua melhor marca: ' + e.quizMelhor + ' de ' + m.quiz.length + '</small>' : '') + '</p>';
    const refazer = el('button', 'btn', 'Refazer o quiz');
    refazer.onclick = () => { idx = 0; acertos = 0; pergunta(); };
    d.appendChild(refazer);
    if (m.pratica.length) {
      const irPratica = el('button', 'btn btn-fantasma', 'Ir para a prática ♥');
      irPratica.style.marginLeft = '10px';
      irPratica.onclick = () => desenharModulo(m.id, 'pratica');
      d.appendChild(irPratica);
    }
    corpo.appendChild(d);
    celebrar(d);
    desenharTrilha();
  }

  pergunta();
}

// ---------- prática: questões reais ----------

function desenharPratica(m, corpo) {
  corpo.innerHTML = '';
  const e = estadoModulo(m);
  const reais = m.pratica.filter(q => (q.fonte || 'Autoral') !== 'Autoral').length;
  const autorais = m.pratica.length - reais;
  const intro = el('p', 'passo pratica-intro',
    'São <b>' + m.pratica.length + '</b> questões: <b>' + reais + '</b> de provas reais, com gabarito oficial, e <b>' + autorais + '</b> autorais. ' +
    'Resolva no papel primeiro, como no dia da prova, e só depois marque a alternativa. Nas dissertativas, escreva sua resposta antes de ver o gabarito.');
  corpo.appendChild(intro);

  const temNivel = m.pratica.some(q => q.nivel);
  const grupos = temNivel
    ? [['facil', 'Fáceis', 'Para aquecer e ganhar confiança.'], ['medio', 'Médias', 'O nível da prova.'], ['dificil', 'Difíceis', 'Para chegar na prova acima do nível dela.']]
    : [['todas', 'Questões', '']];
  let numero = 0;
  grupos.forEach(([nivel, rotulo, sub]) => {
    const doNivel = nivel === 'todas' ? m.pratica : m.pratica.filter(q => (q.nivel || 'medio') === nivel);
    if (!doNivel.length) return;
    const feitos = doNivel.filter(q => e.exFeitos[q.id]).length;
    corpo.appendChild(el('div', 'grupo-nivel nivel-' + nivel,
      '<span class="grupo-rotulo">' + rotulo + '</span> <span class="grupo-conta">' + feitos + '/' + doNivel.length + '</span>' +
      (sub ? '<div class="grupo-sub">' + sub + '</div>' : '')));
    const lista = el('div', 'ex-lista');
    doNivel.forEach(q => {
      numero++;
      const item = el('div', 'ex-item' + (e.exFeitos[q.id] ? ' feito' : ''));
      const fonte = q.fonte || 'Autoral';
      item.innerHTML = '<span class="ex-num">' + String(numero).padStart(2, '0') + '</span>' +
        '<span class="ex-nome">' + (q.titulo || (q.tema ? q.tema + ': ' : '') + textoCurto(q.enunciado || q.pergunta || '', 70)) + '</span>' +
        '<span class="ex-badges">' + badgeFonte(fonte) +
        '<span class="tipo-badge">' + ((q.tipo || (q.opcoes ? 'objetiva' : 'dissertativa')) === 'objetiva' ? 'objetiva' : 'dissertativa') + '</span></span>' +
        (e.exFeitos[q.id] ? '<span class="ex-feito">♥ feita</span>' : '<span class="ex-pendente">pendente</span>');
      item.onclick = () => desenharQuestaoPratica(m, q, corpo);
      lista.appendChild(item);
    });
    corpo.appendChild(lista);
  });
}

function desenharQuestaoPratica(m, q, corpo, refazendo) {
  corpo.innerHTML = '';
  const e = estadoModulo(m);
  const idx = m.pratica.indexOf(q);

  const voltar = el('div', 'voltar', '← lista de questões');
  voltar.onclick = () => desenharPratica(m, corpo);
  corpo.appendChild(voltar);

  const caixa = el('div', 'enunciado passo');
  const jaFeita = !!e.exFeitos[q.id] && !refazendo;
  caixa.appendChild(montarQuestao(q, {
    modo: 'treino', chaveResposta: refazendo ? null : q.id, respondida: jaFeita,
    rotulo: m.titulo + ' · questão ' + (idx + 1) + ' de ' + m.pratica.length,
    aoConcluir: () => {
      if (!refazendo && !e.exFeitos[q.id]) { e.exFeitos[q.id] = true; salvarProgresso(); desenharTrilha(); }
      montarNavegacao();
    },
  }));
  corpo.appendChild(caixa);

  const nav = el('div', 'acoes pratica-nav');
  corpo.appendChild(nav);
  function montarNavegacao() {
    nav.innerHTML = '';
    if (jaFeita) {
      const r = el('button', 'btn btn-fantasma', 'Refazer sem olhar');
      r.onclick = () => desenharQuestaoPratica(m, q, corpo, true);
      nav.appendChild(r);
    }
    if (idx + 1 < m.pratica.length) {
      const prox = el('button', 'btn', 'Próxima questão ♥');
      prox.onclick = () => desenharQuestaoPratica(m, m.pratica[idx + 1], corpo);
      nav.appendChild(prox);
    } else {
      const fim = el('button', 'btn', 'Voltar para a lista ♥');
      fim.onclick = () => desenharPratica(m, corpo);
      nav.appendChild(fim);
    }
  }
  if (jaFeita) montarNavegacao();
}

// ---------- inicialização ----------

(async function iniciar() {
  MODULOS.forEach(m => { m.aula = m.aula || []; m.quiz = m.quiz || []; m.pratica = m.pratica || []; m.icone = m.icone || '♥'; });
  // conjuntos de prática (conteudo/pratica/*.js) substituem ou complementam os do módulo
  if (window.PRATICA) {
    MODULOS.forEach(m => { if (PRATICA[m.id]) m.pratica = PRATICA[m.id]; });
  }
  // missões (conteudo/missoes/*.js) entram no fim da seção da aula indicada por aposTitulo
  if (window.MISSOES) {
    MODULOS.forEach(m => {
      (MISSOES[m.id] || []).forEach(item => {
        const passo = Object.assign({ t: 'missao' }, item.missao);
        const idx = m.aula.findIndex(p => p.t === 'h' && p.html === item.aposTitulo);
        if (idx === -1) { m.aula.push(passo); return; }
        let fim = m.aula.length;
        for (let i = idx + 1; i < m.aula.length; i++) {
          if (m.aula[i].t === 'h') { fim = i; break; }
        }
        m.aula.splice(fim, 0, passo);
      });
    });
  }
  await carregarProgresso();
  desenharContagem();
  irPara('home');
})();
