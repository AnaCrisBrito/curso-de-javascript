//number and string

var nome = prompt("Qual é o seu nome? ") // declaração de variável
alert("Olá, " + nome + "!"); // concatenação
document.write(`Seu nome tem ${nome.length} letras.`)
document.write(`Seu nome em maiúscula é ${nome.toUpperCase()}.`) 
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}`)