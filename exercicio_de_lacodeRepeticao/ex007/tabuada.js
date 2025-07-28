var numero = Number(prompt("Qual número você quer saber a tabuada? "));
var res = document.getElementById("res");

var c = 1;
res.innerHTML = ``;
while(c <= 10){
    res.innerHTML += `${c} X ${numero} = ${c*numero}<br>`;
    c++;
};
