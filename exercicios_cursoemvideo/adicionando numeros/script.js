var numadicionado = []

function adicionar() {
    var num = document.getElementById("txtnum");
    var adicionar = document.getElementById("txtsel");
    if (num.value === "" || isNaN(num.value)) {
        alert("Adicione valores antes de finalizar!");
    }
    else {
        if (numadicionado.includes(num.value)) {
            alert(`O número ${num.value} já foi adicionado.`)
        } else {
            var item = document.createElement("option")
            numadicionado.push(num.value);

            item.text = `O número ${num.value} foi adicionado.`;
            adicionar.appendChild(item);

        };

    };

};
function finalizar() {
    //conta quantos itens tem no vetor
    var quantidade = document.getElementById("quantidade");
    quantidade.innerHTML = `Ao todo, temos ${numadicionado.length} números cadastrados.`;

    var maior = document.getElementById("maior");
    var numaior = numadicionado[0]
    var menor = document.getElementById("menor");
    var numenor = numadicionado[0]

    if (numadicionado.length === 0) {
        return undefined;
    }
    //descobre o maior item
    for (let i = 1; i < numadicionado.length; i++) {
        if (numadicionado[i] > numaior) {
            numaior = numadicionado[i]
        }


    }
    maior.innerHTML = `O maior valor informado foi ${numaior}`;
    //Descobre o menor item
    for (let a = 1; a < numadicionado.length; a++) {
        if (numadicionado[a] < numenor) {
            numenor = numadicionado[a]
        }

    }
    menor.innerHTML = `O menor valor informado foi ${numenor}`;

    //somando todos os valores
    var somar = document.getElementById("somar")
    var soma = 0;
    for(let s = 0; s < numadicionado.length; s++){
        soma += Number(numadicionado[s]);
    }
    somar.innerHTML = `Somando todos os valores temos ${soma}`;

    //fazendo a média
    var média = document.getElementById("media");
    var calmedia = soma / numadicionado.length
    média.innerHTML = `A média dos valores digitados é ${calmedia.toFixed(2)}`

}