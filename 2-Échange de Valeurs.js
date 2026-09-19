let a = 8;
let b = 2;

console.log(`Les valeurs avant l'échange: a = ${a}, b = ${b}`);

let tmp;
tmp = a;
a = b;
b = tmp;

console.log(`Les valeurs après l'échange: a = ${a}, b = ${b}`);