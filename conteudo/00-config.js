/* Configuração geral: provas, grupos da trilha e cronograma semanal.
   Datas conferidas nos editais (ver material/pesquisa/*.md). dataConfirmada: false = ainda sem data oficial. */
window.CONFIG = {
  nome: 'Lia Aprova',
  subtitulo: 'Seu cantinho de estudos para a UEL, a Prova Paraná e a UniFil. Um passinho por dia e a aprovação chega.',
  provas: [
    { id: 'parana', nome: 'Prova Paraná (2ª edição)', data: '2026-09-22', dataConfirmada: false, cor: 'menta',
      descricao: 'Setembro de 2026, dia exato ainda não publicado pela SEED: confirme na escola. Língua Portuguesa e Matemática por descritores.',
      link: 'https://www.provaparana.pr.gov.br/' },
    { id: 'uel1', nome: 'UEL: dia 1', data: '2026-10-18', dataConfirmada: true, cor: 'rosa',
      descricao: 'Domingo, 14h, 5 horas. 60 questões objetivas (5 de cada disciplina, 10 de Português e Literatura, 5 de Inglês) e a Redação.',
      link: 'https://www.cops.uel.br/' },
    { id: 'uel2', nome: 'UEL: dia 2', data: '2026-10-19', dataConfirmada: true, cor: 'lilas',
      descricao: 'Segunda, 14h, 3 horas. 9 questões discursivas, só para os 12 cursos com prova específica (Biologia, Sociologia e Química ou Português).',
      link: 'https://www.cops.uel.br/' },
    { id: 'ppmais', nome: 'Prova Paraná Mais', data: '2026-10-27', dataConfirmada: true, cor: 'menta',
      descricao: '27 e 28/10, manhã. Obrigatória para concluintes: Português, Matemática, redação e as outras áreas. Dá acesso ao Aprova Paraná Universidades.',
      link: 'https://www.educacao.pr.gov.br/programa/prova-parana-mais' },
    { id: 'unifil', nome: 'UniFil', data: '2026-11-29', dataConfirmada: false, cor: 'dourado',
      descricao: 'Vestibular de novembro (data ainda não oficial): 50 questões (30 gerais e 20 de Português) e redação de 20 a 25 linhas. Fique de olho no Concurso Oportunidade (outubro, bolsas de 100%).',
      link: 'https://unifil.br/vestibular-graduacao/' },
  ],
  grupos: [
    { rotulo: 'Comece por aqui', ids: ['estrategia'] },
    { rotulo: 'Linguagens', ids: ['redacao', 'literatura', 'portugues', 'ingles', 'artes'] },
    { rotulo: 'Natureza e Matemática', ids: ['biologia', 'quimica', 'matematica', 'fisica'] },
    { rotulo: 'Humanas', ids: ['historia', 'geografia', 'filosofia', 'sociologia'] },
    { rotulo: 'Prova Paraná', ids: ['prova-parana'] },
  ],
  cronograma: {
    1: { tema: 'Segunda: Português, Matemática e Biologia', ids: ['portugues', 'matematica', 'biologia'] },
    2: { tema: 'Terça: Redação, Química e História', ids: ['redacao', 'quimica', 'historia'] },
    3: { tema: 'Quarta: Literatura, Física e Geografia', ids: ['literatura', 'fisica', 'geografia'] },
    4: { tema: 'Quinta: Biologia, Matemática e Filosofia', ids: ['biologia', 'matematica', 'filosofia'] },
    5: { tema: 'Sexta: Redação, Sociologia e Inglês', ids: ['redacao', 'sociologia', 'ingles'] },
    6: { tema: 'Sábado: Prova Paraná, Artes e Literatura', ids: ['prova-parana', 'artes', 'literatura'] },
    0: { tema: 'Domingo: estratégia, uma redação e a revisão do dia. Descanse também ♥', ids: ['estrategia', 'redacao'] },
  },
};
