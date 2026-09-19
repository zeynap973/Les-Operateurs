const prompt = require("prompt-sync")();
let n1 = Number(prompt("Entrer le premier nombre: "));
let n2 = Number(prompt("Entrer le deusième nombre: ")); 

let somme = n1 + n2;
let difference = n1 - n2;
let produit = n1 * n2;
let quotient = n1 / n2;

console.log(`La somme est: ${somme}`);
console.log(`La difference est: ${difference}`);
console.log(`Le produit est: ${produit}`);
console.log(`La quotient est: ${quotient}`);

