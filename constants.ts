import { BibleBook, Challenge, ChallengeDayContent } from './types';

export const BIBLE_BOOKS: BibleBook[] = [
  // Antigo Testamento
  { name: 'Gênesis', englishName: 'Genesis', chapters: 50, testament: 'Old', abbrev: 'gn' },
  { name: 'Êxodo', englishName: 'Exodus', chapters: 40, testament: 'Old', abbrev: 'ex' },
  { name: 'Levítico', englishName: 'Leviticus', chapters: 27, testament: 'Old', abbrev: 'lv' },
  { name: 'Números', englishName: 'Numbers', chapters: 36, testament: 'Old', abbrev: 'nm' },
  { name: 'Deuteronômio', englishName: 'Deuteronomy', chapters: 34, testament: 'Old', abbrev: 'dt' },
  { name: 'Josué', englishName: 'Joshua', chapters: 24, testament: 'Old', abbrev: 'js' },
  { name: 'Juízes', englishName: 'Judges', chapters: 21, testament: 'Old', abbrev: 'jg' },
  { name: 'Rute', englishName: 'Ruth', chapters: 4, testament: 'Old', abbrev: 'rt' },
  { name: '1 Samuel', englishName: '1 Samuel', chapters: 31, testament: 'Old', abbrev: '1sm' },
  { name: '2 Samuel', englishName: '2 Samuel', chapters: 24, testament: 'Old', abbrev: '2sm' },
  { name: '1 Reis', englishName: '1 Kings', chapters: 22, testament: 'Old', abbrev: '1ki' },
  { name: '2 Reis', englishName: '2 Kings', chapters: 25, testament: 'Old', abbrev: '2ki' },
  { name: '1 Crônicas', englishName: '1 Chronicles', chapters: 29, testament: 'Old', abbrev: '1ch' },
  { name: '2 Crônicas', englishName: '2 Chronicles', chapters: 36, testament: 'Old', abbrev: '2ch' },
  { name: 'Esdras', englishName: 'Ezra', chapters: 10, testament: 'Old', abbrev: 'ez' },
  { name: 'Neemias', englishName: 'Nehemiah', chapters: 13, testament: 'Old', abbrev: 'ne' },
  { name: 'Ester', englishName: 'Esther', chapters: 10, testament: 'Old', abbrev: 'es' },
  { name: 'Jó', englishName: 'Job', chapters: 42, testament: 'Old', abbrev: 'jb' },
  { name: 'Salmos', englishName: 'Psalms', chapters: 150, testament: 'Old', abbrev: 'ps' },
  { name: 'Provérbios', englishName: 'Proverbs', chapters: 31, testament: 'Old', abbrev: 'pr' },
  { name: 'Eclesiastes', englishName: 'Ecclesiastes', chapters: 12, testament: 'Old', abbrev: 'ec' },
  { name: 'Cânticos', englishName: 'Song of Solomon', chapters: 8, testament: 'Old', abbrev: 'so' },
  { name: 'Isaías', englishName: 'Isaiah', chapters: 66, testament: 'Old', abbrev: 'is' },
  { name: 'Jeremias', englishName: 'Jeremiah', chapters: 52, testament: 'Old', abbrev: 'je' },
  { name: 'Lamentações', englishName: 'Lamentations', chapters: 5, testament: 'Old', abbrev: 'lm' },
  { name: 'Ezequiel', englishName: 'Ezekiel', chapters: 48, testament: 'Old', abbrev: 'ek' },
  { name: 'Daniel', englishName: 'Daniel', chapters: 12, testament: 'Old', abbrev: 'da' },
  { name: 'Oseias', englishName: 'Hosea', chapters: 14, testament: 'Old', abbrev: 'ho' },
  { name: 'Joel', englishName: 'Joel', chapters: 3, testament: 'Old', abbrev: 'jl' },
  { name: 'Amós', englishName: 'Amos', chapters: 9, testament: 'Old', abbrev: 'am' },
  { name: 'Obadias', englishName: 'Obadiah', chapters: 1, testament: 'Old', abbrev: 'ob' },
  { name: 'Jonas', englishName: 'Jonah', chapters: 4, testament: 'Old', abbrev: 'jn' },
  { name: 'Miqueias', englishName: 'Micah', chapters: 7, testament: 'Old', abbrev: 'mi' },
  { name: 'Naum', englishName: 'Nahum', chapters: 3, testament: 'Old', abbrev: 'na' },
  { name: 'Habacuque', englishName: 'Habakkuk', chapters: 3, testament: 'Old', abbrev: 'hk' },
  { name: 'Sofonias', englishName: 'Zephaniah', chapters: 3, testament: 'Old', abbrev: 'zp' },
  { name: 'Ageu', englishName: 'Haggai', chapters: 2, testament: 'Old', abbrev: 'hg' },
  { name: 'Zacarias', englishName: 'Zechariah', chapters: 14, testament: 'Old', abbrev: 'zc' },
  { name: 'Malaquias', englishName: 'Malachi', chapters: 4, testament: 'Old', abbrev: 'ml' },
  // Novo Testamento
  { name: 'Mateus', englishName: 'Matthew', chapters: 28, testament: 'New', abbrev: 'mt' },
  { name: 'Marcos', englishName: 'Mark', chapters: 16, testament: 'New', abbrev: 'mk' },
  { name: 'Lucas', englishName: 'Luke', chapters: 24, testament: 'New', abbrev: 'lk' },
  { name: 'João', englishName: 'John', chapters: 21, testament: 'New', abbrev: 'jn' },
  { name: 'Atos', englishName: 'Acts', chapters: 28, testament: 'New', abbrev: 'ac' },
  { name: 'Romanos', englishName: 'Romans', chapters: 16, testament: 'New', abbrev: 'rm' },
  { name: '1 Coríntios', englishName: '1 Corinthians', chapters: 16, testament: 'New', abbrev: '1co' },
  { name: '2 Coríntios', englishName: '2 Corinthians', chapters: 13, testament: 'New', abbrev: '2co' },
  { name: 'Gálatas', englishName: 'Galatians', chapters: 6, testament: 'New', abbrev: 'ga' },
  { name: 'Efésios', englishName: 'Ephesians', chapters: 6, testament: 'New', abbrev: 'ep' },
  { name: 'Filipenses', englishName: 'Philippians', chapters: 4, testament: 'New', abbrev: 'ph' },
  { name: 'Colossenses', englishName: 'Colossians', chapters: 4, testament: 'New', abbrev: 'cl' },
  { name: '1 Tessalonicenses', englishName: '1 Thessalonians', chapters: 5, testament: 'New', abbrev: '1th' },
  { name: '2 Tessalonicenses', englishName: '2 Thessalonians', chapters: 3, testament: 'New', abbrev: '2th' },
  { name: '1 Timóteo', englishName: '1 Timothy', chapters: 6, testament: 'New', abbrev: '1ti' },
  { name: '2 Timóteo', englishName: '2 Timothy', chapters: 4, testament: 'New', abbrev: '2ti' },
  { name: 'Tito', englishName: 'Titus', chapters: 3, testament: 'New', abbrev: 'ti' },
  { name: 'Filemom', englishName: 'Philemon', chapters: 1, testament: 'New', abbrev: 'pl' },
  { name: 'Hebreus', englishName: 'Hebrews', chapters: 13, testament: 'New', abbrev: 'hb' },
  { name: 'Tiago', englishName: 'James', chapters: 5, testament: 'New', abbrev: 'jm' },
  { name: '1 Pedro', englishName: '1 Peter', chapters: 5, testament: 'New', abbrev: '1pe' },
  { name: '2 Pedro', englishName: '2 Peter', chapters: 3, testament: 'New', abbrev: '2pe' },
  { name: '1 João', englishName: '1 John', chapters: 5, testament: 'New', abbrev: '1jn' },
  { name: '2 João', englishName: '2 John', chapters: 1, testament: 'New', abbrev: '2jn' },
  { name: '3 João', englishName: '3 John', chapters: 1, testament: 'New', abbrev: '3jn' },
  { name: 'Judas', englishName: 'Jude', chapters: 1, testament: 'New', abbrev: 'jd' },
  { name: 'Apocalipse', englishName: 'Revelation', chapters: 22, testament: 'New', abbrev: 're' },
];

export const TOTAL_CHAPTERS = 1189;

export const POPULAR_VERSES = [
  "Jeremiah 29:11", "Philippians 4:13", "John 3:16", "Romans 8:28",
  "Isaiah 41:10", "Psalms 23:1", "Joshua 1:9", "Matthew 11:28",
  "Proverbs 3:5-6", "Isaiah 40:31", "Romans 12:2", "Philippians 4:6-7",
  "2 Timothy 1:7", "Hebrews 11:1", "1 Corinthians 13:4-7", "2 Corinthians 5:17",
  "Galatians 5:22-23", "Ephesians 2:8-9", "Psalm 46:1", "Psalm 91:1-2",
  "Lamentations 3:22-23", "Romans 8:38-39", "James 1:2-3", "1 Peter 5:7",
  "Micah 6:8", "Zephaniah 3:17", "John 14:27", "Psalm 121:1-2"
];

// Mocked Prayers for Anxiety
export const ANXIOUS_PRAYERS = [
  "Senhor, acalma meu coração agitado. Entrego a Ti cada preocupação que tenta roubar minha paz. Ajuda-me a confiar que Tu estás no controle de tudo e que o Teu amor por mim é perfeito. Que a Tua serenidade inunde minha alma agora. Em nome de Jesus, Amém. (Filipenses 4:6-7)",
  "Pai, neste momento de angústia, busco o Teu refúgio. Quando meus pensamentos se multiplicam, Tuas consolações alegram a minha alma. Troco o peso do medo pela leveza da Tua graça. Guarda minha mente em Tua perfeita paz. Amém. (Salmos 94:19)",
  "Deus de bondade, lanço sobre Ti toda a minha ansiedade, pois sei que tens cuidado de mim. Não quero carregar este fardo sozinho. Toma minhas preocupações e dá-me o Teu descanso. Confio que o amanhã está em Tuas mãos seguras. Amém. (1 Pedro 5:7)",
  "Senhor Jesus, Tu disseste: 'Deixo-vos a paz, a minha paz vos dou'. Eu recebo essa paz agora. Que ela guarde meu coração e meus pensamentos. Silencia as vozes da dúvida e fortalece minha fé na Tua presença constante. Amém. (João 14:27)",
  "Espírito Santo, sopra Tua brisa suave sobre minha mente cansada. Ajuda-me a focar no hoje e na Tua fidelidade presente. Rejeito a mentira de que estou sozinho e abraço a verdade de que Tu és meu Pastor e nada me faltará. Amém. (Salmos 23:1)",
  "Pai Celestial, Tu és meu abrigo e fortaleza. Quando o medo vier, eu confiarei em Ti. Lembra-me de que não me deste um espírito de covardia, mas de poder, amor e equilíbrio. Restaura meu equilíbrio emocional agora. Amém. (2 Timóteo 1:7)"
];

