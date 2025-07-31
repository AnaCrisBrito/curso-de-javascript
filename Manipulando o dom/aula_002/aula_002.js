//getElementById
//document.getElementById('idCustomizada').innerHTML = "<b> Eu sou conteúdo html do JavaScript </b>"

document.getElementById('idCustomizadaDois').innerText = "Eu sou um conteúdo do js"

//Com timeout
setTimeout(function (){
    document.getElementById('idCustomizada').innerHTML = "<b> Eu sou conteúdo html do JavaScript </b>";
},3000);