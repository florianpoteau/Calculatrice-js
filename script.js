const touches = [...document.querySelectorAll(".btn")];

const listeKeycode = touches.map(element => element.dataset.key)

const ecran = document.querySelector(".ecran")

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener("click", (e) =>{
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur) =>{
    if (listeKeycode.includes(valeur)){
        switch(valeur){
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul;
                break;
            case "46":
              ecran.textContent = ecran.textContent.slice(0,-1)
              break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode]
                ecran.textContent += touche.innerHTML;
              break;
        }
    }
}







// Calculatrice mode console

console.log("Pour utiliser la calculatrice: ");
console.log("addition(x)");
console.log("soustraction(x)");
console.log("multiplication(x)");
console.log("division(x)");
console.log("reset(x)");

let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function reset() {
  total = 0;
  return total}