// Mocked Prayers for Tired/Weary
export const TIRED_PRAYERS = [
  "Senhor Jesus, meu corpo e minha alma estão exaustos. Aceito Teu convite: 'Vinde a mim, todos os que estais cansados'. Troco meu fardo pesado pelo Teu, que é leve. Dá-me o descanso que o sono não pode dar. Renova minhas forças enquanto repouso em Ti. Amém. (Mateus 11:28)",
  "Pai, sinto que não tenho mais forças para continuar. Mas a Tua Palavra diz que dás força ao cansado e multiplicas o vigor do que não tem nenhum. Eu recebo essa força sobrenatural agora. Renova minha esperança como a das águias para que eu possa voar novamente. Amém. (Isaías 40:29-31)",
  "Deus, minha mente não desliga e meu corpo dói de cansaço. Peço a Tua paz que excede todo o entendimento. Deito-me em paz e logo pego no sono, pois só Tu, Senhor, me fazes repousar em segurança. Guarda meus sonhos e restaura meu ânimo. Amém. (Salmos 4:8)",
  "Senhor, as demandas do dia me consumiram. Preciso da Tua presença, pois prometeste: 'A minha presença irá contigo, e eu te darei descanso'. Paro tudo agora apenas para respirar e lembrar que Tu estás no controle. Sou Teu filho(a), não um escravo do fazer. Amém. (Êxodo 33:14)",
  "Pastor da minha alma, leva-me às águas tranquilas. Refrigera o meu interior. O mundo exige muito de mim, mas Tu restauras as minhas forças. Não preciso carregar o peso do universo. Entrego tudo a Ti e descanso na Tua provisão e cuidado. Amém. (Salmos 23:2-3)",
  "Pai Amado, obrigado porque não preciso ser forte o tempo todo. Tua graça me basta, e o Teu poder se aperfeiçoa na minha fraqueza. Abraça-me nesta noite e deixa-me sentir o Teu amor curador restaurando cada célula do meu corpo. Amém. (2 Coríntios 12:9)"
];

// Mocked Prayers for Happy
export const HAPPY_PRAYERS = [
  "Senhor, meu coração transborda de alegria hoje! Obrigado por este dia incrível e por cada detalhe da Tua bondade. Que minha felicidade seja um reflexo do Teu amor e contagie todos ao meu redor. Te louvo porque és bom e Tua misericórdia dura para sempre. Amém. (Salmos 118:24)",
  "Pai Amado, te agradeço pelas bênçãos que recebí. Minha alma canta de gratidão! Ajuda-me a não esquecer que toda boa dádiva vem de Ti. Que eu use este momento de alegria para abençoar outros e glorificar o Teu nome. Amém. (Tiago 1:17)",
  "Deus de maravilhas, 'grandes coisas fez o Senhor por nós, por isso estamos alegres'. Celebro a Tua fidelidade e o Teu favor sobre minha vida. Que este sorriso no meu rosto seja um testemunho da Tua graça. Guardo este momento no coração como um tesouro. Amém. (Salmos 126:3)",
  "Senhor Jesus, obrigado porque a alegria do Senhor é a minha força! Mesmo nos dias bons, Tu és a minha maior fonte de prazer. Que eu possa desfrutar deste momento com sabedoria e um coração grato, reconhecendo a Tua mão em tudo. Amém. (Neemias 8:10)",
  "Pai, hoje quero apenas dizer: OBRIGADO! Minha boca se enche de riso e minha língua de júbilo. Como é bom pertencer a Ti e viver sob o Teu cuidado. Recebe o meu louvor como oferta de gratidão neste dia feliz. Amém. (Salmos 100:4-5)",
  "Senhor, que a alegria que sinto hoje não seja passageira, mas enraizada na certeza da Tua salvação. 'Alegrai-vos sempre no Senhor'. Que meu espírito permaneça leve e grato, espalhando a luz de Cristo por onde eu passar. Amém. (Filipenses 4:4)"
];

// Static Content for Anxiety Detox Journey
export const ANXIETY_DETOX_DAYS: Record<number, ChallengeDayContent> = {
  1: {
    verse: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês. - 1 Pedro 5:7",
    thought: "Hoje, entregue suas preocupações a Deus, pois Ele cuida de você.",
    action: "Escreva em um papel sua maior preocupação atual. Ore entregando-a a Deus e depois rasgue o papel como símbolo de confiança.",
    reflection: "A ansiedade opera como um ladrão silencioso, tentando roubar a paz do presente com medos de um futuro que talvez nunca chegue. Quando Pedro nos instrui a 'lançar' nossa ansiedade, ele usa um termo que implica um ato deliberado, vigoroso e intencional de transferência. Não fomos desenhados para carregar o peso do mundo sozinhos; fomos criados para depender daquele que sustenta o universo. A razão pela qual podemos fazer isso com segurança é simples e poderosa: Ele tem cuidado de nós. Não é um cuidado distante, mas pessoal e detalhado."
  },
  2: {
    verse: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. - Filipenses 4:6",
    thought: "A gratidão é o antídoto para a ansiedade. Troque o 'e se...' pelo 'obrigado Deus'.",
    action: "Faça uma lista de 5 coisas pelas quais você é grato hoje, por menores que sejam.",
    reflection: "A gratidão tem um poder neurobiológico e espiritual de reconfigurar nossa mente. É impossível sentir gratidão genuína e ansiedade extrema ao mesmo tempo. Paulo nos dá uma fórmula de troca: pegue sua preocupação e transforme-a em uma oração recheada de agradecimento. Quando agradecemos pelo que Deus já fez, fortalecemos nossa fé para confiar no que Ele fará a seguir. A ansiedade nos projeta para um cenário de catástrofe; a ação de graças nos ancora na bondade de Deus."
  },
  3: {
    verse: "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. - Mateus 6:34",
    thought: "Deus só te dá graça para viver o hoje. O amanhã pertence a Ele.",
    action: "Identifique uma tarefa que você pode resolver hoje e faça-a. Deixe o resto para amanhã.",
    reflection: "Jesus nos ensina a arte da compartimentalização espiritual. A ansiedade é, essencialmente, a tentativa arrogante de viver o futuro antes que ele aconteça, sofrendo duas vezes por problemas que talvez nem existam. Deus nos promete o 'pão de cada dia', não o estoque para a década. A graça de Deus é renovada a cada manhã e é medida exatamente para os desafios das próximas 24 horas. Tentar viver o amanhã com a força de hoje gera exaustão; viver o hoje com a presença de Deus gera paz."
  },
  4: {
    verse: "Quando a ansiedade já me dominava no íntimo, o teu consolo trouxe alívio à minha alma. - Salmos 94:19",
    thought: "Nos momentos de crise, o consolo de Deus é real e acessível.",
    action: "Ouça um louvor que traga paz e feche os olhos por 10 minutos, focando apenas na letra.",
    reflection: "O salmista admite um momento de vulnerabilidade extrema: quando a ansiedade se multiplicava dentro dele, criando um ruído ensurdecedor de pensamentos conflitantes. A resposta não veio de uma solução externa imediata, mas do 'consolo' divino que tocou sua alma. Esse consolo não é apenas uma ideia abstrata; é a presença tangível do Espírito Santo que acalma a tempestade interior, mesmo que a tempestade exterior ainda esteja rugindo. É um alívio sobrenatural."
  },
  5: {
    verse: "Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá. Não se perturbem os seus corações, nem tenham medo. - João 14:27",
    thought: "A paz de Cristo não depende das circunstâncias, ela acontece apesar delas.",
    action: "Desligue as notificações do celular por 1 hora hoje para proteger sua paz mental.",
    reflection: "A paz que o mundo oferece é frágil porque depende da ausência de conflitos. Se tudo vai bem, temos paz; se algo dá errado, a paz desaparece. A paz que Jesus oferece é diferente: é 'Shalom' — uma plenitude e integridade que subsiste mesmo no meio do caos. É uma herança deixada por Ele ('deixo-lhes a paz') e um presente ativo ('a minha paz lhes dou'). Essa paz atua como uma sentinela, guardando nossos corações e mentes contra o medo irracional."
  },
  6: {
    verse: "Busquei o Senhor, e ele me respondeu; livrou-me de todos os meus temores. - Salmos 34:4",
    thought: "O medo mente, dizendo que você está sozinho. A verdade é que Deus ouve seu clamor.",
    action: "Ore em voz alta declarando: 'Deus está comigo, não temerei'.",
    reflection: "Davi escreveu este salmo em um momento de perigo real, fingindo loucura para escapar da morte. O livramento que ele celebra aqui não é apenas a sobrevivência física, mas a libertação da prisão do medo. Às vezes, Deus remove o problema imediatamente; outras vezes, Ele remove o medo do problema, capacitando-nos a enfrentá-lo com coragem. Buscar ao Senhor é o primeiro passo para quebrar a paralisia que a ansiedade provoca."
  },
  7: {
    verse: "O Senhor é o meu pastor; de nada terei falta... - Salmos 23:1",
    thought: "Você não precisa carregar o mundo nas costas. Você tem um Pastor que te guia.",
    action: "Tire um tempo de descanso hoje. Faça algo que renove suas energias e não envolva trabalho.",
    reflection: "A metáfora do pastor é profundamente terapêutica. A ansiedade muitas vezes surge quando tentamos assumir o papel de 'pastor' da nossa própria vida, achando que precisamos controlar cada detalhe para não faltar nada. O Salmo 23 nos convida a renunciar a esse controle excessivo. Se o Senhor é o seu Pastor, a responsabilidade final pela sua provisão, direção e proteção é dEle, não sua. Ovelhas não se preocupam com o pasto de amanhã; elas confiam no pastor de hoje."
  }
};

