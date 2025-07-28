//Crie um botão que, ao ser clicado, se desativa (fica disabled) e muda o texto para "Desativado".

function clique(){
    var a = document.getElementById("botao");
    a.disabled = true;
    a.textContent = "Desativado";
}