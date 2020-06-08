‘use strict’;

console.log(‘funguju!’);
let osoba1 = {
  jmeno: ‘Alena’,
  uspory: 53000
};
let osoba2 = {
  jmeno: ‘Karolína’,
  uspory: 68000
};

// Mohou nebo nemohou na dovolenou jet?
let usporyCelkem = osoba1.uspory + osoba2.uspory;
console.log(usporyCelkem)

if (usporyCelkem >= 100000) {
  console.log(“Jupiii, muzeme jet na dovolenou“);

  // Má každá alespoň 50 000 Kč?
  if ((osoba1.uspory >= 50000) && (osoba2.uspory >= 50000)) {
    console.log(osoba1.jmeno + ” a ” + osoba2.jmeno + ”" mají každá alespoň 50 000 Kč.“);
  }
  //Kolik musí doplatit Osoba 1 pokud má uspořeno méně než 50 000 Kč. Stále ale platí podmínka, že dohromady mají min. 100 000 Kč.

  else if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno + ” má málo.” + ” Musí po dovolené splatit ” + (50000 - osoba1.uspory) + ” Kč.“);
  }
  //Kolik musí doplatit Osoba 2 pokud má uspořeno méně než 50 000 Kč. Stále ale platí podmínka, že dohromady mají min. 100 000 Kč.
  else {
    console.log(osoba2.jmeno + ” má málo.” + ” Musí po dovolené splatit ” + (50000 - osoba2.uspory) + ” Kč.“);
  }
}

else {
  console.log(“Letos na dovolenou na Havaj nepojedete.Chybí vám ještě ” + (100000 - (usporyCelkem)));
  // Má OSOBA 1 málo peněz a kolik musí ještě případně naspořit?
  if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno + ” má málo.” + ” Musí naspořit alespoň ” + (50000 - osoba1.uspory) + ” Kč.“);

  }
  // Má OSOBA 2 málo peněz a kolik musí ještě případně naspořit?
  if (osoba2.uspory < 50000) {
    console.log(osoba2.jmeno + ” má málo.” + ” Musí naspořit alespoň ” + (50000 - osoba2.uspory) + ” Kč.“);
  }
}