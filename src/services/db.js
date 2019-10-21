import moment from 'moment';

export function searchBooks(params = {}) {
  return new Promise((resolve, reject) => {
    let items = [...DB];

    if (params.endDate) {
      items = items.filter(
        item => item.year <= Number(moment(params.endDate).format('YYYY'))
      );
    }

    if (params.startDate) {
      items = items.filter(
        item => item.year >= Number(moment(params.startDate).format('YYYY'))
      );
    }

    if (params.search) {
      const search = params.search.toLowerCase();
      items = items.filter(
        item =>
          (item.title && item.title.toLowerCase().includes(search)) ||
          (item.author && item.author.toLowerCase().includes(search)) ||
          (item.isbn && item.isbn.find(isbn => isbn.includes(search)))
      );
    }

    const itemsPerPage = [...items].slice(
      params.perPage * (params.page - 1),
      params.perPage * params.page
    );

    // Simula um delay
    const delay = Math.random() * 1500;

    setTimeout(() => {
      resolve({
        items: itemsPerPage,
        total: items.length
      });
    }, delay);
  });
}

export const DB = [
  {
    id: 1,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/4130809-400-400/1008856545.jpg?v=637050102294430000',
    title: 'As Aventuras De Mike',
    author: 'Dearo,Gabriel e Digilio,Manu',
    publishingCompany: 'Planeta Estratégia',
    isbn: ['9788542217483'],
    description:
      'Sabe aquele garoto popular da escola? Que é descolado se veste bem e faz sucesso com as garotas? Pois é, esse com certeza não é o Mike. Na verdade, o Mike é exatamente o contrário de tudo isso! Ele é desastrado, prefere videogames e salgadinhos no lugar de futebol, e é PÉSSIMO com as garotas. Ao lado do seu fiel amigo Nando (que é o ser humano mais distraído do planeta Terra) vão se aventurar em uma competição de biscoitos em busca de um misterioso prêmio que irá mudar suas vidas para sempre. "Este é o melhor livro de todos os tempos".',
    numerPages: 144,
    price: 32.2,
    year: 2019,
    language: 'Português',
    dimensions: '21 x 13,4 x 1 cm',
    weight: 150
  },
  {
    id: 2,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/4025075-400-400/1008004760.jpg?v=637049509962570000',
    title: 'Vade Mecum Compacto - Brochura - 21ª Ed. 2019',
    author: 'Editora Saraiva',
    price: 69.9,
    publishingCompany: 'Editora Saraiva',
    isbn: ['9788553603244'],
    description:
      'Pioneira na exemplar técnica desenvolvida de atualização de Códigos e Legislação, como comprova o avançado número de suas edições e versões, a Editora Saraiva apresenta a nova edição aumentada e atualizada do Vade Mecum Compacto, nas versões brochura e espiral. Com conteúdo criteriosamente selecionado para consulta básica no dia a dia, reúne as normas mais utilizadas por profissionais e acadêmicos da área jurídica.Sua estrutura foi pensada de forma a proporcionar o maior número de diplomas legislativos sem comprometer a legibilidade e o trabalho editorial.A edição traz ainda notas de correlação entre as matérias, já tão tradicionais nas obras de legislação Saraiva, assim como índices multifuncionais, que permitem rápida localização de qualquer assunto por ordem alfabética, cronológica, pelo número do diploma ou por seu tema. Últimas Atualizações da 21.ª edição: Últimas atualizações:- Código Civil Condomínio em multipropriedade (arts. 1.358-B a 1.358-U) Quórum de deliberação nas sociedades limitadas (arts. 1.063, 1.076 e 1.085) - Código de Processo Civil Processos eletrônicos (art. 107)- Código Penal Importunação sexual, estupros coletivo e corretivo e divulgação de sexo, estupro ou nudez de vulnerável (arts. 215-A, 217-A, 218-C, 225, 226 e 234-A) Exposição da intimidade sexual (art. 216-B)- Código de Processo Penal Prisão domiciliar para gestante (arts. 318-A e 318-B)- CLT Falta justificada ao trabalho para realização de exames preventivos de câncer (art. 473)- Estatuto da Criança e do Adolescente Prevenção de gravidez na adolescência (art. 8.º-A)- Estatuto da OAB Honorários assistenciais (art. 22) Processos eletrônicos (art. 7.º) - Reforma Trabalhista – aplicação de normas processuais da CLT (IN n. 41, de 21-6-2018, do TST)- Lei de Proteção de Dados Pessoais (Lei n. 13.709, de 14-8-2018)- Criança, adolescente e aprendiz (Decreto n. 9.579, de 22-11-2018)- Duplicata eletrônica (Lei n. 13.775, de 20-12-2018)- Facilitação da posse de arma (alterações no Decreto do Desarmamento)',
    numberPages: 2127,
    year: 2019,
    language: 'Português',
    dimensions: '20,6 x 14,4 x 6 cm',
    weight: 2.4
  },
  {
    id: 3,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/6869956-400-400/317698.jpg?v=637071809130370000',
    title: 'A Sutil Arte De Ligar O Foda-Se',
    author: 'Manson,Mark',
    price: 27.9,
    publishingCompany: 'Intrínseca',
    isbn: ['9788551002490'],
    description:
      'Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom de estar no fundo do poço.Coaching, autoajuda, desenvolvimento pessoal, mentalização positiva — sem querer desprezar o valor de nada disso, a grande verdade é que às vezes nos sentimos quase sufocados diante da pressão infinita por parecermos otimistas o tempo todo. É um pecado social se deixar abater quando as coisas não vão bem. Ninguém pode fracassar simplesmente, sem aprender nada com isso. Não dá mais. É insuportável. E é aí que entra a revolucionária e sutil arte de ligar o foda-se.Mark Manson usa toda a sua sagacidade de escritor e seu olhar crítico para propor um novo caminho rumo a uma vida melhor, mais coerente com a realidade e consciente dos nossos limites. E ele faz isso da melhor maneira. Como um verdadeiro amigo, Mark se senta ao seu lado e diz, olhando nos seus olhos: você não é tão especial. Ele conta umas piadas aqui, dá uns exemplos inusitados ali, joga umas verdades na sua cara e pronto, você já se sente muito mais alerta e capaz de enfrentar esse mundo cão.Para os céticos e os descrentes, mas também para os amantes do gênero, enfim uma abordagem franca e inteligente que vai ajudar você a descobrir o que é realmente importante na sua vida, e f*da-se o resto. Livre-se agora da felicidade maquiada e superficial e abrace esta arte verdadeiramente transformadora.',
    numberPages: 224,
    year: 2017,
    language: 'Português',
    dimensions: '20,8 x 13,6 x 1,4 cm',
    weight: 295
  },
  {
    id: 5,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/2296218-400-400/1004510247.jpg?v=637014969062230000',
    title: 'Box - Corte De Espinhos e Rosas - 3 Volumes',
    author: 'Sarah J. Maas',
    price: 81.9,
    publishingCompany: 'Galera',
    isbn: ['9788501076601'],
    description:
      'Sarah j. Maas é autora da saga best-seller internacional trono de vidro. A série corte de espinhos e rosas estreou na lista do the new york times em segundo lugar, com apenas uma semana de vendas. Nesse misto de a bela e a fera e game of thrones, sarah j. Maas cria um universo repleto de ação, intrigas e romance. Corte de espinhos e rosas (434 págs) depois de anos sendo escravizados pelas fadas, os humanos conseguiram se libertar e coexistem com os seres místicos. Cerca de cinco séculos após a guerra que definiu o futuro das espécies, feyre, filha de um casal de mercadores, é forçada a se tornar uma caçadora para ajudar a família. Após matar uma fada zoomórfica transformada em lobo.',
    numberPages: 1778,
    year: 2017,
    language: 'Português',
    dimensions: '22,8 x 15,2 x 3 cm',
    weight: 699
  },

  {
    id: 7,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/1926100-400-400/1005660069.jpg?v=637006028965570000',
    title: 'Meu livro da consciência',
    author: 'Tadashi Kadomoto',
    price: 27.9,
    publishingCompany: 'Gente',
    isbn: ['9788545202127'],
    description:
      'Você precisa se conectar com si mesmo hoje, amanhã e todos os dias! Meu livro da Consciência traz algo que todos sentimos falta: autoconhecimento e consciência sobre nós e nossas escolhas. Tadashi Kadomoto nos convida para uma jornada de plenitude, impulsionando-nos a viver cada dia com mais significado, focados em nosso verdadeiro propósito e mais presentes para nós mesmos e aqueles que amamos. A felicidade pode virar rotina, basta fazer de cada dia uma boa escolha.',
    numberPages: 400,
    year: 2016,
    language: 'Português',
    dimensions: '16 x 11,6 x 2,6 cm',
    weight: 381
  },
  {
    id: 10,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/6364806-400-400/1008997059.jpg?v=637067352342400000',
    title: 'O Milagre Da Manhã',
    author: 'Hal Elrod',
    price: 29.92,
    publishingCompany: 'BestSeller',
    isbn: ['9788576849940'],
    description:
      'Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos ― antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional. A mudança de hábitos e a nova rotina matinal proposta por Hal vão proporcionar melhorias significativas na saúde, na felicidade, nos relacionamentos, nas finanças, na espiritualidade ou quaisquer outras áreas que necessitem ser aprimoradas.',
    numberPages: 196,
    year: 2016,
    language: 'Português',
    dimensions: '22,8 x 15,2 x 1 cm',
    weight: 281
  },
  {
    id: 11,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/2812962-400-400/1008160494.jpg?v=637025042526470000',
    title: 'Como Fazer Amigos e Influenciar Pessoas',
    author: 'Carnegie,Dale',
    price: 31.46,
    publishingCompany: 'Companhia Editora Nacional',
    isbn: ['9788504018028'],
    description:
      'O guia clássico e definitivo para relacionar-se com as pessoas Não é por acaso que, mais de setenta anos depois de sua primeira edição, depois de mais de 50 milhões de exemplares vendidos, Como fazer amigos e influenciar pessoas segue sendo um livro inovador, e uma das principais referências do mundo sobre relacionamentos, seja no âmbito profissional ou pessoal. Os conselhos, métodos e as ideias de Dale Carnegie já beneficiaram milhões de pessoas, e permanecem completamente atuais. Carnegie fornece, nesse livro, técnicas e métodos, de maneira extremamente direta, para que qualquer pessoa alcance seus objetivos pessoais e profissionais.',
    numberPages: 264,
    year: 2012,
    language: 'Português',
    dimensions: '23,6 x 16,8 x 1,6 cm',
    weight: 113
  },
  {
    id: 12,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41GEa-4SSkL._SX331_BO1,204,203,200_.jpg',
    title: 'Nunca Foi Sorte',
    author: "Adriana Sant'anna",
    price: 23.8,
    publishingCompany: 'Buzz Editora',
    isbn: ['9788593156953'],
    description:
      'A partir de sua história de vida, Adriana Sant’Anna traz ferramentas que ela mesma testou em sua rotina e fizeram com que deixasse para trás uma vida de derrotas e amargura para conquistar sucesso em todos os níveis. Se você quer transformar sua vida, desfrutar de saúde, bem-estar, relações amorosas sadias e prosperidade e não sabe de que maneira, ou, ainda, se você estiver enfrentando desafios, inspire-se e tenha coragem de mudar sua rota. Diga sim para seus sonhos e crie soluções inovadoras para trazer novos resultados em seu dia a dia, a partir de ações coordenadas e constantes. Porque reinventar-se é o que Adriana Sant’Anna faz desde sempre. E ela te convida a embarcar em uma nova jornada: A jornada de reconstrução da sua vida. Mesmo que você pense em desistir. Mesmo que a vida te dê motivos para chorar. Está na hora de despertar para o seu potencial máximo. Você está pronto?',
    numberPages: 192,
    year: 2019,
    language: 'Português',
    dimensions: '20,8 x 13,2 x 0,8 cm',
    weight: 231
  },
  {
    id: 13,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/6459741-400-400/350572.jpg?v=637068409351370000',
    title:
      'Mais Esperto Que o Diabo - o Mistério Revelado da Liberdade e do Sucesso',
    author: 'Hill,Napoleon',
    price: 23.6,
    publishingCompany: 'Citadel Editora',
    isbn: ['9788568014004'],
    description:
      'Neste livro, inédito no Brasil, você vai descobrir, após 75 anos de segredo, por meio dessa entrevista exclusiva que Napoleon Hill fez, quebrando o código secreto da mente do Diabo: Quem é o Diabo? Onde ele habita? Quais suas principais armas mentais? Quem são os alienados e de que forma eles ou elas se alienam? De que forma o Diabo influencia a nossa vida do dia a dia? Como a sua dominação influencia nossas atitudes? O que é o medo? Como nossos líderes religiosos e nossos professores são afetados pelo Diabo? Quais as armas que nós, seres humanos, possuímos para combater a dominação do Diabo? Qual a visão do Diabo sobre a energia sexual? Como buscar uma vida cheia de realizações, valorizando a felicidade e a liberdade? Essas perguntas e muitas outras são respondidas pelo próprio Diabo, que se autodenomina "Sua Majestade", de acordo com Napoleon Hill. O seu propósito, escrito com suas próprias palavras, é ajudar o ser humano a descobrir o seu real potencial, desvendando as armadilhas mentais que os homens e as mulheres deste mundo criam para si mesmos, sabotando a sua própria liberdade e o seu próprio direito de viver uma vida cheia de desafios, alegria e liberdade. Escrito em 1938, após uma das maiores crises econômicas, e precedendo a Segunda Guerra Mundial, este livro não somente é uma fonte de inspiração e coragem, mas deve ser considerado um manual para todas aquelas pessoas que desejam',
    numberPages: 200,
    year: 2016,
    language: 'Português',
    dimensions: '22,8 x 15,6 x 1,8 cm',
    weight: 249
  },
  {
    id: 14,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/5380725-400-400/358740.jpg?v=637061445910900000',
    title: 'Livro Das Mil E Uma Noites - Vol. 1',
    author: 'Anônimo',
    price: 43,
    publishingCompany: 'Biblioteca Azul',
    isbn: ['9788525065049'],
    description:
      'NOVA EDIÇÃO, REVISTA E ATUALIZADA, DA OBRA VENCEDORA DOS PRÊMIOS PAULO RÓNAI (FUNDAÇÃO BIBLIOTECA NACIONAL), JABUTI DE MELHOR TRADUÇÃO E APCA (ASSOCIAÇÃO PAULISTA DOS CRÍTICOS DE ARTE) Primeira tradução integral e direta do árabe para o português, o "Livro das mil e uma noites" retorna às livrarias com novo projeto gráfico, numa edição revista e atualizada pelo tradutor Mamede Mustafa Jarouche. Vencedor dos prêmios APCA, Paulo Rónai e Jabuti de melhor tradução, o "Livro das mil e uma noites" é uma obra universal que atravessou séculos fazendo parte da cultura do Oriente e do Ocidente. Mais do que um rico repertório de narrativas fantásticas, é também uma homenagem à mulher e um reconhecimento de sua inteligência. Sua heroína, a narradora Šahräzäd, é um símbolo da infinita capacidade feminina de contornar situações críticas e de salvar o mundo da ruína. "[...] Antes da primeira noite, o leitor sabe que o rei Šähriyär foi traído por sua mulher, e que esta traição pode ceifar a vida de todas as mulheres do reino. Mas Šahräzäd decide arriscar sua própria pele a fim de salvar as outras mulheres. Então, começa a contar histórias ao rei. Em cada amanhecer o relato é interrompido num momento de suspense, à espera da próxima noite. Assim, o leitor se depara com tramas ardilosas e escabrosas, cheias de fantasia e surpresa, numa geografia mutável e exuberante como num sonho ou pesadelo. O inverossímil e o inexplicável participam dessas intrigas, que a imaginação da narradora multiplica e expande até a última noite, quando se casa com o rei e salva as mulheres da degola. É esse “repertório de maravilhas” que o leitor vai encontrar nas fábulas do Livro das mil e uma noites." Milton Hatoum',
    numberPages: 0,
    year: 2017,
    language: 'Português',
    dimensions: '23 x 15,4 x 2,2 cm',
    weight: 99.8
  },
  {
    id: 15,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/6646951-400-400/350585.jpg?v=637069324904270000',
    title: 'Pai Rico, Pai Pobre - Edição de 20 Anos',
    author: 'Robert T. Kiyosaki',
    price: 39.9,
    publishingCompany: 'Alta Books',
    isbn: ['9788550801483'],
    description:
      'Celebrando 20 anos como o livro n° 1 em finanças pessoaisA escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro. O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. ',
    numberPages: 336,
    year: 2017,
    language: 'Português',
    dimensions: '23,8 x 17 x 1,8 cm',
    weight: 522
  },
  {
    id: 16,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/1981534-400-400/1008289604.jpg?v=637006386933330000',
    title: 'Enaldinho - A Lenda do Zap - Acompanha Uma Carta Exclusiva',
    author: 'Enaldinho',
    price: 29.9,
    publishingCompany: 'Astral Cultural',
    isbn: ['9788582469897'],
    description:
      'Enaldinho foi levado para o esconderijo do ZAP, e só você, resolvendo vários enigmas e desafios, pode ajudá-lo a sair de lá! Mas, bem no meio da toca do monstro, Enaldinho descobre pistas do verdadeiro motivo pelo qual o Zap está atrás dele - e ainda fica sabendo um monte de curiosidades que ninguém fazia ideia sobre o Zap. Quer descobrir tudo isso com ele? Então, se jogue nessa aventura cheia de atividades, passatempos, mistérios e surpresas divertidas. Atenção - o cartão dourado não está incluído',
    numberPages: 64,
    year: 2019,
    language: 'Português',
    dimensions: '30,4 x 22,2 x 1,2 cm',
    weight: 90.7
  },
  {
    id: 17,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/5858326-400-400/1006736459.jpg?v=637064212487700000',
    title: 'A Cinco Passos De Você',
    author: 'Lippincott,Rachael',
    price: 27.93,
    publishingCompany: 'Globo Alt',
    isbn: ['9788525067425'],
    description:
      'Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não existe sem a outra. Mas para ganhar pulmões novos, Stella precisa seguir seu tratamento à risca e eliminar qualquer chance de infecção, o que significa que ela não pode ficar a menos que dois metros de distância – ou seis passos – de outros pacientes com a doença. O primeiro item é fácil para ela, mas o segundo pode se provar mais difícil do que ela esperava. O único controle que Will Newman deseja é o de sua própria vida. Ele não dá a mínima para o novo tratamento experimental para o qual foi selecionado e não aguenta mais a pressão de sua mãe para que melhore. Prestes a completar dezoito anos, ele mal pode esperar para finalmente se livrar das máquinas e hospitais, usando o pouco de vida que ainda lhe resta para conhecer o mundo. Stella e Will são muito diferentes. Ao mesmo tempo, a doença que os une não é a única coisa que têm em comum. Eles têm que ficar a seis passos um do outro, mas, conforme a conexão entre os dois aumenta, a vontade de burlar a distância física parece insuportável. Um grande amor vale um passo roubado?',
    numberPages: 288,
    year: 2019,
    language: 'Português',
    dimensions: '20,8 x 13,8 x 1,6 cm',
    weight: 499
  },
  {
    id: 18,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51ANQBDR0bL._SX352_BO1,204,203,200_.jpg',
    title: 'O Antigo Segredo da Flor Da Vida Vol. 01: Volume 1',
    author: 'Atwood,Margaret',
    price: 32.48,
    publishingCompany: 'Pensamento',
    isbn: ['9788531515798'],
    description:
      'Houve um tempo em que todos os seres vivos do universo conheciam a Flor da Vida como o padrão da criação - a estrutura geométrica pela qual entramos e saímos da existência física. Então, de um estado de consciência muito elevado, caímos na escuridão e nos esquecemos de quem éramos. Por milhares de anos, o segredo foi guardado em artefatos antigos e inscrições em pedra em todo o mundo e codificado nas células de todos os seres vivos. Neste trabalho síntese sobre o tema, Drunvalo Melchizedek esclarece os mistérios sobre como viemos a existir, por que o mundo é como é, e como as energias sutis que permitem à nossa consciência florescer na sua verdadeira beleza. E por meio das informações contidas neste livro você conhecerá um caminho único voltado ao processo iniciático da evolução, no qual, entre os textos e as ilustrações encontram-se as joias da compreensão intuitiva e algumas ideias provocadoras, que nos mostram : como a Queda da Atlântida Mudou a Nossa Realidade; qual é o Segredo da Flor Vida Se Revela; Como Compreender a Geometria Sagrada, a Semente da Vida, A Estrela Tetraédrica, o Universo em Forma de Ondas, a Mudança dos Polos da Terra; o Lado Mais Sombrio do Nosso Presente e do Nosso Passado A Nossa Terra em Perigo, a Era do Gelo, a História do Mundo; quando a Evolução sucumbiu e surgiu a Rede Crística na Terra; o Papel do Egito na Evolução da Consciência; o que é exatamente a morte, ressurreição e ascensão, o Talento de Akhenaton e o verdadeiro significado da História da Gênese Bíblica; o Cânone de Leonardo da Vinci, o Mistério do Símbolo Maçônico, a Proporção Áurea, a Sequência de Fibonacci, a Razão Phi Divina e muito mais. Uma obra para nós explorarmos milagre da nossa existência conhecendo o mundo maravilhoso da geometria, da ciência, da história antiga e das novas descobertas.',
    numberPages: 296,
    year: 2009,
    language: 'Português',
    dimensions: '24,8 x 17,2 x 1,6 cm',
    weight: 358
  },
  {
    id: 19,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51ZV3OD6epL._SX346_BO1,204,203,200_.jpg',
    title: 'Vade Mecum Tradicional - 27ª Ed. 2019',
    author: 'Editora Saraiva',
    price: 99.9,
    publishingCompany: 'Editora Contexto',
    isbn: ['9788553172047'],
    description:
      'Embora seja uma disciplina consolidada em muitas universidades no mundo, não há uma definição explícita do que seja a História Antiga. Na prática, tanto no ensino como na pesquisa, a História Antiga costuma estudar os primórdios do Ocidente, após uma pré-história vaga e geral. Não é a História Antiga do mundo, portanto, mas a História de um recorte bem específico do passado: o das origens do Ocidente. Grécia e Roma ganham destaque especial.Além do conteúdo, outros temas relacionados à História Antiga são alvo de questionamento por parte dos historiadores, como a maneira de ensinar essa disciplina. É preciso reescrever essa história de um modo que faça sentido ao presente e que seja explícito. Embora não se possa mais considerar a História Antiga o início de uma História Universal, as realizações humanas que se acumularam nesse pedaço do globo – o espaço do Mediterrâneo entre os século X a.C. e V d.C. – são fundamentais para entendermos como o mundo contemporâneo se tornou possível. É com esse novo olhar que o autor, historiador especialista na área e professor da Universidade de São Paulo, analisa essa parte fundamental da História mundial.',
    numberPages: 176,
    year: 2013,
    language: 'Português',
    dimensions: '25 x 17,6 x 8,2 cm',
    weight: 2000
  },
  {
    id: 20,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41U6uOpVHgL._SX345_BO1,204,203,200_.jpg',
    title:
      'Rito Escoces Antigo e Aceito do 1º ao 33º: Antigo e Aceito - 1º ao 33º',
    author: 'Nigro,Thiago',
    price: 29.66,
    publishingCompany: 'Madras',
    isbn: ['9788537002223'],
    description:
      'Este volume reúne textos relativos a todos os 33 graus do rito escocês antigo e aceito, “tanto para uma visão global como para facilitar o estudo”, conforme lemos no prefácio. Fruto de mais de 20 anos de pesquisa e elaboração de textos, este livro é a consolidação de obras anteriores, publicadas com diferentes títulos, que circulam até hoje pelo brasil em sucessivas (e merecidas) reedições. Consagrado como o mais completo de nossos autores maçônicos, rizzardo da camino une ao profundo conhecimento do tema, ao qual consagrou a vida inteira, um entusiasmo que, com o passar dos anos, foi se tornando mais intenso e contagiante pela causa maçônica. E é provavelmente desta feliz combinação que nasceu o continuado êxito editorial do autor: seu conhecimento sólido e autêntico de tudo o que está relacionado com a história e a atuação da maçonaria e seu acendrado sentido da tarefa do maçom na construção permanente da sociedade e do país em que ele, maçom, nasce e vive. Ler este livro não é se inteirar de um fato histórico, de ritos empoeirados e de brilho esmaecido pelo decorrer das décadas e dos séculos; é, muito pelo contrário, sentir a riqueza da vida maçônica, a grandeza e a perenidade desta causa, que é a da própria humanidade.',
    numberPages: 304,
    year: 2015,
    language: 'Português',
    dimensions: '23 x 16 x 1,6 cm',
    weight: 458
  },
  {
    id: 21,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/6462013-400-400/99909.jpg?v=637068560938900000',
    title: '1984',
    author: 'George Orwell',
    price: 46.3,
    publishingCompany: 'Companhia das Letras',
    isbn: ['9788535914849'],
    description: '',
    numberPages: 416,
    year: 2009,
    language: 'Português',
    dimensions: '13,7 x 20,6 x 2,5 cm',
    weight: 567
  },
  {
    id: 22,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/932190-400-400/1008086133.jpg?v=636991521845330000',
    title: 'Kit- O Sol é Para Todos - 2 Volumes - Acompanha 1 Sacola',
    author: 'Harper Lee',
    price: 49.9,
    publishingCompany: 'José Olympio',
    isbn: ['9788503009492'],
    description:
      'Um livro emblemático sobre racismo e injustiça e um dos maiores clássicos da literatura mundial.Um livro emblemático sobre racismo e injustiça: a história de um advogado que defende um homem negro acusado de estuprar uma mulher branca nos Estados Unidos dos anos 1930 e enfrenta represálias da comunidade racista. O livro é narrado pela sensível Scout, filha do advogado. Uma história atemporal sobre tolerância, perda da inocência e conceito de justiça. O sol é para todos, com seu texto “forte, melodramático, sutil, cômico” (The New Yorker) se tornou um clássico para todas as idades e gerações.',
    numberPages: 350,
    year: 2006,
    language: 'Português',
    dimensions: '15,5 x 22,4 x 2,3 cm',
    weight: 358
  },
  {
    id: 23,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/5865678-400-400/1008621055.jpg?v=637064249582830000',
    title: 'Teto Para Dois',
    author: "Beth O'leary",
    price: 39.9,
    publishingCompany: 'Intrínseca',
    isbn: ['9788551005415'],
    description:
      'Três meses após o término do seu relacionamento, Tiffy finalmente sai do apartamento do ex-namorado. Agora ela precisa para ontem de um lugar barato para morar. Contrariando os amigos, ela topa um acordo bastante inusitado. Leon está enrolado com questões financeiras e tem uma ideia pouco convencional para arranjar dinheiro rápido: sublocar seu apartamento, onde fica apenas no período da manhã e da tarde nos dias úteis, já que passa os finais de semana com a namorada e trabalha como enfermeiro no turno da noite. Só que tem um detalhe importante: o lugar tem apenas uma cama. Sem nunca terem se encontrado pessoalmente, Leon e Tiffy fecham um contrato de seis meses e passam a resolver as trivialidades do dia a dia por Post-its espalhados pela casa. Mas será que essa solução aparentemente perfeita resiste a um ex-namorado obsessivo, uma namorada ciumenta, um irmão encrencado, dois empregos exigentes e alguns amigos superprotetores?',
    numberPages: 400,
    year: 2019,
    language: 'Português',
    dimensions: '23 x 16 x 2 cm',
    weight: 549
  },
  {
    id: 24,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/5863190-400-400/1008844351.jpg?v=637064236418270000',
    title:
      'Ansiedade - Como Enfrentar o Mal do Século - A Síndrome do Pensamento Acelerado...',
    author: 'Cury,Augusto',
    price: 14.9,
    publishingCompany: 'Saraiva',
    isbn: ['9788502218482'],
    description:
      'Vivemos em uma sociedade de excessos. Somos bombardeados por informações que, na maior parte das vezes, não conseguimos absorver. Somos cobrados, pressionados, nos tornamos reféns da nossa mente. Essa situação alterou algo que deveria ser inviolável - o ritmo de construção de pensamentos -, gerando consequências seríssimas para a saúde emocional, o prazer de viver, a inteligência, a criatividade. Pensar é bom, pensar com consciência crítica é melhor ainda, mas pensar excessivamente é uma bomba contra a qualidade de vida e um intelecto criativo e produtivo.Em Ansiedade: como enfrentar o mal do século, o conceituado psiquiatra e psicoterapeuta Augusto Cury apresenta a Síndrome do Pensamento Acelerado (SPA), uma das doenças mais penetrantes da atualidade. Ainda pouco conhecida por psicólogos e psicopedagogos, não raro a SPA é confundida com hiperatividade ou transtorno do déficit de atenção. Neste livro, você conhecerá os sintomas e as consequências desse mal bem, como as técnicas para enfrentá-lo e recuperar sua tranquilidade, emocional e mental.',
    numberPages: 160,
    year: 2012,
    language: 'Português',
    dimensions: '20,8 x 13,8 x 1,2 cm',
    weight: 181
  },
  {
    id: 26,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/5258751-400-400/1007812453.jpg?v=637060770007600000',
    title: 'Mister',
    author: 'E.L. James',
    price: 39.9,
    publishingCompany: 'Intrínseca',
    isbn: ['9788551005156'],
    description:
      'Depois de vender 7 milhões de livros só no Brasil e de ter três de suas obras transformadas em filmes de sucesso, E L James volta com Mister, um novo romance que vai deixar os leitores sem fôlego até a última página.',
    numberPages: 432,
    year: 2019,
    language: 'Português',
    dimensions: '23 x 16 x 2,1 cm',
    weight: 572
  },
  {
    id: 27,
    image:
      'http://lojasaraiva.vteximg.com.br/arquivos/ids/3232750-400-400/1006150368.jpg?v=637033929745330000',
    title: 'O Amor Mais Louco da História',
    author: 'Deive Leonardo',
    price: 29.7,
    publishingCompany: 'Quatro Ventos Editora ',
    isbn: ['9788554167059'],
    description:
      'O amor é consenso. Não existe nada mais popular no mundo do que ele. Talvez porque ele seja o que mais buscamos na vida, afinal, todo mundo quer ser amado e ter alguém para amar. E a verdade é que não o queremos por acaso, mas porque fomos feitos para essa finalidade. O problema é que a maior parte das coisas que defendemos como amor não tem nada a ver com ele. Isso porque o amor humano ama “quando”, “se” e “porque”. Ele é carente, limitado, finito. Mas existe um amor eterno. Que não depende de reciprocidade, combustível ou razão. Jesus, o amor que redefiniu o significado do verbo amar. E contra fatos não há argumentos: este, certamente, é o amor mais louco da história. Nestas páginas, você conhecerá mais a respeito das multifacetas desse amor, como podemos chegar mais perto dele e como, mesmo que não percebamos, ele é capaz de demonstrar o coração ansioso de deus por um relacionamento de amor conosco',
    numberPages: 192,
    year: 2018,
    language: 'Português',
    dimensions: '20,8 x 13,8 x 1,2 cm',
    weight: 322
  }
];
