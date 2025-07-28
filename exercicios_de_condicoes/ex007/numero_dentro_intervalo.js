//Peça um número. Se estiver entre 10 e 20 (inclusive), diga "Número dentro do intervalo", senão "Fora do intervalo".

var numero = Number(prompt("Digite um número: "));
var res = document.getElementById("res");

if(numero >= 10 && numero <= 20){
    res.innerHTML +=`O número ${numero} está dentro do intervalo.`;
}else{
    res.innerHTML += `O número ${numero} está fora do intervalo.`;
};