// Static Content for Deep Gratitude Journey
export const GRATITUDE_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: { 
    verse: "Este é o dia que o Senhor fez... - Salmos 118:24", 
    thought: "Cada amanhecer é um presente exclusivo de Deus.", 
    action: "Diga em voz alta: 'Obrigado Deus por mais um dia'.", 
    reflection: "Frequentemente acordamos já focados nos problemas que o dia trará, mas o salmista nos convida a mudar a lente: este dia foi desenhado e arquitetado por Deus. A verdadeira alegria não é um sentimento espontâneo provocado apenas por boas notícias, mas uma postura de fé que decide celebrar o dom da vida antes mesmo de sair da cama." 
  },
  2: { 
    verse: "Deem graças em todas as circunstâncias... - 1 Ts 5:18", 
    thought: "A gratidão muda sua reação ao mundo.", 
    action: "Encontre algo positivo em uma situação ruim que aconteceu recentemente.", 
    reflection: "Paulo não diz para darmos graças 'pelas' circunstâncias ruins (como a doença ou a perda), mas 'em' todas elas. Isso significa que, mesmo no vale, há motivos para agradecer: a presença de Deus, a promessa da eternidade, o crescimento do caráter. Essa gratidão teimosa protege nossa mente do desespero e abre caminho para ver a solução." 
  },
  3: { 
    verse: "Bendiga o Senhor a minha alma! Não esqueça de nenhuma de suas bênçãos! - Salmos 103:2", 
    thought: "O esquecimento é inimigo da gratidão.", 
    action: "Escreva 3 livramentos ou bênçãos que você recebeu no último ano.", 
    reflection: "Nossa mente tem um viés negativo natural; lembramos facilmente das ofensas e dores, mas esquecemos rapidamente dos milagres passados. O salmista prega para sua própria alma, ordenando que ela se lembre. A gratidão requer memória ativa. Olhar para trás e ver a fidelidade de Deus nos dá combustível para confiar nEle hoje." 
  },
  4: { 
    verse: "Toda boa dádiva e todo dom perfeito vêm do alto... - Tiago 1:17", 
    thought: "Tudo o que você tem de bom é um empréstimo do céu.", 
    action: "Agradeça especificamente por um talento ou habilidade que você tem.", 
    reflection: "O orgulho mata a gratidão porque nos faz acreditar que conquistamos tudo sozinhos. A verdade bíblica é que nossa inteligência, saúde e oportunidades são presentes do Pai das Luzes. Reconhecer a fonte divina de nossas virtudes nos mantém humildes e profundamente gratos, transformando nossa vida em uma oferta de volta para Ele." 
  },
  5: { 
    verse: "Os céus declaram a glória de Deus... - Salmos 19:1", 
    thought: "A criação é uma carta de amor do Criador.", 
    action: "Observe a natureza por 5 minutos hoje (o céu, uma planta, um animal).", 
    reflection: "Vivemos tão ocupados que ignoramos a beleza gratuita que nos cerca. A natureza é a 'revelação geral' de Deus, mostrando Seu poder e criatividade. Parar para admirar um pôr do sol ou a complexidade de uma flor é um ato de adoração que recalibra nossa escala de problemas diante da grandeza do Criador." 
  },
  6: { 
    verse: "Dou graças ao meu Deus toda vez que me lembro de vocês. - Fp 1:3", 
    thought: "Pessoas são presentes, mesmo as difíceis.", 
    action: "Envie uma mensagem de gratidão a um amigo ou mentor.", 
    reflection: "Nossos relacionamentos são os maiores canais da graça de Deus. Muitas vezes só valorizamos as pessoas quando as perdemos. A gratidão expressa fortalece vínculos e cura feridas. Hoje, seja intencional em dizer a alguém o quanto a vida dessa pessoa abençoa a sua. Não assuma que elas já sabem." 
  },
  7: { 
    verse: "Entrem por suas portas com ações de graças e em seus átrios com louvor. - Salmos 100:4", 
    thought: "A gratidão é a senha de acesso para a presença de Deus.", 
    action: "Cante um louvor de agradecimento antes de pedir qualquer coisa.", 
    reflection: "Imagine chegar à casa de alguém apenas pedindo favores sem nem cumprimentar. A gratidão é o protocolo do Reino. Ela prepara o ambiente espiritual e alinha nosso coração. Quando começamos a oração agradecendo, nossos problemas diminuem de tamanho e a grandeza de Deus ocupa o centro da nossa visão." 
  },
  8: { 
    verse: "Graças a Deus pelo seu dom indescritível! - 2 Co 9:15", 
    thought: "Jesus é o maior presente que já recebemos.", 
    action: "Tire um momento para agradecer pela Cruz e pela Salvação.", 
    reflection: "Se Deus nunca mais nos desse nada além de Jesus, já teríamos motivo para gratidão eterna. O evangelho é o 'dom indescritível' — não há palavras suficientes para agradecer o fato de que fomos amados quando ainda éramos inimigos. Essa gratidão fundamental deve ser o alicerce de todos os nossos dias." 
  },
  9: { 
    verse: "E a paz de Deus... guardará os seus corações... - Fp 4:7", 
    thought: "A gratidão gera paz interior.", 
    action: "Quando sentir ansiedade hoje, pare e agradeça por 3 coisas imediatamente.", 
    reflection: "Existe uma conexão direta entre gratidão e paz mental. A ansiedade foca no que falta ou no que pode dar errado; a gratidão foca no que há e no que Deus já fez certo. Elas não podem ocupar o mesmo espaço na mente. Expulse a preocupação preenchendo o espaço com ações de graças." 
  },
  10: { 
    verse: "Sejam agradecidos. - Cl 3:15", 
    thought: "A gratidão é um imperativo, não uma sugestão.", 
    action: "Ore por alguém que te magoou, agradecendo por Deus estar te ensinando a perdoar.", 
    reflection: "Neste contexto, Paulo está falando sobre a paz de Cristo e a convivência no corpo. A ingratidão nos torna amargos e críticos. Um coração grato, por outro lado, é mais propenso a perdoar e relevar ofensas, pois reconhece o quanto já foi perdoado por Deus. A gratidão lubrifica as engrenagens dos relacionamentos humanos." 
  },
  11: { verse: "O Senhor é a minha força e o meu escudo... - Salmos 28:7", thought: "Deus protege quem confia.", action: "Agradeça pelos perigos que você nem viu, mas Deus te livrou.", reflection: "Muitas vezes agradecemos apenas pelos livramentos óbvios, mas Deus nos protege de inúmeros perigos invisíveis diariamente. Ele é o escudo que nos cerca por todos os lados. A confiança nEle transforma o medo em cânticos de louvor." },
  12: { verse: "Tendo sustento... estejamos contentes. - 1 Tm 6:8", thought: "Contentamento é a verdadeira riqueza.", action: "Olhe para o que você tem em casa e agradeça pela provisão básica.", reflection: "A sociedade de consumo nos treina para a insatisfação crônica. O contentamento bíblico não é acomodação, mas a capacidade de encontrar alegria e suficiência em Deus e no que Ele já proveu, libertando-nos da ganância e da inveja." },
  13: { verse: "Tudo coopera para o bem... - Rm 8:28", thought: "Deus usa até o mal para o bem.", action: "Agradeça por uma lição difícil que você aprendeu no passado.", reflection: "Esta é uma das promessas mais desafiadoras. Agradecer não significa dizer que o sofrimento foi bom, mas reconhecer que Deus é grande o suficiente para reciclar nossas dores e transformá-las em propósito e crescimento. Nada é desperdiçado nas mãos dEle." },
  14: { verse: "O seu amor dura para sempre! - Salmos 136:1", thought: "O amor de Deus é a única constante no universo.", action: "Repita durante o dia: 'Deus é bom e Seu amor é eterno'.", reflection: "Circunstâncias mudam, pessoas falham, a economia oscila. Mas o amor leal de Deus (Hesed) é inabalável. Basear nossa gratidão nesse caráter imutável de Deus nos dá estabilidade emocional mesmo nos dias mais turbulentos." },
  15: { verse: "Recebido com ação de graças... - 1 Tm 4:4", thought: "A gratidão santifica o prazer e a provisão.", action: "Ore antes de comer hoje, não por hábito, mas com fervor real.", reflection: "Quando recebemos algo com gratidão, reconhecemos Deus como a fonte. Isso transforma uma refeição comum em um ato sagrado de adoração. A gratidão impede que nos tornemos idólatras das coisas criadas, mantendo nosso foco no Criador." },
  16: { verse: "Eu te louvo porque me fizeste de modo especial... - Salmos 139:14", thought: "Você é uma obra-prima intencional.", action: "Agradeça por uma característica física ou de personalidade sua.", reflection: "Muitos sofrem com a autoimagem, o que é uma forma de ingratidão contra o Artista que nos criou. Aceitar e agradecer por quem somos é um passo de cura. Deus não comete erros; Ele te desenhou com propósito. Celebre a criação que você é." },
  17: { verse: "O Senhor fez grandes coisas por nós... - Salmos 126:3", thought: "Celebre as vitórias, grandes e pequenas.", action: "Conte um testemunho de vitória para alguém hoje.", reflection: "Testemunhar é uma forma poderosa de gratidão pública. Quando compartilhamos o que Deus fez, nossa fé é selada e a fé de quem ouve é edificada. Não guarde os feitos de Deus em segredo; a gratidão deve ser barulhenta." },
  18: { verse: "Cantando a Deus com gratidão... - Cl 3:16", thought: "A música é um veículo para a gratidão.", action: "Ouça e cante sua música de louvor favorita.", reflection: "A música tem o poder de acessar emoções que a fala não alcança. Paulo nos instrui a usar salmos e hinos para ensinar e aconselhar uns aos outros, mas a base disso é a gratidão no coração. Deixe que a melodia leve sua gratidão ao trono." },
  19: { verse: "Melhor é o pouco com o temor do Senhor... - Pv 15:16", thought: "Paz vale mais que ouro.", action: "Agradeça pela tranquilidade e pelos momentos simples.", reflection: "Muitos buscam acumular bens e perdem a paz no processo. A sabedoria bíblica inverte essa lógica: a verdadeira prosperidade inclui a paz de espírito e a presença de Deus. Um jantar simples com amor vale mais que um banquete com discórdia." },
  20: { verse: "Todavia eu me alegrarei no Senhor. - Hc 3:18", thought: "Gratidão incondicional é uma arma de guerra.", action: "Louve a Deus apesar de qualquer problema pendente.", reflection: "O profeta Habacuque descreve um cenário de devastação econômica total, mas decide se alegrar no Deus da sua salvação. Essa é a forma mais madura de gratidão: aquela que não depende da figueira florescer, mas se sustenta na fidelidade de Deus." },
  21: { verse: "Como posso retribuir ao Senhor? - Salmos 116:12", thought: "A gratidão gera generosidade e serviço.", action: "Faça um ato de bondade não solicitado para alguém.", reflection: "Quando percebemos o quanto recebemos de Deus, a resposta natural é querer dar de volta. Embora não possamos 'pagar' a Deus, podemos servir aos Seus filhos. O serviço ao próximo é a gratidão em movimento." },
  22: { verse: "Tornem conhecidos os seus feitos. - 1 Cr 16:8", thought: "Gratidão é uma forma de evangelismo.", action: "Poste algo pelo qual você é grato nas redes sociais.", reflection: "Em um mundo cheio de más notícias e reclamações, um coração grato brilha como luz. Ao dar crédito a Deus publicamente pelas coisas boas da vida, despertamos a curiosidade dos outros sobre a fonte da nossa esperança." },
  23: { verse: "O coração alegre é bom remédio. - Pv 17:22", thought: "Gratidão traz saúde física e emocional.", action: "Sorria intencionalmente e procure motivos para rir.", reflection: "A ciência moderna confirma o que a Bíblia diz há milênios: a alegria e a gratidão fortalecem o sistema imunológico e reduzem o estresse. Reclamar adoece a alma e o corpo; agradecer é um tônico de vida." },
  24: { verse: "Recebendo um Reino inabalável... - Hb 12:28", thought: "Seu futuro eterno é seguro.", action: "Agradeça pela promessa do Céu e da vida eterna.", reflection: "Tudo neste mundo pode ser abalado — saúde, economia, política. Mas nós pertencemos a um Reino que não pode ser destruído. Essa segurança eterna deve gerar em nós uma gratidão profunda e reverente, independente do caos terreno." },
  25: { verse: "O Senhor é compassivo... - Salmos 103:8", thought: "Deus é paciente com nossas falhas.", action: "Agradeça por Deus não ter desistido de você.", reflection: "Quantas vezes falhamos? A paciência de Deus é um motivo imenso para gratidão. Ele não nos trata conforme os nossos pecados, mas segundo a Sua misericórdia. Reconhecer essa graça nos torna mais pacientes com os outros também." },
  26: { verse: "Ações de graças por todos os homens... - 1 Tm 2:1", thought: "Seja grato pela comunidade e pela nação.", action: "Ore agradecendo pela vida de líderes ou autoridades.", reflection: "É fácil criticar, mas a Bíblia nos orienta a orar e agradecer. A intercessão com gratidão muda nossa atitude em relação à sociedade e convida a intervenção de Deus para que tenhamos uma vida tranquila e piedosa." },
  27: { verse: "Mudaste o meu choro em dança. - Salmos 30:11", thought: "Deus é especialista em restauração.", action: "Coloque uma música animada e celebre a vida.", reflection: "O luto e a tristeza têm seu tempo, mas não são o destino final. Deus tem o poder de transmutar as lágrimas mais amargas em alegria festiva. A gratidão antecipa essa virada, crendo que a manhã da alegria virá." },
  28: { verse: "Graças a Deus, que nos dá a vitória... - 1 Co 15:57", thought: "Já somos vencedores em Cristo.", action: "Agradeça por uma batalha que você sabe que vai vencer.", reflection: "Não lutamos *para* a vitória, mas *a partir* da vitória conquistada por Jesus na cruz e na ressurreição. A gratidão nos posiciona como vencedores, lembrando-nos que o inimigo final, a morte, já foi derrotado." },
  29: { verse: "Nunca vi desamparado o justo. - Salmos 37:25", thought: "A fidelidade de Deus atravessa gerações.", action: "Agradeça pela provisão que te sustentou até aqui.", reflection: "Olhe para a sua história de vida. Houve momentos difíceis, sim, mas aqui está você. Deus não te deixou. Essa constatação da fidelidade passada de Deus é a garantia de que Ele continuará cuidando do seu futuro." },
  30: { verse: "Todo ser que respira louve ao Senhor. - Salmos 150:6", thought: "Seu propósito final é o louvor.", action: "Respire fundo e use esse fôlego para dizer 'Aleluia'.", reflection: "Encerramos a jornada onde tudo começa e termina: no louvor. Enquanto houver fôlego em nossos pulmões, há uma razão para agradecer. A gratidão não é apenas um ato, é o estilo de vida do céu trazido para a terra." }
};

