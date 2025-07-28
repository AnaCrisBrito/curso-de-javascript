function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "images/bebe_homem.jpg");
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "images/menino_adole.jpg")
            } else {
                //idoso
                img.setAttribute("src", "images/idoso.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "images/bebe_mulher.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "images/menina_adole.jpg")
            } else {
                //idoso
                img.setAttribute("src", "images/idosa.jpg")
            }
        };
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    };
};