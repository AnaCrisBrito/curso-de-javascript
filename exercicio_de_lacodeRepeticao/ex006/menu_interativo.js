do{
    var menu = Number(prompt("Menu de opções: [1 - Mostrar uma mensagem 2 - Mostrar a data atual 3 - sair]"));
    if(menu == 1){
        alert("Você Apertou a opção 1");
    }else if(menu == 2){
        var data = new Date();
        data.getDay()
        alert(data)
    }
}while(menu != 3)