export type Step = {
  title: string;
  text: string;
  why?: string;
  tip?: string;
  timerSec?: number;
  tools?: string[];
  ingredients?: Ingredient[];
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
  "kaffe",
  "morot",
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
        text: "Smörj och bröa en form på ca 20 cm. Ställ in gallret i mitten av ugnen.",
        tools: ["🔥 Ugn", "🍰 Bakform", "🧈 Smörkniv", "🥄 Matsked"],
        ingredients: [],
        why: "En förvärmd ugn gör att kakan stelnar i kanterna direkt och behåller den kladdiga mitten.",
        tip: "Använd en form med ljus botten – mörka formar bakar snabbare i kanterna.",
      },
      {
        title: "Smält smöret",
        text: "Smält smöret på svag värme och låt det svalna någon minut.",
        tools: ["🍳 Kastrull", "🔥 Spis", "🥄 Träslev"],
        ingredients: [{ key: "smör", amount: "100 g" }],
        why: "För varmt smör börjar koagulera äggen så smeten blir kornig.",
      },
      {
        title: "Rör ihop socker och ägg",
        text: "Vispa ihop socker och ägg lätt – bara till en jämn blandning, inte pösigt.",
        tools: ["🥣 Bunke", "🥄 Handvisp"],
        ingredients: [
          { key: "socker", amount: "2,5 dl" },
          { key: "ägg", amount: "2 ägg" },
        ],
        why: "Mycket luft ger en luftig kaka. Här vill vi tvärtom ha kompakt kladd.",
        tip: "👨‍🍳 Vispa aldrig kladdkakesmet med elvisp på hög fart – då blir den mer som sockerkaka.",
      },
      {
        title: "Blanda in det torra",
        text: "Sikta ner mjöl, kakao, vaniljsocker och salt. Rör ner smöret sist.",
        tools: ["🥣 Bunke", "🥄 Sil eller mjölsikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "salt", amount: "1 krm" },
          { key: "smör", amount: "100 g smält" },
        ],
        why: "Siktad kakao klumpar sig inte och ger jämnare färg och smak.",
      },
      {
        title: "Grädda 15–17 minuter",
        text: "Häll smeten i formen och grädda i mitten av ugnen. Ytan ska spricka lite men mitten ska fortfarande röra sig.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 900,
        why: "Kakan efterbakar i formen – tar du ut den när den känns helt klar blir den torr.",
        tip: "👨‍🍳 Kyl kakan minst 1 timme för perfekt kladdighet, eller ät den ljummen med grädde.",
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
        title: "Rör smör och socker pösigt",
        text: "Använd rumsvarmt smör och rör med socker i 2–3 minuter.",
        tools: ["🥣 Bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "smör", amount: "125 g" },
          { key: "socker", amount: "2 dl" },
        ],
        why: "Sockerkristallerna slår små luftfickor i smöret – det ger kakornas struktur.",
        tip: "👨‍🍳 Rumsvarmt smör ska gå att trycka i med fingret men inte vara blankt.",
      },
      {
        title: "Tillsätt ägg",
        text: "Rör ner ägget till en jämn smet.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [{ key: "ägg", amount: "1 ägg" }],
      },
      {
        title: "Blanda ner det torra",
        text: "Blanda mjöl, bakpulver och salt och rör ihop. Hacka chokladen grovt och vänd ner.",
        tools: ["🥣 Två bunkar", "🥄 Slickepott", "🔪 Kniv", "🪵 Skärbräda"],
        ingredients: [
          { key: "mjöl", amount: "4 dl" },
          { key: "bakpulver", amount: "1 tsk" },
          { key: "salt", amount: "0,5 tsk" },
          { key: "choklad", amount: "150 g" },
        ],
        why: "Grovhackad choklad ger både små och stora smältor – snyggare och godare.",
      },
      {
        title: "Kyl degen 15 minuter",
        text: "Låt degen vila kallt medan ugnen värms till 200°C.",
        tools: ["❄️ Kylskåp", "🥣 Bunke"],
        ingredients: [],
        timerSec: 900,
        why: "Kall deg flyter ut mindre, så kakorna blir tjockare och segare.",
      },
      {
        title: "Grädda 9–11 minuter",
        text: "Klicka ut bollar med avstånd på plåt med bakplåtspapper. Grädda till gyllene kanter.",
        tools: ["🔥 Ugn", "🍪 Plåt", "📄 Bakplåtspapper", "🥄 Sked", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 600,
        tip: "👨‍🍳 Ta ut kakorna när mitten ser lite obakad ut – de stelnar på plåten.",
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
        text: "Ställ fram 12 muffinsformar i en plåt eller form.",
        tools: ["🔥 Ugn", "🧁 Muffinsplåt", "🧁 Muffinsformar"],
        ingredients: [],
        why: "Hög värme i början ger muffinsen den där fina kupolen.",
      },
      {
        title: "Vispa smör, socker och ägg",
        text: "Vispa smält smör med socker och ägg till en jämn smet.",
        tools: ["🥣 Bunke", "⚡ Elvisp", "🍳 Kastrull"],
        ingredients: [
          { key: "smör", amount: "100 g" },
          { key: "socker", amount: "2 dl" },
          { key: "ägg", amount: "2 ägg" },
        ],
      },
      {
        title: "Varva torrt och blött",
        text: "Blanda mjöl, kakao och bakpulver. Rör ner växelvis med mjölken.",
        tools: ["🥣 Bunke", "🥄 Slickepott", "🥄 Måttsked"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "mjölk", amount: "1 dl" },
        ],
        why: "Växelvis inblandning gör att smeten inte skär sig eller klumpar ihop sig.",
        tip: "👨‍🍳 Rör bara tills smeten går ihop – överblandning ger sega muffins.",
      },
      {
        title: "Grädda 15 minuter",
        text: "Fyll formarna till ungefär 2/3 och grädda mitt i ugnen.",
        tools: ["🧁 Muffinsplåt", "🥄 Sked", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 900,
        tip: "👨‍🍳 Testa med en sticka: fuktiga smulor är perfekt, blöt smet behöver mer tid.",
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
        title: "Värm mjölken till 37°C",
        text: "Smält smöret i mjölken och värm försiktigt till fingervarm temperatur.",
        tools: ["🍳 Kastrull", "🔥 Spis", "🌡️ Termometer"],
        ingredients: [
          { key: "mjölk", amount: "3 dl" },
          { key: "smör", amount: "100 g" },
        ],
        why: "Över cirka 45°C kan jästen skadas.",
        tip: "👨‍🍳 Ingen termometer? Vätskan ska kännas ungefär lika varm som din hud.",
      },
      {
        title: "Rör ut jästen",
        text: "Smula jästen i en bunke och rör ut den i lite av vätskan. Tillsätt resten, socker och salt.",
        tools: ["🥣 Stor bunke", "🥄 Träslev"],
        ingredients: [
          { key: "jäst", amount: "25 g" },
          { key: "socker", amount: "1 dl" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },
      {
        title: "Arbeta degen",
        text: "Tillsätt mjölet lite i taget och knåda smidigt i 8–10 minuter.",
        tools: ["🥣 Stor bunke", "👐 Händer eller köksmaskin", "🥄 Decilitermått"],
        ingredients: [{ key: "mjöl", amount: "9 dl" }],
        why: "Knådning bygger glutennätverket som håller kvar jäsgaserna.",
      },
      {
        title: "Jäs 40 minuter",
        text: "Täck bunken med bakduk och låt jäsa på en varm, dragfri plats.",
        tools: ["🥣 Bunke", "🧺 Bakduk"],
        ingredients: [],
        timerSec: 2400,
        tip: "👨‍🍳 Degen är färdigjäst när den ungefär har fördubblats i storlek.",
      },
      {
        title: "Kavla, fyll och rulla",
        text: "Kavla ut degen. Bred på rumsvarmt smör och strö över socker och kanel. Rulla ihop och skär 20 bitar.",
        tools: ["🪵 Kavel", "🔪 Kniv", "🥄 Slickepott", "📏 Linjal"],
        ingredients: [
          { key: "smör", amount: "ca 75 g till fyllning" },
          { key: "socker", amount: "ca 0,5 dl till fyllning" },
          { key: "kanel", amount: "2 msk" },
        ],
      },
      {
        title: "Jäs igen 30 minuter",
        text: "Lägg bullarna i formar på en plåt och låt jäsa under duk.",
        tools: ["🍪 Plåt", "🧁 Bullformar", "🧺 Bakduk"],
        ingredients: [],
        timerSec: 1800,
        why: "Andra jäsningen ger den luftiga och mjuka insidan.",
      },
      {
        title: "Grädda 8–10 minuter i 225°C",
        text: "Pensla bullarna med uppvispat ägg och strö över pärlsocker. Grädda gyllene.",
        tools: ["🥣 Liten skål", "🥄 Pensel", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [{ key: "ägg", amount: "1 ägg" }],
        timerSec: 540,
        tip: "👨‍🍳 Lägg bullarna under bakduk direkt efter gräddning så håller de sig mjuka.",
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
        title: "Sätt ugnen på 200°C",
        text: "Smörj en pajform.",
        tools: ["🔥 Ugn", "🥧 Pajform", "🧈 Smörkniv"],
        ingredients: [],
      },
      {
        title: "Skiva äpplena",
        text: "Kärna ur och skiva äpplena. Lägg i formen och strö över kanel och lite socker.",
        tools: ["🔪 Kniv", "🪵 Skärbräda", "🥧 Pajform", "🥄 Matsked"],
        ingredients: [
          { key: "äpple", amount: "4 äpplen" },
          { key: "kanel", amount: "1 msk" },
          { key: "socker", amount: "ca 0,5 dl" },
        ],
        why: "Tunna skivor mjuknar i samma takt som smulet blir gyllene.",
      },
      {
        title: "Nyp ihop smulet",
        text: "Nyp ihop kallt smör, mjöl, socker och havregryn till grova smulor.",
        tools: ["🥣 Bunke", "👐 Händer"],
        ingredients: [
          { key: "smör", amount: "125 g" },
          { key: "mjöl", amount: "3 dl" },
          { key: "socker", amount: "0,5 dl" },
          { key: "havregryn", amount: "1 dl" },
        ],
        tip: "👨‍🍳 Kallt smör ger ett krispigare smul.",
      },
      {
        title: "Grädda 25 minuter",
        text: "Fördela smulet över äpplena och grädda mitt i ugnen till gyllenbrun yta.",
        tools: ["🔥 Ugn", "🧤 Grytvante"],
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
        title: "Vispa ägg och socker",
        text: "Vispa riktigt pösigt och ljust, cirka 4 minuter.",
        tools: ["🥣 Stor bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "ägg", amount: "3 ägg" },
          { key: "socker", amount: "2,5 dl" },
        ],
        why: "Luften som vispas in hjälper kakan att bli hög och luftig.",
      },
      {
        title: "Vänd ner det torra",
        text: "Blanda mjöl, bakpulver och vaniljsocker och sikta ner. Vänd försiktigt.",
        tools: ["🥣 Skål", "🥄 Sil eller mjölsikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "vaniljsocker", amount: "2 tsk" },
        ],
        why: "Försiktig vändning bevarar luftbubblorna.",
      },
      {
        title: "Rör ner smör och mjölk",
        text: "Blanda det smälta smöret med mjölken och rör ner sist.",
        tools: ["🍳 Kastrull", "🥄 Slickepott"],
        ingredients: [
          { key: "smör", amount: "75 g" },
          { key: "mjölk", amount: "1 dl" },
        ],
      },
      {
        title: "Grädda 35 minuter i 175°C",
        text: "Häll i en smord och bröad sockerkaksform. Grädda i nedre delen av ugnen.",
        tools: ["🍰 Sockerkaksform", "🔥 Ugn", "🧤 Grytvante", "🪵 Provsticka"],
        ingredients: [],
        timerSec: 2100,
        tip: "👨‍🍳 Öppna inte ugnen första 20 minuterna – kakan kan sjunka.",
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
        text: "Lägg bakplåtspapper på två plåtar.",
        tools: ["🔥 Ugn", "🍪 Plåtar", "📄 Bakplåtspapper"],
        ingredients: [],
      },
      {
        title: "Blanda allt",
        text: "Rör ihop smält smör, socker och ägg. Blanda ner havregryn, mjöl och bakpulver.",
        tools: ["🥣 Bunke", "🥄 Träslev", "🍳 Kastrull"],
        ingredients: [
          { key: "smör", amount: "100 g" },
          { key: "socker", amount: "1,5 dl" },
          { key: "ägg", amount: "1 ägg" },
          { key: "havregryn", amount: "3 dl" },
          { key: "mjöl", amount: "1 dl" },
          { key: "bakpulver", amount: "1 tsk" },
        ],
        why: "Havregryn suger upp fukt – degen kan behöva vila några minuter.",
      },
      {
        title: "Grädda 10 minuter",
        text: "Klicka ut små klickar med gott avstånd – de flyter ut mycket.",
        tools: ["🥄 Sked", "🍪 Plåt", "🔥 Ugn", "🧤 Grytvante"],
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
        tools: ["🔥 Ugn", "🍪 Plåt", "📄 Bakplåtspapper"],
        ingredients: [],
      },
      {
        title: "Rör ihop smeten",
        text: "Blanda ägg, socker och vaniljsocker. Rör ner kokos och smör.",
        tools: ["🥣 Bunke", "🥄 Träslev", "🍳 Kastrull"],
        ingredients: [
          { key: "ägg", amount: "2 ägg" },
          { key: "socker", amount: "1 dl" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "kokos", amount: "4 dl" },
          { key: "smör", amount: "50 g" },
        ],
        why: "Ägget binder kokosen. Låt gärna smeten stå en kort stund så kokosen hinner svälla.",
      },
      {
        title: "Forma toppar",
        text: "Forma små toppar med två teskedar och placera dem på plåten.",
        tools: ["🥄 2 teskedar", "🍪 Plåt"],
        ingredients: [],
      },
      {
        title: "Grädda 12 minuter",
        text: "Grädda tills topparna är gyllene.",
        tools: ["🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 720,
        tip: "👨‍🍳 Doppa botten i smält choklad när de svalnat om du vill lyxa till dem.",
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
        title: "Mosa bananerna",
        text: "Mosa bananerna med en gaffel till en grov puré.",
        tools: ["🥣 Bunke", "🍴 Gaffel"],
        ingredients: [{ key: "banan", amount: "3 mogna bananer" }],
        why: "Riktigt mogna bananer har mer socker och ger saftigare kaka.",
      },
      {
        title: "Rör ihop smeten",
        text: "Rör smält smör med socker och ägg. Tillsätt bananmoset.",
        tools: ["🥣 Stor bunke", "🥄 Slickepott", "🍳 Kastrull"],
        ingredients: [
          { key: "smör", amount: "100 g" },
          { key: "socker", amount: "2 dl" },
          { key: "ägg", amount: "2 ägg" },
        ],
      },
      {
        title: "Blanda in det torra",
        text: "Blanda mjöl, bakpulver och kanel och rör ihop precis till en jämn smet.",
        tools: ["🥣 Skål", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "4 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "kanel", amount: "1 tsk" },
        ],
        tip: "👨‍🍳 Överarbeta inte smeten – kakan kan bli seg.",
      },
      {
        title: "Grädda 45 minuter i 175°C",
        text: "Häll i en smord form och grädda i nedre delen av ugnen.",
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante", "🪵 Provsticka"],
        ingredients: [],
        timerSec: 2700,
        why: "Den fuktiga smeten behöver längre tid på lägre värme.",
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
        title: "Smält choklad och smör",
        text: "Smält ihop över vattenbad eller på mycket låg värme. Låt svalna lite.",
        tools: ["🍳 Kastrull", "🥣 Värmetålig skål", "🔥 Spis"],
        ingredients: [
          { key: "choklad", amount: "200 g" },
          { key: "smör", amount: "150 g" },
        ],
        why: "Vattenbad minskar risken att chokladen bränner.",
      },
      {
        title: "Vispa ägg och socker",
        text: "Vispa i 4–5 minuter till en ljus och tjock blandning.",
        tools: ["🥣 Bunke", "⚡ Elvisp"],
        ingredients: [
          { key: "ägg", amount: "3 ägg" },
          { key: "socker", amount: "3 dl" },
        ],
        why: "Det här steget hjälper till att skapa den tunna, knäckiga ytan.",
      },
      {
        title: "Blanda samman",
        text: "Rör ner chokladsmeten och sikta sedan ner mjöl, kakao och salt.",
        tools: ["🥣 Bunke", "🥄 Slickepott", "🥄 Sil"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "2 msk" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },
      {
        title: "Grädda 22 minuter i 175°C",
        text: "Häll i en form med bakplåtspapper och grädda till fast kant och mjuk mitt.",
        tools: ["🍫 Bakform", "📄 Bakplåtspapper", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
        timerSec: 1320,
        tip: "👨‍🍳 Skär först när brownien är helt kall – då blir rutorna mycket snyggare.",
      },
    ],
  },

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
      { key: "kokos", amount: "1 dl kokos" },
    ],
    steps: [
      {
        title: "Förbered smöret",
        text: "Ta fram smöret och låt det bli mjukt.",
        tools: ["🥣 Bunke", "🥄 Matsked"],
        ingredients: [{ key: "smör", amount: "100 g" }],
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
        ingredients: [{ key: "kaffe", amount: "2 msk" }],
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
        ingredients: [{ key: "kokos", amount: "1 dl" }],
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
        tools: ["🔥 Ugn", "🧁 Muffinsplåt", "🧁 Muffinsformar"],
        ingredients: [],
      },
      {
        title: "Smält smöret",
        text: "Smält smöret försiktigt i en kastrull och låt det svalna lite.",
        tools: ["🍳 Kastrull", "🔥 Spis", "🥄 Träslev"],
        ingredients: [{ key: "smör", amount: "100 g" }],
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
        tools: ["🥣 Skål", "🥄 Matsked", "🥄 Tesked"],
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
        ingredients: [{ key: "smör", amount: "100 g smält" }],
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
        ingredients: [{ key: "morot", amount: "4 dl finrivna" }],
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
        ingredients: [{ key: "florsocker", amount: "3 dl" }],
        tip: "❄️ Kakan måste vara kall innan glasyren läggs på.",
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
  morötter: "morot",
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
      (i) => !have.has(canonical(i.key))
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
      a.missing.length - b.missing.length ||
      a.recipe.minutes - b.recipe.minutes
  );
}

export function missingLabel(missing: number): string {
  if (missing === 0) return "Du har allt hemma";
  if (missing === 1) return "Du saknar 1 ingrediens";
  return `Du saknar ${missing} ingredienser`;
}

export function getRecipe(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}
