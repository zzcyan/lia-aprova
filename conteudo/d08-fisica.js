window.MODULOS = window.MODULOS || [];
MODULOS.push({
 "id": "fisica",
 "disciplina": "Ciências da Natureza",
 "titulo": "Física",
 "icone": "⚡",
 "descricao": "As fórmulas e os fenômenos do dia a dia que mais caem na UEL: cinemática, energia, eletricidade, calor e luz, direto ao ponto, sempre com conta redonda e sem calculadora.",
 "provas": [
  "uel1",
  "ppmais"
 ],
 "aula": [
  {
   "t": "h",
   "html": "Como Física cai na UEL"
  },
  {
   "t": "p",
   "html": "Física é uma das nove disciplinas gerais do dia 1 da UEL: são <b>5 questões objetivas</b>, ao lado de Artes, Biologia, Filosofia, Geografia, História, Matemática, Química e Sociologia, todas dentro das 5 horas de prova do dia 18 de outubro de 2026. Olhando as 89 questões de Física da UEL desde 2010, os temas que mais caem são: <b>Mecânica</b> (45 questões, mais da metade de tudo), <b>Fluidos e termodinâmica</b> (16), <b>Óptica e ondas</b> (13), <b>Eletricidade e magnetismo</b> (12), <b>Física moderna</b> (2) e <b>Física, cosmos e vida</b> (1). Ou seja: entender bem Mecânica já garante uma boa fatia das questões. Esta aula segue essa ordem de importância, sempre com a fórmula em destaque e um exemplo resolvido."
  },
  {
   "t": "destaque",
   "titulo": "Como a UEL cobra Física",
   "html": "O jeito típico da UEL é trazer uma situação do dia a dia, uma notícia, uma tirinha ou um texto curto, e depois pedir para você julgar afirmativas em números romanos (I, II, III, IV), terminando em <b>assinale a alternativa correta</b>, ou marcar Verdadeiro ou Falso em sequência. Você não pode usar calculadora, então a banca sempre escolhe números redondos: se a sua conta ficar feia, quase sempre é sinal de que você trocou uma fórmula ou esqueceu de converter uma unidade. Três dicas que valem ouro: 1) escreva os dados do problema e a fórmula antes de substituir os números; 2) converta tudo para o Sistema Internacional (metro, quilograma, segundo, Kelvin) antes de calcular; 3) em afirmativas I, II, III, IV, julgue uma de cada vez, sem se deixar levar pelas outras."
  },
  {
   "t": "tabela",
   "cabecalho": [
    "Unidade usual",
    "Vira, no SI",
    "Como converter"
   ],
   "linhas": [
    [
     "km/h",
     "m/s",
     "divida por 3,6"
    ],
    [
     "g/cm³",
     "kg/m³",
     "multiplique por 1000"
    ],
    [
     "°C",
     "K (kelvin)",
     "some 273"
    ],
    [
     "cal",
     "J (joule)",
     "multiplique por 4,18"
    ],
    [
     "atm",
     "Pa (pascal)",
     "multiplique por 1,0 × 10^5"
    ]
   ],
   "legenda": "Guarde esta tabela: é a base de quase toda conta de Física na UEL, porque a prova não deixa usar calculadora e sempre cobra o resultado já no Sistema Internacional."
  },
  {
   "t": "check",
   "pergunta": "Um carro está a 72 km/h. Qual é essa velocidade em m/s?",
   "opcoes": [
    "7,2 m/s",
    "20 m/s",
    "36 m/s",
    "200 m/s"
   ],
   "correta": 1,
   "explica": "Para converter km/h em m/s, divida por 3,6: 72 ÷ 3,6 = 20 m/s. Essa conversão aparece o tempo todo nas contas de Mecânica.",
   "erroDica": "Lembre da tabela: para ir de km/h para m/s, é só dividir por 3,6."
  },
  {
   "t": "h",
   "html": "Mecânica"
  },
  {
   "t": "destaque",
   "titulo": "Cinemática e Leis de Newton",
   "html": "No movimento uniforme (MU), a velocidade é constante: S = S0 + v.t. No movimento uniformemente variado (MUV), a aceleração é constante: v = v0 + a.t, S = S0 + v0.t + a.t²/2, e a equação de Torricelli, v² = v0² + 2.a.ΔS, que não depende do tempo. As três Leis de Newton explicam por que os corpos se movem assim: a <b>1ª Lei (inércia)</b> diz que um corpo só muda de velocidade se uma força resultante agir sobre ele; a <b>2ª Lei</b>, a mais usada em conta, é F = m.a (a força resultante é igual à massa vezes a aceleração); a <b>3ª Lei (ação e reação)</b> diz que, se um corpo aplica força em outro, o segundo aplica de volta uma força igual em intensidade e direção, mas de sentido contrário, em corpos diferentes. A UEL 2024 perguntou justamente sobre isso numa disputa de robôs de combate: identificar a força resultante certa é o que resolve a maioria das questões de Mecânica."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: MUV",
   "html": "<p>Um carrinho parte do repouso (v0 = 0) e acelera a 2 m/s² durante 5 segundos, em linha reta. Qual é a velocidade final e a distância percorrida?</p><p><b>Passo 1:</b> velocidade final: v = v0 + a.t = 0 + 2×5 = 10 m/s.</p><p><b>Passo 2:</b> distância percorrida: S = v0.t + a.t²/2 = 0×5 + 2×5²/2 = 25 m.</p><p><b>Resposta:</b> o carrinho chega a <b>10 m/s</b>, depois de percorrer <b>25 m</b>. Sempre que v0 = 0, essas contas ficam mais simples, e é justamente isso que a UEL testa: saber qual fórmula usar em cada situação.</p>"
  },
  {
   "t": "check",
   "pergunta": "Um objeto parte do repouso e acelera a 4 m/s² durante 3 segundos, em linha reta. Qual é sua velocidade final?",
   "opcoes": [
    "4 m/s",
    "7 m/s",
    "12 m/s",
    "24 m/s"
   ],
   "correta": 2,
   "explica": "v = v0 + a.t = 0 + 4×3 = 12 m/s.",
   "erroDica": "Use v = v0 + a.t: como o objeto parte do repouso, v0 = 0."
  },
  {
   "t": "destaque",
   "titulo": "Energia, quantidade de movimento e gravitação",
   "html": "A energia mecânica é a soma da <b>energia cinética</b>, Ec = m.v²/2 (energia do movimento), com a <b>energia potencial gravitacional</b>, Ep = m.g.h (energia da altura). Numa queda livre sem atrito, a energia mecânica se conserva: o que o corpo perde de Ep vira Ec. O <b>trabalho</b> de uma força é W = F.d.cosθ, e a <b>potência</b> é P = W/t. A <b>quantidade de movimento</b> é Q = m.v, e o <b>impulso</b> de uma força é I = F.Δt, igual à variação da quantidade de movimento. Em toda colisão, sem forças externas, a quantidade de movimento total se conserva, mesmo quando parte da energia cinética se perde (colisão inelástica). Já a <b>gravitação universal</b> segue F = G.M.m/r² (a força cai com o quadrado da distância), e o <b>equilíbrio estático</b> de um corpo exige duas condições: a soma das forças igual a zero e a soma dos torques (força vezes distância ao eixo) igual a zero."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: colisão",
   "html": "<p>Um carrinho de 3 kg, a 4 m/s, colide e gruda em outro carrinho de 1 kg, parado. Qual é a velocidade dos dois carrinhos grudados depois da colisão?</p><p><b>Passo 1:</b> quantidade de movimento antes da colisão: Q = 3×4 + 1×0 = 12 kg.m/s.</p><p><b>Passo 2:</b> como é uma colisão perfeitamente inelástica, os dois seguem juntos numa só velocidade: Q = (m1 + m2).v'.</p><p><b>Resposta:</b> v' = 12 ÷ (3+1) = <b>3 m/s</b>. A quantidade de movimento se conservou, mas a energia cinética não: antes valia 24 J, depois vale 18 J. Essa diferença entre o que se conserva e o que não se conserva numa colisão é uma pegadinha clássica da UEL.</p>"
  },
  {
   "t": "check",
   "pergunta": "Uma bola de 2 kg se move a 5 m/s. Qual é a sua quantidade de movimento?",
   "opcoes": [
    "2,5 kg.m/s",
    "7 kg.m/s",
    "10 kg.m/s",
    "25 kg.m/s"
   ],
   "correta": 2,
   "explica": "Q = m.v = 2×5 = 10 kg.m/s.",
   "erroDica": "A fórmula é massa vezes velocidade, não massa mais velocidade."
  },
  {
   "t": "h",
   "html": "Eletricidade e magnetismo"
  },
  {
   "t": "destaque",
   "titulo": "Carga, campo e corrente elétrica",
   "html": "Cargas de mesmo sinal se repelem e cargas de sinais opostos se atraem, seguindo a <b>Lei de Coulomb</b>: F = k.q1.q2/r² (a força elétrica também cai com o quadrado da distância, como a gravitação). Ao redor de toda carga existe um <b>campo elétrico</b>. A <b>corrente elétrica</b> é o fluxo ordenado de cargas: i = ΔQ/Δt, medida em ampère (A). Nos condutores ôhmicos, vale a <b>Lei de Ohm</b>: U = R.i (a tensão é igual à resistência vezes a corrente). A UEL 2023 já pediu para comparar a potência de duas lâmpadas com filamentos de diâmetros diferentes: quanto mais fino o filamento, maior a resistência, e menor a corrente para a mesma tensão."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: Lei de Ohm",
   "html": "<p>Um resistor de 5 Ω é ligado a uma bateria de 10 V. Qual é a corrente elétrica que passa por ele?</p><p><b>Passo 1:</b> aplique a Lei de Ohm: U = R.i.</p><p><b>Passo 2:</b> isole a corrente: i = U/R = 10/5.</p><p><b>Resposta:</b> a corrente é <b>2 A</b>. Esse é o tipo de conta mais simples de circuitos que a UEL costuma pedir antes de complicar com resistores em série ou em paralelo.</p>"
  },
  {
   "t": "check",
   "pergunta": "Uma lâmpada tem resistência de 20 Ω e é ligada a uma tensão de 100 V. Qual é a corrente que passa por ela?",
   "opcoes": [
    "2 A",
    "5 A",
    "20 A",
    "2000 A"
   ],
   "correta": 1,
   "explica": "Pela Lei de Ohm, i = U/R = 100/20 = 5 A.",
   "erroDica": "Isole a corrente na fórmula U = R.i: divida a tensão pela resistência."
  },
  {
   "t": "destaque",
   "titulo": "Potência, circuitos e magnetismo",
   "html": "A <b>potência elétrica</b> é P = U.i, também escrita como P = R.i² ou P = U²/R. A energia consumida em um tempo t é E = P.t, e a conta de luz mede essa energia em kWh. Em um <b>circuito em série</b>, a corrente é a mesma em todos os resistores e a resistência equivalente é a soma: Req = R1 + R2 + ... Em um <b>circuito em paralelo</b>, a tensão é a mesma em todos os resistores e o inverso da resistência equivalente é a soma dos inversos: 1/Req = 1/R1 + 1/R2 + ... Já o <b>magnetismo</b> nasce de cargas em movimento: um fio com corrente cria campo magnético ao redor, e um campo magnético variável atravessando uma espira induz nela uma corrente, pela <b>Lei de Faraday</b>, o princípio por trás dos geradores das usinas e do carregamento sem fio de celular."
  },
  {
   "t": "check",
   "pergunta": "Um chuveiro elétrico tem potência de 4000 W e fica ligado por 0,5 hora todos os dias. Quanta energia ele consome por dia, em kWh?",
   "opcoes": [
    "0,5 kWh",
    "2 kWh",
    "4 kWh",
    "8 kWh"
   ],
   "correta": 1,
   "explica": "E = P.t = 4 kW × 0,5 h = 2 kWh (transforme 4000 W em 4 kW antes de multiplicar).",
   "erroDica": "Transforme a potência de W para kW (divida por 1000) antes de multiplicar pelo tempo em horas."
  },
  {
   "t": "h",
   "html": "Fluidos e termodinâmica"
  },
  {
   "t": "destaque",
   "titulo": "Pressão, empuxo e hidrostática",
   "html": "A <b>pressão</b> é a força dividida pela área em que ela age: P = F/A, medida em pascal (Pa). Num fluido em repouso, a <b>pressão hidrostática</b> cresce com a profundidade: P = P0 + ρ.g.h. O <b>princípio de Arquimedes</b> diz que todo corpo imerso num fluido recebe um <b>empuxo</b> para cima, igual ao peso do fluido deslocado: E = ρfluido.g.Vsubmerso. Se o empuxo for maior que o peso do corpo, ele flutua; se for menor, ele afunda. É esse princípio que explica por que um navio de aço flutua, porque seu formato desloca um volume enorme de água, e por que um balão cheio de gás hélio sobe no ar, tema de uma missão desta aula."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: empuxo",
   "html": "<p>Um bloco de 2 kg é totalmente imerso em água (densidade da água = 1000 kg/m³) e desloca um volume de 4 × 10^-4 m³. Adotando g = 10 m/s², qual é o empuxo sobre o bloco, e ele afunda ou flutua?</p><p><b>Passo 1:</b> aplique a fórmula do empuxo: E = ρ.g.V = 1000 × 10 × 4×10^-4.</p><p><b>Passo 2:</b> o empuxo vale 4 N. Compare com o peso do bloco: P = m.g = 2×10 = 20 N.</p><p><b>Resposta:</b> como o peso (20 N) é maior que o empuxo (4 N), o bloco <b>afunda</b>. É exatamente esse tipo de comparação que a UEL usa para decidir se um corpo flutua.</p>"
  },
  {
   "t": "destaque",
   "titulo": "Calor, dilatação, gases e termodinâmica",
   "html": "<b>Temperatura</b> mede o grau de agitação das partículas; as escalas se relacionam por C/5 = (F-32)/9 = (K-273)/5. <b>Calor</b> é energia térmica em trânsito: o calor sensível, que muda a temperatura, é Q = m.c.ΔT (c é o calor específico da substância); o calor latente, que muda o estado físico sem mudar a temperatura, é Q = m.L. A <b>dilatação linear</b> dos sólidos segue ΔL = L0.α.ΔT. Para os <b>gases ideais</b>, P.V = n.R.T relaciona pressão, volume, número de mol e temperatura em Kelvin. A <b>1ª Lei da Termodinâmica</b> diz que o calor recebido por um gás vira energia interna e trabalho, Q = ΔU + W; a <b>2ª Lei</b> explica por que nenhuma <b>máquina térmica</b> chega a 100% de rendimento: η = W/Qquente = 1 - Qfrio/Qquente, sempre menor que 1. A UEL 2014 usou o ciclo de Carnot, o rendimento máximo possível de uma máquina térmica, numa questão sobre a Revolução Industrial."
  },
  {
   "t": "check",
   "pergunta": "Uma barra de metal de 100 cm dilata mais 0,2 cm ao ser aquecida. Qual é o comprimento final da barra?",
   "opcoes": [
    "99,8 cm",
    "100 cm",
    "100,2 cm",
    "102 cm"
   ],
   "correta": 2,
   "explica": "O comprimento final é o inicial mais a dilatação: 100 + 0,2 = 100,2 cm.",
   "erroDica": "A dilatação (ΔL) se soma ao comprimento inicial (L0) para dar o comprimento final."
  },
  {
   "t": "h",
   "html": "Óptica e ondas"
  },
  {
   "t": "destaque",
   "titulo": "Reflexão, espelhos, refração e lentes",
   "html": "Na <b>reflexão</b>, o ângulo de incidência é igual ao ângulo de reflexão. Um <b>espelho plano</b> forma sempre uma imagem virtual, do mesmo tamanho do objeto, à mesma distância do espelho. Os <b>espelhos esféricos</b> e as <b>lentes</b> seguem a equação de Gauss: 1/f = 1/p + 1/p' (f é a distância focal, p a distância do objeto, p' a distância da imagem), com aumento A = -p'/p. Na <b>refração</b>, a luz muda de velocidade e de direção ao mudar de meio, seguindo a Lei de Snell: n1.senθ1 = n2.senθ2. Lentes convergentes corrigem a hipermetropia, e lentes divergentes corrigem a miopia."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: espelho plano",
   "html": "<p>Qual é a altura mínima de um espelho plano, fixado na parede, para que uma pessoa de 1,70 m veja o corpo inteiro refletido?</p><p><b>Passo 1:</b> lembre a regra do espelho plano: a altura mínima é sempre a metade da altura da pessoa, não importa a distância dela até o espelho.</p><p><b>Passo 2:</b> calcule a metade de 1,70 m.</p><p><b>Resposta:</b> a altura mínima é <b>0,85 m</b>. A UEL 2023 usou exatamente essa ideia numa questão sobre reformar um quarto: o espelho não precisa ter o tamanho da pessoa, e sim a metade.</p>"
  },
  {
   "t": "destaque",
   "titulo": "Ondas, som e cor",
   "html": "Toda onda periódica obedece a v = λ.f (velocidade igual a comprimento de onda vezes frequência). Ondas <b>transversais</b> vibram perpendicularmente à direção de propagação, como a luz; ondas <b>longitudinais</b> vibram na mesma direção da propagação, como o som. O som precisa de um meio material para se propagar, não existe som no vácuo. O <b>efeito Doppler</b> explica por que a sirene de uma ambulância parece mais aguda quando ela se aproxima e mais grave quando se afasta. A <b>luz branca</b> é a soma de todas as cores do espectro visível; ao atravessar um prisma, ela se separa por dispersão, porque cada cor sofre uma refração ligeiramente diferente. Numa corda ou tubo sonoro, os <b>harmônicos</b> são as frequências em que se formam ondas estacionárias, a base do som dos instrumentos musicais."
  },
  {
   "t": "check",
   "pergunta": "Uma onda sonora tem frequência de 340 Hz e se propaga no ar a 340 m/s. Qual é o seu comprimento de onda?",
   "opcoes": [
    "0,5 m",
    "1 m",
    "2 m",
    "340 m"
   ],
   "correta": 1,
   "explica": "Como v = λ.f, então λ = v/f = 340/340 = 1 m.",
   "erroDica": "Isole o comprimento de onda na fórmula v = λ.f: divida a velocidade pela frequência."
  },
  {
   "t": "h",
   "html": "Física moderna e cosmos"
  },
  {
   "t": "destaque",
   "titulo": "Dualidade da luz e efeito fotoelétrico",
   "html": "O edital da UEL avisa: Física Moderna e Física, Cosmos e Vida fazem parte do programa, mesmo aparecendo em pouquíssimas questões (3 nas últimas provas). No início do século 20, os físicos perceberam que a luz se comporta ora como onda, ora como partícula: é a <b>dualidade onda-partícula</b>. A luz é formada por pacotes de energia chamados <b>fótons</b>, cada um com energia E = h.f (h é a constante de Planck, f é a frequência). No <b>efeito fotoelétrico</b>, descrito por Einstein em 1905, um fóton de luz atinge uma superfície metálica e arranca um elétron, mas isso só acontece se a frequência da luz for maior que uma frequência mínima do metal: aumentar sozinha a intensidade da luz não arranca elétron nenhum se a frequência for baixa demais. É esse efeito que faz o poste de luz da rua acender sozinho ao anoitecer."
  },
  {
   "t": "destaque",
   "titulo": "Relatividade, radioatividade e cosmos",
   "html": "Pela <b>teoria da relatividade especial</b> de Einstein, as leis da física são as mesmas para qualquer observador em movimento retilíneo uniforme, e a velocidade da luz no vácuo é sempre a mesma, cerca de 3 × 10^8 m/s, para todo observador. Uma consequência é a <b>dilatação do tempo</b>: perto da velocidade da luz, o tempo passa mais devagar para quem está em movimento, do ponto de vista de quem ficou parado, o chamado paradoxo dos gêmeos. Na <b>radioatividade</b>, um núcleo instável emite partículas alfa, beta ou radiação gama para ficar mais estável, e a <b>meia-vida</b> é o tempo para metade dos núcleos de uma amostra se desintegrarem. A <b>fissão nuclear</b> (dividir um núcleo pesado, como o urânio-235) e a <b>fusão nuclear</b> (unir núcleos leves, como no Sol e nas estrelas) liberam energias enormes, e são a base tanto de usinas e bombas nucleares quanto da energia que sustenta o cosmos."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido: meia-vida",
   "html": "<p>Uma amostra radioativa tem 40 g de um isótopo com meia-vida de 5 anos. Quantos gramas restam depois de 15 anos?</p><p><b>Passo 1:</b> descubra quantas meias-vidas cabem em 15 anos: 15 ÷ 5 = 3 meias-vidas.</p><p><b>Passo 2:</b> divida a massa pela metade a cada meia-vida: 40 → 20 → 10 → 5.</p><p><b>Resposta:</b> restam <b>5 g</b> do isótopo depois de 15 anos. Esse é o mesmo raciocínio de uma questão real da UEL sobre a energia liberada pela fissão do urânio-235 na bomba de Hiroshima, uma das missões desta aula.</p>"
  },
  {
   "t": "check",
   "pergunta": "No efeito fotoelétrico, o que decide se um elétron será arrancado do metal ao receber luz?",
   "opcoes": [
    "Somente a intensidade da luz: quanto mais forte, melhor",
    "A frequência da luz precisa ser maior que a frequência de corte do metal",
    "A cor da luz não importa, só o tempo de exposição",
    "O efeito só acontece no escuro"
   ],
   "correta": 1,
   "explica": "O efeito fotoelétrico depende de a frequência da luz ser maior que a frequência de corte do metal: mesmo uma luz muito intensa, mas de frequência baixa, não arranca elétrons.",
   "erroDica": "Pense em frequência, que está ligada à cor da luz, e não em intensidade, que é o quão forte ela é."
  },
  {
   "t": "h",
   "html": "Para ir além"
  },
  {
   "t": "lista",
   "itens": [
    "<a href=\"https://www.todamateria.com.br/exercicios/exercicios-de-fisica/\" target=\"_blank\">Toda Matéria: exercícios de Física com gabarito</a>",
    "<a href=\"https://fisicaevestibular.com.br/novo/\" target=\"_blank\">Física e Vestibular: teoria completa e milhares de exercícios resolvidos</a>",
    "<a href=\"https://www.youtube.com/@professorboaro\" target=\"_blank\">Professor Boaro: o maior canal de Física do Brasil, no YouTube</a>",
    "<a href=\"https://estudeprisma.com/questoes/s/fisica/uel/di\" target=\"_blank\">Estude Prisma: questões da UEL de Física com gabarito comentado</a>",
    "<a href=\"https://projetomedicina.com.br/material-de-estudo/50-questoes-de-fisica-sobre-topicos-modernos/\" target=\"_blank\">Projeto Medicina: 50 questões de Física Moderna com gabarito</a>"
   ]
  },
  {
   "t": "h",
   "html": "Como revisar"
  },
  {
   "t": "p",
   "html": "Para fechar Física bem resolvida: refaça o quiz até acertar as 10 perguntas, depois complete toda a prática, prestando atenção especial nas questões de cálculo e nas duas discursivas, que mostram o formato do dia 2. Junte as fórmulas dos destaques desta aula num resumo só seu, com a unidade do Sistema Internacional ao lado de cada uma, e revise por ali nos últimos dias antes da prova. Na revisão diária, volte nas questões que você errou, refaça a conta do zero no papel, sem calculadora, e leia de novo a explicação até entender onde travou."
  }
 ],
 "quiz": [
  {
   "pergunta": "<p>Com a crescente popularização das corridas de rua, novos tênis são desenvolvidos prometendo aumento de desempenho e prevenção de lesões. O fenômeno físico explorado por todas as marcas é a deformação elástica, que explica a capacidade de materiais se deformarem e retornarem à sua forma original. Para minimizar as lesões, os compostos das entressolas, como borrachas, EVAs e placas de carbono, podem absorver os impactos e devolver a energia acumulada. Com base nos conceitos de Força Elástica e Conservação de Energia, assinale a alternativa correta.</p>",
   "opcoes": [
    "Quando a força aplicada a uma mola é dobrada, a sua deformação diminui até atingir o seu valor mínimo igual a zero.",
    "Segundo a Lei de Hooke, a força elástica realiza trabalho e por isso é uma força dissipativa, o que resulta no aumento da energia mecânica.",
    "A Lei de Hooke descreve que a deformação é diretamente proporcional à força aplicada, observando as características específicas do material utilizado.",
    "Em um sistema massa-mola, com atrito desprezível, a energia potencial elástica tem seu valor máximo na posição inicial ou zero.",
    "Em um sistema massa-mola, com atrito desprezível, a energia cinética do objeto tem seu valor máximo quando a mola atinge a maior deformação possível."
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br>a) Incorreta. Quando a força aplicada a uma mola é dobrada, a deformação sofrida pela mesma também tem o seu valor dobrado, conforme a definição F = k · x.<br>b) Incorreta. A força elástica não realiza trabalho nem é uma força dissipativa. Portanto, quando está sob ação, há a conservação da energia mecânica.<br>c) Correta. A Lei de Hooke efetivamente descreve que a deformação é diretamente proporcional à força aplicada, ou seja, F = k ·x. Na expressão, K é a constante elástica da mola, que tem características específicas referentes ao material utilizado.<br>d) Incorreta. Num sistema massa-mola, com atrito desprezível, a energia potencial elástica tem seu valor máximo quando a mola atinge a maior deformação possível.<br>e) Incorreta. Num sistema massa-mola, com atrito desprezível, a energia cinética do objeto tem seu valor máximo quando o objeto em movimento passa pela posição inicial ou zero.<br><small>Fonte: UEL 2026 · 1º dia · Questão 9, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2026 · 1º dia · Questão 9"
  },
  {
   "pergunta": "<p>A RioBotz, equipe de robótica da PUC-Rio, foi criada em 2003, quando estudantes, orientados pelo professor Marco Antônio Meggiolaro, decidiram construir robôs de combate. Hoje a RioBotz é uma das 32 equipes que entraram na chave do Battlebots, programa de televisão norteamericano de luta de robôs. A equipe foi a única da América Latina a participar da competição. Suponha que o robô da RioBotz tenha massa de 18 Kg e possua uma lança cuja ponta tenha uma área de secção transversal de 1 mm2. Admita que a lança atinja uma parede perpendicularmente com velocidade de 15 m/s, recue com uma velocidade de 3 m/s e que o período da colisão tenha durado 9 ms. Com base nos conhecimentos de física mecânica, assinale a alternativa que apresenta, corretamente, a pressão (em Pa) exercida pela lança sobre a parede, desconsiderando atritos e deformações.</p>",
   "opcoes": [
    "3,6.1010",
    "2,7.109",
    "5,4.109",
    "5,4.1010",
    "3,6.109"
   ],
   "correta": 0,
   "explica": "Gabarito oficial: <b>a)</b>.<br>O candidato precisa saber a força atuante sobre a parede: F = |∆Q| ∆t Ele também precisa obter a variação de momento linear (quantidade de movimento): ∆Q = Qf −Qi ∆Q = m · vf −m · vi ∆Q = 18·(−3)−18·15N·s = −54N·s−270N·s = −324N·s Logo, substituindo a variação do momento linear na equação da força, ele deve obter F = | −324|N · s = 36000N 9 · 10−3s O candidato também deve saber que, com a força, é possível calcular a pressão, que é a força obtida por unidade de área: P = F 36000N 1 · 10−6m2 = 3, 6 · 1010 Pa A =<br><small>Fonte: UEL 2024 · 1ª fase · Questão 7, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2024 · 1ª fase · Questão 7"
  },
  {
   "pergunta": "<blockquote><p>Leia o texto IV, a seguir, e responda às questões de 21 a 23. Texto IV O Brasil prepara-se para construir e lançar um satélite geoestacionário que vai levar banda larga a todos os municípios do país. Além de comunicações estratégicas para as Forças Armadas, o satélite possibilitará o acesso à banda larga mais barata a todos os municípios brasileiros. O ministro da Ciência e Tecnologia está convidando a Índia – que tem experiência neste campo, já tendo lançado 70 satélites – a entrar na disputa internacional pelo projeto, que trará ganhos para o consumidor nas áreas de Internet e telefonia 3G. (Adaptado de: BERLINCK, D. Brasil vai construir satélite para levar banda larga para todo país. O Globo, Economia, mar. 2012. Disponível em: &lt;http://oglobo.globo.com/economia/brasil-vai-construir-satelite-para-levar-banda-larga-para-todo-pais-4439167&gt;. Acesso em: 16 abr. 2012.)</p></blockquote><p>Suponha que o conjunto formado pelo satélite e pelo foguete lançador possua massa de 1, 0 · 103 toneladas e seja impulsionado por uma força propulsora de aproximadamente 5, 0 · 107 N, sendo o sentido de lançamento desse foguete perpendicular ao solo. Desconsiderando a resistência do ar e a perda de massa devido à queima de combustível, assinale a alternativa que apresenta, corretamente, o trabalho realizado, em joules, pela força resultante aplicada ao conjunto nos primeiros 2, 0 km de sua decolagem. Considere a aceleração da gravidade g = 10, 0 m/s2 em todo o percurso descrito.</p>",
   "opcoes": [
    "rr4, 0 · 107 J",
    "rr8, 0 · 107 J",
    "rr4, 0 · 1010 J",
    "rr8, 0 · 1010 J",
    "10, 0 · 1010 J"
   ],
   "correta": 3,
   "explica": "Gabarito oficial: <b>d)</b>.<br>Para resolver o problema, o candidato deveria saber que o trabalho realizado pelo foguete lançador é diretamente proporcional ao produto vetorial entre a força resultante aplicada no conjunto e a distância percorrida, cujo módulo é dado por W = Fres · d · Cos(0) (1) No entanto, deve-se observar que a força resultante (Fres), que aponta para cima, não pode ser igualada diretamente à força de propulsão (Fp), mas deve-se considerar a força gravitacional (Fg), ou força peso, que é contrária à força de propulsão. Nesse caso, Fres = (Fp −Fg) · d (2) onde Fg = m · g (produto entre a massa do satélite e a aceleração da gravidade terrestre). Dessa forma, substituindo-se a equação 2 na equação 1 e utilizando os dados do enunciado, tem-se que: W = (Fp −Fg) · d W = (Fp −m · g) · d W = [5 · 107N −(1 · 106kg · 10m/s2)] · (2 · 103m) W = [5 · 107N −1 · 107N] · (2 · 103m) W = (4 · 107N) · (2 · 103m) W = 8 · 1010N · m = 8 · 1010J<br><small>Fonte: UEL 2013 · 1ª fase · Questão 21, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2013 · 1ª fase · Questão 21"
  },
  {
   "pergunta": "<p><i>Questão reproduzida da prova original (tem figura). Leia na imagem e marque a alternativa abaixo.</i></p>",
   "opcoes": [
    "7 km/h para o leste, 9 km/h para o oeste, 3 km/h para o oeste.",
    "7 km/h para o oeste, 9 km/h para o leste, 3 km/h para o leste.",
    "13 km/h para o leste, 3 km/h para o oeste, 3 km/h para o leste.",
    "13 km/h para o oeste, 3 km/h para o leste, 3 km/h para o oeste.",
    "13 km/h para o leste, 9 km/h para o oeste, 3 km/h para o leste."
   ],
   "correta": 0,
   "explica": "Gabarito oficial: <b>a)</b>.<br>Inicialmente, observa-se que todos os objetos, parados e em movimento, podem ser estudados respeitando a direção oeste-leste. Ao considerar a margem do canal um referencial inercial, tem-se que: Ao colocar o sistema referencial inercial no pedestre, passa-se a nova configuração de acordo com a relatividade newtoniana: Dessa forma, as velocidades relativas da primeira gôndola, da segunda e do veneziano, em relação ao pedestre, são, respectivamente, de 7 km/h para o leste, 9 km/h para o oeste, 3 km/h para o oeste.<br><small>Fonte: UEL 2014 · 1ª fase · Questão 4, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2014 · 1ª fase · Questão 4"
  },
  {
   "pergunta": "<p><i>Questão reproduzida da prova original (tem figura). Leia na imagem e marque a alternativa abaixo.</i></p>",
   "opcoes": [
    "0,25",
    "0,50",
    "1,00",
    "2,00",
    "4,00"
   ],
   "correta": 4,
   "explica": "Gabarito oficial: <b>e)</b>.<br>O candidato deve saber que a expressão para a potência em função da tensão e ainda levando em conta a resistência do fio será: R = U 2 · A P = U 2 ρl R e l são iguais para as duas lâmpadas e diferem da área de secção transversal apenas, ou seja, uma tem maior secção transversal (fio mais grosso). Examinando a equação, a lâmpada que tem o filamento mais grosso deverá brilhar mais, pois sua potência é maior. U 2 · Amaior = πD2 Pmaior = Amaior ρ · l = = 4 U 2 · Amenor πD2 Pmenor Amenor ρ · l 4<br><small>Fonte: UEL 2023 · 1ª fase · Questão 10, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2023 · 1ª fase · Questão 10"
  },
  {
   "pergunta": "<p>As baterias de íon-lítio equipam atualmente vários aparelhos eletrônicos portáteis como laptops, máquinas fotográficas, celulares, entre outros. As baterias desses aparelhos são capazes de fornecer 1000 mAh (mil mili Ampère hora) de carga. Sabendo-se que a carga de um elétron é de 1, 60 × 10−19C, assinale a alternativa que representa corretamente o número de elétrons que fluirão entre os eletrodos até que uma bateria com essa capacidade de carga descarregue totalmente.</p>",
   "opcoes": [
    "0, 62 × 10−18",
    "1, 60 × 10−16",
    "5, 76 × 1013",
    "3, 60 × 1021",
    "2, 25 × 1022"
   ],
   "correta": 4,
   "explica": "Gabarito oficial: <b>e)</b>.<br>um elétron (e) é de 1,6.10−19 C (conforme dado do enunciado), Teremos: Q = i.t = 1A.h = 1A.(3600s) = 3600A.s Q = n.e, isto é, n = Q/e. Substituindo os valores, n = 3600A.s/1, 6.10 −19C, n = (3, 6/1, 6).103.1019, de onde se obtém n = 2, 25.1022.<br><small>Fonte: UEL 2012 · 1ª fase · Questão 58, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2012 · 1ª fase · Questão 58"
  },
  {
   "pergunta": "<p>Numa sala com temperatura de 18 °C, estão dispostos um objeto metálico e outro plástico, ambos com a mesma temperatura desse ambiente. Um indivíduo com temperatura corporal média de 36 °C segura esses objetos, um em cada mão, simultaneamente. Neste caso, é correto afirmar que há rápida transferência de calor</p>",
   "opcoes": [
    "da mão para o objeto metálico e lenta da mão para o plástico, por isso a sensação de frio maior proveniente do objeto metálico.",
    "do objeto metálico para a mão e lenta do plástico para a mão, por isso a sensação de frio maior proveniente do plástico.",
    "da mão para o plástico e lenta da mão para o objeto metálico, por isso a sensação de frio maior proveniente do plástico.",
    "do plástico para a mão e lenta do objeto metálico para a mão, por isso a sensação de calor maior proveniente do objeto metálico.",
    "da mão para o plástico e lenta da mão para o objeto metálico, por isso a sensação de calor maior proveniente do objeto metálico."
   ],
   "correta": 0,
   "explica": "Gabarito oficial: <b>a)</b>.<br>a) Correta. O calor sempre flui, espontaneamente, de objetos que têm maior temperatura para objetos com menor temperatura. Neste caso, o objeto com maior temperatura são as mãos. Além disso, o metal tem uma condutibilidade térmica superior à do plástico, sendo assim o calor passa mais rapidamente da mão para a peça metálica.<br>b) Incorreta. É impossível observar o fluxo líquido do calor da peça metálica para as mãos, uma vez que a temperatura das mãos é maior que a da peça metálica.<br>c) Incorreta. A transferência de calor das mãos para o plástico ocorre de maneira mais lenta, pois a condutibilidade térmica do plástico é menor que a do metal. Além disso, há uma sensação térmica de frio maior proveniente da peça metálica.<br>d) Incorreta. É impossível observar o fluxo líquido do calor do plástico para as mãos uma vez que a temperatura da mão é maior que a do plástico.<br>e) Incorreta. A transferência de calor da mão para o plástico ocorre de maneira mais lenta, pois a condutibilidade térmica do plástico é menor que a do metal. Além disso, há uma sensação térmica de frio maior proveniente da peça metálica.<br><small>Fonte: UEL 2019 · 1ª fase · Questão 33, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2019 · 1ª fase · Questão 33"
  },
  {
   "pergunta": "<p>A Revolução Industrial foi acompanhada por profundas transformações na Europa. Os novos meios de transporte, que utilizavam as máquinas térmicas recém-criadas, foram essenciais aos avanços relacionados à industrialização por todo o continente. Naquele período, foi demonstrado teoricamente que uma máquina térmica ideal é aquela que descreve um ciclo especial, denominado ciclo de Carnot. Sobre os princípios físicos da termodinâmica e do ciclo de Carnot, assinale a alternativa correta.</p>",
   "opcoes": [
    "As máquinas térmicas, que operam em ciclos, são incapazes de retirar o calor de uma fonte e o transformar integralmente em trabalho.",
    "Em uma máquina térmica que opera em ciclos de Carnot, ocorrem duas transformações isobáricas e duas isovolumétricas.",
    "No ciclo de Carnot, ocorre uma transformação reversível, enquanto as demais são irreversíveis.",
    "O rendimento de uma máquina térmica é nulo quando as etapas do ciclo de Carnot forem transformações reversíveis.",
    "Uma máquina térmica é capaz de transferir calor de um ambiente frio para um quente sem a necessidade de consumir energia externa."
   ],
   "correta": 0,
   "explica": "Gabarito oficial: <b>a)</b>.<br>a) Correta. Inexiste uma máquina térmica que transforme 100% do calor em trabalho, havendo sempre uma perda para o meio externo.<br>b) Incorreta. As transformações presentes no ciclo de Carnot são: duas isotérmicas e duas adiabáticas.<br>c) Incorreta. No ciclo de Carnot, existem duas transformações reversíveis e duas irreversíveis.<br>d) Incorreta. Para o ciclo de Carnot com duas transformações reversíveis, há o rendimento máximo, ou seja, o rendimento não é nulo.<br>e) Incorreta. Para transferências de calor de meios frios para meios mais quentes, a máquina térmica deve consumir energia externa ao seu ciclo.<br><small>Fonte: UEL 2014 · 1ª fase · Questão 25, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2014 · 1ª fase · Questão 25"
  },
  {
   "pergunta": "<p>As ambulâncias, comuns nas grandes cidades, quando transitam com suas sirenes ligadas, causam ao sentido auditivo de pedestres parados a percepção de um fenômeno sonoro denominado efeito Doppler. Sobre a aproximação da sirene em relação a um pedestre parado, assinale a alternativa que apresenta, corretamente, o efeito sonoro percebido por ele causado pelo efeito Doppler.</p>",
   "opcoes": [
    "Aumento no comprimento da onda sonora.",
    "Aumento na amplitude da onda sonora.",
    "Aumento na frequência da onda sonora.",
    "Aumento na intensidade da onda sonora.",
    "Aumento na velocidade da onda sonora."
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br>a) Incorreta. O comprimento de onda diminui devido a sua compressão à aproximação da fonte em relação ao receptor.<br>b) Incorreta. A amplitude não muda após o efeito ocorrer.<br>c) Correta. O efeito Doppler que ocorre no caso da aproximação de uma fonte sonora a um receptor parado faz com que a frequência da onda sonora aumente, isto é, o som se torna mais agudo.<br>d) Incorreta. A intensidade da onda sonora não muda após o efeito ocorrer.<br>e) Incorreta. A velocidade da onda não muda após o efeito ocorrer.<br><small>Fonte: UEL 2014 · 1ª fase · Questão 54, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2014 · 1ª fase · Questão 54"
  },
  {
   "pergunta": "<p>Isaac Newton acreditava que a luz era composta por partículas, enquanto seu contemporâneo Christiaan Huygens acreditava que a luz era uma onda. Essa controvérsia ressurgiu no início do século XX, quando concluiu-se que a luz não se tratava exclusivamente de um corpúsculo, tampouco de uma onda, mas ambas as características poderiam ser a ela atribuídas. Com base nos conhecimentos sobre a natureza da luz e seu comportamento, considere as afirmativas:</p><p>I. As lâmpadas fluorescentes emitem fótons de luz branca de mesma frequência.</p><p>II. A luz, ao impressionar uma chapa fotográfica, transfere-lhe energia, revelando seu aspecto corpuscular.</p><p>III. As várias cores do espectro visível são resultantes de fótons de diferentes energias.</p><p>IV. A luz difrata ao atravessar uma fenda, revelando seu aspecto ondulatório.</p><p>Assinale a alternativa correta.</p>",
   "opcoes": [
    "Somente as afirmativas I e II são corretas.",
    "Somente as afirmativas I e III são corretas.",
    "Somente as afirmativas III e IV são corretas.",
    "Somente as afirmativas I, II e IV são corretas.",
    "Somente as afirmativas II, III e IV são corretas."
   ],
   "correta": 4,
   "explica": "Gabarito oficial: <b>e)</b>.<br>I. Incorreta. Não existem fótons de luz branca. A luz branca é uma composição de todas as cores que, por sua vez, possuem diferentes energias.<br>II. Correta. O aspecto corpuscular da luz revela-se por pacotes de energia que são chamados de fótons e transferem energia para que determinadas reações químicas aconteçam.<br>III. Correta. Cada cor do espectro visível é diferenciada pela sua energia E que se relaciona com sua frequência por E = h · f<br>IV. Correta. A difração é um fenômeno característico de ondas que acontece, por exemplo, com as ondas mecânicas.<br><small>Fonte: UEL 2010 · 1ª fase · Questão 38, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2010 · 1ª fase · Questão 38"
  }
 ],
 "pratica": []
});
