function contarVogais(palavra) {
    let vogais = 'aeiou';
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i].toLowerCase();
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Ana")); 
