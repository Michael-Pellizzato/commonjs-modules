//Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function nomeCognome(firstName, lastName){
    return  {
        nome : firstName,
        cognome : lastName
    }
    
}

//console.log(nomeCognome("a" , "b"))

module.exports = nomeCognome;

