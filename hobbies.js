//Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.

let obbi = []

function hobby(hobbyOne, hobbyTwo, hobbyThree){
  
  obbi.push(hobbyOne, hobbyTwo, hobbyThree)
  return obbi
}

hobby("auto", "pesca", "ballare")

console.log(obbi)

module.exports = hobby;
