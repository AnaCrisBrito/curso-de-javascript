//Crie um parágrafo com o texto “Passe o mouse aqui”. Ao passar o mouse (mouseover), o texto muda para “Obrigado!”. Quando o mouse sair (mouseout), volta ao texto original.

function mouseEntra(){
    var mouseEntra = document.getElementById("texto");
    mouseEntra.innerText = "Obrigado!";
}

function mouseSai(){
    var mouseSai = document.getElementById("texto");
    mouseSai.innerText = "Passe o mouse aqui";
}