//Todo: Afficher 5 objets. 
//Todo: Faire en sorte qu'un message s'affiche en cas de victoire ou défaite
//Todo: Le tout doit être responsive.
let btnUserValidate = document.getElementById("userValidate")
let info = document.getElementById("info")
let userInput = document.getElementById("userInput")
let indice = document.getElementById("indice")
let jeu = document.getElementById("jeu")

let essai = 10

// Attribue un prix aléatoire
// ! let nbreAleatoire = Math.floor(Math.random() * Math.floor(max))
let justePrix = Math.floor(Math.random() * 100)
console.log(justePrix)

//attribue un objet aléatoire selon son index dans l'array
let objetAléatoire = Math.floor(Math.random() * 5)

//On joue ?

btnUserValidate.addEventListener('click', function () {
    // On récupère la valeur de l'input
    let proposition = parseInt(userInput.value)
    let resultat = justePrix - proposition

    //On check le nombre d'attempt
    if (essai > 1) {
        essai -= 1
        info.innerHTML = "Il vous reste " + essai + " essais !"
        //check le résultat
        if (resultat > 0) {
            indice.innerHTML = "C'est plus !"
        } else if (resultat < 0) {
            indice.innerHTML = "C'est moins !"
        } else if (resultat == 0) {
            indice.innerHTML = "C'est gagné ! "
            jeu.classList.add("d-none")
            indice.classList.add("d-none")
        }
    } else if (essai == 1) {
        essai -= 1
        info.innerHTML = "Dernier essai !"
        if (resultat > 0) {
            indice.innerHTML = "C'est plus !"
        } else if (resultat < 0) {
            indice.innerHTML = "C'est moins !"
        } else if (resultat == 0) {
            indice.innerHTML = "C'est gagné ! "
            jeu.classList.add("d-none")
            indice.classList.add("d-none")
        }
    } else if (essai == 0) {
        info.innerHTML = "Perdu ! C'était " + justePrix + " € !"
        indice.classList.add("d-none")
        jeu.classList.add("d-none")
    }
})