// Static Content for Proverbs Wisdom Journey
export const PROVERBS_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: {
    verse: "O temor do Senhor é o princípio do conhecimento... - Provérbios 1:7",
    thought: "A sabedoria começa com a reverência a Deus.",
    action: "Ore pedindo um coração ensinável e reverente.",
    reflection: "Não existe sabedoria real sem Deus no centro. O 'temor' aqui não é pavor, mas um respeito profundo e admirado que reconhece Deus como a autoridade suprema. Sem essa bússola moral e espiritual, todo conhecimento humano pode se tornar arrogância ou ser mal utilizado. Comece sua busca por sabedoria curvando-se diante do Criador."
  },
  2: {
    verse: "Pois o Senhor é quem dá sabedoria... - Provérbios 2:6",
    thought: "Sabedoria é um presente, não uma conquista apenas intelectual.",
    action: "Leia Provérbios 2 e peça discernimento específico para um problema.",
    reflection: "Muitas vezes buscamos sabedoria em livros, cursos e gurus, mas a fonte primária é Deus. Ele tem prazer em dar discernimento a quem pede. A sabedoria divina vai além do Q.I.; é a habilidade de ver a vida sob a perspectiva da eternidade e tomar decisões que trazem vida e paz."
  },
  3: {
    verse: "Confie no Senhor de todo o seu coração... - Provérbios 3:5",
    thought: "Sua lógica é limitada; a visão de Deus é infinita.",
    action: "Entregue uma decisão difícil a Deus hoje, renunciando à necessidade de entender tudo.",
    reflection: "Nossa tendência natural é confiar no que vemos e no que entendemos. A fé é confiar na Mão que nos guia no escuro. Deus vê o quadro completo, enquanto nós vemos apenas um pixel. Confiar de 'todo o coração' significa não se apoiar apenas na própria inteligência, mas buscar a direção de Deus antes de cada passo."
  },
  4: {
    verse: "Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida. - Provérbios 4:23",
    thought: "O que entra na sua mente define sua vida.",
    action: "Faça um 'jejum' de conteúdos negativos hoje (notícias ruins, fofoca).",
    reflection: "O coração, na Bíblia, é o centro das emoções, intelecto e vontade. É a fonte. Se a água da fonte estiver envenenada, todo o rio da vida será poluído. Proteger o coração significa filtrar o que assistimos, ouvimos e pensamos. Não deixe o lixo do mundo fazer ninho na sua alma."
  },
  5: {
    verse: "Os caminhos do homem estão diante dos olhos do Senhor... - Provérbios 5:21",
    thought: "Integridade é fazer o certo mesmo quando ninguém vê.",
    action: "Seja honesto em uma pequena coisa hoje, mesmo que custe algo.",
    reflection: "Deus é a plateia onipresente da nossa vida. Isso não deve nos causar paranoia, mas nos chamar a uma vida de transparência e coerência. A pessoa sábia vive na luz, sem segredos escondidos que possam se tornar armadilhas no futuro. A integridade traz uma segurança inabalável."
  },
  6: {
    verse: "Vai ter com a formiga, ó preguiçoso... - Provérbios 6:6",
    thought: "A diligência traz prosperidade; a preguiça, pobreza.",
    action: "Complete uma tarefa que você está adiando há dias.",
    reflection: "A sabedoria é iminentemente prática. Salomão usa a formiga como exemplo de autoliderança e iniciativa. Ela não precisa de supervisor para trabalhar. Deus abençoa o movimento, o esforço e a preparação. Não espere as condições perfeitas para agir; a passividade é inimiga do destino."
  },
  7: {
    verse: "Guarde os meus mandamentos e você viverá. - Provérbios 7:2",
    thought: "A obediência é o caminho da vida e da proteção.",
    action: "Obedeça prontamente a um impulso do Espírito Santo ou a um princípio bíblico hoje.",
    reflection: "Os mandamentos de Deus não são restrições para roubar nossa alegria, são 'cercas de proteção' para nos guardar do abismo. Assim como os trilhos permitem que o trem corra velozmente sem descarrilar, a Lei de Deus dá direção e segurança para nossa liberdade. Obedecer é escolher a vida."
  },
  8: {
    verse: "A sabedoria é melhor do que jóias... - Provérbios 8:11",
    thought: "Invista em sabedoria, ela vale mais que dinheiro.",
    action: "Leia um capítulo de um livro edificante ou ouça um podcast de ensino.",
    reflection: "Riquezas materiais podem ser roubadas, perdidas ou desvalorizadas. A sabedoria divina é um tesouro eterno que se integra a quem você é. Ela abre portas que o dinheiro não abre e resolve problemas que o dinheiro não resolve. Busque crescer em entendimento espiritual acima do ganho financeiro."
  },
  9: {
    verse: "O temor do Senhor prolonga os dias. - Provérbios 10:27",
    thought: "Uma vida com Deus é uma vida de qualidade e longevidade.",
    action: "Cuide do seu corpo hoje como templo de Deus (beba água, durma bem).",
    reflection: "A sabedoria afeta nossa fisiologia. O pecado, a culpa, a raiva e a ansiedade geram estresse que mata. A justiça, a paz e a confiança em Deus trazem saúde aos ossos e serenidade à alma. Viver segundo os princípios do Criador é o melhor manual de manutenção para a criatura."
  },
  10: {
    verse: "Onde não há conselho os projetos fracassam. - Provérbios 15:22",
    thought: "Não caminhe sozinho. A autossuficiência é perigosa.",
    action: "Peça um conselho a alguém mais experiente sobre um plano seu.",
    reflection: "O orgulho nos faz achar que sabemos tudo e que não precisamos de ninguém. A sabedoria reconhece nossas limitações e busca a visão de outros. Ter mentores e conselheiros é uma rede de segurança que evita quedas desnecessárias. O sucesso é um esporte coletivo."
  },
  11: {
    verse: "A resposta branda desvia o furor. - Provérbios 15:1",
    thought: "Sua mansidão é mais forte que sua gritaria.",
    action: "Responda com gentileza e voz baixa se for provocado hoje.",
    reflection: "É fácil reagir com raiva e aumentar o volume da discussão. É divino e sábio reagir com graça, quebrando o ciclo da ofensa. Palavras têm poder de incendiar ou de apagar o fogo. A pessoa sábia controla sua língua e, assim, controla o ambiente ao seu redor."
  },
  12: {
    verse: "O coração do homem traça o seu caminho, mas o Senhor lhe dirige os passos. - Provérbios 16:9",
    thought: "Faça planos, mas deixe a caneta final com Deus.",
    action: "Ore: 'Senhor, estes são meus planos, mas faça a Tua vontade acima da minha'.",
    reflection: "Planejar é uma virtude, mas ser rígido e inflexível é um erro. Deus tem a visão panorâmica e, às vezes, muda nossa rota para nos livrar de perigos ou nos levar a destinos melhores. A verdadeira sabedoria é caminhar com planejamento, mas com o coração aberto às reorientações do Espírito."
  },
  13: {
    verse: "O amigo ama em todos os momentos. - Provérbios 17:17",
    thought: "Lealdade é a marca da verdadeira amizade.",
    action: "Mande mensagem para um amigo fiel dizendo o quanto o valoriza.",
    reflection: "Em tempos de prosperidade, os amigos são muitos. É na adversidade ('na angústia') que a verdadeira amizade é provada e nasce o irmão. Seja o tipo de amigo que você gostaria de ter: leal, presente e constante, não apenas quando for conveniente."
  },
  14: {
    verse: "A morte e a vida estão no poder da língua. - Provérbios 18:21",
    thought: "Suas palavras criam realidades espirituais e emocionais.",
    action: "Profetize bênçãos sobre sua casa e família hoje. Evite reclamações.",
    reflection: "Nossa boca é um leme que dirige o navio da nossa vida. Palavras de crítica e morte geram um ambiente tóxico; palavras de fé e vida geram esperança. Pare de falar mal da sua própria vida. Use sua autoridade verbal para alinhar sua realidade com as promessas de Deus."
  },
  15: {
    verse: "Muitos são os planos no coração do homem, mas o que prevalece é o propósito do Senhor. - Provérbios 19:21",
    thought: "O propósito de Deus é inabalável e soberano.",
    action: "Descanse na soberania de Deus; o que é seu virá.",
    reflection: "Podemos nos estressar tentando manipular as circunstâncias para fazer tudo acontecer do nosso jeito, mas no final, apenas o que Deus determinou permanecerá. Isso deve nos trazer paz, não passividade. Se alinhe ao propósito de Deus e você será imparável."
  },
  16: {
    verse: "O homem de integridade anda seguro. - Provérbios 10:9",
    thought: "Quem não deve, não teme.",
    action: "Resolva qualquer pendência moral ou financeira pequena que esteja te tirando a paz.",
    reflection: "A paz de consciência é o travesseiro mais macio que existe. A mentira e a desonestidade exigem manutenção constante e geram medo de ser descoberto. A verdade se sustenta sozinha. O caminho da integridade pode parecer mais longo, mas é o único que leva a um sono tranquilo."
  },
  17: {
    verse: "Como ferro com ferro se afia, assim o homem ao seu amigo. - Provérbios 27:17",
    thought: "Relacionamentos nos moldam e nos afiam.",
    action: "Esteja com pessoas que te desafiam a crescer espiritualmente.",
    reflection: "O processo de afiar envolve atrito e faíscas. Relacionamentos verdadeiros nem sempre são apenas elogios; às vezes envolvem o confronto amoroso que remove nossas arestas. Valorize quem te diz a verdade e te impulsiona para mais perto de Deus, mesmo que isso doa no ego."
  },
  18: {
    verse: "Quem esconde os seus pecados não prospera, mas quem os confessa e os abandona alcança misericórdia. - Provérbios 28:13",
    thought: "Transparência traz cura e prosperidade.",
    action: "Confesse uma falha a Deus e, se necessário, a alguém de confiança.",
    reflection: "Tentar esconder nossos erros é como tentar segurar uma bola de praia debaixo d'água: exige esforço constante e uma hora ela salta para fora. A confissão libera a pressão e abre a porta para a misericórdia de Deus. A prosperidade espiritual depende de um coração limpo e arrependido."
  },
  19: {
    verse: "A soberba precede a ruína... - Provérbios 16:18",
    thought: "O orgulho é o degrau para a queda.",
    action: "Pratique a humildade servindo alguém hoje sem esperar reconhecimento.",
    reflection: "Quando nos achamos grandes demais, autossuficientes e superiores, paramos de depender de Deus e de ouvir os outros. Esse isolamento é o prelúdio do desastre. A humildade é o solo fértil onde a graça de Deus cresce. Mantenha-se pequeno aos seus próprios olhos e Deus te exaltará."
  },
  20: {
    verse: "Ensina a criança no caminho em que deve andar... - Provérbios 22:6",
    thought: "O exemplo é o maior professor.",
    action: "Seja um exemplo de fé para os mais jovens da sua família hoje.",
    reflection: "Não deixamos herança apenas de dinheiro, mas de valores e fé. Ensinar 'no caminho' significa caminhar junto, modelando o comportamento. As crianças ouvem o que dizemos, mas imitam o que fazemos. Invista na próxima geração com seu tempo e integridade."
  },
  21: {
    verse: "Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo. - Provérbios 25:11",
    thought: "Falar na hora certa é uma arte valiosa.",
    action: "Pense duas vezes antes de dar sua opinião hoje. Espere o momento certo.",
    reflection: "O conteúdo da fala importa, mas o 'timing' é crucial. Uma verdade dita na hora errada pode ferir; dita na hora certa, cura e edifica. A sabedoria envolve sensibilidade para discernir o ambiente e o coração do ouvinte. Às vezes, o silêncio é a melhor resposta até que a hora chegue."
  },
  22: {
    verse: "Se o seu inimigo tiver fome, dê-lhe de comer... - Provérbios 25:21",
    thought: "O bem vence o mal de forma surpreendente.",
    action: "Faça algo bom por alguém que não gosta de você ou te tratou mal.",
    reflection: "Isso contraria nossa natureza vingativa. Mas tratar o inimigo com bondade confunde o mal e amontoa 'brasas vivas' (consciência e arrependimento) sobre a cabeça dele. O amor é a maior arma estratégica do cristão. Não se deixe vencer pelo mal, mas vença o mal com o bem."
  },
  23: {
    verse: "Não se gabe do dia de amanhã... - Provérbios 27:1",
    thought: "A vida é breve; viva o hoje com intensidade e propósito.",
    action: "Faça o que é importante hoje (amar, perdoar), não procrastine.",
    reflection: "A presunção de que temos controle sobre o tempo é perigosa. A vida é descrita como um sopro. Isso não deve gerar ansiedade, mas urgência em fazer o bem. Ame hoje, perdoe hoje, abrace hoje. Não guarde o melhor perfume apenas para uma ocasião que pode não chegar."
  },
  24: {
    verse: "Foge o ímpio sem que ninguém o persiga, mas o justo é ousado como o leão. - Provérbios 28:1",
    thought: "A justiça traz uma coragem sobrenatural.",
    action: "Tome uma atitude corajosa hoje baseada na sua fé.",
    reflection: "A culpa nos torna covardes e paranoicos. A consciência limpa, lavada pelo sangue de Jesus e alinhada com a Palavra, gera uma ousadia de leão. Quando sabemos que estamos com Deus, não temos nada a temer e enfrentamos os desafios de cabeça erguida."
  },
  25: {
    verse: "O tolo dá vazão à sua ira, mas o sábio a domina. - Provérbios 29:11",
    thought: "Autocontrole é força, não fraqueza.",
    action: "Respire fundo e conte até 10 antes de reagir a uma irritação.",
    reflection: "Ser explosivo não é sinal de 'personalidade forte', é falta de domínio próprio, um fruto do Espírito. O verdadeiro forte é quem conquista a si mesmo e suas emoções. Dominar a ira evita arrependimentos profundos e preserva relacionamentos."
  },
  26: {
    verse: "Toda palavra de Deus é pura; ele é escudo para os que nele confiam. - Provérbios 30:5",
    thought: "A Bíblia é sua segurança e filtro de verdade.",
    action: "Leia a Bíblia por 15 minutos hoje buscando proteção.",
    reflection: "Em um mundo de fake news, opiniões mutáveis e verdades relativas, a Palavra de Deus permanece como a rocha sólida e pura. Ela não contém impurezas ou erros. Confiar no que Deus diz é se colocar atrás de um escudo impenetrável contra as mentiras do inimigo."
  },
  27: {
    verse: "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis. - Provérbios 31:10",
    thought: "Caráter vale mais que beleza ou riquezas.",
    action: "Elogie o caráter e a virtude de uma mulher importante na sua vida.",
    reflection: "A cultura valoriza a estética e o sucesso exterior. Deus valoriza a virtude, a força de caráter e o temor do Senhor. Essas qualidades são raras e preciosas como jóias. Seja alguém que cultiva e valoriza a beleza interior que não se corrompe com o tempo."
  },
  28: {
    verse: "Dá-me, filho meu, o teu coração... - Provérbios 23:26",
    thought: "Deus quer você, não apenas suas obras ou rituais.",
    action: "Em oração, diga a Deus: 'Eu sou Teu, toma meu coração por completo'.",
    reflection: "No meio de tantos conselhos práticos, Deus faz um apelo relacional. Ele é um Pai amoroso que deseja conexão. Ele não quer apenas servos eficientes seguindo regras, Ele quer filhos apaixonados que confiam nEle e observam Seus caminhos por amor."
  },
  29: {
    verse: "O que tapa o ouvido ao clamor do pobre também clamará e não será ouvido. - Provérbios 21:13",
    thought: "A compaixão abre os céus para nós.",
    action: "Ajude alguém necessitado hoje (com recursos, tempo ou atenção).",
    reflection: "Nossa atitude com os vulneráveis reflete a realidade do nosso coração para com Deus. A generosidade destranca a provisão divina. Se queremos que Deus ouça nosso clamor, devemos ter ouvidos sensíveis ao clamor dos que sofrem ao nosso redor."
  },
  30: {
    verse: "O nome do Senhor é torre forte; o justo corre para ela e está seguro. - Provérbios 18:10",
    thought: "Há poder e refúgio no Nome de Jesus.",
    action: "Ore invocando o nome do Senhor sobre sua casa e problemas.",
    reflection: "Quando todos os recursos humanos falham, temos um lugar para onde correr. O Nome de Deus representa Seu caráter, Seu poder e Sua aliança. Não é um amuleto mágico, é uma Pessoa real que nos envolve e protege como uma fortaleza inexpugnável."
  },
  31: {
    verse: "Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada. - Provérbios 31:30",
    thought: "O temor do Senhor é o segredo da verdadeira honra e legado.",
    action: "Reflita sobre este mês: o que você aprendeu de sabedoria e mudou na prática?",
    reflection: "Encerramos a jornada de Provérbios como começamos: com o temor do Senhor. Essa é a chave mestra da vida. Tudo o mais passa — beleza, força, riqueza. Mas uma vida vivida em reverência e obediência a Deus deixa um legado eterno e recebe o louvor do próprio Deus."
  }
};

