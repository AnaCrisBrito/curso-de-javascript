//Eventos de mouse:

/*
mouseenter: onmouseenter()
mousemove: onmousemove()
mousedown: onmousedown()
mouseup: onmouseup()
click: onclick()
mouseout: onmouseout()
*/


//click:
var a = document.getElementById("area");
function clicar() {
    a.innerHTML = "Clicou!";
    a.style.background = 'green';
}

//mouseenter:
function entrar() {
    a.innerHTML = "Entrou!";
    a.style.background = "yellow";
}

//mouseout:
function sair() {
    a.innerHTML = "Saiu!"
    a.style.background = "blue";
}

//onmouseup:
function cima(){
    a.innerHTML = "Pra baixo"
    a.style.background = "orange";
}

//onmousedown:
function baixo() {
    a.innerHTML = "Pra cima"
    a.style.background = "black";
}