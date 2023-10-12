
const jogador1 = "A";
const jogador2 = "B";

var campos = document.getElementsByClassName("bloco");

var placarJogadorUm = document.getElementById("placarJogadorUm")
var placarJogadorDois = document.getElementById("placarJogadorDois")

var pontosJogadorUm = 0
var pontosJogadorDois = 0

placarJogadorUm.innerHTML = pontosJogadorUm
placarJogadorDois.innerHTML = pontosJogadorDois
console.log(pontosJogadorUm,pontosJogadorDois)



var vez = jogador1;
var winJogador1 = [];
var winJogador2 = [];
var naoClicavel = [];

var vencer = [[1,2,3],[3,2,1],[2,3,1]]

var b = []

win = 1,2,3;
function vitoria(x) {
    document.write(`JOGADOR ${x} VENCEU`)
}


function seletor(x)
{

    if(document.getElementById(x).innerHTML.trim() !== "")
    {
        console.log("CUBO JA ESCOLHIDO ESCOLHA OUTRO")
        return
    }

    console.log("#############")

    console.log(`Cubo selecionado: ${x}`)
    console.log(`Jogador : ${vez}`)

  
    // console.log(vitoria)
    
    document.getElementById(x).innerHTML = `<span>${vez}</span>`;

    //


    if(vez == jogador1)
    {
        winJogador1.push(x)
        vez = jogador2
    }else {
        winJogador2.push(x)
        vez = jogador1
    }


    console.log(`Win jogador A : ${winJogador1}`)
    if(winJogador1 == "1,2,3" || winJogador1 == "3,2,1" || winJogador1 == "2,1,3" || winJogador1 == "3,1,2"|| winJogador1 == "2,3,1")
    {
        console.log("SE GODA TAMB")
        pontosJogadorUm ++;
        placarJogadorUm.innerHTML = pontosJogadorUm

    }



    console.log(`Win jogador B : ${winJogador2}`)

    console.log("#############")
}



function zerar()
{
    console.log("ZERANDO PLACAR")
    pontosJogadorUm = 0;
    pontosJogadorDois = 0;
    console.log(pontosJogadorUm)

    for(i=0;i<campos.length;i++)
    {
        campos[i].innerHTML = "";
    }

    placarJogadorDois.innerHTML = pontosJogadorDois;
    placarJogadorUm.innerHTML = pontosJogadorUm;

}
