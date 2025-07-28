function nomeCompleto(nome, sobrenome) {
    function formatar(palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }

    return formatar(nome) + ' ' + formatar(sobrenome);
}

console.log(nomeCompleto("aNA", "bRIto")); 
