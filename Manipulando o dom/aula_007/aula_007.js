//hasAttribute - pergunta se tem algum atributo
document.write(document.getElementById('idQualquer').hasAttribute("class"));

document.write(document.querySelector(".classeQualquer").hasAttribute("id")); 

//getAttribute - pergunta se tem e traz o valor
var atributoDiv = document.getElementById("idQualquer");
//vai retornar o valor(o nome que você definiu) pra classe
document.write(atributoDiv.getAttribute('class'));

//setAttribute - altera ou aplica o atributo
//Selecionando a div
var atributoDiv = document.getElementById("idQualquer");

//aplicando um estilo direto
atributoDiv.setAttribute('style', 'background: #CCC')