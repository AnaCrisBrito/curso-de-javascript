//criar um elemento <li> e o nó de texto

var elemento = document.createElement("li");
var texto = document.createTextNode("item da lista adicionado");
elemento.appendChild(texto);

//recuperando o elemento lista e anexando o elemento <li> ao final da lista
//var lista = document.getElementsByTagName("ul")[0];
//lista.appendChild(elemento);


//inserBefore
var lista = document.getElementsByTagName("ul")[0];
var itens = lista.getElementsByTagName("li");

//criando o elemento
var elemento = document.createElement("li");
elemento.textContent = 'outro item';

//inserindo valor em posição específica
lista.insertBefore(elemento, itens[0]);

//removechild - removendo elemento filho de outro
lista.removeChild(itens[4]);