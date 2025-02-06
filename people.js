/*1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

const nomeCognome = require("./names.js");
const hobby = require("./hobbies.js");

function oggetto (){
    return {
        fullName:nomeCognome("michael", "pellizzato"),
        hobbies:hobby("auto", "ballare", "pesca")
    }

}

console.log(oggetto())

