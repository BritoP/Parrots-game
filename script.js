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
let arrayProcesso = [];
let imagemAtual = [];
let contadorJogadas = 0;
let contadorPares = 0;

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

function removeFront(front){
    front.classList.remove("frontEscolha");
}

function removeBack(back){
    back.classList.remove("backEscolha");
}

function fliparCarta(cartaEscolhida){

    arrayProcesso.push(cartaEscolhida);
    imagemAtual.push(cartaEscolhida.querySelector(".nomeImagem").innerHTML);
    if(arrayProcesso.length == 1){
        let elementoAtualFace = cartaEscolhida.querySelector(".front-face");
        elementoAtualFace.classList.add("frontEscolha");
        let elementoAtualBack = cartaEscolhida.querySelector(".back-face");
        elementoAtualBack.classList.add("backEscolha");
        cartaEscolhida.classList.remove("disponivel");
        cartaEscolhida.removeAttribute("onclick");
    }else if(imagemAtual[0] == imagemAtual[1]){
        let elementoAtualFace = cartaEscolhida.querySelector(".front-face");
        elementoAtualFace.classList.add("frontEscolha");
        let elementoAtualBack = cartaEscolhida.querySelector(".back-face");
        elementoAtualBack.classList.add("backEscolha");
        cartaEscolhida.classList.remove("disponivel");
        cartaEscolhida.removeAttribute("onclick");
        contadorPares++;
        arrayProcesso = [];
        imagemAtual = [];
    }else{
        let elementoAtualFace = cartaEscolhida.querySelector(".front-face");
        elementoAtualFace.classList.add("frontEscolha");
        let elementoAtualBack = cartaEscolhida.querySelector(".back-face");
        elementoAtualBack.classList.add("backEscolha");
        let cartaAnterior = arrayProcesso[0];
        let elementoAnteriorFace = cartaAnterior.querySelector(".front-face");
        let elementoAnteriorBack = cartaAnterior.querySelector(".back-face"); 
        setTimeout(removeFront, 1000 ,elementoAnteriorFace);
        setTimeout(removeBack, 1000 ,elementoAnteriorBack);
        setTimeout(removeFront, 1000 ,elementoAtualFace);
        setTimeout(removeBack, 1000 ,elementoAtualBack);
        cartaEscolhida.classList.add("disponivel");
        cartaEscolhida.setAttribute('onclick',"fliparCarta(this)");
        cartaAnterior.classList.add("disponivel");
        cartaAnterior.setAttribute('onclick',"fliparCarta(this)");
        arrayProcesso = [];
        imagemAtual = [];
    }
    contadorJogadas++;
    if (contadorPares == numeroCartasPrompt/2){
        alert(`Você ganhou em ${contadorJogadas} jogadas!`);
    }
}




            
    

