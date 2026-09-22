const prompt = require ("prompt-sync")();
let valeur1 = Number(prompt("Entrer la 1ère valeur: "));
let valeur2 = Number(prompt("Entrer la 2ème valeur: "));

if (valeur1 === valeur2){
    console.log("les valeurs sont strictement égales.");
} else if (valeur1 > valeur2){
    console.log("les valeurs sont différentes:");
    console.log("la valeur 1 est supérieur à la valeur 2.")
} else if (valeur1 < valeur2){
    console.log("les valeurs sont différentes:");
    console.log("la valeur 2 est supérieure à la valeur 1.")
}
