export type Step = {
  title: string;
  text: string;

  /** Ingredienser som används specifikt i detta steg */
  ingredients?: {
    name: string;
    amount: string;
  }[];

  /** Redskap som behövs specifikt i detta steg */
  tools?: string[];

  /** Förvärmning/temperatur som hör till steget */
  temperature?: string;

  why?: string;
  tip?: string;
  timerSec?: number;
};

export type Ingredient = {
  /** Normaliserat nyckelnamn som matchas mot skafferiet */
  key: string;
  /** Visningsnamn med mängd */
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

/** Vanliga ingredienser som visas som chips */
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
      { key: "mjöl", amount: "1,5 dl vetemjöl" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
      { key: "salt", amount: "1 krm salt" },
    ],

    steps: [
      {
        title: "Förbered ugnen och formen",
        text: "Sätt ugnen på 175°C. Smörj en form på cirka 20 cm och bröa den lätt. Placera gallret i mitten av ugnen.",
        tools: ["Ugn", "Rund bakform, ca 20 cm", "Pensel eller smörkniv"],
        temperature: "175°C",
        why: "En ordentligt förvärmd ugn gör att kakan börjar sätta sig direkt och hjälper mitten att behålla sin kladdiga konsistens.",
        tip: "Använd gärna en form med ljus botten. Mörka formar kan göra att kanterna blir klara snabbare.",
      },
      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt i en kastrull eller mikrovågsugn. Låt det svalna någon minut.",
        ingredients: [
          { name: "Smör", amount: "100 g" },
        ],
        tools: ["Kastrull eller mikrovågsugn", "Matsked"],
        why: "Om smöret är väldigt varmt när det blandas med äggen kan äggen börja koagulera och smeten bli grynig.",
        tip: "Smöret behöver inte vara kallt – bara inte rykande varmt.",
      },
      {
        title: "Rör ihop ägg och socker",
        text: "Rör ihop ägg och socker till en jämn blandning. Vispa inte upp smeten fluffig.",
        ingredients: [
          { name: "Ägg", amount: "2 st" },
          { name: "Socker", amount: "2,5 dl" },
        ],
        tools: ["Stor bunke", "Visp"],
        why: "Kladdkaka ska vara kompakt och kladdig. Om du vispar in mycket luft riskerar du att få en luftigare kaka.",
        tip: "Här räcker det att blanda tills ägg och socker gått ihop.",
      },
      {
        title: "Blanda de torra ingredienserna",
        text: "Sikta ner mjöl, kakao, vaniljsocker och salt. Rör försiktigt tills nästan alla torra delar har blandats in.",
        ingredients: [
          { name: "Vetemjöl", amount: "1,5 dl" },
          { name: "Kakao", amount: "3 msk" },
          { name: "Vaniljsocker", amount: "1 tsk" },
          { name: "Salt", amount: "1 krm" },
        ],
        tools: ["Finmaskig sil eller mjölsikt", "Slickepott"],
        why: "Att sikta kakaon minskar risken för klumpar och ger en jämnare smet.",
      },
      {
        title: "Rör ner smöret",
        text: "Häll ner det avsvalnade smöret och rör försiktigt tills smeten precis är jämn.",
        ingredients: [
          { name: "Smält smör", amount: "100 g" },
        ],
        tools: ["Slickepott eller visp"],
        why: "Ju mindre du arbetar smeten efter att mjölet kommit i, desto större chans att kakan blir härligt kladdig.",
        tip: "Sluta röra så fort du inte längre ser torra mjölfickor.",
      },
      {
        title: "Grädda kakan",
        text: "Häll smeten i formen och grädda mitt i ugnen. Ytan ska ha börjat spricka och mitten ska fortfarande röra sig lite när du försiktigt skakar formen.",
        tools: ["Bakform", "Ugn", "Grytvantar"],
        temperature: "175°C",
        timerSec: 900,
        why: "Kakan fortsätter att sätta sig när den svalnar. Om du väntar tills mitten känns helt fast i ugnen blir resultatet lätt torrt.",
        tip: "Låt kakan svalna ordentligt om du vill ha riktigt tydlig kladdighet.",
      },
    ],
  },

  {
    slug: "chokladcookies",
    name: "Chokladcookies",
    emoji: "🍪",
    description: "Sega i mitten, krispiga i kanten och fulla av choklad.",
    minutes: 35,
    difficulty: "Lätt",
    portions: "16 cookies",

    ingredients: [
      { key: "smör", amount: "125 g smör" },
      { key: "socker", amount: "2 dl socker" },
      { key: "ägg", amount: "1 ägg" },
      { key: "mjöl", amount: "4 dl vetemjöl" },
      { key: "bakpulver", amount: "1 tsk bakpulver" },
      { key: "choklad", amount: "150 g mörk choklad" },
      { key: "salt", amount: "0,5 tsk salt" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 200°C och lägg bakplåtspapper på en plåt.",
        tools: ["Ugn", "Plåt", "Bakplåtspapper"],
        temperature: "200°C",
      },
      {
        title: "Rör smör och socker",
        text: "Rör det rumsvarma smöret tillsammans med sockret tills blandningen blir mjuk och krämig.",
        ingredients: [
          { name: "Smör", amount: "125 g, rumsvarmt" },
          { name: "Socker", amount: "2 dl" },
        ],
        tools: ["Stor bunke", "Elvisp eller träslev"],
        why: "När smöret arbetas med sockret skapas en struktur som hjälper kakorna att få rätt konsistens.",
        tip: "Smöret ska vara mjukt men inte smält.",
      },
      {
        title: "Tillsätt ägget",
        text: "Rör ner ägget tills smeten är jämn.",
        ingredients: [
          { name: "Ägg", amount: "1 st" },
        ],
        tools: ["Visp eller slickepott"],
      },
      {
        title: "Blanda de torra ingredienserna",
        text: "Blanda mjöl, bakpulver och salt i en separat skål. Rör sedan ner blandningen i smeten.",
        ingredients: [
          { name: "Vetemjöl", amount: "4 dl" },
          { name: "Bakpulver", amount: "1 tsk" },
          { name: "Salt", amount: "0,5 tsk" },
        ],
        tools: ["Mellanstor skål", "Måttsats", "Slickepott"],
        why: "Genom att blanda bakpulvret med mjölet först sprids det jämnare i degen.",
      },
      {
        title: "Vänd ner chokladen",
        text: "Hacka chokladen grovt och vänd ner den i degen.",
        ingredients: [
          { name: "Mörk choklad", amount: "150 g" },
        ],
        tools: ["Skärbräda", "Kniv", "Slickepott"],
        why: "Grovhackad choklad ger både små bitar och större smältor i de färdiga kakorna.",
        tip: "Spara gärna några större chokladbitar till att trycka ovanpå kakorna före gräddning.",
      },
      {
        title: "Kyl degen",
        text: "Låt degen vila i kylskåpet i cirka 15 minuter.",
        tools: ["Kylskåp", "Bunke eller tallrik"],
        timerSec: 900,
        why: "Kall deg håller formen bättre i ugnen och ger tjockare, segare cookies.",
      },
      {
        title: "Grädda kakorna",
        text: "Forma ungefär 16 bollar och placera dem med ordentligt mellanrum på plåten. Grädda tills kanterna är gyllene men mitten fortfarande ser lite mjuk ut.",
        tools: ["Plåt", "Bakplåtspapper", "Sked eller glasskopa", "Ugn", "Grytvantar"],
        temperature: "200°C",
        timerSec: 600,
        tip: "Ta hellre ut kakorna lite för tidigt än lite för sent. De fortsätter att stelna på den varma plåten.",
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
      { key: "mjöl", amount: "3 dl vetemjöl" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "mjölk", amount: "1 dl mjölk" },
    ],

    steps: [
      {
        title: "Värm ugnen",
        text: "Värm ugnen till 200°C och placera 12 muffinsformar i en muffinsplåt.",
        tools: ["Ugn", "Muffinsplåt", "12 muffinsformar"],
        temperature: "200°C",
        why: "En ordentligt varm ugn hjälper muffinsarna att resa sig snabbt och få en fin topp.",
      },
      {
        title: "Förbered smöret",
        text: "Smält smöret försiktigt och låt det svalna lite.",
        ingredients: [
          { name: "Smör", amount: "100 g" },
        ],
        tools: ["Kastrull eller mikrovågsugn", "Mått"],
      },
      {
        title: "Blanda ägg och socker",
        text: "Vispa ihop ägg och socker tills blandningen är jämn.",
        ingredients: [
          { name: "Ägg", amount: "2 st" },
          { name: "Socker", amount: "2 dl" },
        ],
        tools: ["Stor bunke", "Visp"],
      },
      {
        title: "Blanda de torra ingredienserna",
        text: "Blanda mjöl, kakao och bakpulver i en separat skål.",
        ingredients: [
          { name: "Vetemjöl", amount: "3 dl" },
          { name: "Kakao", amount: "3 msk" },
          { name: "Bakpulver", amount: "2 tsk" },
        ],
        tools: ["Mellanstor skål", "Visp eller sked"],
      },
      {
        title: "Blanda smeten",
        text: "Rör ner smör och mjölk i äggblandningen. Vänd sedan ner de torra ingredienserna och blanda bara tills smeten precis gått ihop.",
        ingredients: [
          { name: "Mjölk", amount: "1 dl" },
          { name: "Smält smör", amount: "100 g" },
        ],
        tools: ["Slickepott", "Måttkanna"],
        why: "För mycket blandning efter att mjölet tillsatts kan utveckla gluten och göra muffinsarna kompakta.",
        tip: "Några små mjölklumpar är bättre än en överarbetad smet.",
      },
      {
        title: "Fyll formarna",
        text: "Fördela smeten i formarna. Fyll varje form ungefär till två tredjedelar.",
        tools: ["Sked eller glasskopa", "Muffinsplåt"],
        tip: "En glasskopa gör det lättare att få lika stora muffins.",
      },
      {
        title: "Grädda",
        text: "Grädda mitt i ugnen tills muffinsarna har rest sig och en provsticka kommer ut med några fuktiga smulor.",
        tools: ["Ugn", "Grytvantar", "Provsticka"],
        temperature: "200°C",
        timerSec: 900,
        tip: "Fuktiga smulor är bra. Helt torr sticka kan betyda att muffinsarna redan blivit lite för länge i ugnen.",
      },
    ],
  },

  {
    slug: "kanelbullar",
    name: "Kanelbullar",
    emoji: "🌀",
    description: "Klassiska jästa bullar med smör, socker och kanel.",
    minutes: 120,
    difficulty: "Medel",
    portions: "20 bullar",

    ingredients: [
      { key: "mjölk", amount: "3 dl mjölk" },
      { key: "jäst", amount: "25 g färsk jäst" },
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "1 dl socker" },
      { key: "mjöl", amount: "9 dl vetemjöl" },
      { key: "kanel", amount: "2 msk kanel" },
      { key: "salt", amount: "0,5 tsk salt" },
      { key: "ägg", amount: "1 ägg till pensling" },
    ],

    steps: [
      {
        title: "Värm mjölken",
        text: "Värm mjölken till ungefär 37°C. Smält smöret och blanda med mjölken.",
        ingredients: [
          { name: "Mjölk", amount: "3 dl" },
          { name: "Smör", amount: "100 g" },
        ],
        tools: ["Kastrull", "Kökstermometer"],
        temperature: "37°C",
        why: "Jäst trivs bra runt fingervarm temperatur. För varm vätska kan skada jästen.",
        tip: "Saknar du termometer ska vätskan kännas ungefär fingervarm, inte het.",
      },
      {
        title: "Blanda jäst och vätska",
        text: "Smula jästen i en stor bunke. Häll över lite av vätskan och rör tills jästen lösts upp. Tillsätt resten.",
        ingredients: [
          { name: "Färsk jäst", amount: "25 g" },
        ],
        tools: ["Stor bunke", "Träslev eller visp"],
      },
      {
        title: "Tillsätt socker och salt",
        text: "Rör ner socker och salt i vätskan.",
        ingredients: [
          { name: "Socker", amount: "1 dl" },
          { name: "Salt", amount: "0,5 tsk" },
        ],
        tools: ["Måttsats", "Träslev"],
      },
      {
        title: "Arbeta in mjölet",
        text: "Tillsätt mjölet lite i taget och arbeta degen tills den är smidig och börjar släppa från skålens kanter.",
        ingredients: [
          { name: "Vetemjöl", amount: "9 dl" },
        ],
        tools: ["Stor bunke", "Träslev eller köksmaskin"],
        why: "När degen knådas utvecklas gluten som fungerar som ett nätverk och håller kvar gaserna från jästen.",
        tip: "Tillsätt inte automatiskt mer mjöl bara för att degen känns lite kladdig. En för torr deg ger torra bullar.",
      },
      {
        title: "Första jäsningen",
        text: "Täck bunken och låt degen jäsa på en dragfri plats tills den ungefär fördubblats i storlek.",
        tools: ["Bakduk eller plastfolie", "Bunke"],
        timerSec: 2400,
        why: "Jästen bildar koldioxid som fastnar i glutennätverket och gör degen luftig.",
        tip: "Tiden är ungefärlig. Titta på degen – storleken är viktigare än klockan.",
      },
      {
        title: "Kavla ut degen",
        text: "Kavla ut degen till en rektangel på ett lätt mjölat bakbord.",
        tools: ["Kavel", "Bakbord"],
      },
      {
        title: "Gör fyllningen",
        text: "Bred på rumsvarmt smör och strö över socker och kanel. Rulla ihop från långsidan.",
        ingredients: [
          { name: "Smör", amount: "ca 50 g av de 100 g" },
          { name: "Socker", amount: "ca 0,5 dl av 1 dl" },
          { name: "Kanel", amount: "2 msk" },
        ],
        tools: ["Slickepott eller smörkniv", "Måttsats"],
        tip: "Lämna en liten kant fri så blir det enklare att försluta rullen.",
      },
      {
        title: "Skär bullarna",
        text: "Skär rullen i cirka 20 jämnstora bitar och lägg dem i bullformar eller på bakplåtspapper.",
        tools: ["Vass kniv", "Bullformar", "Plåt"],
        tip: "Använd gärna en bit sytråd för att skära bullarna utan att trycka ihop dem.",
      },
      {
        title: "Andra jäsningen",
        text: "Täck bullarna och låt dem jäsa igen tills de blivit tydligt större.",
        tools: ["Bakduk", "Plåt"],
        timerSec: 1800,
        why: "Den andra jäsningen gör bullarna luftigare och mjukare.",
      },
      {
        title: "Pensla och grädda",
        text: "Pensla bullarna med uppvispat ägg och grädda tills de är gyllenbruna.",
        ingredients: [
          { name: "Ägg", amount: "1 st" },
        ],
        tools: ["Pensel", "Liten skål", "Ugn", "Grytvantar"],
        temperature: "225°C",
        timerSec: 540,
        tip: "Lägg en bakduk över bullarna när de svalnar så håller de sig mjuka.",
      },
    ],
  },

  {
    slug: "applepaj",
    name: "Äppelpaj",
    emoji: "🥧",
    description: "Varm smulpaj med äpplen, kanel och krispigt täcke.",
    minutes: 45,
    difficulty: "Lätt",
    portions: "6 portioner",

    ingredients: [
      { key: "äpple", amount: "4 äpplen" },
      { key: "smör", amount: "125 g smör" },
      { key: "mjöl", amount: "3 dl vetemjöl" },
      { key: "socker", amount: "1 dl socker" },
      { key: "kanel", amount: "1 msk kanel" },
      { key: "havregryn", amount: "1 dl havregryn" },
    ],

    steps: [
      {
        title: "Förbered ugnen och formen",
        text: "Värm ugnen till 200°C och smörj en pajform.",
        tools: ["Ugn", "Pajform", "Smörkniv eller pensel"],
        temperature: "200°C",
      },
      {
        title: "Förbered äpplena",
        text: "Skala om du vill, kärna ur och skiva äpplena. Lägg dem i formen och strö över kanel och en del av sockret.",
        ingredients: [
          { name: "Äpplen", amount: "4 st" },
          { name: "Kanel", amount: "1 msk" },
          { name: "Socker", amount: "ca 0,5 dl" },
        ],
        tools: ["Skärbräda", "Kniv", "Äppelurkärnare, valfritt"],
        why: "Tunnare äppelskivor hinner mjukna ordentligt under gräddningen.",
      },
      {
        title: "Gör smulet",
        text: "Nyp ihop kallt smör, mjöl, socker och havregryn till grova smulor.",
        ingredients: [
          { name: "Smör", amount: "125 g, kallt" },
          { name: "Vetemjöl", amount: "3 dl" },
          { name: "Socker", amount: "ca 0,5 dl" },
          { name: "Havregryn", amount: "1 dl" },
        ],
        tools: ["Stor bunke", "Måttsats"],
        why: "Kallt smör hjälper smulet att bli krispigt istället för kompakt.",
        tip: "Nyp med fingertopparna och sluta när du har grova smulor – överarbeta inte.",
      },
      {
        title: "Grädda pajen",
        text: "Fördela smulet jämnt över äpplena och grädda tills toppen är gyllenbrun och äpplena mjuka.",
        tools: ["Pajform", "Ugn", "Grytvantar"],
        temperature: "200°C",
        timerSec: 1500,
        tip: "Låt pajen vila några minuter innan servering så hinner fyllningen tjockna lite.",
      },
    ],
  },

  {
    slug: "sockerkaka",
    name: "Sockerkaka",
    emoji: "🍰",
    description: "En luftig klassiker som passar till nästan allt.",
    minutes: 50,
    difficulty: "Lätt",
    portions: "10 bitar",

    ingredients: [
      { key: "ägg", amount: "3 ägg" },
      { key: "socker", amount: "2,5 dl socker" },
      { key: "mjöl", amount: "3 dl vetemjöl" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "smör", amount: "75 g smör" },
      { key: "mjölk", amount: "1 dl mjölk" },
      { key: "vaniljsocker", amount: "2 tsk vaniljsocker" },
    ],

    steps: [
      {
        title: "Förbered ugnen och formen",
        text: "Värm ugnen till 175°C. Smörj och bröa en sockerkaksform.",
        tools: ["Ugn", "Sockerkaksform", "Pensel eller smörkniv"],
        temperature: "175°C",
      },
      {
        title: "Vispa ägg och socker",
        text: "Vispa ägg och socker riktigt ljust och pösigt, cirka 4 minuter.",
        ingredients: [
          { name: "Ägg", amount: "3 st" },
          { name: "Socker", amount: "2,5 dl" },
        ],
        tools: ["Stor bunke", "Elvisp"],
        why: "Luften du vispar in hjälper till att bygga kakans struktur.",
        tip: "Smeten ska vara så luftig att den faller tillbaka i ett tydligt band från vispen.",
      },
      {
        title: "Blanda de torra ingredienserna",
        text: "Blanda mjöl, bakpulver och vaniljsocker separat.",
        ingredients: [
          { name: "Vetemjöl", amount: "3 dl" },
          { name: "Bakpulver", amount: "2 tsk" },
          { name: "Vaniljsocker", amount: "2 tsk" },
        ],
        tools: ["Mellanstor skål", "Visp eller sked"],
      },
      {
        title: "Vänd ner mjölet",
        text: "Sikta ner de torra ingredienserna i äggsmeten och vänd försiktigt.",
        tools: ["Sikt", "Slickepott"],
        why: "För kraftig blandning kan slå ut luften som du byggt upp.",
      },
      {
        title: "Tillsätt smör och mjölk",
        text: "Smält smöret. Blanda det med mjölken och rör försiktigt ner blandningen i smeten.",
        ingredients: [
          { name: "Smör", amount: "75 g" },
          { name: "Mjölk", amount: "1 dl" },
        ],
        tools: ["Kastrull", "Måttkanna", "Slickepott"],
      },
      {
        title: "Grädda",
        text: "Häll smeten i formen och grädda i nedre delen av ugnen. Undvik att öppna ugnsluckan tidigt.",
        tools: ["Sockerkaksform", "Ugn", "Grytvantar", "Provsticka"],
        temperature: "175°C",
        timerSec: 2100,
        tip: "Öppna helst inte ugnen under de första 20 minuterna eftersom kakan då kan sjunka.",
      },
    ],
  },

  {
    slug: "havrekakor",
    name: "Havrekakor",
    emoji: "🥮",
    description: "Frasiga och enkla havrekakor.",
    minutes: 25,
    difficulty: "Lätt",
    portions: "20 kakor",

    ingredients: [
      { key: "havregryn", amount: "3 dl havregryn" },
      { key: "smör", amount: "100 g smör" },
      { key: "socker", amount: "1,5 dl socker" },
      { key: "mjöl", amount: "1 dl vetemjöl" },
      { key: "bakpulver", amount: "1 tsk bakpulver" },
      { key: "ägg", amount: "1 ägg" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 175°C och täck en plåt med bakplåtspapper.",
        tools: ["Ugn", "Plåt", "Bakplåtspapper"],
        temperature: "175°C",
      },
      {
        title: "Blanda smör, socker och ägg",
        text: "Rör ihop det smälta smöret, sockret och ägget.",
        ingredients: [
          { name: "Smör", amount: "100 g, smält" },
          { name: "Socker", amount: "1,5 dl" },
          { name: "Ägg", amount: "1 st" },
        ],
        tools: ["Bunke", "Visp"],
      },
      {
        title: "Tillsätt havre och mjöl",
        text: "Rör ner havregryn, mjöl och bakpulver. Låt smeten vila några minuter.",
        ingredients: [
          { name: "Havregryn", amount: "3 dl" },
          { name: "Vetemjöl", amount: "1 dl" },
          { name: "Bakpulver", amount: "1 tsk" },
        ],
        tools: ["Slickepott", "Måttsats"],
        why: "Havregryn behöver lite tid för att absorbera vätskan.",
      },
      {
        title: "Forma och grädda",
        text: "Klicka ut små klickar med gott om plats mellan dem. Grädda tills kanterna är gyllene.",
        tools: ["Sked", "Plåt", "Ugn", "Grytvantar"],
        temperature: "175°C",
        timerSec: 600,
        tip: "Kakorna stelnar när de svalnar, så låt dem ligga kvar på plåten en stund efter ugnen.",
      },
    ],
  },

  {
    slug: "kokostoppar",
    name: "Kokostoppar",
    emoji: "🥥",
    description: "Enkla kokostoppar med få ingredienser.",
    minutes: 25,
    difficulty: "Lätt",
    portions: "18 toppar",

    ingredients: [
      { key: "kokos", amount: "4 dl kokosflingor" },
      { key: "socker", amount: "1 dl socker" },
      { key: "ägg", amount: "2 ägg" },
      { key: "smör", amount: "50 g smör" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
    ],

    steps: [
      {
        title: "Värm ugnen",
        text: "Värm ugnen till 175°C och lägg bakplåtspapper på en plåt.",
        tools: ["Ugn", "Plåt", "Bakplåtspapper"],
        temperature: "175°C",
      },
      {
        title: "Blanda ägg och socker",
        text: "Rör ihop ägg, socker och vaniljsocker. Det behöver inte vispas luftigt.",
        ingredients: [
          { name: "Ägg", amount: "2 st" },
          { name: "Socker", amount: "1 dl" },
          { name: "Vaniljsocker", amount: "1 tsk" },
        ],
        tools: ["Bunke", "Visp"],
      },
      {
        title: "Tillsätt kokos och smör",
        text: "Rör ner kokosflingor och smält smör. Låt blandningen stå cirka 10 minuter.",
        ingredients: [
          { name: "Kokosflingor", amount: "4 dl" },
          { name: "Smör", amount: "50 g, smält" },
        ],
        tools: ["Slickepott", "Kastrull"],
        why: "Kokosen hinner absorbera vätskan och topparna blir lättare att forma.",
      },
      {
        title: "Forma topparna",
        text: "Forma små toppar med två teskedar och lägg dem på plåten.",
        tools: ["Två teskedar", "Plåt"],
      },
      {
        title: "Grädda",
        text: "Grädda tills topparna fått en gyllene färg.",
        tools: ["Ugn", "Grytvantar"],
        temperature: "175°C",
        timerSec: 720,
        tip: "Låt dem svalna innan du flyttar dem från plåten eftersom de är mjuka när de är varma.",
      },
    ],
  },

  {
    slug: "banankaka",
    name: "Banankaka",
    emoji: "🍌",
    description: "Saftig kaka och perfekt sätt att använda mogna bananer.",
    minutes: 60,
    difficulty: "Lätt",
    portions: "10 bitar",

    ingredients: [
      { key: "banan", amount: "3 mogna bananer" },
      { key: "socker", amount: "2 dl socker" },
      { key: "smör", amount: "100 g smör" },
      { key: "ägg", amount: "2 ägg" },
      { key: "mjöl", amount: "4 dl vetemjöl" },
      { key: "bakpulver", amount: "2 tsk bakpulver" },
      { key: "kanel", amount: "1 tsk kanel" },
    ],

    steps: [
      {
        title: "Mosa bananerna",
        text: "Skala bananerna och mosa dem med en gaffel till en grov puré.",
        ingredients: [
          { name: "Mogna bananer", amount: "3 st" },
        ],
        tools: ["Bunke", "Gaffel"],
        why: "Mogna bananer innehåller mer socker och ger både smak och saftighet.",
        tip: "Ju mer brunprickiga bananerna är, desto mer smak får kakan.",
      },
      {
        title: "Blanda smör, socker och ägg",
        text: "Rör ihop smält smör och socker. Tillsätt äggen ett i taget.",
        ingredients: [
          { name: "Smör", amount: "100 g, smält" },
          { name: "Socker", amount: "2 dl" },
          { name: "Ägg", amount: "2 st" },
        ],
        tools: ["Stor bunke", "Visp"],
      },
      {
        title: "Tillsätt bananerna",
        text: "Rör ner bananmoset tills blandningen är jämn.",
        tools: ["Slickepott"],
      },
      {
        title: "Blanda de torra ingredienserna",
        text: "Blanda mjöl, bakpulver och kanel. Vänd sedan ner blandningen i smeten.",
        ingredients: [
          { name: "Vetemjöl", amount: "4 dl" },
          { name: "Bakpulver", amount: "2 tsk" },
          { name: "Kanel", amount: "1 tsk" },
        ],
        tools: ["Mellanstor skål", "Slickepott"],
        why: "När mjölet blandas in ska du arbeta så lite som möjligt för att behålla en mjuk kaka.",
      },
      {
        title: "Grädda",
        text: "Häll smeten i en smord form och grädda tills kakan är genomgräddad.",
        tools: ["Bakform", "Ugn", "Grytvantar", "Provsticka"],
        temperature: "175°C",
        timerSec: 2700,
        tip: "Eftersom bananer innehåller mycket vätska kan kakan behöva lite längre tid än en vanlig sockerkaka.",
      },
    ],
  },

  {
    slug: "brownies",
    name: "Brownies",
    emoji: "🟫",
    description: "Fudgiga chokladrutor med tunn, knäckig yta.",
    minutes: 40,
    difficulty: "Medel",
    portions: "16 rutor",

    ingredients: [
      { key: "choklad", amount: "200 g mörk choklad" },
      { key: "smör", amount: "150 g smör" },
      { key: "socker", amount: "3 dl socker" },
      { key: "ägg", amount: "3 ägg" },
      { key: "mjöl", amount: "1,5 dl vetemjöl" },
      { key: "kakao", amount: "2 msk kakao" },
      { key: "salt", amount: "0,5 tsk salt" },
    ],

    steps: [
      {
        title: "Förbered ugnen",
        text: "Värm ugnen till 175°C och klä en fyrkantig form med bakplåtspapper.",
        tools: ["Ugn", "Fyrkantig bakform", "Bakplåtspapper"],
        temperature: "175°C",
      },
      {
        title: "Smält choklad och smör",
        text: "Smält choklad och smör försiktigt tillsammans. Låt blandningen svalna lite.",
        ingredients: [
          { name: "Mörk choklad", amount: "200 g" },
          { name: "Smör", amount: "150 g" },
        ],
        tools: ["Kastrull", "Värmetålig skål", "Slickepott"],
        why: "Försiktig uppvärmning minskar risken att chokladen bränns eller skär sig.",
      },
      {
        title: "Vispa ägg och socker",
        text: "Vispa ägg och socker tills blandningen blir ljus och tjock.",
        ingredients: [
          { name: "Ägg", amount: "3 st" },
          { name: "Socker", amount: "3 dl" },
        ],
        tools: ["Stor bunke", "Elvisp"],
        why: "Den här vispningen bidrar till browniesens tunna, blanka yta.",
        tip: "Du behöver inte vispa lika länge som till en sockerkaka, men blandningen ska bli tydligt ljusare.",
      },
      {
        title: "Blanda chokladen",
        text: "Rör försiktigt ner den avsvalnade chokladblandningen i äggsmeten.",
        tools: ["Slickepott"],
      },
      {
        title: "Vänd ner mjöl och kakao",
        text: "Sikta ner mjöl och kakao tillsammans med salt. Vänd försiktigt tills smeten precis är jämn.",
        ingredients: [
          { name: "Vetemjöl", amount: "1,5 dl" },
          { name: "Kakao", amount: "2 msk" },
          { name: "Salt", amount: "0,5 tsk" },
        ],
        tools: ["Sikt", "Slickepott"],
        why: "För mycket blandning efter mjölet gör brownies mindre fudgiga.",
      },
      {
        title: "Grädda",
        text: "Häll smeten i formen och grädda tills kanterna är fasta men mitten fortfarande är mjuk.",
        tools: ["Bakform", "Ugn", "Grytvantar"],
        temperature: "175°C",
        timerSec: 1320,
        tip: "Låt brownies svalna helt innan du skär dem. För extra rena bitar kan du kyla dem först.",
      },
    ],
  },
];

/* ---------------------------------------------------------
   Hjälpfunktioner
--------------------------------------------------------- */

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
      (ingredient) => !have.has(canonical(ingredient.key))
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
      a.recipe.minutes - b.recipe.minutes
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
