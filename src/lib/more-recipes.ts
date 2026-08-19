import type { Recipe } from "./recipes";

export const MORE_RECIPES: Recipe[] = [
  {
    slug: "chokladbollar",
    name: "Chokladbollar",
    emoji: "🍫",
    description: "Snabba och enkla chokladbollar med havre och kokos.",
    minutes: 20,
    difficulty: "Lätt",
    portions: "15–20 bollar",
    ingredients: [
      { key: "smör", amount: "100 g rumsvarmt smör" },
      { key: "socker", amount: "1 dl socker" },
      { key: "havregryn", amount: "3 dl havregryn" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
      { key: "kaffe", amount: "2 msk kallt kaffe" },
      { key: "kokos", amount: "1 dl kokos till rullning" },
    ],
    steps: [
      {
        title: "Förbered allt",
        text: "Ta fram smöret och låt det bli mjukt.",
        tools: ["🥣 Bunke", "🥄 Matsked"],
        ingredients: [],
      },
      {
        title: "Blanda smör och socker",
        text: "Rör ihop det rumsvarma smöret och sockret tills blandningen är jämn.",
        tools: ["🥣 Bunke", "🥄 Träslev"],
        ingredients: [
          { key: "smör", amount: "100 g" },
          { key: "socker", amount: "1 dl" },
        ],
      },
      {
        title: "Tillsätt havre och kakao",
        text: "Rör ner havregryn, kakao och vaniljsocker.",
        tools: ["🥣 Bunke", "🥄 Måttsked", "🥄 Träslev"],
        ingredients: [
          { key: "havregryn", amount: "3 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "vaniljsocker", amount: "1 tsk" },
        ],
      },
      {
        title: "Tillsätt kaffet",
        text: "Häll i kaffet och blanda tills du har en jämn och formbar smet.",
        tools: ["🥣 Bunke", "🥄 Matsked"],
        ingredients: [
          { key: "kaffe", amount: "2 msk" },
        ],
        tip: "👨‍🍳 Om smeten känns för lös kan du tillsätta lite extra havregryn.",
      },
      {
        title: "Forma bollar",
        text: "Forma smeten till ungefär 15–20 jämnstora bollar.",
        tools: ["👐 Händer", "🍽️ Tallrik"],
        ingredients: [],
      },
      {
        title: "Rulla i kokos",
        text: "Rulla varje boll i kokos tills den är täckt runtom.",
        tools: ["🥣 Liten skål", "👐 Händer"],
        ingredients: [
          { key: "kokos", amount: "1 dl" },
        ],
      },
      {
        title: "Kyl och servera",
        text: "Ställ chokladbollarna i kylskåpet i minst 30 minuter innan servering.",
        tools: ["❄️ Kylskåp", "🍽️ Tallrik"],
        ingredients: [],
        timerSec: 1800,
        tip: "⭐ De blir ännu godare när de fått stå kallt en stund.",
      },
    ],
  },

  {
    slug: "kladdmuffins",
    name: "Kladdmuffins",
    emoji: "🧁",
    description: "Små chokladiga muffins med en härligt kladdig mitt.",
    minutes: 25,
    difficulty: "Lätt",
    portions: "12 muffins",
    ingredients: [
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "2 dl socker" },
      { key: "ägg", amount: "2 ägg" },
      { key: "mjöl", amount: "1,5 dl mjöl" },
      { key: "kakao", amount: "4 msk kakao" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
      { key: "salt", amount: "1 krm salt" },
    ],
    steps: [
      {
        title: "Värm ugnen",
        text: "Värm ugnen till 200°C och ställ 12 muffinsformar i en muffinsplåt.",
        tools: ["🔥 Ugn", "🧁 Muffinsplåt", "🧁 12 muffinsformar"],
        ingredients: [],
      },
      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt i en kastrull och låt det svalna lite.",
        tools: ["🍴 Kastrull", "🔥 Spis", "🥄 Träslev"],
        ingredients: [
          { key: "smör", amount: "100 g" },
        ],
      },
      {
        title: "Blanda ägg och socker",
        text: "Rör ihop ägg och socker. Vispa inte luftigt.",
        tools: ["🥣 Bunke", "🥄 Handvisp"],
        ingredients: [
          { key: "ägg", amount: "2 ägg" },
          { key: "socker", amount: "2 dl" },
        ],
      },
      {
        title: "Blanda det torra",
        text: "Blanda mjöl, kakao, vaniljsocker och salt i en separat skål.",
        tools: ["🥣 Liten skål", "🥄 Matsked", "🥄 Tesked"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "4 msk" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "salt", amount: "1 krm" },
        ],
      },
      {
        title: "Blanda smeten",
        text: "Rör ner det torra och sedan det smälta smöret. Blanda bara tills smeten är jämn.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "smör", amount: "100 g smält" },
        ],
      },
      {
        title: "Fyll formarna",
        text: "Fördela smeten jämnt mellan de 12 formarna.",
        tools: ["🧁 Muffinsplåt", "🥄 Sked"],
        ingredients: [],
      },
      {
        title: "Grädda 8–10 minuter",
        text: "Grädda mitt i ugnen. Kanterna ska ha stelnat medan mitten fortfarande är mjuk.",
        tools: ["🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 540,
        tip: "🍫 Ta hellre ut dem lite för tidigt än för sent om du vill ha en riktigt kladdig mitt.",
      },
    ],
  },

  {
    slug: "morotskaka",
    name: "Morotskaka",
    emoji: "🥕",
    description: "Saftig morotskaka med krämig glasyr.",
    minutes: 55,
    difficulty: "Medel",
    portions: "10–12 bitar",
    ingredients: [
      { key: "ägg", amount: "3 ägg" },
      { key: "socker", amount: "3 dl socker" },
      { key: "olja", amount: "1,5 dl neutral olja" },
      { key: "mjöl", amount: "3 dl mjöl" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "kanel", amount: "2 tsk kanel" },
      { key: "morot", amount: "4 dl finrivna morötter" },
      { key: "florsocker", amount: "3 dl florsocker" },
    ],
    steps: [
      {
        title: "Värm ugnen",
        text: "Värm ugnen till 175°C och klä en rund form med bakplåtspapper.",
        tools: ["🔥 Ugn", "🍰 Bakform", "📄 Bakplåtspapper"],
        ingredients: [],
      },
      {
        title: "Riv morötterna",
        text: "Skala och riv morötterna fint.",
        tools: ["🥕 Potatisskalare", "🧀 Rivjärn", "🥣 Skål"],
        ingredients: [
          { key: "morot", amount: "4 dl finrivna" },
        ],
      },
      {
        title: "Vispa ägg och socker",
        text: "Vispa ägg och socker tills blandningen är ljus och lite fluffig.",
        tools: ["🥣 Bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "ägg", amount: "3 ägg" },
          { key: "socker", amount: "3 dl" },
        ],
      },
      {
        title: "Blanda det torra",
        text: "Blanda mjöl, bakpulver och kanel i en separat skål.",
        tools: ["🥣 Skål", "🥄 Matsked", "🥄 Tesked"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "kanel", amount: "2 tsk" },
        ],
      },
      {
        title: "Gör smeten",
        text: "Rör ner oljan, de rivna morötterna och det torra i äggblandningen.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "olja", amount: "1,5 dl" },
          { key: "morot", amount: "4 dl" },
        ],
      },
      {
        title: "Grädda 35–40 minuter",
        text: "Häll smeten i formen och grädda tills en provsticka kommer ut med bara några fuktiga smulor.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🪵 Provsticka", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 2100,
      },
      {
        title: "Gör glasyr",
        text: "Rör ihop florsocker med lite vatten tills du får en tjock glasyr. Bred den över den helt avsvalnade kakan.",
        tools: ["🥣 Liten skål", "🥄 Slickepott"],
        ingredients: [
          { key: "florsocker", amount: "3 dl" },
        ],
        tip: "❄️ Kakan måste vara kall innan glasyren läggs på.",
      },
    ],
  },
];
