function gerar() {
    var numero = document.getElementById("txtnum");
    var tab = document.getElementById("seltab");
    tab.innerHTML = ``;
    for (var c = 1; c <= 10; c++) {
        var item = document.createElement("option");
        var n = Number(numero.value);
        item.text = `${c} X ${n} = ${c * n}`;
        item.value = `tab${c}`;
        tab.appendChild(item);
    };

};