let soma = 0;
var res = document.getElementById("res");
do {
    var numero = Number(prompt("Digite um número: "));
    soma += numero;
} while (numero != 0);
res.innerHTML = `A soma dos números digitados é ${soma}`;


