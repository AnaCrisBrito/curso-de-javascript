//Dom - Document object Model

//Árvore Dom:          window
            //location document history
                       //html
                //head       body
            //meta title      h1    p      div
                                  //strong  

document.write("olá, mundo!")//estou navegando através de dom

/*
Selecionar por:

marca: getElementsByTagName()
id: getElementById()
nome: getElementsByName()
classe: getElementsByClassName()
seletor: querySelector() ou querySelectorAll()

*/

//por marca:
var p1 = window.document.getElementsByTagName('p')[0] //esse 0 é a posição da tag html que quero acessar
document.write(p1.innerHTML)
p1.style.color = 'violet'

//por id:
var d = document.getElementById('msg');
d.style.background = 'green';
d.innerHTML = "Estou aguardando...."

//por nome:
var a = document.getElementsByName("msg")[0]
a.innerText = "Olá!"

//por classe:
var h = document.getElementsByClassName("msg")[0]
h.innerText = "Usando Classe";

//por seletor:
var l = document.querySelector("div#msg");
l.style.background = 'blue';