// Static Content for Healing Journey
export const HEALING_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: { 
    verse: "Eu sou o Senhor que te sara. - Êxodo 15:26", 
    thought: "A cura faz parte da natureza e do nome de Deus.", 
    action: "Declare três vezes em voz alta: 'Deus quer me curar porque Ele é o meu Médico'.", 
    reflection: "Deus se apresenta ao povo não apenas como Criador, mas como Jeová Rapha — 'O Senhor que sara'. Isso significa que a cura não é apenas algo que Ele faz, é quem Ele é. Ao buscar a cura, estamos buscando a própria manifestação da natureza restauradora de Deus em nossos corpos e almas." 
  },
  2: { 
    verse: "Pelas suas feridas fomos curados. - Isaías 53:5", 
    thought: "O preço da sua cura já foi pago na cruz.", 
    action: "Visualize Jesus levando suas dores na cruz e receba a troca divina.", 
    reflection: "A obra da cruz foi completa. Jesus levou nossos pecados e também nossas enfermidades. A cura não é uma loteria espiritual, é um direito de herança comprado pelo sangue de Cristo. Quando oramos por cura, não estamos tentando convencer Deus a fazer algo novo, estamos reivindicando o que foi estabelecido no Calvário." 
  },
  3: { 
    verse: "Sara-me, Senhor, e sararei; salva-me, e serei salvo... - Jeremias 17:14", 
    thought: "A oração por cura deve ser cheia de confiança na capacidade de Deus.", 
    action: "Faça dessa oração de Jeremias o seu clamor pessoal hoje.", 
    reflection: "Há uma certeza na oração do profeta: se Deus fizer, estará feito. Não há 'meia cura' ou falha médica com Deus. Ele restaura não só o corpo, mas a alma, trazendo salvação plena. Deposite sua confiança na competência do Médico dos médicos." 
  },
  4: { 
    verse: "Ele perdoa todos os teus pecados e cura todas as tuas doenças. - Salmos 103:3", 
    thought: "Perdão e cura andam de mãos dadas.", 
    action: "Peça perdão a Deus e libere perdão a outros para desobstruir o canal da cura.", 
    reflection: "Muitas vezes, a amargura e a culpa adoecem o corpo. O Salmo 103 conecta o perdão dos pecados à cura das doenças. Receba hoje a limpeza espiritual completa, sabendo que a saúde da alma transborda para a saúde do corpo. Deus quer te ver livre de ambos os pesos." 
  },
  5: { 
    verse: "A oração da fé salvará o doente, e o Senhor o levantará. - Tiago 5:15", 
    thought: "A fé é o ativador do poder de Deus.", 
    action: "Peça aos presbíteros ou a alguém de muita fé para orar com você.", 
    reflection: "Não é o tamanho da fé, mas em Quem ela está depositada. Uma fé simples, mas sincera, move a mão de Deus. Tiago nos encoraja a orar uns pelos outros, lembrando que não estamos sozinhos nessa batalha pela saúde. Há poder na concordância e na oração comunitária." 
  },
  6: { 
    verse: "Para vós... nascerá o sol da justiça, trazendo cura nas suas asas. - Malaquias 4:2", 
    thought: "Um novo dia de saúde e justiça está amanhecendo sobre você.", 
    action: "Tome um pouco de sol hoje e agradeça pela vida e calor de Deus.", 
    reflection: "Assim como o sol dissipa a escuridão e o frio da noite, a presença de Jesus (o Sol da Justiça) dissipa a doença e a morte. 'Cura nas suas asas' (raios) é uma promessa de que o contato com a luz de Cristo traz restauração celular, emocional e espiritual." 
  },
  7: { 
    verse: "Enviou a sua palavra, e os sarou; e os livrou da sua destruição. - Salmos 107:20", 
    thought: "A Palavra de Deus é remédio vivo.", 
    action: "Leia versículos de cura em voz alta, como se estivesse tomando um remédio.", 
    reflection: "A Palavra de Deus não é apenas informação, é poder criativo. Foi pela Palavra que o mundo foi criado, e é pela Palavra que nosso corpo pode ser recriado. Encha sua mente e seu ambiente com as promessas bíblicas, deixando que elas penetrem no seu espírito e tragam vida." 
  },
  8: { 
    verse: "Quero, fica limpo. - Mateus 8:3", 
    thought: "Jesus *quer* te curar. Nunca duvide da vontade dEle.", 
    action: "Rejeite o pensamento de que a doença é vontade de Deus. Diga: 'Ele quer me curar'.", 
    reflection: "O leproso duvidou se Jesus queria curá-lo, não se Ele podia. Jesus quebrou essa dúvida imediatamente tocando nele e dizendo: 'Eu quero'. A doença é uma intrusa na criação perfeita de Deus. O coração de Jesus sempre bate em compasso de vida e restauração para Seus filhos." 
  },
  9: { 
    verse: "O Senhor o sustentará no leito de enfermidade... - Salmos 41:3", 
    thought: "Deus está com você, sustentando-o mesmo durante a dor.", 
    action: "Descanse na presença dEle, sabendo que você não está sofrendo sozinho.", 
    reflection: "Mesmo nos processos onde a cura completa demora, Deus promete um sustento sobrenatural. O texto diz que Ele 'afofa a cama' na doença, uma imagem de cuidado terno e paternal. Ele transforma o leito de dor em um lugar de encontro e fortalecimento interior." 
  },
  10: { 
    verse: "Tudo é possível ao que crê. - Marcos 9:23", 
    thought: "Não coloque limites lógicos no poder de Deus.", 
    action: "Rejeite diagnósticos finais de 'impossível'. A última palavra é de Deus.", 
    reflection: "A medicina trabalha com fatos e estatísticas; a fé trabalha com a verdade revelada de Deus. A verdade é superior aos fatos. O que é impossível para a ciência é o ambiente natural para o agir de Deus. Mantenha a porta da possibilidade aberta através da sua crença." 
  },
  11: { 
    verse: "A alegria do Senhor é a vossa força. - Neemias 8:10", 
    thought: "A alegria fortalece a imunidade e o espírito.", 
    action: "Assista algo engraçado, ria ou cante, mesmo sem vontade.", 
    reflection: "A tristeza seca os ossos e enfraquece o corpo. A alegria do Senhor, que não depende de circunstâncias, libera vida. O riso e o louvor são armas de guerra contra a enfermidade. Ao se alegrar em Deus, você está literalmente fortalecendo seu corpo para a batalha da recuperação." 
  },
  12: { 
    verse: "Eis que lhe trarei a ela saúde e cura, e os sararei... - Jeremias 33:6", 
    thought: "Deus tem planos de restauração e abundância para você.", 
    action: "Profetize saúde sobre seu futuro e sobre sua família.", 
    reflection: "Deus promete revelar 'abundância de paz e segurança' junto com a cura. A restauração divina é completa: Ele quer devolver não apenas a função do corpo, mas a paz da mente e a segurança da alma. Creia que dias de saúde plena estão sendo preparados para você." 
  },
  13: { 
    verse: "Muitas são as aflições do justo, mas o Senhor o livra de todas. - Salmos 34:19", 
    thought: "Você vai sair dessa. O livramento é a promessa final.", 
    action: "Lembre-se de livramentos passados para encorajar sua fé hoje.", 
    reflection: "Ser justo não nos isenta de aflições e doenças, mas nos garante uma saída. A doença é uma aflição temporária, não uma sentença eterna. A narrativa da sua vida não termina na dor; ela avança para o livramento. Mantenha os olhos na porta de saída que Deus abrirá." 
  },
  14: { 
    verse: "A tua fé te salvou; vai-te em paz. - Lucas 7:50", 
    thought: "Celebre a cura pela fé antes de vê-la com os olhos.", 
    action: "Agradeça a Deus pela cura completa como se já estivesse materializada.", 
    reflection: "Encerramos a jornada crendo. A fé é a certeza das coisas que se esperam. Quando Jesus via a fé, Ele liberava o milagre. Caminhe em paz, sabendo que a obra foi feita no mundo espiritual e, no tempo certo, se manifestará plenamente no natural. Viva como um curado." 
  }
};

