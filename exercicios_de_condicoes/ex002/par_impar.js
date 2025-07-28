//Peça um número ao usuário e diga se ele é par ou ímpar.

var numero = Number(prompt("Informe um número: "));
if(numero % 2 == 0){
    var par = document.getElementById("res");
    par.innerHTML += `O número ${numero} é PAR!`;
}else if(numero % 2 == 1){
    var impar = document.getElementById("res");
    impar.innerHTML += `O número ${numero} é ÍMPAR!`;
};