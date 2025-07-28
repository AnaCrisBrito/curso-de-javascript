//Crie dois botões: um para somar 1 e outro para subtrair 1. Mostre o valor atual em um elemento.
var contador = 0;
function somar(){
    var somar = document.getElementById("mostrar");
    contador++;
    somar.innerHTML = contador;

}

function subtrair(){
    var subtrair = document.getElementById("mostrar");
    contador--;
    subtrair.innerHTML = contador;
}