let numeroCartasPrompt = 0;
let existeNumeroValido = 0;

while(existeNumeroValido == 0){
numeroCartasPrompt = parseInt(window.prompt("Com quantas cartas você vai jogar? (Min = 4 Max = 14)"));
console.log(numeroCartasPrompt);
if(numeroCartasPrompt >= 4 && numeroCartasPrompt <= 14 && numeroCartasPrompt % 2 == 0 ){
    existeNumeroValido = 1;
}
}

const arrayCartas1 = new Array(numeroCartasPrompt/2);
const arrayCartas2 = new Array(numeroCartasPrompt/2);

const arrayDealer = [`<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
        <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="Imagens&Gifs/bobrossparrot.gif" alt="bobrossparrot">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="Imagens&Gifs/explodyparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="/Imagens&Gifs/fiestaparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="/Imagens&Gifs/metalparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="/Imagens&Gifs/revertitparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="/Imagens&Gifs/tripletsparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="flipCarta(this)" class="card">
        <div class="carta1 face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="carta2 back-face face">
            <img src="/Imagens&Gifs/unicornparrot.gif" alt="">
        </div>
    </div>`
];

for(i = 0; i<numeroCartasPrompt/2;i++){
    arrayCartas1.push(arrayDealer[i]);
    arrayCartas2.push(arrayDealer[i]);
    console.log("Cartas inseridas\n");
}

function comparador() { 
	return Math.random() - 0.5; 
}

arrayCartas1.sort(comparador);
arrayCartas2.sort(comparador);

let arrayCompleto = [];

for(i = 0; i <numeroCartasPrompt/2;i++){
    arrayCompleto.push(arrayCartas1[i]);
    arrayCompleto.push(arrayCartas2[i]);
    console.log("Cartas unidas\n");
}

arrayCompleto.sort(comparador);

for(i=0;i<numeroCartasPrompt;i++){
    let local = document.querySelector(".cartas");
    local.innerHTML += arrayCompleto[i];
}



function flipCarta(){}
            
    

