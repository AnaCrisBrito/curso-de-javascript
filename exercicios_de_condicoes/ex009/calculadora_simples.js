//Peça dois números e uma operação (+, -, *, /). Realize a operação com base na escolha e mostre o resultado. Exemplo:
/*
Digite o primeiro número:
Digite o segundo número:
Digite a operação:
*/


var numero1 = Number(prompt("Digite o primeiro número: "));
var numero2 = Number(prompt("Digite o segundo número: "));
var operação = prompt("Digite a operação: ");
var res = document.getElementById("res");

if (operação == "+"){
    var adição = numero1 + numero2;
    res.innerHTML += `O resultado da adição é ${numero1} + ${numero2} = ${adição}`
}else if(operação == "-"){
    var subtracao = numero1 - numero2;
    res.innerHTML += `O resultado da subtração é ${numero1} - ${numero2} = ${subtracao}`;
}else if(operação == "/"){
    var divisao = numero1 / numero2;
    res.innerHTML += `O resultado da divisão é ${numero1} / ${numero2} = ${divisao}`;
}else if(operação == "*"){
    var multi = numero1 * numero2;
    res.innerHTML += `O resultado da multiplicação é ${numero1} X ${numero2} = ${multi}`;
};

