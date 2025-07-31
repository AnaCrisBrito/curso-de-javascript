document.getElementsByTagName('h1')[0].innerHTML = "Elemento por tagname selecionado a tag h1"

document.getElementsByTagName('p')[1].innerHTML = "Elemento por tagname selecionado a tag p"


setTimeout(function () {
    document.getElementsByTagName('div')[2].innerHTML = "Elemento por tagname selecionado a tag div"

}, 3000);
