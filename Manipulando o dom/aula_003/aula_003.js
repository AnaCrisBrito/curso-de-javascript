//manipulação  através do name(todos que tiver com o mesmo nome pode ser substituido, so mudar a posição entre [], onde o primeiro name no html é 0.)
document.getElementsByName("nomeDiv")[2].innerHTML = "Texto escrito pelo js usando o innerHtml";

document.getElementsByName("nomeDiv")[1].innerText = "Texto escrito pelo js usando o innerText";

//setTimeout faz um time de segundos, que eu posso definir 
setTimeout(function(){
    document.getElementsByName("nomeDiv")[0].innerText = "Texto escrito pelo js usando o setTimeout";
}, 3000)