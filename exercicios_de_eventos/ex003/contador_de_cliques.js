//Adicione um botão e um parágrafo que mostre um número. Cada clique no botão deve aumentar esse número em 1.
var valor = 0;
function cliques(){
    var contador = document.getElementById("contador"); 
    valor++;
    contador.innerHTML= valor;
}