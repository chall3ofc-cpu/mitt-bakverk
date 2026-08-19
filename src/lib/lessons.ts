export type Quiz = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Lesson = {
  slug: string;
  emoji: string;
  title: string;
  minutes: number;
  intro: string;
  points: string[];
  quiz: Quiz[];
};

export const LESSONS: Lesson[] = [
  {
    slug: "agg",
    emoji: "🥚",
    title: "Ägget – bakningens byggarbetare",
    minutes: 2,
    intro:
      "Ägget gör tre saker samtidigt: det binder, det ger fukt och det fångar luft. Därför märks det direkt om du hoppar över ett.",
    points: [
      "Rumsvarma ägg vispar upp till nästan dubbla volymen jämfört med kylskåpskalla.",
      "Äggulan innehåller fett och lecitin – den gör smeten len och krämig.",
      "Äggvitan är protein och vatten – den bygger struktur och gör bakverket luftigt.",
    ],
    quiz: [
      {
        question: "Varför är rumsvarma ägg bättre att vispa?",
        options: [
          "De smakar sötare",
          "De fångar mer luft",
          "De gör smeten kallare",
        ],
        correct: 1,
        explanation: "Varmare äggvita är mer elastisk och rymmer fler luftbubblor.",
      },
      {
        question: "Vad i ägget gör smeten len?",
        options: ["Äggulan", "Äggvitan", "Skalet"],
        correct: 0,
        explanation: "Äggulans fett och lecitin emulgerar smeten.",
      },
      {
        question: "Vad händer om du vispar äggvita för länge?",
        options: [
          "Den blir sötare",
          "Den skär sig och blir kornig",
          "Ingenting alls",
        ],
        correct: 1,
        explanation: "Proteinnätverket överarbetas och släpper vattnet.",
      },
    ],
  },
  {
    slug: "smor",
    emoji: "🧈",
    title: "Smör – temperaturen avgör allt",
    minutes: 2,
    intro:
      "Samma smör kan ge tre helt olika resultat. Det är temperaturen, inte mängden, som styr.",
    points: [
      "Kallt smör = flagor och krispighet (pajdeg, smuldeg).",
      "Rumsvarmt smör = luftigt när du rör med socker (cookies, mördeg).",
      "Smält smör = kompakt och saftigt (kladdkaka, brownies).",
    ],
    quiz: [
      {
        question: "Vilket smör ger krispig pajdeg?",
        options: ["Smält", "Rumsvarmt", "Kylskåpskallt"],
        correct: 2,
        explanation: "Kalla smörflagor ångar upp och skapar lager.",
      },
      {
        question: "Vad ger smält smör i en kladdkaka?",
        options: ["Kompakt kladd", "Extra höjd", "Frasig yta"],
        correct: 0,
        explanation: "Smält smör tillför ingen luft, bara fett och fukt.",
      },
      {
        question: "Hur vet du att smöret är rumsvarmt?",
        options: [
          "Det är blankt och rinnigt",
          "Fingret trycker in ett märke men smöret håller formen",
          "Det är hårt som en tegelsten",
        ],
        correct: 1,
        explanation: "Cirka 18–20°C är perfekt för att röra pösigt.",
      },
    ],
  },
  {
    slug: "mjol",
    emoji: "🌾",
    title: "Mjölet och glutenet",
    minutes: 2,
    intro:
      "När mjöl möter vätska bildas gluten. Mycket gluten är bra i bullar – och en katastrof i sockerkaka.",
    points: [
      "Knåda länge för jästdegar: du vill ha ett starkt glutennät.",
      "Rör minimalt i kaksmet: överblandning ger seg, gummiaktig kaka.",
      "Mät mjöl genom att skeda ner i måttet – att gräva packar mjölet.",
    ],
    quiz: [
      {
        question: "Vad bildas när mjöl möter vatten och bearbetas?",
        options: ["Socker", "Gluten", "Bakpulver"],
        correct: 1,
        explanation: "Proteinerna glutenin och gliadin bildar glutennätverket.",
      },
      {
        question: "Hur ska du blanda en muffinssmet?",
        options: ["Så länge som möjligt", "Precis till jämn smet", "Med elvisp i 5 min"],
        correct: 1,
        explanation: "Minsta möjliga blandning ger mjuka muffins.",
      },
      {
        question: "Hur mäter du mjöl mest korrekt?",
        options: [
          "Gräv med måttet i påsen",
          "Skeda ner mjöl i måttet och stryk av",
          "Packa hårt",
        ],
        correct: 1,
        explanation: "Att gräva kan ge 20 % för mycket mjöl.",
      },
    ],
  },
  {
    slug: "socker",
    emoji: "🍬",
    title: "Socker gör mer än att söta",
    minutes: 2,
    intro: "Socker är fukt, färg, mjukhet och struktur – inte bara sötma.",
    points: [
      "Socker binder vatten och håller bakverket saftigt i flera dagar.",
      "Sockerkristaller river upp luftfickor i smör när du rör.",
      "Socker karamelliserar och ger den gyllenbruna ytan.",
    ],
    quiz: [
      {
        question: "Varför håller sockerrika kakor sig saftiga längre?",
        options: [
          "Socker binder vatten",
          "Socker dödar bakterier",
          "Socker är fett",
        ],
        correct: 0,
        explanation: "Socker är hygroskopiskt och håller kvar fukten.",
      },
      {
        question: "Vad ger den gyllenbruna ytan?",
        options: ["Bakpulver", "Karamellisering och Maillard", "Salt"],
        correct: 1,
        explanation: "Socker och protein bryner tillsammans i värmen.",
      },
      {
        question: "Vad händer om du halverar sockret i en cookie?",
        options: [
          "Den blir bara mindre söt",
          "Den blir torrare och plattar ut sig mindre",
          "Den blir luftigare",
        ],
        correct: 1,
        explanation: "Socker påverkar både fukt och hur degen flyter ut.",
      },
    ],
  },
  {
    slug: "bakpulver",
    emoji: "🫧",
    title: "Bakpulver vs bikarbonat",
    minutes: 2,
    intro: "Båda skapar koldioxid, men de behöver olika saker för att jobba.",
    points: [
      "Bakpulver innehåller både bas och syra – det behöver bara vätska och värme.",
      "Bikarbonat behöver en syra i smeten, t.ex. filmjölk eller citron.",
      "För mycket bakpulver ger metallisk bismak och kaka som sjunker.",
    ],
    quiz: [
      {
        question: "Vad behöver bikarbonat för att jobba?",
        options: ["En syra", "Extra socker", "Mer mjöl"],
        correct: 0,
        explanation: "Utan syra får du ingen ordentlig reaktion – och en tvålig smak.",
      },
      {
        question: "Vad händer med för mycket bakpulver?",
        options: [
          "Kakan blir extra hög och perfekt",
          "Kakan reser sig snabbt och sjunker sedan",
          "Ingenting",
        ],
        correct: 1,
        explanation: "Bubblorna blir för stora, kollapsar och kakan faller ihop.",
      },
      {
        question: "Kan du byta bakpulver mot bikarbonat 1:1?",
        options: ["Ja alltid", "Nej, bikarbonat är mycket starkare", "Bara i bröd"],
        correct: 1,
        explanation: "Bikarbonat är ca 3–4 gånger starkare och kräver syra.",
      },
    ],
  },
  {
    slug: "ugnstemperatur",
    emoji: "🌡️",
    title: "Ugnstemperatur och gräddning",
    minutes: 2,
    intro: "De flesta misslyckade bakverk handlar om ugnen, inte om receptet.",
    points: [
      "Förvärm alltid 15 minuter – termostaten säger klart innan ugnen är det.",
      "Varmluft är ca 20°C effektivare, sänk temperaturen.",
      "Höga, fuktiga kakor: lägre värme längre tid. Småkakor: hög värme kort tid.",
    ],
    quiz: [
      {
        question: "Hur länge bör du förvärma ugnen?",
        options: ["Ingen alls", "Cirka 15 minuter", "1 timme"],
        correct: 1,
        explanation: "Ugnsväggarna behöver hinna bli varma, inte bara luften.",
      },
      {
        question: "Vad gör du med varmluft?",
        options: ["Höjer 20°C", "Sänker ca 20°C", "Ändrar inget"],
        correct: 1,
        explanation: "Fläkten flyttar värmen effektivare mot bakverket.",
      },
      {
        question: "Hur gräddar du en hög, fuktig kaka bäst?",
        options: [
          "250°C kort tid",
          "Lägre temperatur längre tid",
          "Med grillelementet",
        ],
        correct: 1,
        explanation: "Annars bränns ytan innan mitten hinner bli klar.",
      },
    ],
  },
  {
    slug: "blandning",
    emoji: "🥣",
    title: "Blandningstekniker",
    minutes: 2,
    intro: "Hur du blandar avgör hur mycket luft och gluten du får.",
    points: [
      "Rör pösigt (creaming): smör + socker, 2–3 min, för luftiga kakor.",
      "Vända ner (folding): stora mjuka rörelser som bevarar luft.",
      "Nypa ihop (rubbing): kallt smör i mjöl för smul och pajdeg.",
    ],
    quiz: [
      {
        question: "Vilken teknik bevarar mest luft?",
        options: ["Vispa hårt", "Vända ner försiktigt", "Knåda"],
        correct: 1,
        explanation: "Folding flyttar smeten utan att slå ut bubblorna.",
      },
      {
        question: "Vad är creaming?",
        options: [
          "Att röra smör och socker pösigt",
          "Att vispa grädde",
          "Att smälta choklad",
        ],
        correct: 0,
        explanation: "Sockret river upp luftfickor i smöret.",
      },
      {
        question: "När nyper du ihop deg?",
        options: ["I sockerkaka", "I smuldeg och pajdeg", "I maränger"],
        correct: 1,
        explanation: "Kalla smörbitar i mjöl ger frasigt smul.",
      },
    ],
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

/** Dagens lektion – deterministiskt baserat på datum */
export function lessonOfTheDay(): Lesson {
  const day = Math.floor(Date.now() / 86_400_000);
  return LESSONS[day % LESSONS.length]!;
}
