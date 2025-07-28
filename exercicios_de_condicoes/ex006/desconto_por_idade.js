//Peça a idade de uma pessoa. Se ela tiver menos de 12 anos ou mais de 60, mostre "Desconto aplicado", senão "Sem desconto".

var idade = Number(prompt("Digite sua idade: "));
var res = document.getElementById("res");
if(idade < 12 || idade > 60){
    res.innerHTML += `Desconto aplicado!`;
}else{
    res.innerHTML += `Sem desconto!`;
};