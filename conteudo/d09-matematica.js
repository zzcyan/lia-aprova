window.MODULOS = window.MODULOS || [];
MODULOS.push({
 "id": "matematica",
 "disciplina": "Matemática",
 "titulo": "Matemática",
 "icone": "📐",
 "descricao": "Fórmula clara, exemplo resolvido passo a passo e questões reais da UEL e da Prova Paraná, para você treinar sem medo de número.",
 "provas": [
  "uel1",
  "parana",
  "ppmais",
  "unifil"
 ],
 "aula": [
  {
   "t": "h",
   "html": "Como Matemática cai nas provas"
  },
  {
   "t": "lista",
   "itens": [
    "Na Parte 1 da prova de Conhecimentos Gerais da UEL, Matemática tem <b>5 questões</b>, contextualizadas e sem uso de calculadora.",
    "O jeito típico da UEL: um texto ou gráfico de apoio (às vezes sobre outro assunto, como biologia ou arte) escondendo os números que você vai usar, seguido de afirmativas I, II, III, IV (ou V e F) e o comando <b>assinale a alternativa correta</b>.",
    "Na Prova Paraná, a prova é organizada por <b>descritores</b>, habilidades numeradas como D16 ou D27: cada item testa uma coisa só, de um jeito mais direto do que a UEL.",
    "Na UniFil, Matemática entra dentro das 30 questões gerais do vestibular, com nível mais básico.",
    "Dica 1: leia o comando da questão antes das afirmativas. Ele diz exatamente o que marcar.",
    "Dica 2: sublinhe os números e as unidades no texto de apoio. É ali que mora a conta que você precisa fazer.",
    "Dica 3: treine sem calculadora, principalmente frações, porcentagens e potências de 10 de cabeça."
   ]
  },
  {
   "t": "h",
   "html": "Aritmética que cai sempre: porcentagem, razão, proporção, juros e conjuntos numéricos"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Conjuntos numéricos:</b> N (naturais) está dentro de Z (inteiros), que está dentro de Q (racionais, toda fração de inteiros e toda dízima periódica), que está dentro de R (reais, inclui os irracionais, como pi e a raiz de 2). Os complexos (C) somam um número novo, i, com i ao quadrado igual a -1.<br><b>Porcentagem:</b> p% de um valor V é (p dividido por 100) vezes V.<br><b>Razão e proporção:</b> a razão entre a e b é a fração a/b. Numa proporção a/b = c/d vale sempre a vezes d = b vezes c (produto dos meios é igual ao produto dos extremos).<br><b>Juros simples:</b> J = C vezes i vezes t (i em número decimal). Montante M = C + J.<br><b>Juros compostos:</b> M = C vezes (1 + i) elevado a t: o juro de um período passa a render juro no período seguinte."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL 2015 perguntou o valor de uma parcela de imposto com juros e taxa fixa, exatamente esse tipo de conta (e essa questão está em uma das suas missões). Vamos resolver um caso parecido.<br>Um televisor custa R$ 1.200,00 à vista. Comprado a prazo, o valor é corrigido por juros compostos de 5% ao mês, durante 2 meses. Qual é o valor final?<br>Passo 1: identifique C = 1200, i = 0,05 e t = 2.<br>Passo 2: aplique M = C vezes (1 + i) elevado a t: M = 1200 vezes (1,05) ao quadrado = 1200 vezes 1,1025.<br>Passo 3: M = 1323,00.<br>Resposta: R$ 1.323,00."
  },
  {
   "t": "check",
   "pergunta": "Uma loja dá 20% de desconto em uma calça de R$ 150,00. Qual é o preço com desconto?",
   "opcoes": [
    "R$ 30,00",
    "R$ 120,00",
    "R$ 130,00"
   ],
   "correta": 1,
   "explica": "20% de 150 é 0,20 vezes 150 = 30 (esse é só o valor do desconto). O preço final é 150 menos 30 = 120, ou direto 150 vezes 0,80 = 120.",
   "erroDica": "Cuidado: R$ 30,00 é só o desconto, não o preço final. Subtraia o desconto de 150, ou multiplique 150 por 0,80 direto."
  },
  {
   "t": "h",
   "html": "Funções: afim, quadrática, exponencial e logarítmica"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Função afim:</b> f(x) = ax + b. O gráfico é uma reta: a é o coeficiente angular (a inclinação) e b é onde a reta cruza o eixo y.<br><b>Função quadrática:</b> f(x) = ax² + bx + c, com a diferente de 0. O gráfico é uma parábola. As raízes vêm de Bhaskara: x = (menos b mais ou menos a raiz de Delta) dividido por 2a, com Delta = b² menos 4ac. O vértice fica em x = menos b dividido por 2a.<br><b>Função exponencial:</b> f(x) = a vezes b elevado a x (b maior que 0 e diferente de 1): cresce se b for maior que 1, decresce se b estiver entre 0 e 1, sempre multiplicando pelo mesmo fator.<br><b>Função logarítmica:</b> log na base b de x é o expoente que se dá a b para chegar em x. É a função inversa da exponencial de base b."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL 2012 usou a escala Richter, que é logarítmica, para comparar terremotos (é uma das suas missões). Vamos resolver um caso parecido, agora com crescimento exponencial.<br>Uma cultura de bactérias começa com 200 indivíduos e dobra a cada hora. Quantas bactérias existem depois de 3 horas?<br>Passo 1: o modelo é N(t) = N0 vezes 2 elevado a t, com N0 = 200.<br>Passo 2: substitua t = 3: N(3) = 200 vezes 2³ = 200 vezes 8.<br>Passo 3: N(3) = 1600.<br>Resposta: 1.600 bactérias."
  },
  {
   "t": "check",
   "pergunta": "Na função f(x) = 2x + 4, qual é o valor de f(3)?",
   "opcoes": [
    "7",
    "10",
    "12"
   ],
   "correta": 1,
   "explica": "Substitua x por 3: f(3) = 2 vezes 3 + 4 = 6 + 4 = 10.",
   "erroDica": "Não esqueça de somar o termo +4 depois de multiplicar: 2 vezes 3 é só 6, falta somar 4 ainda."
  },
  {
   "t": "h",
   "html": "Geometria plana: áreas, semelhança, Pitágoras, circunferência"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Teorema de Pitágoras:</b> em um triângulo retângulo, a² = b² + c² (a é a hipotenusa, o lado maior, oposto ao ângulo reto).<br><b>Semelhança de triângulos:</b> triângulos semelhantes têm os mesmos ângulos e lados proporcionais: a razão entre lados correspondentes é sempre a mesma.<br><b>Áreas:</b> triângulo = (base vezes altura) dividido por 2; retângulo = base vezes altura; círculo = pi vezes o raio ao quadrado; trapézio = ((base maior + base menor) vezes altura) dividido por 2.<br><b>Circunferência:</b> comprimento = 2 vezes pi vezes o raio. Um ângulo central de theta graus corresponde a um arco de (theta dividido por 360) vezes o comprimento total."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL 2011 comparou as áreas das quadras de tênis de simples e de duplas usando porcentagem (é a sua próxima missão). Vamos praticar um caso parecido, com Pitágoras.<br>Uma escada de 5 m de comprimento está apoiada em uma parede, com a base a 3 m da parede. A que altura da parede a escada chega?<br>Passo 1: a escada, a parede e o chão formam um triângulo retângulo, com a escada como hipotenusa.<br>Passo 2: aplique Pitágoras: 5² = 3² + h², ou seja, 25 = 9 + h².<br>Passo 3: h² = 16, então h = 4.<br>Resposta: a escada chega a 4 m de altura."
  },
  {
   "t": "check",
   "pergunta": "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Qual é a medida da hipotenusa?",
   "opcoes": [
    "10 cm",
    "14 cm",
    "48 cm"
   ],
   "correta": 0,
   "explica": "a² = 6² + 8² = 36 + 64 = 100, então a = raiz de 100 = 10 cm.",
   "erroDica": "14 seria só somar os catetos, o que está errado. 48 seria multiplicar 6 vezes 8, que é o dobro da área, não a hipotenusa. Some os quadrados dos catetos e tire a raiz quadrada no final."
  },
  {
   "t": "h",
   "html": "Geometria espacial: volumes e áreas"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Prisma:</b> Volume = área da base vezes altura.<br><b>Cilindro:</b> Volume = pi vezes o raio ao quadrado vezes a altura. Área total = 2 vezes pi vezes o raio vezes (raio + altura).<br><b>Pirâmide e cone:</b> Volume = (área da base vezes altura) dividido por 3. No cone, Volume = (pi vezes o raio ao quadrado vezes a altura) dividido por 3.<br><b>Esfera:</b> Volume = (4/3) vezes pi vezes o raio ao cubo. Área da superfície = 4 vezes pi vezes o raio ao quadrado."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A Prova Paraná gosta de pedir o volume de embalagens redondas do dia a dia. E a UEL, na prova discursiva, já pediu o volume de casquinhas recheadas em formato de cone (ela está na sua prática). Vamos resolver um caso parecido.<br>Uma lata cilíndrica tem raio 5 cm e altura 10 cm. Qual é o volume aproximado, usando pi perto de 3?<br>Passo 1: use Volume = pi vezes o raio ao quadrado vezes a altura.<br>Passo 2: substitua: V = 3 vezes 5² vezes 10 = 3 vezes 25 vezes 10.<br>Passo 3: V = 750 cm³.<br>Resposta: aproximadamente 750 cm³ (ou 750 mL)."
  },
  {
   "t": "check",
   "pergunta": "Um cubo tem aresta 4 cm. Qual é o seu volume?",
   "opcoes": [
    "16 cm³",
    "48 cm³",
    "64 cm³"
   ],
   "correta": 2,
   "explica": "O cubo é um prisma de base quadrada: Volume = aresta vezes aresta vezes aresta = 4 x 4 x 4 = 64 cm³.",
   "erroDica": "16 é só a área de uma face (4 x 4). 48 é 4 x 4 x 3. Lembre que o volume do cubo multiplica a aresta por ela mesma três vezes: 4 x 4 x 4."
  },
  {
   "t": "h",
   "html": "Estatística e probabilidade"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Média:</b> soma de todos os valores dividida pela quantidade de valores.<br><b>Moda:</b> o valor que mais se repete.<br><b>Mediana:</b> o valor do meio, com os dados em ordem (se a quantidade for par, é a média dos dois valores centrais).<br><b>Probabilidade:</b> P(evento) = número de casos favoráveis dividido pelo número de casos possíveis. P(A ou B) = P(A) + P(B) menos P(A e B). Se A e B são independentes, P(A e B) = P(A) vezes P(B)."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL já usou o jogo de tabuleiro do filme Jumanji e o rodízio de carros de São Paulo para cobrar probabilidade e porcentagem (as duas estão na sua prática). Vamos resolver um caso parecido.<br>As notas de um aluno em 5 provas foram 6, 7, 7, 8 e 9. Quais são a média e a moda?<br>Passo 1: some as notas: 6 + 7 + 7 + 8 + 9 = 37.<br>Passo 2: divida pela quantidade de provas: 37 dividido por 5 = 7,4. Essa é a média.<br>Passo 3: o valor que mais se repete é o 7 (aparece duas vezes). Essa é a moda.<br>Resposta: média 7,4 e moda 7."
  },
  {
   "t": "check",
   "pergunta": "Uma urna tem 4 bolas vermelhas e 6 bolas azuis. Qual é a probabilidade de tirar uma bola vermelha?",
   "opcoes": [
    "4/10",
    "6/10",
    "4/6"
   ],
   "correta": 0,
   "explica": "Casos favoráveis (vermelhas) = 4. Casos possíveis (total de bolas) = 10. P = 4/10, o mesmo que 2/5.",
   "erroDica": "4/6 compara vermelhas com azuis, não com o total de bolas. Sempre divida pelo total de casos possíveis, aqui, as 10 bolas ao todo."
  },
  {
   "t": "h",
   "html": "Análise combinatória"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Princípio fundamental da contagem:</b> se uma escolha tem m possibilidades e outra, independente, tem n possibilidades, as duas juntas têm m vezes n possibilidades.<br><b>Permutação simples</b> (a ordem importa, usa todos os elementos): P(n) = n! = n vezes (n-1) vezes ... vezes 1.<br><b>Arranjo</b> (a ordem importa, escolhe p entre n): A(n,p) = n! dividido por (n-p)!.<br><b>Combinação</b> (a ordem não importa): C(n,p) = n! dividido por (p! vezes (n-p)!)."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A Prova Paraná gosta de contar de quantas formas pessoas podem ocupar vagas de estacionamento (é a sua próxima missão). Vamos resolver um caso parecido.<br>Uma senha é formada por 2 letras (de um alfabeto de 26) seguidas de 3 algarismos (de 0 a 9), podendo repetir. Quantas senhas diferentes existem?<br>Passo 1: cada letra tem 26 opções e cada algarismo tem 10 opções.<br>Passo 2: multiplique tudo: 26 x 26 x 10 x 10 x 10.<br>Passo 3: 676 x 1000 = 676.000.<br>Resposta: 676.000 senhas diferentes."
  },
  {
   "t": "check",
   "pergunta": "De quantas formas 3 amigos podem se sentar em 3 cadeiras em fila?",
   "opcoes": [
    "3",
    "6",
    "9"
   ],
   "correta": 1,
   "explica": "É uma permutação simples de 3 elementos: 3! = 3 x 2 x 1 = 6.",
   "erroDica": "9 viria de multiplicar 3 x 3, o que está errado aqui. Para organizar todos os elementos em fila, use o fatorial: 3! = 6."
  },
  {
   "t": "h",
   "html": "Trigonometria"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>No triângulo retângulo</b> (ângulo theta, cateto oposto, cateto adjacente e hipotenusa): seno de theta = cateto oposto / hipotenusa; cosseno de theta = cateto adjacente / hipotenusa; tangente de theta = cateto oposto / cateto adjacente = seno / cosseno.<br><b>Ângulos notáveis:</b> seno de 30° = 1/2, cosseno de 30° = raiz de 3 sobre 2; seno de 45° = cosseno de 45° = raiz de 2 sobre 2; seno de 60° = raiz de 3 sobre 2, cosseno de 60° = 1/2.<br><b>Lei dos senos:</b> a / seno de A = b / seno de B = c / seno de C.<br><b>Lei dos cossenos:</b> a² = b² + c² menos 2bc vezes cosseno de A."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "Fique de olho: a Prova Paraná cobra bastante ângulo de elevação e triângulo retângulo em situações do dia a dia, tipo altura de prédio ou de morro. Vamos resolver um caso parecido.<br>Uma pessoa vê o topo de um prédio com ângulo de 30° em relação ao chão, estando a 20 m do prédio. Qual é a altura aproximada do prédio? (use tangente de 30° perto de 0,58)<br>Passo 1: tangente do ângulo = cateto oposto (a altura) dividido pelo cateto adjacente (a distância).<br>Passo 2: 0,58 = altura dividido por 20.<br>Passo 3: altura = 0,58 vezes 20 = 11,6.<br>Resposta: aproximadamente 11,6 m."
  },
  {
   "t": "check",
   "pergunta": "Em um triângulo retângulo, a hipotenusa mede 10 cm e o ângulo tem seno igual a 0,5. Qual é o cateto oposto a esse ângulo?",
   "opcoes": [
    "2 cm",
    "5 cm",
    "20 cm"
   ],
   "correta": 1,
   "explica": "seno de theta = cateto oposto / hipotenusa. Então 0,5 = cateto oposto / 10, ou seja, cateto oposto = 0,5 vezes 10 = 5 cm.",
   "erroDica": "20 viria de dividir errado (10 dividido por 0,5). Lembre: cateto oposto = seno vezes hipotenusa, não hipotenusa dividida pelo seno."
  },
  {
   "t": "h",
   "html": "Sequências, progressões, matrizes e sistemas"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>PA (progressão aritmética):</b> cada termo é o anterior mais uma razão r constante. Termo geral: a(n) = a(1) + (n-1) vezes r.<br><b>PG (progressão geométrica):</b> cada termo é o anterior vezes uma razão q constante. Termo geral: a(n) = a(1) vezes q elevado a (n-1).<br><b>Matrizes:</b> se organizam em linhas e colunas. Para somar, some posição a posição; para multiplicar, linha da primeira vezes coluna da segunda.<br><b>Sistemas lineares:</b> resolver é achar os valores que satisfazem todas as equações ao mesmo tempo, por substituição, adição ou escalonamento."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL já usou progressão geométrica para calcular a valorização de um quadro de Van Gogh e o número de crachás de um campeonato de xadrez. Vamos resolver um caso parecido, agora com PA.<br>O primeiro termo de uma PA é 5 e a razão é 3. Qual é o décimo termo?<br>Passo 1: use a(n) = a(1) + (n-1) vezes r, com a(1) = 5, r = 3 e n = 10.<br>Passo 2: a(10) = 5 + (10-1) vezes 3 = 5 + 9 vezes 3 = 5 + 27.<br>Passo 3: a(10) = 32.<br>Resposta: o décimo termo é 32."
  },
  {
   "t": "check",
   "pergunta": "Numa PG de primeiro termo 2 e razão 3, qual é o terceiro termo?",
   "opcoes": [
    "8",
    "11",
    "18"
   ],
   "correta": 2,
   "explica": "a(3) = a(1) vezes q elevado a (3-1) = 2 vezes 3² = 2 vezes 9 = 18.",
   "erroDica": "11 viria de somar 2 + 3 + 3 + 3, que é regra de PA, não de PG. Na PG você multiplica pela razão, não soma."
  },
  {
   "t": "h",
   "html": "Geometria analítica e polinômios"
  },
  {
   "t": "destaque",
   "titulo": "Para lembrar",
   "html": "<b>Distância entre dois pontos</b> A(x1,y1) e B(x2,y2): d = raiz de (x2-x1)² + (y2-y1)².<br><b>Coeficiente angular</b> da reta que passa por A e B: m = (y2-y1) dividido por (x2-x1).<br><b>Equação da reta</b> que passa por (x1,y1) com coeficiente angular m: y - y1 = m vezes (x - x1).<br><b>Equação da circunferência</b> de centro (a,b) e raio r: (x-a)² + (y-b)² = r².<br><b>Polinômios:</b> o grau é o maior expoente da variável. As raízes são os valores que anulam o polinômio, e um polinômio de grau n tem, no máximo, n raízes reais."
  },
  {
   "t": "exemplo",
   "titulo": "Exemplo resolvido",
   "html": "A UEL já pediu o ponto simétrico de uma imagem em relação a uma reta, numa exposição sobre a beleza da Matemática (ela está na sua prática). Vamos resolver um caso mais simples, de coeficiente angular.<br>Uma reta passa pelos pontos A(1,2) e B(3,6). Qual é o coeficiente angular dessa reta?<br>Passo 1: use m = (y2-y1) dividido por (x2-x1).<br>Passo 2: substitua: m = (6-2) dividido por (3-1) = 4 dividido por 2.<br>Passo 3: m = 2.<br>Resposta: o coeficiente angular é 2."
  },
  {
   "t": "check",
   "pergunta": "Qual é a distância entre os pontos A(0,0) e B(3,4)?",
   "opcoes": [
    "5",
    "7",
    "12"
   ],
   "correta": 0,
   "explica": "d = raiz de (3-0)² + (4-0)² = raiz de (9+16) = raiz de 25 = 5.",
   "erroDica": "7 seria só somar 3 + 4, o que está errado: distância não é soma direta. Use o Teorema de Pitágoras: some os quadrados das diferenças e tire a raiz no final."
  },
  {
   "t": "h",
   "html": "Para ir além e como revisar"
  },
  {
   "t": "lista",
   "itens": [
    "<a href=\"https://pt.khanacademy.org/math/pt-mat-prep-em-todo-conteudo\" target=\"_blank\">Khan Academy: prepare-se para o Ensino Médio (todo o conteúdo, com exercícios)</a>",
    "<a href=\"https://www.youtube.com/playlist?list=PLTyHGJxdlqqsxt2P71_5VbKYdhYn3DDqW\" target=\"_blank\">Matemática Linda (Prof. Tatarin): questões resolvidas da UEL</a>",
    "<a href=\"https://www.youtube.com/watch?v=2jd73UL5b7s\" target=\"_blank\">Matemática Linda: assuntos mais cobrados na UEL de 2016 a 2023</a>",
    "<a href=\"https://www.youtube.com/playlist?list=PLTPg64KdGgYgFpOFt2TETLdEuBB4fvxxf\" target=\"_blank\">Professor Ferretto: Matemática Básica, curso completo</a>",
    "<a href=\"https://www.youtube.com/watch?v=vEacl6veeWY\" target=\"_blank\">Matheus Konlosi: questões de Matemática da 1ª fase da UEL</a>",
    "Como revisar: refaça o quiz até acertar todas as 10 questões.",
    "Depois, faça a prática (30 questões) no seu ritmo, prestando atenção aos níveis fácil, médio e difícil.",
    "Na revisão do dia, volte só nas questões que você errou: refaça a conta do zero, sem olhar a resposta primeiro."
   ]
  }
 ],
 "quiz": [
  {
   "pergunta": "<p>Leia o texto a seguir. No Brasil, o sistema de voto proporcional funciona assim: aplicam-se os chamados quocientes eleitoral e partidário. O quociente eleitoral é definido pela soma do número de votos válidos (V) – que são os votos de legenda e os votos nominais, excluindo-se os brancos e os nulos – dividida pelo número de cadeiras em disputa (C). A partir daí, calcula-se o quociente partidário, que é o resultado do número de votos válidos obtidos pelo partido isolado ou pela coligação, dividido pelo quociente eleitoral. O quociente partidário é um número fundamental, pois ele indica quantas cadeiras poderão ser ocupadas pelos candidatos aptos do respectivo partido ou coligação. Adaptado de Revista Eletrônica da Escola Judiciária Eleitoral. Número 5. Ano 3. Considere que a eleição para vereador em Amado Florêncio funciona como descrito anteriormente. Suponha que existam 12 cadeiras em disputa e que nesta eleição para vereador a soma do número dos votos válidos seja de 3996. A coligação “Por uma Nova Amado Florêncio” obteve 333 votos válidos. Já a coligação “Amado Florêncio Renovada” obteve 666 votos válidos.</p><p>Assinale a alternativa que apresenta, correta e respectivamente, o quociente partidário dessas coligações: “Por uma Nova Florêncio” e “Amado Florêncio Renovada”.</p>",
   "opcoes": [
    "1 e 2",
    "2 e 3",
    "2 e 4",
    "3 e 6",
    "4 e 8"
   ],
   "correta": 0,
   "explica": "Gabarito oficial: <b>a)</b>.<br>Do enunciado segue que o quociente eleitoral, QE, é dado por QE = V C e que o quociente partidário da coligação X, QP (X), é dado por QP (X) = V (X) QE , onde V (X) representa o número de votos válidos obtidos pela coligação X. Na eleição para vereador na cidade de Amado Florêncio, temos C = 12 e V = 3996. Assim QE = = 333. 3996 12 Consequentemente, o quociente partidário para a coligação “Por uma Nova Amado Florêncio” é 333 333 = 1. Por outro lado, o quociente partidário para a coligação “Amado Florêncio Renovada” é 666 333 = 2.<br><small>Fonte: UEL 2019 · 1ª fase · Questão 59, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2019 · 1ª fase · Questão 59"
  },
  {
   "pergunta": "<p><i>Questão reproduzida da prova original (tem figura). Leia na imagem e marque a alternativa abaixo.</i></p>",
   "opcoes": [
    "Somente as afirmativas I e II são corretas.",
    "Somente as afirmativas I e IV são corretas.",
    "Somente as afirmativas III e IV são corretas.",
    "Somente as afirmativas I, II e III são corretas.",
    "Somente as afirmativas II, III e IV são corretas."
   ],
   "correta": 1,
   "explica": "Gabarito oficial: <b>b)</b>.<br>I. Correta. Seja P a probabilidade de se escolher, ao acaso, dentre as mulheres de todas as idades em território brasileiro, uma vítima representada pela pesquisa. Nestas condições: P = 17.000.000 100.000.000 = 17 100 = 17%<br>II. Incorreta. A probabilidade de escolhermos ao acaso uma mulher – do segmento e período pesquisado – não significa que se aplique de maneira uniforme a todos os segmentos da sociedade. Em particular, não é possível inferir que, dado um brasileiro, ele conheça uma mulher vítima de violência a cada quatro conhecidas sua. Além disso, a notícia não indica que a violência sofrida pelas mulheres pesquisadas é conhecida pelas pessoas de seu entorno.<br>III. Incorreta. Os 17 milhões de mulheres citadas na notícia referem-se aos 24, 4% do espaço amostral da pesquisa, que é um subconjunto próprio daquele formado pelas mulheres brasileiras. Mais precisamente, retira-se, do conjunto maior, as que estejam abaixo da idade de corte da pesquisa.<br>IV. Correta. Por um lado, 25% representam 25 100 que, ao simplificarmos, obteremos 1 4. Por outro lado, 24% representam 24 100 que, ao simplificarmos, obteremos 12 50 = 6 25.<br><small>Fonte: UEL 2022 · fase única · Questão 14, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2022 · fase única · Questão 14"
  },
  {
   "pergunta": "<p><i>Questão reproduzida da prova original (tem figura). Leia na imagem e marque a alternativa abaixo.</i></p>",
   "opcoes": [
    "22 cm",
    "25 cm",
    "28 cm",
    "32 cm",
    "44 cm"
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br>a equação que fornece este crescimento é dada por: (y −y0) = m(t −t0). Observando a parte inferior da figura 12 temos que: a) em 1991, t0 = 0 anos, o raio da base do tronco da árvore é y0 = 0 cm. b) em 2011, t = 20 anos, o raio da base do tronco da árvore é y = 16 cm. Substituindo estes dados em (y −y0) = m(t −to) , segue que: m = 16 20 = 4 5 , de modo que a equação y = 4 5.t descreve o crescimento do raio da base deste tronco de árvore. Como em 2026 a árvore terá t = 35 anos, o raio do tronco será: y = 4 5.35 = 28 cm.<br><small>Fonte: UEL 2012 · 1ª fase · Questão 22, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2012 · 1ª fase · Questão 22"
  },
  {
   "pergunta": "<p>Leia o texto a seguir. A unidade é indispensável: simplesmente para que qualquer coisa seja, exista, deve, como verdadeira afirmação de si mesmo, negar aquilo que não é. Da unidade, segue que N = {1, 2, 3, 4, 5, . . .}. Já a criação do zero cunha uma separação entre nosso sistema de símbolos numéricos e a estrutura do mundo natural. A Matemática e a Ciência desenvolveram um sistema consistente que exige que quantidades desconhecidas devam ser criadas e manipuladas, nos levando a considerar o conjunto Z = {. . . , −5, −4, −3, −2, −1, 0, 1, 2, 3, 4, 5, . . .}. Adaptado de: Robert Lawlor. Mitos, Deuses, Mistérios: Geometria Sagrada. Edições del Prado. 1982. Há uma função f que relaciona os conjuntos N e Z apresentados no texto. Considere f : N →Z dada por n  2 , se n é par   f(n) = −n + 1 , se n é ímpar   2 Sobre a função f e os conjuntos presentes no enunciado, assinale a alternativa correta.</p>",
   "opcoes": [
    "Existe n ∈N tal que f(n) = −1023 + 1 2",
    "f(2n) + f(2n + 1) = 0 para todo n ∈N",
    "Não existe n ∈N tal que f(n) = −15",
    "Se n, m são naturais ímpares tais que f(n) = f(m), então n ̸= m",
    "Sendo a unidade indispensável, f(2n) + n = 1 para todo n ∈N"
   ],
   "correta": 1,
   "explica": "Gabarito oficial: <b>b)</b>.<br>a) Incorreta. Observe que −1023 + 1 ̸∈Z, pois −1023 + 1 é 2 ímpar. Como Z é o contradomínio da função, então não existe n ∈N tal que f(n) = −1023 + 1 . 2<br>b) Correta. Como, para todo n ∈N, 2n é par e 2n + 1 é ímpar, então f(2n)+f(2n+1) = 2n 2 + −(2n + 1) + 1 = 2 n + −2n −1 + 1 = n + −2n = n −n = 0. 2 2<br>c) Incorreta. Observe que f(31) = −31 + 1 = −15. 2<br>d) Incorreta. Se n, m são naturais ímpares tais que f(n) = f(m),então −n + 1 = −m + 1 , que implica que −n + 2 2 1 = −m + 1 e, por conseguinte, n = m.<br>e) Incorreta. Como, para todo n ∈N, 2n é par, então f(2n) = 2n 2 = n. Logo f(2n) + n = n + n = 2n, que é par. Como 1 é ímpar, temos que f(2n) + n é diferente de 1.<br><small>Fonte: UEL 2024 · 1ª fase · Questão 8, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2024 · 1ª fase · Questão 8"
  },
  {
   "pergunta": "<blockquote><p>Leia o texto V, a seguir, e responda às questões 38 e 39. Texto V O vídeo Kony 2012 tornou-se o maior sucesso da história virtual, independente da polêmica causada por ele. Em seis dias, atingiu a espantosa soma de 100 milhões de espectadores, aproximadamente. No primeiro dia na Internet, o vídeo foi visto por aproximadamente 100.000 visitantes. (Adaptado de: PETRY, A. O Mocinho vai prender o bandido... e 100 milhões de jovens querem ver. Veja, ano 45, n.12, 2261.ed., 21 mar. 2012.)</p></blockquote><p>Seja A = (a1, a2, a3, a4, a5, a6) a sequência que fornece a quantidade de acessos diários ao vídeo na Internet, an = k, onde k é uma constante real e n = 2, 3, 4, 5, 6. obedecendo a regra an−1 Sabendo que a fórmula da soma de uma PG é Sn = a1(kn −1) , onde k ̸= 1, considere as afirmativas a seguir. k −1 I. A sequência A é uma PG cuja razão está no intervalo 2 &lt; k &lt; 3 e S6 = 108.</p><p>II. A sequência A é uma PG cuja razão está no intervalo 2 &lt; k &lt; 3 e a6 = 105.</p><p>III. A sequência A é uma PG cuja razão está no intervalo 3 &lt; k &lt; 4 e S6 = 108.</p><p>IV. A sequência A é uma PG tal que S6 = a1(1 + k + k2 + k3 + k4 + k5) = 108 e a1 = 105.</p><p>Assinale a alternativa correta.</p>",
   "opcoes": [
    "Somente as afirmativas I e II são corretas.",
    "Somente as afirmativas I e IV são corretas.",
    "Somente as afirmativas III e IV são corretas.",
    "Somente as afirmativas I, II e III são corretas.",
    "Somente as afirmativas II, III e IV são corretas."
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br>Utilizando os dados da questão tem-se que S6 = 100.000.000 = 108 e a1 = 100.000 = 105. Assim, a afirmativa IV está correta e a afirmativa II está incorreta, pois a6 ̸= 100.000. Note que S6 = a1(1 + k + k2 + k3 + k4 + k5), por definição. Para verificar as demais afirmativas, deve-se encontrar o intervalo de valores de k. Assim, substituindo os dados na equação da soma de uma PG, tem-se: S6 = a1(kn −1) = 100.000(k6 −1) = 100.000.000 ⇒(k6 −1) = 1.000 k −1 k −1 k −1 Para k = 3 (kn −1) ⇒(36 −1) = 729 −1 = 364 &lt; 1.000. k −1 3 −1 2 Portanto k /∈(2, 3) e a afirmativa I está incorreta. Para k = 4 (kn −1) ⇒(46 −1) = 4096 −1 = 1365 &gt; 1.000. k −1 4 −1 3 Portanto k ∈(3, 4) e a afirmativa III está correta.<br><small>Fonte: UEL 2013 · 1ª fase · Questão 38, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2013 · 1ª fase · Questão 38"
  },
  {
   "pergunta": "<p>Simão Botelho e Teresa Albuquerque moram em casas vizinhas e vivem um amor de perdição através de suas janelas em plena Portugal do século XIX. Quando são proibidos de se ver, combinam uma fuga para além das fronteiras de Portugal e precisam contabilizar suas economias. Teresa, com auxílio de uma lanterna a óleo acesa, quer informar a Simão sua quantia por meio de um código mutuamente combinado. Para isso, realiza de sua janela uma sequência de movimentos que simbolizam 6 algarismos m5, m4, m3, m2, m1 e m0 , nesta ordem, de forma que cada algarismo pertença ao conjunto {0, 1} utilizando a seguinte convenção: i) Levar a lanterna ao seu lado esquerdo simboliza o número 0; ii) Levar a lanterna ao seu lado direito simboliza o número 1. A sequência transmitida por Teresa a Simão é transformada, por ele, em um número natural N através da seguinte regra: N = m525 + m424 + m323 + m222 + m121 + m020 Sabendo que N = 42 é a quantia informada por Teresa a Simão, assinale a alternativa que apresenta, correta e ordenadamente, a sequência m5, m4, m3, m2, m1, m0 de algarismos simbolizada por ela.</p>",
   "opcoes": [
    "0, 0, 1, 1, 1, 1",
    "0, 1, 0, 1, 0, 1",
    "1, 0, 1, 0, 1, 0",
    "1, 0, 1, 1, 0, 0",
    "1, 1, 0, 0, 1, 0"
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br>Escrevendo 42 como soma de potências de 2, temos que 42 = 32 + 8 + 2 = 25 + 23 + 2 = 1 · 25 + 0 · 24 + 1 · 23 + 0 · 22 + 1 · 21 + 0 · 20 , concluímos que a sequência m5, m4, m3, m2, m1, m0 de algarismos simbolizada por Teresa Albuquerque é 1, 0, 1, 0, 1, 0. Solução alternativa: Observe que N −m020 = m525 + m424 + m323 + m222 + m121 é divisível por 21. Como m0 pertence ao conjunto {0, 1} e N = 42, então temos duas possiblidades para N −m020, a saber: 42 ou 41. Como N −m020 é divisível por 21, então N −m020 = 42. Ou seja: m0 = 0 . Logo 42 −0 · 20 = m525 + m424 + m323 + m222 + m121. Portanto 42 = m525 + m424 + m323 + m222 + m121. Da mesma forma, 42−m121 = m525 +m424 +m323 +m222 é divisível por 22 . Como m1 pertence ao conjunto {0, 1}, então temos duas possiblidades para 42 −m121, a saber: 42 ou 40. Como é divisível por 22, então 42 −m121 = 40. Ou seja: m1 = 1. Logo 42 −1 · 21 = m525 + m424 + m323 + m222 . Portanto 40 = m525 + m424 + m323 + m222. Da mesma forma, 40 −m222 = m525 + m424 + m323 é divisível por 23. Como m2 pertence ao conjunto {0, 1}, então temos duas possiblidades para 40−m222, a saber: 40 ou 36. Como é divisível por 23, então 40−m222 = 40. Ou seja: m2 = 0. Logo 40 −0 · 22 = m525 + m424 + m323 . Portanto 40 = m525 + m424 + m323 . Da mesma forma, 40 −m323 = m525 + m424 é divisível por 24. Como m3 pertence ao conjunto {0, 1} , então temos duas possiblidades para 40 −m323, a saber: 40 ou 32. Como é divisível por 24, então 40 −m323 = 32. Ou seja: m3 = 1. Logo 40 −1 · 23 = m525 + m424. Portanto 32 = m525 + m424. Da mesma forma, 32 −m424 = m525 é divisível por 25. Como m4 pertence ao conjunto {0, 1}, então temos duas possiblidades para 32 −m424, a saber: 32 ou 16. Como é divisível por 25, então 32 −m424 = 32. Ou seja: m4 = 0. Logo 32 −0 · 24 = m525. Portanto 32 = m525. Por fim, como 32 = 25 = m525, segue que m5 = 1, o que nos permite concluir que a sequência m5, m4, m3, m2, m1, m0 de algarismos simbolizada por Teresa Albuquerque é 1, 0, 1, 0, 1, 0.<br><small>Fonte: UEL 2021 · fase única · Questão 11, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2021 · fase única · Questão 11"
  },
  {
   "pergunta": "<p>Leia o texto a seguir: A teledensidade é um índice que corresponde ao número de celulares a cada 100 habitantes. A teledensidade do Brasil registrou um crescimento de 22,82% de fevereiro de 2008 para fevereiro deste ano. (IDG Now. Brasil tem mais de 152 milhões de celulares em fevereiro de 2009. 20 mar. 2009. Disponível em &lt;http://idgnow.uol.com.br/telecom /2009/03/20/brasil-tem-mais-de-152-milhoes-de-celulares-em-fevereiro-de-2009/&gt; Acesso em: 5 abr. 2009.) Sabendo-se que a teledensidade, em fevereiro de 2008, era de 65,09, é correto afirmar que, em fevereiro de 2009, o número de telefones celulares entre cada dez brasileiros era de aproximadamente</p>",
   "opcoes": [
    "5",
    "6",
    "7",
    "8",
    "9"
   ],
   "correta": 3,
   "explica": "Gabarito oficial: <b>d)</b>.<br>de 2009, então a teledensidade em fevereiro de 2009 é 65, 09 + 22, 82 100 65, 09 ≈79, 94 Portanto, havia, aproximadamente, 8 entre cada 10 brasileiros com telefones celulares.<br><small>Fonte: UEL 2010 · 1ª fase · Questão 58, caderno comentado pela COPS/UEL.</small>",
   "fonte": "UEL 2010 · 1ª fase · Questão 58"
  },
  {
   "pergunta": "<p>A bula de um remédio infantil sugere que a dosagem administrada seja proporcional à massa corporal da criança, sendo recomendadas 4 gotas desse medicamento para cada 3 kg. Qual deve ser a dosagem desse medicamento para uma criança com 21 kg de massa corporal?</p>",
   "opcoes": [
    "11 gotas.",
    "22 gotas.",
    "28 gotas.",
    "63 gotas.",
    "84 gotas."
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br><small>Fonte: Prova Paraná Mais 2025 · 3ª série · MAT · Item 50 (gabarito oficial SEED-PR/CAEd).</small>",
   "fonte": "Prova Paraná Mais 2025 · 3ª série · MAT · Item 50"
  },
  {
   "pergunta": "<p>O valor a ser pago pela energia elétrica de uma residência depende da bandeira de cobrança. Na bandeira verde, é cobrado um valor base de R$ 63,00 para cada 100 kw/h consumido. Na bandeira amarela e nas vermelhas 1 e 2, é cobrado um valor adicional ao valor base para cada 100 kw/h consumido. Os valores adicionais seguem os dados do quadro abaixo. Bandeira de cobrança Adicional Verde Sem valor adicional Amarela R$ 1,50 para cada 100 kw/h Vermelha 1 R$ 3,00 para cada 100 kw/h Vermelha 2 R$ 4,50 para cada 100 kw/h No mês de agosto de 2025, uma família consumiu 400 kw/h, condicionado à bandeira de cobrança vermelha 1. Qual foi o valor pago, por esta família, pelo consumo da energia no mês de agosto de 2025?</p>",
   "opcoes": [
    "R$ 270,00",
    "R$ 264,00",
    "R$ 261,00",
    "R$ 255,00",
    "R$ 252,00"
   ],
   "correta": 1,
   "explica": "Gabarito oficial: <b>b)</b>.<br><small>Fonte: Prova Paraná Mais 2025 · 3ª série · MAT · Item 48 (gabarito oficial SEED-PR/CAEd).</small>",
   "fonte": "Prova Paraná Mais 2025 · 3ª série · MAT · Item 48"
  },
  {
   "pergunta": "<p>Em um determinado jogo de tabuleiro, existem algumas rodadas em que cada jogador deve lançar um dado e multiplicar o valor obtido no lançamento por um número que representa o fator de força da rodada. O jogador deve anotar o resultado obtido dessa multiplicação, pois, ao final das rodadas, os resultados são adicionados para determinar a pontuação final. Considere que quatro jogadores tenham passado por três rodadas e anotaram os valores que obtiveram nos lançamentos dos dados, conforme apresentado no quadro abaixo. Valores obtidos no lançamento dos dados Jogadores Pontuação Final 1ª Rodada 2ª Rodada 3ª Rodada Laura 2 4 5 15 Bernardo 1 2 3 8 Pedro 2 2 5 9 Marina 3 4 2 ? Nessas condições, qual foi a pontuação final de Marina?</p>",
   "opcoes": [
    "8",
    "9",
    "11",
    "13",
    "15"
   ],
   "correta": 2,
   "explica": "Gabarito oficial: <b>c)</b>.<br><small>Fonte: Prova Paraná Mais 2025 · 3ª série · MAT · Item 46 (gabarito oficial SEED-PR/CAEd).</small>",
   "fonte": "Prova Paraná Mais 2025 · 3ª série · MAT · Item 46"
  }
 ],
 "pratica": []
});
