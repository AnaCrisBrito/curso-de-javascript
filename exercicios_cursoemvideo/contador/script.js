function contar() {
    var inicio = document.getElementById("txtinicio");
    var fim = document.getElementById("txtfim");
    var passo = document.getElementById("txtpasso");
    var res = document.getElementById("res");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = `Contando:<br> `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            alert("Passo inválido! Considerando passo 1");
            p = 1;
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} 👉`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 👉`
            }
           
        }
        res.innerHTML += `\u{1f3c1}`
    }
};