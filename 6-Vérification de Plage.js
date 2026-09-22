const prompt = require("prompt-sync")();
const nombre = Number(prompt("Entrer un nombre: "));

if (nombre >= 10 && nombre <= 100){
    console.log("le nombre appartient à l'intervalle [10, 100]")
} else {
    console.log ("le nombre n'appartient pas à l'intervalle [10, 100]")
}