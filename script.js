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

const arrayDealer = [`<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">bobrossparrot.gif</div>
        <div class="front-face face">
        <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="Imagens&Gifs/bobrossparrot.gif" alt="bobrossparrot">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">explodyparrot.gif</div>
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="Imagens&Gifs/explodyparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">fiestaparrot.gif</div>        
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="/Imagens&Gifs/fiestaparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
    <div class="nomeImagem">metalparrot.gif</div>
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="/Imagens&Gifs/metalparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">revertitparrot.gif</div>
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="/Imagens&Gifs/revertitparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">tripletsparrot.gif</div>
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img src="/Imagens&Gifs/tripletsparrot.gif" alt="">
        </div>
    </div>`,
    `<div onclick="fliparCarta(this)" class="card disponivel">
        <div class="nomeImagem">unicornparrot.gif</div>
        <div class="front-face face">
            <img src="Imagens&Gifs/back.png" alt="back">
        </div>
        <div class="back-face face">
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

let local = document.querySelector(".cartas");
arrayCompleto.sort(comparador);

for(i=0;i<numeroCartasPrompt;i++){
    local.innerHTML += arrayCompleto[i];
}

let desligarCarta = document.querySelectorAll(".card");
let check = [];
let anterior = [];

function checkEquivalente(){

    if (check[0] === check[1]){
        let elemento = document.querySelectorAll(".disponivel");
        for(i = 0; i<elemento.length;i++){
            elemento[i].setAttribute('onclick',"fliparCarta(this)");
        }
        anterior = [];
        check = [];
    }else if(check[0] !== check[1]){
        anterior[0].classList.remove("flipada");
        anterior[0].querySelector(".front-face").classList.remove("frontEscolha");
        anterior[0].querySelector(".back-face").classList.remove("backEscolha");
        anterior[0].classList.add("disponivel");
        anterior[1].classList.remove("flipada");
        anterior[1].querySelector(".front-face").classList.remove("frontEscolha");
        anterior[1].querySelector("back-face").classList.remove("backEscolha");
        anterior[1].classList.add("disponivel");

        let elemento = document.querySelectorAll(".disponível");

        for(i = 0; i < elemento.length;i++){
            elemento[i].setAttribute("onclick","fliparCarta(this)");
        }

        check = [];
        anterior = [];
    }
}

function fliparCarta(carta){
    let elemento1 = carta.querySelector(".front-face");
    elemento1.classList.add("frontEscolha");

    let elemento2 = carta.querySelector(".back-face");
    elemento2.classList.add("backEscolha");

    carta.classList.add("flipada");

    let elemento3 = carta.querySelector(".nomeImagem").innerHTML;

    carta.classList.remove("disponivel");
    carta.removeAttribute('onclick');

    check.push(elemento3);
    anterior.push(carta);

    if(check.length>1){

        for(i = 0; i < arrayCompleto.length; i++){
            desligarCarta[i].removeAttribute('onclick');
        }
        setTimeout(checkEquivalente,1000);
    }
}



            
    

