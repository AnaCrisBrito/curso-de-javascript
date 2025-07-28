var cont = Number(prompt("Digite um número: "));
var res = document.getElementById("res");
while(cont > 0){
    res.innerHTML += cont + " - ";
    cont--;
}