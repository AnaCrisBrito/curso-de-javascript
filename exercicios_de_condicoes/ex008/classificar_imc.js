//Peça o peso e altura da pessoa, calcule o IMC e classifique:
// Fórmula: IMC = peso / (altura * altura)
// Classificação:
/*- Abaixo de 18.5 → Abaixo do peso
- 18.5 até 24.9 → Peso ideal
- 25 até 29.9 → Sobrepeso
- 30 ou mais → Obesidade*/

var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var res = document.getElementById("res");
var imc = peso / (altura * altura);

if(imc < 18.5){
    res.innerHTML += `Seu IMC é de ${imc.toFixed(2)}, e você está ABAIXO DO PESO!`;
}else if(imc == 18.5 || imc <= 24.9){
    res.innerHTML +=`Seu IMC é de ${imc.toFixed(2)}, e você está no PESO IDEAL!`;
}else if(imc == 25 || imc <= 29.9){
    res.innerHTML += `Seu IMC é de ${imc.toFixed(2)}, e você está em SOBREPESO!`;
}else{
    res.innerHTML += `Seu IMC é de ${imc.toFixed(2)}, e você está com OBESIDADE!`;
};