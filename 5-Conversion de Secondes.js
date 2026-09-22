const prompt = require ("prompt-sync")();
const seconde = Number(prompt("Entrer un nombre de secondes: "));

const Heures = seconde / 3600;
const Minutes = seconde / 60;
const Secondes = seconde;

console.log(`Le nombre en heures est: ${Heures} h`);
console.log(`Le nombre en minutes est: ${Minutes} min`);
console.log(`Le nombre en secondes est: ${Secondes} s`);