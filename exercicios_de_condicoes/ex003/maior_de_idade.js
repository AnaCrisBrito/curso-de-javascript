//Receba a idade de uma pessoa e exiba uma mensagem dizendo se ela é maior ou menor de idade (18 anos).

var idade = Number(prompt("Digite sua idade: "));
var res = document.getElementById("res");
if (idade >= 18) {
    res.innerHTML += `MAIOR de idade!`;
} else {
    res.innerHTML += `MENOR de idade!`;
};