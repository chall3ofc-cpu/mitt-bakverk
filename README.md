# Mitt Bakverk

Bygg en polerad och fullt fungerande svensk webbapp som heter “Bakskolan”.

Bakskolan är en modern bakassistent där användaren anger vad den har hemma, får förslag på vad som går att baka, följer en interaktiv steg-för-steg-bakning, lär sig små tips under tiden och sparar resultatet i sin personliga “Bakbok”.

All text ska vara på svenska.

NAVIGATION

Ha exakt fem sektioner:

Hem | Lär dig | Baka | Bakbok | Profil

“Baka” är huvudfunktionen och ska vara den tydligaste, centrala knappen i navigationen.

LOGGA / VARUMÄRKE

Skapa själv en unik, enkel och igenkännbar Bakskolan-logga.

Loggan ska kombinera en bakelse, exempelvis en tårta/cupcake, med någon kreativ detalj som tydligt förknippas med bakning och lärande.

Den ska kännas modern, varm och professionell och fungera både som appikon och logotyp.

Använd loggan på flera naturliga ställen så att appen känns som en riktig produkt, exempelvis:

- navigation/header

- Hem

- inloggning/välkomstvy

- Bakbok

- eventuell laddningsvy

BAKA

Låt användaren lägga till ingredienser genom sökfält och ingredienschips.

Knapp:

“Hitta bakverk”

Använd faktisk lokal matchningslogik.

Inkludera minst:

Kladdkaka, Chokladcookies, Chokladmuffins, Kanelbullar, Äppelpaj, Sockerkaka, Havrekakor, Kokostoppar, Banankaka och Brownies.

Visa exempelvis:

“Du har allt hemma”

“Du saknar 1 ingrediens”

Varje recept ska ha ingredienser, mängder, tid, svårighet och steg.

BAKING MODE

När användaren börjar baka ska endast ett steg visas åt gången.

Ha:

- progress

- tydliga instruktioner

- “Jag är klar →”

- korta “💡 Varför?”-förklaringar

- “👨‍🍳 Bakproffs-tipset”

- fungerande timers

När bakningen är klar:

“🎉 Du klarade det!”

Låt användaren ge betyg, skriva en anteckning och ta/ladda upp en bild.

Spara resultatet i Bakbok.

BAKBOK

Bakbok ska kännas som en riktig digital bok, inte ett vanligt galleri.

Visa:

“MIN BAKBOK”

Varje sparad bakning blir en sida med:

- användarens bild

- namn

- datum

- betyg

- personlig anteckning

Ha sidnummer och Föregående/Nästa.

Mobil: en sida åt gången.

Tablet/desktop: större bokvy, gärna uppslag med två sidor.

LÄR DIG

Korta och roliga lektioner om exempelvis ägg, smör, mjöl, socker, bakpulver, ugnstemperatur och blandning.

Lägg till enkla quiz med tre svarsalternativ, direkt feedback och resultat.

PROFIL

Visa nivå, statistik, antal bakningar, favoritbakverk, quiz och achievements.

Ha även fungerande inställningar.

HEM

Skapa en enkel översikt med:

- “Vad vill du göra idag?”

- “Baka något”

- rekommenderade bakverk

- senaste bakning

- dagens lilla lektion

- liten statistiköversikt

DESIGN

Modern, varm och skandinavisk.

Använd:

- cream/off-white

- varm orange/terrakotta

- mörk text

- mjuka gröna accenter

- rundade kort

- subtila skuggor

- mycket luft

- diskreta animationer

Känslan ska vara premium, vänlig och lite lekfull, men inte barnslig.

RESPONSIVITET — MYCKET VIKTIGT

Designa layouten separat för små telefoner, vanliga telefoner, iPad/tablet, tablet landscape, laptop och desktop.

Den får aldrig kräva zoom.

Inga överlappande knappar, avklippt text, horisontell scrolling eller trasiga layouter.

Mobil ska ha kompakt layout och fast bottennavigation med Baka centralt.

Tablet ska utnyttja större yta med exempelvis två kolumner.

Desktop ska ha centrerad maxbredd och mer luft.

Baking Mode ska vara särskilt optimerat för användning i köket på mobil och tablet.

DATA & TEKNIK

Använd React + TypeScript + Tailwind CSS och återanvändbara komponenter.

Använd localStorage så att ingredienser, Bakbok, betyg, anteckningar, statistik och inställningar sparas efter refresh.

Ingen riktig AI behövs ännu; använd lokal receptdata och matchningslogik, men strukturera projektet så AI kan läggas till senare.

VIKTIGT:

Detta ska vara en fungerande prototyp, inte bara en snygg mockup.

Varje knapp, navigation, kort och interaktiv funktion ska fungera.

Testa hela flödet:

ingredienser → recept → baka → timer → färdig → foto → spara → Bakbok.

Testa även mobil, tablet och desktop och fixa eventuella responsiva problem.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/93b1e321-a042-43fc-9a36-165a4839b326).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