// Static Content for Open Doors Journey
export const OPEN_DOORS_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: { 
    verse: "O meu Deus suprirá todas as necessidades de vocês... - Fp 4:19", 
    thought: "Deus é a fonte; o emprego é apenas um canal.", 
    action: "Liste suas necessidades financeiras e entregue-as em oração.", 
    reflection: "Muitas vezes ficamos ansiosos porque olhamos para os 'canais' (emprego, clientes, economia) e os vemos secando. Mas a nossa 'Fonte' é Deus, e Ele nunca seca. Paulo afirma isso aos Filipenses que eram generosos. A promessa de suprimento está ligada à riqueza da glória de Cristo, não à economia da terra." 
  },
  2: { 
    verse: "O Senhor abrirá o seu bom tesouro, o céu... - Dt 28:12", 
    thought: "A chuva de bênçãos virá sobre o trabalho das suas mãos.", 
    action: "Seja fiel e excelente no pouco que você tem para fazer hoje.", 
    reflection: "Deus promete abençoar 'toda a obra das tuas mãos'. Ele não abençoa a inatividade. Prepare o terreno, envie os currículos, faça os contatos. A parte dEle é mandar a chuva (oportunidade e favor); a sua parte é ter a terra arada e pronta para receber." 
  },
  3: { 
    verse: "Busquem, pois, em primeiro lugar o Reino de Deus... - Mt 6:33", 
    thought: "Prioridades certas destravam a provisão divina.", 
    action: "Comece o dia orando e lendo a Bíblia antes de checar emails ou vagas.", 
    reflection: "Existe uma ordem espiritual para o sucesso. Quando colocamos os interesses de Deus (Seu Reino, Sua justiça) no topo da nossa agenda, Ele assume a responsabilidade pelas nossas necessidades básicas (comida, roupa, teto). Alinhe suas prioridades e veja Deus alinhar sua vida financeira." 
  },
  4: { 
    verse: "Eis que diante de ti pus uma porta aberta que ninguém pode fechar. - Ap 3:8", 
    thought: "O favor de Deus é soberano e imparável.", 
    action: "Declare em voz alta: 'A porta que Deus abre para mim, homem nenhum fecha'.", 
    reflection: "Não tema a concorrência, a crise ou a opinião de homens. Quando Deus decide promover alguém e abrir uma porta de oportunidade, nenhuma força no universo pode bloquear. Descanse na soberania de Deus que controla as chaves do seu destino profissional." 
  },
  5: { 
    verse: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. - Salmos 37:5", 
    thought: "Solte o controle e deixe Deus agir.", 
    action: "Pare de se preocupar por 1 hora. Quando a ansiedade vier, diga: 'Eu já entreguei'.", 
    reflection: "A ansiedade e a tentativa de controle muitas vezes atrapalham o agir de Deus. 'Entregar' significa tirar das suas mãos e colocar nas dEle. Confiar significa crer que Ele fará melhor do que você. É uma parceria onde você descansa na fé enquanto Ele trabalha nos bastidores." 
  },
  6: { 
    verse: "Sabeis que o vosso trabalho não é vão no Senhor. - 1 Co 15:58", 
    thought: "Nenhum esforço feito com fé é desperdiçado.", 
    action: "Faça seu trabalho (ou a busca por ele) hoje com alegria e esperança.", 
    reflection: "Deus vê cada currículo enviado, cada entrevista, cada hora de estudo e cada dia de trabalho honesto. Nada passa despercebido. No tempo certo, haverá uma colheita para toda semente de esforço que você plantou. Não desanime; a recompensa vem do Senhor." 
  },
  7: { 
    verse: "Trazei todos os dízimos à casa do tesouro... - Ml 3:10", 
    thought: "A generosidade quebra o ciclo da escassez.", 
    action: "Seja generoso com alguém hoje, mesmo que seja com pouco.", 
    reflection: "A economia do Reino funciona pela lógica inversa do mundo: retemos para perder e damos para ganhar. A fidelidade nos dízimos e ofertas não é uma troca comercial com Deus, mas uma declaração de confiança de que Ele é o dono de tudo. A generosidade abre as janelas do céu." 
  },
  8: { 
    verse: "O Senhor é o meu pastor; de nada terei falta. - Salmos 23:1", 
    thought: "A escassez não é o seu destino final.", 
    action: "Repita o Salmo 23, visualizando Deus guiando você a pastos verdes.", 
    reflection: "Você tem um Pastor responsável e bom. A função do pastor é garantir que as ovelhas tenham o que comer e onde descansar. Se você está seguindo a Jesus, a falta é apenas um vale passageiro, não o lugar de habitação. Ele sabe onde estão os recursos que você precisa." 
  },
  9: { 
    verse: "Tudo o que fizerem, façam de todo o coração, como para o Senhor. - Cl 3:23", 
    thought: "A excelência atrai promoção e destaque.", 
    action: "Melhore algo no seu trabalho ou apresentação pessoal hoje.", 
    reflection: "Seu chefe real é Jesus Cristo. Quando você trabalha com excelência, integridade e dedicação, mesmo que ninguém veja, você está adorando a Deus. Essa atitude se destaca no mundo espiritual e natural, atraindo favor e oportunidades de crescimento." 
  },
  10: { 
    verse: "Pois eu bem sei os planos que tenho para vós... - Jr 29:11", 
    thought: "Seu futuro já está planejado e é cheio de esperança.", 
    action: "Sonhe com seu futuro profissional e escreva um objetivo.", 
    reflection: "O desemprego ou a estagnação não são o fim da sua história. Deus tem pensamentos de paz e um futuro para você. O momento atual é apenas um capítulo de preparação ou transição. Confie no Autor da sua história, Ele está escrevendo uma virada." 
  },
  11: { 
    verse: "A bênção do Senhor é que enriquece; e não traz com ela dores. - Pv 10:22", 
    thought: "Busque a bênção de Deus, não apenas o dinheiro a qualquer custo.", 
    action: "Ore pedindo sabedoria financeira e paz na prosperidade.", 
    reflection: "Dinheiro conquistado sem Deus pode trazer dor, insônia e problemas familiares. A prosperidade que vem da bênção do Senhor é completa: traz recursos e também a paz para desfrutá-los. Busque a riqueza que vem da mão de Deus, que é leve e abençoadora." 
  },
  12: { 
    verse: "Fui moço, e agora sou velho; mas nunca vi desamparado o justo. - Salmos 37:25", 
    thought: "Deus tem um histórico impecável de fidelidade.", 
    action: "Lembre-se de como Deus proveu em momentos difíceis no passado.", 
    reflection: "O salmista Davi, olhando para trás em sua vida, testemunha a fidelidade constante de Deus. Se Ele cuidou de você ontem, cuidará hoje e amanhã. O justo (aquele justificado por Deus) pode passar por aperto, mas nunca será abandonado ou deixado à mendicidade espiritual." 
  },
  13: { 
    verse: "Lança o teu pão sobre as águas, porque depois de muitos dias o acharás. - Ec 11:1", 
    thought: "É tempo de investir, arriscar e plantar.", 
    action: "Tente algo novo profissionalmente (um curso, um contato, uma ideia).", 
    reflection: "Não tenha medo de diversificar e semear em lugares que parecem incertos. A lei da semeadura é infalível. Quem guarda as sementes por medo nunca terá colheita. Arrisque-se com a direção de Deus, lance seu talento no mundo, e o retorno virá no tempo oportuno." 
  },
  14: { 
    verse: "Não digam: 'A minha força e o poder do meu braço me conseguiram estas riquezas'. - Dt 8:17", 
    thought: "Toda habilidade e força vêm de Deus.", 
    action: "Agradeça a Deus pelos seus talentos e inteligência.", 
    reflection: "A humildade mantém as portas abertas. Quando começamos a achar que somos autossuficientes e que nosso sucesso se deve apenas ao nosso brilho, nos desconectamos da Fonte. Reconheça Deus como a origem da sua capacidade de produzir riqueza e Ele continuará te capacitando." 
  },
  15: { 
    verse: "Até aqui nos ajudou o Senhor. - 1 Sm 7:12", 
    thought: "Ebenezer: Celebre cada etapa da jornada.", 
    action: "Faça uma pausa para agradecer pelo que você já tem.", 
    reflection: "A gratidão pelo pouco qualifica você para o muito. Celebre as pequenas vitórias, os pagamentos parciais, os trabalhos temporários. Cada provisão é um testemunho de que Deus está ajudando. A ingratidão fecha portas; o louvor as escancara." 
  },
  16: { 
    verse: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes... - Jr 33:3", 
    thought: "Deus tem ideias criativas e soluções ocultas para você.", 
    action: "Peça a Deus uma ideia nova ou estratégia para seu trabalho.", 
    reflection: "Muitas vezes, a chave para uma virada financeira é uma ideia divina, uma invenção, uma solução criativa para um problema. Deus quer te revelar 'coisas ocultas' que você não sabe. Busque a sabedoria do alto para os seus negócios e carreira." 
  },
  17: { 
    verse: "O Senhor te porá por cabeça e não por cauda. - Dt 28:13", 
    thought: "Você nasceu para influenciar e liderar, não para ser dominado.", 
    action: "Tenha postura de líder hoje: proativo, ético e servidor.", 
    reflection: "Essa promessa fala de posição e influência. Deus quer que Seus filhos sejam referência de excelência onde estiverem. Não aceite a mediocridade ou a mentalidade de vítima. Você tem o Espírito de Deus; assuma sua identidade de filho do Rei no mercado de trabalho." 
  },
  18: { 
    verse: "Se Deus é por nós, quem será contra nós? - Rm 8:31", 
    thought: "Com Deus ao seu lado, você é a maioria.", 
    action: "Enfrente um desafio ou medo profissional com coragem hoje.", 
    reflection: "Podem haver crises econômicas, chefes difíceis ou falta de vagas, mas se o Criador do universo está apoiando sua causa, nenhum obstáculo é insuperável. Caminhe com a confiança de quem tem o melhor Sócio e Advogado do mundo." 
  },
  19: { 
    verse: "Considerai os lírios do campo... - Mt 6:28", 
    thought: "Não se preocupe; o cuidado de Deus é detalhado e belo.", 
    action: "Olhe para a natureza e lembre-se que você vale mais que as flores.", 
    reflection: "Jesus usa a natureza para combater nossa ansiedade financeira. Se Deus investe tanta beleza em flores que duram pouco, quanto mais Ele investirá em você, filho eterno e amado? A preocupação não acrescenta um centímetro à sua vida, mas a confiança no Pai traz paz e provisão." 
  },
  20: { 
    verse: "Preparas uma mesa perante mim na presença dos meus inimigos. - Salmos 23:5", 
    thought: "Deus vai te honrar publicamente.", 
    action: "Não busque vingança contra quem te prejudicou; deixe Deus te exaltar.", 
    reflection: "Às vezes, enfrentamos oposição e inveja no trabalho. A promessa de Deus não é apenas de sobrevivência, mas de honra pública ('mesa farta'). Deus fará com que aqueles que duvidaram ou se opuseram a você vejam o favor dEle sobre a sua vida. Mantenha o coração limpo." 
  },
  21: { 
    verse: "Crede no Senhor vosso Deus, e estareis seguros; crede nos seus profetas, e prosperareis. - 2 Cr 20:20", 
    thought: "A fé e a obediência profética abrem o caminho da prosperidade.", 
    action: "Declare vitória e prosperidade sobre sua vida financeira hoje.", 
    reflection: "Encerramos a jornada com a chave de Josafá: fé em Deus (segurança) e fé na Palavra profética (prosperidade). A prosperidade bíblica é o resultado de confiar em Deus e seguir Suas instruções. Saia desta jornada crendo que as portas já estão abertas no mundo espiritual e você entrará por elas!" 
  }
};

