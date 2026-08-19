import { MORE_RECIPES } from "./more-recipes";

export type StepIngredient = {
  key: string;
  amount: string;
};

export type Step = {
  title: string;
  text: string;
  why?: string;
  tip?: string;
  timerSec?: number;
  tools?: string[];
  ingredients?: StepIngredient[];
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

const BASE_RECIPES: Recipe[] = [
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
        text: "Smörj och bröa en form på cirka 20 cm. Ställ gallret i mitten av ugnen.",
        why: "En förvärmd ugn gör att kakan stelnar i kanterna direkt och behåller den kladdiga mitten.",
        tip: "Använd en form med ljus botten – mörka formar bakar snabbare i kanterna.",
        tools: ["🔥 Ugn", "🍰 Bakform", "🖌️ Bakpensel"],
        ingredients: [],
      },
      {
        title: "Smält smöret",
        text: "Smält smöret på svag värme och låt det svalna någon minut.",
        why: "För varmt smör kan påverka äggen så att smeten blir kornig.",
        tools: ["🍳 Kastrull", "🔥 Spis"],
        ingredients: [
          { key: "smör", amount: "100 g" },
        ],
      },
      {
        title: "Rör ihop socker och ägg",
        text: "Vispa ihop socker och ägg lätt – bara till en jämn blandning, inte pösigt.",
        why: "Här vill vi ha en kompakt och kladdig kaka, inte en luftig sockerkaka.",
        tip: "Använd inte elvisp på hög fart.",
        tools: ["🥣 Bunke", "🥄 Visp"],
        ingredients: [
          { key: "socker", amount: "2,5 dl" },
          { key: "ägg", amount: "2 st" },
        ],
      },
      {
        title: "Blanda in det torra",
        text: "Sikta ner mjöl, kakao, vaniljsocker och salt. Rör sedan ner det smälta smöret.",
        why: "Siktad kakao ger en jämnare smet utan klumpar.",
        tools: ["🥣 Bunke", "🥄 Visp", "🥄 Sikt"],
        ingredients: [
          { key: "mjöl", amount: "1,5 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "vaniljsocker", amount: "1 tsk" },
          { key: "salt", amount: "1 krm" },
          { key: "smör", amount: "100 g, smält" },
        ],
      },
      {
        title: "Grädda 15–17 minuter",
        text: "Häll smeten i formen och grädda i mitten av ugnen. Ytan ska spricka lite men mitten ska fortfarande röra sig.",
        why: "Kakan efterbakar i formen. Tar du ut den när mitten fortfarande är lite lös blir resultatet kladdigt.",
        tip: "Kyl kakan minst 1 timme för extra perfekt kladdighet.",
        timerSec: 900,
        tools: ["🍰 Bakform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
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
      { key: "mjöl", amount: "4 dl mjöl" },
      { key: "bakpulver", amount: "1 tsk bakpulver" },
      { key: "choklad", amount: "150 g mörk choklad" },
      { key: "salt", amount: "0,5 tsk salt" },
    ],
    steps: [
      {
        title: "Rör smör och socker",
        text: "Rör det rumsvarma smöret tillsammans med sockret i 2–3 minuter.",
        why: "Sockret hjälper till att skapa små luftfickor i smöret.",
        tools: ["🥣 Bunke", "🥄 Slickepott eller träslev"],
        ingredients: [
          { key: "smör", amount: "125 g" },
          { key: "socker", amount: "2 dl" },
        ],
      },
      {
        title: "Tillsätt ägget",
        text: "Rör ner ägget tills blandningen är jämn.",
        tools: ["🥣 Bunke", "🥄 Slickepott"],
        ingredients: [
          { key: "ägg", amount: "1 st" },
        ],
      },
      {
        title: "Blanda ner det torra",
        text: "Blanda mjöl, bakpulver och salt. Rör ner blandningen och vänd sedan ner grovhackad choklad.",
        why: "Grovhackad choklad ger både små och stora chokladbitar.",
        tools: ["🥣 Bunke", "🥄 Slickepott", "🔪 Kniv", "🪵 Skärbräda"],
        ingredients: [
          { key: "mjöl", amount: "4 dl" },
          { key: "bakpulver", amount: "1 tsk" },
          { key: "salt", amount: "0,5 tsk" },
          { key: "choklad", amount: "150 g" },
        ],
      },
      {
        title: "Kyl degen",
        text: "Låt degen vila i kylskåpet i cirka 15 minuter medan ugnen värms till 200°C.",
        why: "Kall deg flyter ut mindre och ger tjockare cookies.",
        timerSec: 900,
        tools: ["🥣 Bunke", "❄️ Kylskåp"],
        ingredients: [],
      },
      {
        title: "Grädda 9–11 minuter",
        text: "Forma 16 bollar och lägg dem med gott om mellanrum på en plåt med bakplåtspapper. Grädda tills kanterna är gyllene.",
        tip: "Mitten får gärna se lite obakad ut när du tar ut dem.",
        timerSec: 600,
        tools: ["🍪 Plåt", "📄 Bakplåtspapper", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
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
        text: "Ställ 12 muffinsformar i en muffinsplåt.",
        why: "Hög värme i början hjälper muffinsen att få en fin kupol.",
        tools: ["🔥 Ugn", "🧁 Muffinsplåt", "🧁 Muffinsformar"],
        ingredients: [],
      },
      {
        title: "Blanda smör, socker och ägg",
        text: "Vispa ihop smält smör, socker och ägg till en jämn smet.",
        tools: ["🥣 Bunke", "🥄 Visp"],
        ingredients: [
          { key: "smör", amount: "100 g, smält" },
          { key: "socker", amount: "2 dl" },
          { key: "ägg", amount: "2 st" },
        ],
      },
      {
        title: "Varva torrt och mjölk",
        text: "Blanda mjöl, kakao och bakpulver. Rör ner det växelvis med mjölken.",
        why: "Växelvis inblandning ger en jämn smet.",
        tip: "Rör bara tills smeten precis går ihop.",
        tools: ["🥣 Bunke", "🥄 Visp", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "kakao", amount: "3 msk" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "mjölk", amount: "1 dl" },
        ],
      },
      {
        title: "Grädda 15 minuter",
        text: "Fyll formarna till ungefär två tredjedelar och grädda mitt i ugnen.",
        timerSec: 900,
        tip: "Fuktiga smulor på provstickan betyder att muffinsen är klara.",
        tools: ["🥄 Sked eller glasskopa", "🧁 Muffinsplåt", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
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
        text: "Värm mjölken tillsammans med smöret tills vätskan är fingervarm, cirka 37°C.",
        why: "För hög temperatur kan skada jästen.",
        tools: ["🍳 Kastrull", "🔥 Spis", "🌡️ Termometer"],
        ingredients: [
          { key: "mjölk", amount: "3 dl" },
          { key: "smör", amount: "100 g" },
        ],
      },
      {
        title: "Rör ut jästen",
        text: "Smula jästen i en bunke och rör ut den i lite av den ljumma vätskan. Tillsätt resten, socker och salt.",
        tools: ["🥣 Stor bunke", "🥄 Träslev"],
        ingredients: [
          { key: "jäst", amount: "25 g färsk jäst" },
          { key: "socker", amount: "1 dl" },
          { key: "salt", amount: "0,5 tsk" },
        ],
      },
      {
        title: "Arbeta degen",
        text: "Tillsätt mjölet lite i taget och knåda degen i cirka 8–10 minuter.",
        why: "Knådningen bygger upp glutennätverket som håller kvar gaserna från jästen.",
        tools: ["🥣 Bunke", "🤲 Händerna eller köksmaskin"],
        ingredients: [
          { key: "mjöl", amount: "9 dl" },
        ],
      },
      {
        title: "Jäs 40 minuter",
        text: "Täck bunken och låt degen jäsa på en varm och dragfri plats tills den ungefär fördubblats.",
        timerSec: 2400,
        tools: ["🥣 Bunke", "🧺 Bakduk"],
        ingredients: [],
      },
      {
        title: "Kavla och fyll",
        text: "Kavla ut degen till en rektangel. Bred på smör och strö över socker och kanel. Rulla ihop och skär 20 bitar.",
        tools: ["🪵 Kavel", "🥄 Slickepott", "🔪 Kniv", "🪵 Skärbräda"],
        ingredients: [
          { key: "smör", amount: "cirka 75 g till fyllning" },
          { key: "socker", amount: "cirka 0,5 dl till fyllning" },
          { key: "kanel", amount: "2 msk" },
        ],
      },
      {
        title: "Jäs igen 30 minuter",
        text: "Lägg bullarna i formar på en plåt och låt dem jäsa under bakduk.",
        timerSec: 1800,
        why: "Den andra jäsningen gör bullarna luftiga och mjuka.",
        tools: ["🍪 Plåt", "🧁 Bullformar", "🧺 Bakduk"],
        ingredients: [],
      },
      {
        title: "Pensla och grädda",
        text: "Pensla bullarna med uppvispat ägg och grädda i 225°C i cirka 8–10 minuter.",
        timerSec: 540,
        tip: "Lägg en bakduk över bullarna direkt efter gräddning för en mjuk yta.",
        tools: ["🖌️ Bakpensel", "🥣 Liten skål", "🔥 Ugn", "🍪 Plåt", "🧤 Grytvante"],
        ingredients: [
          { key: "ägg", amount: "1 st" },
        ],
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
        title: "Förbered ugnen",
        text: "Sätt ugnen på 200°C och smörj en pajform.",
        tools: ["🔥 Ugn", "🥧 Pajform", "🖌️ Bakpensel"],
        ingredients: [],
      },
      {
        title: "Förbered äpplena",
        text: "Kärna ur och skiva äpplena. Lägg dem i formen och strö över kanel och lite av sockret.",
        why: "Tunna skivor mjuknar jämnt under gräddningen.",
        tools: ["🔪 Kniv", "🪵 Skärbräda", "🥧 Pajform"],
        ingredients: [
          { key: "äpple", amount: "4 st" },
          { key: "kanel", amount: "1 msk" },
          { key: "socker", amount: "lite av 1 dl" },
        ],
      },
      {
        title: "Nyp ihop smulet",
        text: "Nyp ihop kallt smör, mjöl, socker och havregryn till grova smulor.",
        tip: "Kallt smör ger ett krispigare smul.",
        tools: ["🥣 Bunke", "🤲 Händerna"],
        ingredients: [
          { key: "smör", amount: "125 g" },
          { key: "mjöl", amount: "3 dl" },
          { key: "socker", amount: "1 dl" },
          { key: "havregryn", amount: "1 dl" },
        ],
      },
      {
        title: "Grädda 25 minuter",
        text: "Fördela smulet över äpplena och grädda tills ytan är gyllenbrun.",
        timerSec: 1500,
        tools: ["🥧 Pajform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
      },
    ],
  },

  {
    slug: "sockerkaka",
    name: "Sockerkaka",
    emoji: "🍰",
    description: "Luftig grundkaka som alltid fungerar.",
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
        text: "Vispa ägg och socker riktigt pösigt och ljust i cirka 4 minuter.",
        why: "Luften du vispar in ger kakan en stor del av dess struktur.",
        tools: ["🥣 Bunke", "🥄 Elvisp eller visp"],
        ingredients: [
          { key: "ägg", amount: "3 st" },
          { key: "socker", amount: "2,5 dl" },
        ],
      },
      {
        title: "Vänd ner det torra",
        text: "Blanda mjöl, bakpulver och vaniljsocker. Sikta ner blandningen och vänd försiktigt.",
        tools: ["🥣 Bunke", "🥄 Sikt", "🥄 Slickepott"],
        ingredients: [
          { key: "mjöl", amount: "3 dl" },
          { key: "bakpulver", amount: "2 tsk" },
          { key: "vaniljsocker", amount: "2 tsk" },
        ],
      },
      {
        title: "Rör ner smör och mjölk",
        text: "Blanda det smälta smöret med mjölken och rör försiktigt ner det sist.",
        tools: ["🥣 Liten skål", "🥄 Slickepott"],
        ingredients: [
          { key: "smör", amount: "75 g" },
          { key: "mjölk", amount: "1 dl" },
        ],
      },
      {
        title: "Grädda 35 minuter",
        text: "Häll smeten i en smord och bröad form och grädda i 175°C.",
        timerSec: 2100,
        tip: "Öppna inte ugnen under de första 20 minuterna.",
        tools: ["🍰 Sockerkaksform", "🔥 Ugn", "🧤 Grytvante"],
        ingredients: [],
      },
    ],
  },
];

export const RECIPES: Recipe[] = [
  ...BASE_RECIPES,
  ...MORE_RECIPES,
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
      a.missing.length - b.missing.length ||
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
