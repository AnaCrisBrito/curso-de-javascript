//Peça os três lados de um triângulo e diga se ele é:

/*- Equilátero (3 lados iguais)
- Isósceles (2 lados iguais)
- Escaleno (todos diferentes)*/

var lado1 =Number(prompt("Digite o valor do lado 1 do triângulo: "));
var lado2 =Number(prompt("Digite o valor do lado 2 do triângulo: "));
var lado3 =Number(prompt("Digite o valor do lado 3 do triângulo: "));
var res = document.getElementById("res");

if(lado1 == lado2 && lado2 == lado3){
    res.innerHTML += `Triângulo Equilátero (3 lados iguais).`;
}else if  ((lado1 == lado2 && lado1 != lado3) ||
    (lado2 == lado3 && lado2 != lado1) ||
    (lado3 == lado1 && lado3 != lado2)){
    res.innerHTML += `Triângulo Isósceles (2 lados iguais).`;
}else{
    res.innerHTML += `Triângulo Escaleno (todos diferentes).`;
}