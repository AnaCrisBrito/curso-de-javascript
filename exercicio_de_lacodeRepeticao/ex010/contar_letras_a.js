let palavra = prompt("Digite uma palavra:");
let i = 0;
let contadorA = 0;

while (i < palavra.length) {
    let letra = palavra[i];
    if (letra === "a" || letra === "A") {
        contadorA++;
    }
    i++;
}
var res = document.getElementById("res");
res.innerHTML += `A palavra "${palavra}" tem ${contadorA} letra(s) A.`;
