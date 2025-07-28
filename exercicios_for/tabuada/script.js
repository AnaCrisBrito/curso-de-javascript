var numero = Number(prompt("De qual número você quer saber a tabuada: "));

for(var c = 1; c <= 10; c++){
    var res = document.getElementById("res");
    res.innerHTML += `${c} X ${numero} = ${c*numero}<br>`;
};