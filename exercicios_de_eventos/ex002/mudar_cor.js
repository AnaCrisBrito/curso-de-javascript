//Crie um quadrado <div> com uma cor de fundo. Quando o mouse passar por cima dele, mude a cor. Quando o mouse sair, volte à cor original.

function entra(){
    let a = document.getElementById("cor");
    a.style.backgroundColor = "black";
}

function Sai(){
    let b = document.getElementById("cor");
    b.style.backgroundColor = "rgba(255, 0, 0, 0.616)"
}