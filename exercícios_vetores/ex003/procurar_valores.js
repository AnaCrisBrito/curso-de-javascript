var num = [1, 3, 5, 7, 8, 9, 12, 16, 19, 25, 31];
var numUsua = Number(prompt("Qual número quer procurar? "));
var res = document.getElementById("res");
if (num.indexOf(numUsua) == -1) {
    res.innerHTML += `O número ${numUsua} não está dentro do vetor..`;
} else {
    res.innerHTML += `O numero ${numUsua} está na posição ${num.indexOf(numUsua)} do vetor.`;
};