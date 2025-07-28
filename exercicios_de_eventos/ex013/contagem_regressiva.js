//Crie um botão "Iniciar Contagem". Ao clicar, ele começa uma contagem regressiva de 10 a 0, atualizando um <span> a cada segundo.

var contagem = 10;

function iniciar() {
    var iniciar = document.getElementById("mostrarContagem");
  
    intervalo = setInterval(function () {
        if (contagem >= 0) {
            iniciar.innerText = contagem;
            contagem--;
        } else {
            clearInterval(intervalo);
        }
    }, 1000);

}
  