// Static Content for Restoration Journey
export const RESTORATION_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: { 
    verse: "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente... - Ef 4:32", 
    thought: "O perdão é a chave que destranca a prisão da amargura.", 
    action: "Decida perdoar alguém hoje, não por sentimento, mas por obediência.", 
    reflection: "O perdão não é um sentimento, é uma decisão de cancelar a dívida moral que alguém tem com você. Assim como Deus nos perdoou em Cristo (uma dívida impagável), somos chamados a estender essa graça. Guardar mágoa é beber veneno esperando que o outro morra. Liberte-se hoje." 
  },
  2: { 
    verse: "O amor cobre uma multidão de pecados. - 1 Pe 4:8", 
    thought: "O amor escolhe focar na restauração, não na falha.", 
    action: "Elogie alguém que você ama em vez de criticar um erro.", 
    reflection: "Cobrir pecados não é encobrir crimes ou abusos, mas é a atitude de não expor as falhas do outro para humilhação pública ou para 'vencer' uma discussão. O amor busca proteger a dignidade do outro e criar um ambiente seguro onde a mudança pode acontecer." 
  },
  3: { 
    verse: "Confessai as vossas culpas uns aos outros e orai uns pelos outros. - Tg 5:16", 
    thought: "A humildade e a transparência trazem cura aos relacionamentos.", 
    action: "Peça desculpas sinceramente por um erro seu, sem dar desculpas.", 
    reflection: "A frase 'eu errei' tem um poder desarmante. O orgulho constrói muros; a humildade constrói pontes. Quando confessamos nossas falhas, saímos da posição de defesa e ataque e entramos no terreno da graça. A cura relacional acontece quando dois pecadores admitem que precisam de graça." 
  },
  4: { 
    verse: "Não se ponha o sol sobre a vossa ira. - Ef 4:26", 
    thought: "Resolva os conflitos rapidamente; o tempo não cura, ele infecciona.", 
    action: "Não vá dormir brigado hoje. Busque a paz antes do fim do dia.", 
    reflection: "Deixar a raiva acumular de um dia para o outro dá 'lugar ao diabo' — cria uma oportunidade para o inimigo plantar sementes de amargura e divisão. A sabedoria bíblica é manter a conta curta. Resolva, perdoe, converse. Não deixe o silêncio punitivo reinar na sua casa." 
  },
  5: { 
    verse: "Suportai-vos uns aos outros... - Cl 3:13", 
    thought: "Ninguém é perfeito; a paciência é a prova do amor.", 
    action: "Tenha paciência com um defeito repetitivo de alguém hoje.", 
    reflection: "A palavra 'suportar' significa literalmente dar suporte, segurar a barra. Amar alguém perfeito é fácil; amar alguém com falhas, manias e dias ruins exige o amor de Deus. Lembre-se de quanta paciência Deus tem com você todos os dias e estenda essa mesma medida ao próximo." 
  },
  6: { 
    verse: "A resposta branda desvia o furor. - Pv 15:1", 
    thought: "A gentileza quebra o ciclo da agressividade.", 
    action: "Se o clima esquentar, responda com voz baixa e palavras doces.", 
    reflection: "Em uma discussão, a tendência é aumentar o tom de voz. A sabedoria divina ensina o oposto. Uma resposta mansa é como água no fogo. Ela desativa a defesa do outro e abre caminho para a razão e o entendimento. A gentileza é uma arma poderosa de restauração." 
  },
  7: { 
    verse: "O amor é paciente, o amor é bondoso. - 1 Co 13:4", 
    thought: "O amor não é apenas o que sentimos, é o que fazemos.", 
    action: "Faça um ato de serviço prático para quem você ama hoje.", 
    reflection: "Paulo descreve o amor com verbos de ação. O amor serve, espera, tolera e se doa. Muitas vezes os relacionamentos esfriam porque paramos de 'fazer' amor (atos de bondade) e ficamos esperando apenas 'sentir'. Reacenda o vínculo através do serviço altruísta." 
  },
  8: { 
    verse: "O que Deus ajuntou não o separe o homem. - Mt 19:6", 
    thought: "Lute pela sua aliança; Deus está nela com você.", 
    action: "Ore blindando seu casamento e sua família contra divisão.", 
    reflection: "O casamento e a família são projetos de Deus, não invenções humanas. Por isso, há uma batalha espiritual contra eles. Mas também há uma graça divina para sustentá-los. Acredite que o Deus que uniu tem poder para manter unido e restaurar o que parece quebrado. Vale a pena lutar." 
  },
  9: { 
    verse: "Sobretudo, revistam-se do amor, que é o elo perfeito. - Cl 3:14", 
    thought: "O amor é a cola que mantém tudo unido.", 
    action: "Diga 'eu te amo' e dê um abraço demorado hoje.", 
    reflection: "Podemos ter regras, rotinas e acordos, mas sem amor, tudo se solta. O amor ágape — o amor de escolha e compromisso — é o 'elo perfeito' que cimenta o relacionamento, tornando-o resistente às tempestades da vida. Revista-se desse amor diariamente como quem veste uma roupa." 
  },
  10: { 
    verse: "Restaurarei o que foi consumido... - Jl 2:25", 
    thought: "Deus é especialista em recomeços e restituição.", 
    action: "Creia e declare a restauração completa dos seus relacionamentos.", 
    reflection: "A promessa de Joel fala sobre anos perdidos sendo restaurados. Deus pode curar feridas antigas e devolver a alegria que foi roubada de um relacionamento. Não importa quão seco esteja o vale, o Espírito de Deus pode soprar vida. Encerre esta jornada com a esperança de que o melhor de Deus para sua família ainda está por vir." 
  }
};

