var num = [1, 2, 3, 4, 5, 6];
var dobronum = [];
console.log(`O vetor principal tem ${num} como item.`);
for(var c = 0; c < num.length; c++){
    dobronum.push(num[c]*2);
};
console.log(`O dobro dos itens do vetor principal é: ${dobronum}`);