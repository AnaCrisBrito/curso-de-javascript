var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pares = [];

for(var c = 0; c < num.length; c++){
    if(num[c] % 2 == 0){
      pares.push(num[c])
    };
};
console.log(`Vetor principal: ${num}`);
console.log(`Os números pares que estão no vetor principal são: ${pares}`);