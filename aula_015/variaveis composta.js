let num = [4, 8, 2, 9, 3]
num[3] = 6 //Adiciona o valor 6 na posição 3 dentro do vetor num

num.push(7)//Adiciona o valor 7 no final do vetor num. O push sempre adiciona no final.

num.length//percorre o vetor pra ver quantos itens tem

num.sort()//organiza o vetor em ordem crescente

console.log(`O nosso vetor tem os valores ${num}`)
/*for (let p = 0; p < num.length; p++) {
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}*/

for (let p in num) {
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}

num.indexOf(7)//procura detro do vetor num o valor 7. Se tiver ele retorna a posição. Se não tiver 7 no vetor ele retorna -1. 