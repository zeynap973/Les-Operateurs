const prompt = require("prompt-sync")();
let a = Number(prompt("Entrer a: "));
let b = Number(prompt("Entrer b: "));
console.log(`Les valeurs avant l'échange: a = ${a}, b = ${b}`);

let tmp;
tmp = a;
a = b;
b = tmp;

console.log(`Les valeurs après l'échange: a = ${a}, b = ${b}`);