//Peça a nota de um aluno. Se for maior ou igual a 7, exiba "Aprovado", senão exiba "Reprovado".

var nota = Number(prompt("Digite sua nota: "));
var res = document.getElementById("res");

if(nota >= 7){
    res.innerHTML +=`Você foi <strong>APROVADO!</strong>`;
}else{
    res.innerHTML +=`Você foi <strong>REPROVADO!</strong>`;
};