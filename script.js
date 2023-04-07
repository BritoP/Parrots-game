let numeroCartasPrompt = 0;
let existeNumeroValido = 0;
let contadorDiversidade = 0;

while(existeNumeroValido == 0){
numeroCartasPrompt = parseInt(window.prompt("Com quantas cartas você vai jogar? (Min = 4 Max = 14)"));
console.log(numeroCartasPrompt);
if(numeroCartasPrompt >= 4 && numeroCartasPrompt <= 14 && numeroCartasPrompt % 2 == 0 ){
    existeNumeroValido = 1;
}
}
const arrayCartas = new Array(numeroCartasPrompt);

for(i = 0; i < numeroCartasPrompt; i+2){
    switch (contadorDiversidade){
        case 0:
            arrayCartas.push(document.createElement("carta1"));
            arrayCartas.push(document.createElement("carta2"));
            contadorDiversidade++;
        break;
        case 1:
            arrayCartas.push(document.createElement("carta3"));
            arrayCartas.push(document.createElement("carta4"));
            contadorDiversidade++;
        break;
        case 2:
            arrayCartas.push(document.createElement("carta5"));
            arrayCartas.push(document.createElement("carta6"));
            contadorDiversidade++;
        break;
        case 3:
            arrayCartas.push(document.createElement("carta7"));
            arrayCartas.push(document.createElement("carta8"));
            contadorDiversidade++;
        break;
        case 4:
            arrayCartas.push(document.createElement("carta9"));
            arrayCartas.push(document.createElement("carta10"));
            contadorDiversidade++;
        break;
        case 5:
            arrayCartas.push(document.createElement("carta11"));
            arrayCartas.push(document.createElement("carta12"));
            contadorDiversidade++;
        break;
        case 6:
            arrayCartas.push(document.createElement("carta13"));
            arrayCartas.push(document.createElement("carta14"));
            contadorDiversidade++;
        break;
    }
}

