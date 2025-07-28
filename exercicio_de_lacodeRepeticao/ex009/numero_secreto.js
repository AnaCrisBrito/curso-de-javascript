do {
    var numSecreto = Number(prompt("Digite o número secreto entre 1 e 10 pra desbloquear: "));
    if (numSecreto != 6) {
        alert("Errado! Tente Novamente!")
    };
} while (numSecreto != 6);
if (numSecreto == 6) {
    var res = document.getElementById("res");
    res.innerHTML += `Acertou!`;
};
