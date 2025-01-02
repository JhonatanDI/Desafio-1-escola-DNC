var imagem = window.document.getElementById("imagem")
var botaoX = window.document.getElementById("X")

function zoomdaimagem(){

imagem.style = "transform:scale(1.5); padding-right: 331%; padding-bottom: 10%;"
botaoX.style = "display:flex; "


}

function imagemsair(){
    imagem.style = "transform:scale(1); "
    botaoX.style = "display:none;"
}


    