// Static Content for Impossible Causes Journey
export const IMPOSSIBLE_CAUSES_JOURNEY_DAYS: Record<number, ChallengeDayContent> = {
  1: { 
    verse: "Para Deus nada é impossível. - Lc 1:37", 
    thought: "A palavra 'impossível' não existe no vocabulário de Deus.", 
    action: "Entregue sua causa impossível a Ele e tire o peso dos ombros.", 
    reflection: "O anjo Gabriel disse isso a Maria diante de uma gravidez virginal. O que desafia a biologia, a física e a lógica humana é o terreno natural de Deus. Quando dizemos que algo é impossível, estamos apenas descrevendo nossos limites humanos, não os limites de Deus. Onde terminam seus recursos, começa o infinito poder dEle." 
  },
  2: { 
    verse: "Acaso há alguma coisa difícil demais para mim? - Jr 32:27", 
    thought: "Deus desafia sua incredulidade com uma pergunta.", 
    action: "Responda a Deus em oração: 'Senhor, nada é difícil para Ti'.", 
    reflection: "Deus faz essa pergunta retórica a Jeremias. Ele quer que olhemos para o tamanho do nosso problema e depois olhemos para o tamanho do nosso Deus. Comparado ao Criador das galáxias, seu 'gigante' é minúsculo. A dificuldade é uma questão de perspectiva. Para o Todo-Poderoso, o milagre é fácil." 
  },
  3: { 
    verse: "Se creres, verás a glória de Deus. - Jo 11:40", 
    thought: "A fé é a lente necessária para ver o milagre acontecer.", 
    action: "Visualize seu milagre acontecendo e agradeça antecipadamente.", 
    reflection: "Jesus disse isso a Marta diante da tumba de Lázaro. Marta olhava para a realidade da morte e do mau cheiro; Jesus a chamava para olhar com a ótica da fé. A fé não nega a realidade, ela a supera. Crer é o pré-requisito para ver a glória manifesta. Ouse crer contra a esperança." 
  },
  4: { 
    verse: "Tudo é possível ao que crê. - Mc 9:23", 
    thought: "A fé destranca o arquivo de possibilidades do céu.", 
    action: "Declare sua fé em voz alta contra as dúvidas que surgirem.", 
    reflection: "Jesus coloca a chave na mão do crente. O potencial de Deus é infinito ('tudo é possível'), mas a nossa fé é o canal condutor. Não é sobre a força da nossa mente, mas sobre a confiança na Pessoa certa. A fé é a moeda do Reino; use-a para 'sacar' o milagre que você precisa." 
  },
  5: { 
    verse: "Clama a mim, e responder-te-ei... - Jr 33:3", 
    thought: "O clamor intenso move a mão de Deus.", 
    action: "Separe um tempo hoje para um clamor intenso e sincero.", 
    reflection: "Existe uma diferença entre rezar e clamar. Clamar é o grito da alma desesperada que sabe que só Deus pode ajudar. Deus promete não apenas ouvir, mas responder e revelar coisas grandes. Não murmure sobre o problema; clame àquele que tem a solução. O clamor sobe como incenso ao trono." 
  },
  6: { 
    verse: "As armas da nossa milícia não são carnais... - 2 Co 10:4", 
    thought: "A batalha por causas impossíveis é espiritual.", 
    action: "Louve a Deus e ore repreendendo todo mal que impede seu milagre.", 
    reflection: "Causas impossíveis muitas vezes envolvem resistência espiritual. Não lutamos contra pessoas, mas contra principados. Nossas armas — oração, jejum, Palavra e louvor — são poderosas em Deus para demolir fortalezas. Use as armas certas. O louvor confunde o inimigo e a oração libera os anjos." 
  },
  7: { 
    verse: "Operando eu, quem impedirá? - Is 43:13", 
    thought: "A soberania de Deus é a garantia da sua vitória.", 
    action: "Descanse na certeza de que Deus está no controle absoluto.", 
    reflection: "Quando Deus decide agir, nenhuma força no inferno ou na terra pode pará-Lo. Ele é o 'Eu Sou' desde antes do tempo. Se Ele decretou o seu milagre, ele acontecerá. Encerre esta jornada descansando na onipotência de Deus. O que era impossível para você, já é realidade nas mãos dEle." 
  }
};

export const INITIAL_CHALLENGES: Challenge[] = [
  {
    id: 'anxiety-detox',
    title: 'Detox de Ansiedade',
    description: '7 dias para trocar o medo pela paz de Deus através da entrega total.',
    days: 7,
    theme: 'Ansiedade'
  },
  {
    id: 'gratitude-journey',
    title: 'Jornada da Gratidão',
    description: '30 dias para transformar sua mente e coração através do poder da gratidão.',
    days: 30,
    theme: 'Gratidão'
  },
  {
    id: 'proverbs-wisdom',
    title: 'Sabedoria de Provérbios',
    description: '31 dias mergulhando na fonte de sabedoria para decisões e vida prática.',
    days: 31,
    theme: 'Sabedoria'
  },
  {
    id: 'healing-miracle',
    title: 'Milagre da Cura',
    description: '14 dias fortalecendo a fé para cura física, emocional e espiritual.',
    days: 14,
    theme: 'Cura Divina'
  },
  {
    id: 'open-doors',
    title: 'Portas Abertas',
    description: '21 dias de oração por provisão, emprego e direção profissional.',
    days: 21,
    theme: 'Provisão Financeira e Emprego'
  },
  {
    id: 'restoration',
    title: 'Restauração de Vínculos',
    description: '10 dias focados em perdão, amor e cura nos relacionamentos e casamento.',
    days: 10,
    theme: 'Amor, Perdão e Casamento'
  },
  {
    id: 'impossible-causes',
    title: 'Causas Impossíveis',
    description: '7 dias de clamor intenso por milagres urgentes.',
    days: 7,
    theme: 'Fé para Milagres Urgentes'
  }
];