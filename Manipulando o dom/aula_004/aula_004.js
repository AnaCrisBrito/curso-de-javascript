document.getElementsByClassName("minhaClasse")[0].innerHTML = 'texto feito pelo js';

document.getElementsByClassName("minhaClasse")[1].innerHTML = 'texto feito pelo js';


setTimeout(function () {
    document.getElementsByClassName("minhaClasse")[2].innerHTML = 'texto feito pelo js com setTimeout';

}, 3000);