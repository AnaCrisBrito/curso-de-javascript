//Crie um programa que peça um número e mostre uma mensagem dizendo se ele é positivo.

var numero = Number(prompt("Digite um número: "));

if(numero > 0){
    var res = document.getElementById("res");
    res.innerHTML += `O número ${numero} é <strong>Positivo</strong>!`;
} else if(numero < 0){
    var res = document.getElementById("res");
    res.innerHTML += `O número ${numero} é <strong>Negativo</strong>!`;
};