var cont = 0;
var res = document.getElementById("res");
do {
    var numero = Number(prompt("Digite um número [-1 pra parar]: "));
    if (numero > 0) {
        cont += 1;
    }
} while (numero != -1)
res.innerHTML += cont;
