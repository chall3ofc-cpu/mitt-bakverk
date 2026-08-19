export type Step = {
  title: string;
  text: string;
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
      { key: "mjöl", amount: "1,5 dl mjöl" },
      { key: "kakao", amount: "3 msk kakao" },
      { key: "vaniljsocker", amount: "1 tsk vaniljsocker" },
      { key: "salt", amount: "1 krm salt" },
    ],
    steps: [
      {
        title: "Sätt ugnen på 175°C",
        text: "Smörj och bröa en form på ca 20 cm. Ställ in gallret i mitten av ugnen.",
        why: "En förvärmd ugn gör att kakan stelnar i kanterna direkt och behåller den kladdiga mitten.",
        tip: "Använd en form med ljus botten – mörka formar bakar snabbare i kanterna.",
      },
      {
        title: "Smält smöret",
        text: "Smält smöret på svag värme och låt det svalna någon minut.",
        why: "För varmt smör börjar koagulera äggen så smeten blir kornig.",
      },
      {
        title: "Rör ihop socker och ägg",
        text: "Vispa ihop socker och ägg lätt – bara till en jämn blandning, inte pösigt.",
        why: "Mycket luft ger en luftig kaka. Här vill vi tvärtom ha kompakt kladd.",
        tip: "👨‍🍳 Vispa aldrig kladdkakesmet med elvisp på hög fart – då blir den sockerkaka.",
      },
      {
        title: "Blanda in det torra",
        text: "Sikta ner mjöl, kakao, vaniljsocker och salt. Rör ner smöret sist.",
        why: "Siktad kakao klumpar sig inte och ger jämnare färg och smak.",
      },
      {
        title: "Grädda 15–17 minuter",
        text: "Häll smeten i formen och grädda i mitten av ugnen. Ytan ska spricka lite men mitten röra sig.",
        timerSec: 900,
        why: "Kakan efterbakar i formen – tar du ut den när den känns klar blir den torr.",
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
        why: "Sockerkristallerna slår små luftfickor i smöret – det ger kakornas struktur.",
        tip: "👨‍🍳 Rumsvarmt smör ska gå att trycka i med fingret men inte vara blankt.",
      },
      {
        title: "Tillsätt ägg",
        text: "Rör ner ägget till en jämn smet.",
      },
      {
        title: "Blanda ner det torra",
        text: "Blanda mjöl, bakpulver och salt och rör ihop. Hacka chokladen grovt och vänd ner.",
        why: "Grovhackad choklad ger både små och stora smältor – snyggare och godare.",
      },
      {
        title: "Kyl degen 15 minuter",
        text: "Låt degen vila kallt medan ugnen värms till 200°C.",
        timerSec: 900,
        why: "Kall deg flyter ut mindre, så kakorna blir tjockare och segare.",
      },
      {
        title: "Grädda 9–11 minuter",
        text: "Klicka ut bollar med avstånd på plåt med bakplåtspapper. Grädda till gyllene kanter.",
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
        why: "Hög värme i början ger muffinsen den där fina kupolen.",
      },
      {
        title: "Vispa smör, socker och ägg",
        text: "Vispa smält smör med socker och ägg till en jämn smet.",
      },
      {
        title: "Varva torrt och blött",
        text: "Blanda mjöl, kakao och bakpulver. Rör ner växelvis med mjölken.",
        why: "Växelvis inblandning gör att smeten inte skär sig eller klumpar ihop sig.",
        tip: "👨‍🍳 Rör bara tills smeten går ihop – överblandning ger sega muffins.",
      },
      {
        title: "Grädda 15 minuter",
        text: "Fyll formarna till 2/3 och grädda mitt i ugnen.",
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
        text: "Smält smöret i mjölken och känn efter – fingervarmt.",
        why: "Över 45°C dör jästen och degen jäser aldrig.",
        tip: "👨‍🍳 Ingen termometer? Fingervarmt betyder att du inte känner någon temperatur alls.",
      },
      {
        title: "Rör ut jästen",
        text: "Smula jästen i en bunke och rör ut den i lite av vätskan. Tillsätt resten, socker och salt.",
      },
      {
        title: "Arbeta degen",
        text: "Tillsätt mjölet lite i taget och knåda smidigt i 8–10 minuter.",
        why: "Knådning bygger glutennätverket som håller kvar jäsgaserna.",
      },
      {
        title: "Jäs 40 minuter",
        text: "Täck bunken med bakduk och låt jäsa på varm, dragfri plats.",
        timerSec: 2400,
        tip: "👨‍🍳 Degen är färdigjäst när den är dubbel i storlek och gropen står kvar när du trycker.",
      },
      {
        title: "Kavla, fyll och rulla",
        text: "Kavla ut degen, bred på rumsvarmt smör blandat med socker och kanel. Rulla och skär 20 bitar.",
      },
      {
        title: "Jäs igen 30 minuter",
        text: "Lägg bullarna i formar på plåt och låt jäsa under duk.",
        timerSec: 1800,
        why: "Andra jäsningen ger den luftiga, mjuka insidan.",
      },
      {
        title: "Grädda 8–10 minuter i 225°C",
        text: "Pensla med uppvispat ägg och strö över pärlsocker. Grädda gyllene.",
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
      },
      {
        title: "Skiva äpplena",
        text: "Kärna ur och skiva äpplena. Lägg i formen och strö över kanel och lite socker.",
        why: "Tunna skivor mjuknar i samma takt som smulet blir gyllene.",
      },
      {
        title: "Nyp ihop smulet",
        text: "Nyp ihop kallt smör, mjöl, socker och havregryn till grova smulor.",
        tip: "👨‍🍳 Kallt smör = krispigt smul. Varmt smör blir en kompakt kaka.",
      },
      {
        title: "Grädda 25 minuter",
        text: "Fördela smulet över äpplena och grädda mitt i ugnen till gyllenbrun yta.",
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
        text: "Vispa riktigt pösigt och ljust, ca 4 minuter.",
        why: "All luft i kakan kommer härifrån – bakpulvret bara förstärker.",
        tip: "👨‍🍳 Smeten är klar när den rinner som ett band från vispen.",
      },
      {
        title: "Vänd ner det torra",
        text: "Blanda mjöl, bakpulver och vaniljsocker och sikta ner. Vänd försiktigt.",
        why: "Försiktig vändning bevarar luftbubblorna du just vispat in.",
      },
      {
        title: "Rör ner smör och mjölk",
        text: "Blanda smält smör med mjölken och rör ner sist.",
      },
      {
        title: "Grädda 35 minuter i 175°C",
        text: "Häll i smord och bröad sockerkaksform. Grädda i nedre delen av ugnen.",
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
      },
      {
        title: "Blanda allt",
        text: "Rör ihop smält smör, socker och ägg. Blanda ner havregryn, mjöl och bakpulver.",
        why: "Havregryn suger upp fukt – degen ska vila 5 minuter innan du klickar ut.",
      },
      {
        title: "Grädda 10 minuter",
        text: "Klicka ut små klickar med gott avstånd – de flyter ut mycket.",
        timerSec: 600,
        tip: "👨‍🍳 Låt kakorna stelna på plåten, annars går de sönder.",
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
        text: "Bakplåtspapper på plåten.",
      },
      {
        title: "Rör ihop smeten",
        text: "Blanda ägg, socker och vaniljsocker. Rör ner kokos och smör.",
        why: "Ägget binder kokosen – låt smeten svälla 10 minuter så håller topparna formen.",
      },
      {
        title: "Grädda 12 minuter",
        text: "Forma toppar med två teskedar och grädda till gyllene toppar.",
        timerSec: 720,
        tip: "👨‍🍳 Doppa botten i smält choklad när de svalnat.",
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
        text: "Mosa bananerna med gaffel till en grov puré.",
        why: "Riktigt mogna bananer har mer socker och ger saftigare kaka.",
      },
      {
        title: "Rör ihop smeten",
        text: "Rör smält smör med socker och ägg. Tillsätt bananmoset.",
      },
      {
        title: "Blanda in det torra",
        text: "Blanda mjöl, bakpulver och kanel och rör ihop precis till jämn smet.",
        tip: "👨‍🍳 Överarbeta inte – kakan blir seg av för mycket rörning.",
      },
      {
        title: "Grädda 45 minuter i 175°C",
        text: "Häll i smord form och grädda i nedre delen av ugnen.",
        timerSec: 2700,
        why: "Fuktig smet behöver längre tid på lägre värme för att inte bränna ytan.",
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
        text: "Smält ihop över vattenbad eller mycket låg värme. Låt svalna lite.",
        why: "Vattenbad hindrar chokladen från att bränna och bli grynig.",
      },
      {
        title: "Vispa ägg och socker",
        text: "Vispa i 4–5 minuter till en ljus, tjock blandning.",
        why: "Det här steget skapar den tunna, knäckiga ytan – hoppa inte över det.",
        tip: "👨‍🍳 Ju längre du vispar, desto mer glansig blir ytan.",
      },
      {
        title: "Blanda samman",
        text: "Rör ner chokladsmeten, sikta sedan ner mjöl, kakao och salt.",
      },
      {
        title: "Grädda 22 minuter i 175°C",
        text: "Häll i en form med bakplåtspapper och grädda till fast kant och mjuk mitt.",
        timerSec: 1320,
        tip: "👨‍🍳 Skär först när de är helt kalla – då blir rutorna raka.",
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
    const missing = recipe.ingredients.filter((i) => !have.has(canonical(i.key)));
    const haveCount = recipe.ingredients.length - missing.length;
    return {
      recipe,
      missing,
      haveCount,
      ratio: haveCount / recipe.ingredients.length,
    };
  }).sort((a, b) => b.ratio - a.ratio || a.recipe.minutes - b.recipe.minutes);
}

export function missingLabel(missing: number): string {
  if (missing === 0) return "Du har allt hemma";
  if (missing === 1) return "Du saknar 1 ingrediens";
  return `Du saknar ${missing} ingredienser`;
}

export function getRecipe(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}
