export type Step = {
  title: string;
  text: string;
  why?: string;
  tip?: string;
  timerSec?: number;

  /** Exakta redskap som behövs i just detta steg */
  tools?: string[];

  /** Exakta ingredienser och mängder som används i just detta steg */
  ingredients?: {
    key: string;
    amount: string;
  }[];
};

export type Ingredient = {
  key: string;
  amount: string;
};

export type Recipe = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  minutes: number;
  difficulty: "Lätt" | "Medel" | "Svår";
  portions: string;
  ingredients: Ingredient[];
  steps: Step[];
};

export const COMMON_INGREDIENTS = [
  "mjöl",
  "socker",
  "smör",
  "ägg",
  "mjölk",
  "kakao",
  "vaniljsocker",
  "bakpulver",
  "salt",
  "choklad",
  "havregryn",
  "kanel",
  "jäst",
  "äpple",
  "banan",
  "kokos",
  "florsocker",
  "grädde",
  "olja",
  "torrjäst",
];

export const RECIPES: Recipe[] = [
  {
    slug: "kladdkaka",
    name: "Kladdkaka",
    emoji: "🍫",
    description: "Sveriges kladdigaste klassiker – klar på en halvtimme.",
    minutes: 30,
    difficulty: "Lätt",
    portions: "8 bitar",

    ingredients: [
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "2,5 dl socker" },
      { key: "ägg", amount: "2 ägg" },
      { key: "mjöl", amount: "1,5 dl mjöl" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
      { key: "salt", amount: "1 krm salt" },
    ],

    steps: [
      {
        title: "Sätt ugnen på 175°C",
        text: "Smörj en form på cirka 20 cm och bröa den. Placera ugnsgallret i mitten av ugnen.",
        tools: ["🔥 Ugn", "🍰 Rund bakform", "🖌️ Bakpensel", "🥄 Matsked"],
        ingredients: [
          { key: "smör", amount: "lite till formen" },
        ],
        why: "En förvärmd ugn gör att kakan stelnar i kanterna direkt och behåller den kladdiga mitten.",
        tip: "Använd gärna en form med ljus botten eftersom mörka formar kan ge snabbare gräddning i kanterna.",
      },

      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt i en kastrull på låg värme. Ta bort kastrullen från värmen och låt smöret svalna någon minut.",
        tools: ["🍴 Kastrull", "🔥 Spis", "🥄 Träslev"],
        ingredients: [
          { key: "smör", amount: "100 g" },
        ],
        why: "Om smöret är mycket varmt kan det påverka äggen senare och ge en grynig smet.",
      },

      {
        title: "Rör ihop socker och ägg",
        text: "Lägg äggen och sockret i en bunke och vispa lätt tills blandningen är jämn. Vispa inte luftigt.",
        tools: ["🥣 Bunke", "🥄 Handvisp"],
        ingredients: [
          { key: "ägg", amount: "2 ägg" },
          { key: "socker", amount: "2,5 dl" },
        ],
        why: "Kladdkaka ska vara kompakt och kladdig. Om du vispar in mycket luft kan den bli mer lik en sockerkaka.",
        tip: "👨‍🍳 Använd inte elvisp på hög hastighet – vanlig handvisp räcker.",
      },

      {
        title: "Blanda ner det torra",
        text: "Sikta ner mjöl, kakao, vaniljsocker och salt. Rör försiktigt ihop tills du har en jämn smet.",
        tools: ["🥣 Bunke", "🥄 Sikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "salt", amount: "1 krm" },
        ],
        why: "Siktad kakao minskar risken för klumpar och ger en jämnare smet.",
      },

      {
        title: "Rör ner smöret",
        text: "Häll ner det smälta, något avsvalnade smöret och rör försiktigt tills smeten är helt jämn.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "smör", amount: "100 g smält" },
        ],
      },

      {
        title: "Grädda 15–17 minuter",
        text: "Häll smeten i formen och grädda mitt i ugnen. Ytan ska ha stelnat men mitten ska fortfarande röra sig lite.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 900,
        why: "Kakan fortsätter att stelna efter att den kommit ut ur ugnen. Därför ska mitten fortfarande vara lite lös.",
        tip: "👨‍🍳 Låt kakan svalna minst en timme för extra perfekt kladdighet.",
      },
    ],
  },

  {
    slug: "chokladcookies",
    name: "Chokladcookies",
    emoji: "🍪",
    description: "Sega i mitten, krispiga i kanten, fulla av chokladsmältor.",
    minutes: 35,
    difficulty: "Lätt",
    portions: "16 cookies",

    ingredients: [
      { key: "smör", amount: "125 g smör" },
      { key: "socker", amount: "2 dl socker" },
      { key: "ägg", amount: "1 ägg" },
      { key: "mjöl", amount: "4 dl mjöl" },
      { key: "bakpulver", amount: "1 tsk bakpulver" },
      { key: "choklad", amount: "150 g mörk choklad" },
      { key: "salt", amount: "0,5 tsk salt" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 200°C och lägg bakplåtspapper på en plåt.",
        tools: ["🔥 Ugn", "🍪 Bakplåt", "📄 Bakplåtspapper"],
        ingredients: [],
      },

      {
        title: "Rör smör och socker",
        text: "Rör det rumsvarma smöret tillsammans med sockret i cirka 2–3 minuter.",
        tools: ["🥣 Bunke", "🥄 Träslev eller elvisp"],
        ingredients: [
          { key: "smör", amount: "125 g, rumsvarmt" },
          { key: "socker", amount: "2 dl" },
        ],
        why: "Sockret hjälper till att skapa små luftfickor i smöret som ger kakorna en bra struktur.",
      },

      {
        title: "Tillsätt ägget",
        text: "Rör ner ägget tills blandningen är jämn.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "ägg", amount: "1 ägg" },
        ],
      },

      {
        title: "Blanda det torra",
        text: "Blanda mjöl, bakpulver och salt i en separat skål. Rör sedan ner blandningen i smeten.",
        tools: ["🥣 Bunke", "🥣 Liten skål", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "4 dl" },
          { key: "bakpulver", amount: "1 tsk" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },

      {
        title: "Tillsätt chokladen",
        text: "Hacka chokladen grovt och vänd ner den i degen.",
        tools: ["🔪 Kniv", "🪵 Skärbräda", "🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "choklad", amount: "150 g" },
        ],
        why: "Grovhackad choklad ger både små och stora smältor i kakorna.",
      },

      {
        title: "Kyl degen",
        text: "Ställ degen i kylskåpet i cirka 15 minuter medan ugnen värms upp.",
        tools: ["🥣 Bunke", "❄️ Kylskåp"],
        ingredients: [],
        timerSec: 900,
        why: "Kall deg flyter ut mindre i ugnen och ger tjockare och segare cookies.",
      },

      {
        title: "Grädda 9–11 minuter",
        text: "Forma små bollar och lägg dem med gott om mellanrum på plåten. Grädda tills kanterna är gyllene.",
        tools: ["🍪 Bakplåt", "📄 Bakplåtspapper", "🥄 Matsked", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 600,
        tip: "👨‍🍳 Mitten får gärna se lite obakad ut när du tar ut dem. De stelnar på plåten.",
      },
    ],
  },

  {
    slug: "chokladmuffins",
    name: "Chokladmuffins",
    emoji: "🧁",
    description: "Saftiga muffins med djup chokladsmak.",
    minutes: 35,
    difficulty: "Lätt",
    portions: "12 muffins",

    ingredients: [
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "2 dl socker" },
      { key: "ägg", amount: "2 ägg" },
      { key: "mjöl", amount: "3 dl mjöl" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "mjölk", amount: "1 dl mjölk" },
    ],

    steps: [
      {
        title: "Värm ugnen till 200°C",
        text: "Värm ugnen till 200°C och ställ fram 12 muffinsformar i en muffinsplåt.",
        tools: ["🔥 Ugn", "🧁 Muffinsplåt", "🧁 12 muffinsformar"],
        ingredients: [],
        why: "Hög värme i början hjälper muffinsen att få en fin kupol.",
      },

      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt och låt det svalna något.",
        tools: ["🍴 Kastrull", "🔥 Spis", "🥄 Träslev"],
        ingredients: [
          { key: "smör", amount: "100 g" },
        ],
      },

      {
        title: "Blanda ägg och socker",
        text: "Vispa ägg och socker lätt tills blandningen är jämn.",
        tools: ["🥣 Bunke", "🥄 Handvisp"],
        ingredients: [
          { key: "ägg", amount: "2 ägg" },
          { key: "socker", amount: "2 dl" },
        ],
      },

      {
        title: "Blanda det torra",
        text: "Blanda mjöl, kakao och bakpulver i en separat skål.",
        tools: ["🥣 Liten skål", "🥄 Matsked", "🥄 Tesked"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "bakpulver", amount: "2 tsk" },
        ],
      },

      {
        title: "Blanda smeten",
        text: "Rör ner det torra växelvis med mjölken. Tillsätt det smälta smöret och rör bara tills smeten går ihop.",
        tools: ["🥣 Stor bunke", "🥄 Slickepott", "🥄 Måttkopp"],
        ingredients: [
          { key: "mjölk", amount: "1 dl" },
          { key: "smör", amount: "100 g smält" },
        ],
        why: "Om du blandar för länge utvecklas gluten och muffinsen kan bli sega.",
      },

      {
        title: "Fyll formarna",
        text: "Fördela smeten i 12 muffinsformar. Fyll varje form ungefär två tredjedelar.",
        tools: ["🧁 Muffinsplåt", "🧁 Muffinsformar", "🥄 Sked eller glasskopa"],
        ingredients: [],
      },

      {
        title: "Grädda 15 minuter",
        text: "Grädda mitt i ugnen i cirka 15 minuter.",
        tools: ["🔥 Ugn", "🧤 Grytvante", "🪵 Provsticka"],
        ingredients: [],
        timerSec: 900,
        tip: "👨‍🍳 Fuktiga smulor på provstickan är perfekt. Blöt smet betyder att de behöver mer tid.",
      },
    ],
  },

  {
    slug: "applepaj",
    name: "Äppelpaj",
    emoji: "🥧",
    description: "Smulpaj med kanel och syrliga äpplen.",
    minutes: 45,
    difficulty: "Lätt",
    portions: "6 portioner",

    ingredients: [
      { key: "äpple", amount: "4 äpplen" },
      { key: "smör", amount: "125 g smör" },
      { key: "mjöl", amount: "3 dl mjöl" },
      { key: "socker", amount: "1 dl socker" },
      { key: "kanel", amount: "1 msk kanel" },
      { key: "havregryn", amount: "1 dl havregryn" },
    ],

    steps: [
      {
        title: "Värm ugnen till 200°C",
        text: "Värm ugnen och smörj en pajform.",
        tools: ["🔥 Ugn", "🥧 Pajform", "🖌️ Bakpensel"],
        ingredients: [
          { key: "smör", amount: "lite till formen" },
        ],
      },

      {
        title: "Förbered äpplena",
        text: "Skala vid behov äpplena, kärna ur dem och skiva dem tunt. Lägg dem i pajformen och strö över kanel och lite av sockret.",
        tools: ["🔪 Kniv", "🪵 Skärbräda", "🥧 Pajform", "🥄 Matsked"],
        ingredients: [
          { key: "äpple", amount: "4 äpplen" },
          { key: "kanel", amount: "1 msk" },
          { key: "socker", amount: "lite av 1 dl" },
        ],
        why: "Tunna äppelskivor mjuknar i ungefär samma takt som smulet blir gyllenbrunt.",
      },

      {
        title: "Gör smulet",
        text: "Nyp ihop kallt smör, mjöl, socker och havregryn med händerna tills du får grova smulor.",
        tools: ["🥣 Bunke", "🤲 Händerna"],
        ingredients: [
          { key: "smör", amount: "125 g kallt" },
          { key: "mjöl", amount: "3 dl" },
          { key: "socker", amount: "1 dl" },
          { key: "havregryn", amount: "1 dl" },
        ],
        tip: "👨‍🍳 Kallt smör ger ett krispigare smul.",
      },

      {
        title: "Grädda 25 minuter",
        text: "Fördela smulet jämnt över äpplena och grädda tills ytan är gyllenbrun och äpplena mjuka.",
        tools: ["🥧 Pajform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 1500,
      },
    ],
  },

  {
    slug: "sockerkaka",
    name: "Sockerkaka",
    emoji: "🍰",
    description: "Ljuvligt luftig grundkaka som alltid funkar.",
    minutes: 50,
    difficulty: "Lätt",
    portions: "10 bitar",

    ingredients: [
      { key: "ägg", amount: "3 ägg" },
      { key: "socker", amount: "2,5 dl socker" },
      { key: "mjöl", amount: "3 dl mjöl" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "smör", amount: "75 g smält smör" },
      { key: "mjölk", amount: "1 dl mjölk" },
      { key: "vaniljsocker", amount: "2 tsk vaniljsocker" },
    ],

    steps: [
      {
        title: "Förbered formen",
        text: "Smörj och bröa en sockerkaksform. Värm ugnen till 175°C.",
        tools: ["🔥 Ugn", "🍰 Sockerkaksform", "🖌️ Bakpensel"],
        ingredients: [
          { key: "smör", amount: "lite till formen" },
        ],
      },

      {
        title: "Vispa ägg och socker",
        text: "Vispa ägg och socker riktigt pösigt och ljust i cirka 4 minuter.",
        tools: ["🥣 Stor bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "ägg", amount: "3 ägg" },
          { key: "socker", amount: "2,5 dl" },
        ],
        why: "Luften som vispas in här är viktig för kakans luftiga struktur.",
        tip: "👨‍🍳 Smeten ska rinna från vispen som ett tjockt band.",
      },

      {
        title: "Blanda det torra",
        text: "Blanda mjöl, bakpulver och vaniljsocker. Sikta sedan ner blandningen i äggsmeten.",
        tools: ["🥣 Liten skål", "🥄 Sikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "vaniljsocker", amount: "2 tsk" },
        ],
        why: "Försiktig vändning hjälper dig behålla luften från vispningen.",
      },

      {
        title: "Tillsätt smör och mjölk",
        text: "Blanda det smälta smöret med mjölken och rör försiktigt ner det i smeten.",
        tools: ["🥣 Bunke", "🥄 Slickepott", "🥄 Måttkopp"],
        ingredients: [
          { key: "smör", amount: "75 g smält" },
          { key: "mjölk", amount: "1 dl" },
        ],
      },

      {
        title: "Grädda 35 minuter",
        text: "Häll smeten i formen och grädda i nedre delen av ugnen.",
        tools: ["🍰 Sockerkaksform", "🔥 Ugn", "🧤 Grytvante", "🪵 Provsticka"],
        ingredients: [],
        timerSec: 2100,
        tip: "👨‍🍳 Öppna inte ugnen under de första 20 minuterna.",
      },
    ],
  },

  {
    slug: "havrekakor",
    name: "Havrekakor",
    emoji: "🥮",
    description: "Frasiga havrekakor med bara några ingredienser.",
    minutes: 25,
    difficulty: "Lätt",
    portions: "20 kakor",

    ingredients: [
      { key: "havregryn", amount: "3 dl havregryn" },
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "1,5 dl socker" },
      { key: "mjöl", amount: "1 dl mjöl" },
      { key: "bakpulver", amount: "1 tsk bakpulver" },
      { key: "ägg", amount: "1 ägg" },
    ],

    steps: [
      {
        title: "Värm ugnen till 175°C",
        text: "Lägg bakplåtspapper på en plåt.",
        tools: ["🔥 Ugn", "🍪 Bakplåt", "📄 Bakplåtspapper"],
        ingredients: [],
      },

      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt och låt det svalna något.",
        tools: ["🍴 Kastrull", "🔥 Spis"],
        ingredients: [
          { key: "smör", amount: "100 g" },
        ],
      },

      {
        title: "Blanda smeten",
        text: "Rör ihop smör, socker och ägg. Blanda sedan ner havregryn, mjöl och bakpulver.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "socker", amount: "1,5 dl" },
          { key: "ägg", amount: "1 ägg" },
          { key: "havregryn", amount: "3 dl" },
          { key: "mjöl", amount: "1 dl" },
          { key: "bakpulver", amount: "1 tsk" },
        ],
        why: "Havregrynen behöver lite tid för att suga upp vätskan.",
      },

      {
        title: "Låt degen vila",
        text: "Låt degen stå i cirka 5 minuter innan du formar kakorna.",
        tools: ["🥣 Bunke", "⏱️ Timer"],
        ingredients: [],
        timerSec: 300,
      },

      {
        title: "Grädda 10 minuter",
        text: "Klicka ut små klickar på plåten med gott om mellanrum och grädda tills kakorna fått färg.",
        tools: ["🍪 Bakplåt", "🥄 Sked", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 600,
        tip: "👨‍🍳 Låt kakorna stelna på plåten innan du flyttar dem.",
      },
    ],
  },

  {
    slug: "kokostoppar",
    name: "Kokostoppar",
    emoji: "🥥",
    description: "Fem ingredienser, noll krångel, maximal mysfaktor.",
    minutes: 25,
    difficulty: "Lätt",
    portions: "18 toppar",

    ingredients: [
      { key: "kokos", amount: "4 dl kokosflingor" },
      { key: "socker", amount: "1 dl socker" },
      { key: "ägg", amount: "2 ägg" },
      { key: "smör", amount: "50 g smält smör" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
    ],

    steps: [
      {
        title: "Sätt ugnen på 175°C",
        text: "Lägg bakplåtspapper på plåten.",
        tools: ["🔥 Ugn", "🍪 Bakplåt", "📄 Bakplåtspapper"],
        ingredients: [],
      },

      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt och låt det svalna lite.",
        tools: ["🍴 Kastrull", "🔥 Spis"],
        ingredients: [
          { key: "smör", amount: "50 g" },
        ],
      },

      {
        title: "Rör ihop smeten",
        text: "Blanda ägg, socker och vaniljsocker. Rör sedan ner kokos och det smälta smöret.",
        tools: ["🥣 Bunke", "🥄 Handvisp", "🥄 Slickepott"],
        ingredients: [
          { key: "ägg", amount: "2 ägg" },
          { key: "socker", amount: "1 dl" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "kokos", amount: "4 dl" },
          { key: "smör", amount: "50 g smält" },
        ],
        why: "Kokosen behöver suga upp en del av vätskan så topparna håller formen.",
      },

      {
        title: "Låt smeten svälla",
        text: "Låt smeten stå i cirka 10 minuter.",
        tools: ["🥣 Bunke", "⏱️ Timer"],
        ingredients: [],
        timerSec: 600,
      },

      {
        title: "Forma topparna",
        text: "Forma cirka 18 små toppar med hjälp av två teskedar och lägg dem på plåten.",
        tools: ["🥄 2 teskedar", "🍪 Bakplåt", "📄 Bakplåtspapper"],
        ingredients: [],
      },

      {
        title: "Grädda 12 minuter",
        text: "Grädda tills topparna fått en fin gyllene färg.",
        tools: ["🔥 Ugn", "🍪 Bakplåt", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 720,
      },
    ],
  },

  {
    slug: "banankaka",
    name: "Banankaka",
    emoji: "🍌",
    description: "Perfekt räddning för överblivna bananer.",
    minutes: 60,
    difficulty: "Lätt",
    portions: "10 bitar",

    ingredients: [
      { key: "banan", amount: "3 mogna bananer" },
      { key: "socker", amount: "2 dl socker" },
      { key: "smör", amount: "100 g smör" },
      { key: "ägg", amount: "2 ägg" },
      { key: "mjöl", amount: "4 dl mjöl" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "kanel", amount: "1 tsk kanel" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 175°C och smörj en form.",
        tools: ["🔥 Ugn", "🍰 Bakform", "🖌️ Bakpensel"],
        ingredients: [
          { key: "smör", amount: "lite till formen" },
        ],
      },

      {
        title: "Mosa bananerna",
        text: "Skala bananerna och mosa dem med en gaffel till en grov puré.",
        tools: ["🥣 Bunke", "🍴 Gaffel"],
        ingredients: [
          { key: "banan", amount: "3 mogna bananer" },
        ],
        why: "Mogna bananer innehåller mer naturligt socker och ger en saftigare kaka.",
      },

      {
        title: "Blanda det blöta",
        text: "Rör ihop smält smör, socker och ägg. Tillsätt sedan bananmoset.",
        tools: ["🥣 Stor bunke", "🥄 Slickepott", "🥄 Handvisp"],
        ingredients: [
          { key: "smör", amount: "100 g smält" },
          { key: "socker", amount: "2 dl" },
          { key: "ägg", amount: "2 ägg" },
          { key: "banan", amount: "3 mosade bananer" },
        ],
      },

      {
        title: "Blanda det torra",
        text: "Blanda mjöl, bakpulver och kanel och rör ner i smeten precis tills allt är blandat.",
        tools: ["🥣 Liten skål", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "4 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "kanel", amount: "1 tsk" },
        ],
        tip: "👨‍🍳 Rör inte mer än nödvändigt – för mycket rörning kan ge en seg kaka.",
      },

      {
        title: "Grädda 45 minuter",
        text: "Häll smeten i formen och grädda i nedre delen av ugnen.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante", "🪵 Provsticka"],
        ingredients: [],
        timerSec: 2700,
      },
    ],
  },

  {
    slug: "brownies",
    name: "Brownies",
    emoji: "🟫",
    description: "Fudgiga rutor med knäckig yta.",
    minutes: 40,
    difficulty: "Medel",
    portions: "16 rutor",

    ingredients: [
      { key: "choklad", amount: "200 g mörk choklad" },
      { key: "smör", amount: "150 g smör" },
      { key: "socker", amount: "3 dl socker" },
      { key: "ägg", amount: "3 ägg" },
      { key: "mjöl", amount: "1,5 dl mjöl" },
      { key: "kakao", amount: "2 msk kakao" },
      { key: "salt", amount: "0,5 tsk salt" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 175°C och klä en fyrkantig form med bakplåtspapper.",
        tools: ["🔥 Ugn", "🍰 Fyrkantig bakform", "📄 Bakplåtspapper"],
        ingredients: [],
      },

      {
        title: "Smält choklad och smör",
        text: "Smält choklad och smör tillsammans över vattenbad eller på mycket låg värme. Låt blandningen svalna något.",
        tools: ["🍫 Vattenbad", "🍴 Kastrull", "🥄 Slickepott"],
        ingredients: [
          { key: "choklad", amount: "200 g" },
          { key: "smör", amount: "150 g" },
        ],
        why: "Försiktig uppvärmning minskar risken att chokladen bränner eller blir grynig.",
      },

      {
        title: "Vispa ägg och socker",
        text: "Vispa ägg och socker i cirka 4–5 minuter tills blandningen är ljus och tjock.",
        tools: ["🥣 Stor bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "ägg", amount: "3 ägg" },
          { key: "socker", amount: "3 dl" },
        ],
        why: "Det här hjälper till att skapa browniesens tunna, glansiga och knäckiga yta.",
      },

      {
        title: "Blanda ihop allt",
        text: "Rör ner chokladblandningen. Sikta sedan ner mjöl, kakao och salt och rör försiktigt ihop.",
        tools: ["🥣 Bunke", "🥄 Sikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "2 msk" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },

      {
        title: "Grädda 22 minuter",
        text: "Häll smeten i formen och grädda tills kanterna är fasta men mitten fortfarande är mjuk.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 1320,
        tip: "👨‍🍳 Låt brownien svalna helt innan du skär den – då blir bitarna mycket snyggare.",
      },
    ],
  },

  {
    slug: "kanelbullar",
    name: "Kanelbullar",
    emoji: "🌀",
    description: "Klassiska jästa bullar med kanelfyllning.",
    minutes: 120,
    difficulty: "Medel",
    portions: "20 bullar",

    ingredients: [
      { key: "mjölk", amount: "3 dl mjölk" },
      { key: "jäst", amount: "25 g färsk jäst" },
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "1 dl socker" },
      { key: "mjöl", amount: "9 dl mjöl" },
      { key: "kanel", amount: "2 msk kanel" },
      { key: "salt", amount: "0,5 tsk salt" },
      { key: "ägg", amount: "1 ägg till pensling" },
    ],

    steps: [
      {
        title: "Värm mjölken",
        text: "Värm mjölken till cirka 37°C och blanda i smöret.",
        tools: ["🍴 Kastrull", "🔥 Spis", "🌡️ Termometer"],
        ingredients: [
          { key: "mjölk", amount: "3 dl" },
          { key: "smör", amount: "100 g" },
        ],
        why: "Jäst trivs bäst i fingervarm vätska. För hög temperatur kan skada jästen.",
      },

      {
        title: "Rör ut jästen",
        text: "Smula jästen i en stor bunke. Häll över den ljumma vätskan och rör tills jästen löst sig.",
        tools: ["🥣 Stor bunke", "🥄 Träslev"],
        ingredients: [
          { key: "jäst", amount: "25 g" },
        ],
      },

      {
        title: "Tillsätt socker och salt",
        text: "Rör ner socker och salt.",
        tools: ["🥣 Bunke", "🥄 Matsked", "🥄 Tesked"],
        ingredients: [
          { key: "socker", amount: "1 dl" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },

      {
        title: "Arbeta in mjölet",
        text: "Tillsätt mjölet lite i taget och knåda degen smidig i cirka 8–10 minuter.",
        tools: ["🥣 Stor bunke", "🤲 Händerna eller köksmaskin"],
        ingredients: [
          { key: "mjöl", amount: "9 dl" },
        ],
        why: "Knådningen bygger glutennätverket som hjälper degen att hålla kvar gaserna från jästen.",
      },

      {
        title: "Första jäsningen",
        text: "Täck bunken med en bakduk och låt degen jäsa på en varm och dragfri plats tills den ungefär har dubblat sin storlek.",
        tools: ["🥣 Bunke", "🧺 Bakduk", "⏱️ Timer"],
        ingredients: [],
        timerSec: 2400,
        tip: "👨‍🍳 Tryck försiktigt ett finger i degen. Om gropen långsamt kommer tillbaka är den redo.",
      },

      {
        title: "Kavla ut degen",
        text: "Kavla ut degen till en rektangel på ett lätt mjölat underlag.",
        tools: ["🥖 Kavel", "🪵 Bakbord"],
        ingredients: [],
      },

      {
        title: "Fyll och rulla",
        text: "Bred på rumsvarmt smör och strö över socker och kanel. Rulla ihop degen och skär cirka 20 bullar.",
        tools: ["🥄 Slickepott", "🔪 Kniv", "🪵 Skärbräda"],
        ingredients: [
          { key: "smör", amount: "cirka 50 g till fyllningen" },
          { key: "socker", amount: "cirka 0,5 dl till fyllningen" },
          { key: "kanel", amount: "2 msk" },
        ],
      },

      {
        title: "Andra jäsningen",
        text: "Lägg bullarna i formar på en plåt och låt dem jäsa under bakduk i cirka 30 minuter.",
        tools: ["🍪 Bakplåt", "🧁 Bullformar", "🧺 Bakduk", "⏱️ Timer"],
        ingredients: [],
        timerSec: 1800,
        why: "Den andra jäsningen gör bullarna luftigare och mjukare.",
      },

      {
        title: "Pensla och grädda",
        text: "Pensla bullarna med uppvispat ägg och grädda i 225°C i cirka 8–10 minuter.",
        tools: ["🖌️ Bakpensel", "🥣 Liten skål", "🔥 Ugn", "🍪 Bakplåt", "🧤 Grytvante"],
        ingredients: [
          { key: "ägg", amount: "1 ägg till pensling" },
        ],
        timerSec: 540,
        tip: "👨‍🍳 Lägg en bakduk över bullarna direkt efter gräddning så håller de sig mjuka.",
      },
    ],
  },
];

export function normalize(value: string): string {
  return value.trim().toLowerCase();
}

const SYNONYMS: Record<string, string> = {
  vetemjöl: "mjöl",
  hushållssocker: "socker",
  strösocker: "socker",
  kakaopulver: "kakao",
  bananer: "banan",
  äpplen: "äpple",
  kokosflingor: "kokos",
  torrjäst: "jäst",
  "färsk jäst": "jäst",
  mörkchoklad: "choklad",
  "mörk choklad": "choklad",
  chokladkaka: "choklad",
  havre: "havregryn",
  smörgåsmargarin: "smör",
  margarin: "smör",
};

export function canonical(value: string): string {
  const n = normalize(value);
  return SYNONYMS[n] ?? n;
}

export type Match = {
  recipe: Recipe;
  missing: Ingredient[];
  haveCount: number;
  ratio: number;
};

export function matchRecipes(pantry: string[]): Match[] {
  const have = new Set(pantry.map(canonical));

  return RECIPES.map((recipe) => {
    const missing = recipe.ingredients.filter(
      (ingredient) => !have.has(canonical(ingredient.key)),
    );

    const haveCount = recipe.ingredients.length - missing.length;

    return {
      recipe,
      missing,
      haveCount,
      ratio: haveCount / recipe.ingredients.length,
    };
  }).sort(
    (a, b) =>
      b.ratio - a.ratio ||
      a.recipe.minutes - b.recipe.minutes,
  );
}

export function missingLabel(missing: number): string {
  if (missing === 0) return "Du har allt hemma";

  if (missing === 1) return "Du saknar 1 ingrediens";

  return `Du saknar ${missing} ingredienser`;
}

export function getRecipe(slug: string): Recipe | undefined {
  return RECIPES.find((recipe) => recipe.slug === slug);
}
