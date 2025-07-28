var senha = "admin123";
var res = ""; 

while(res != senha){
    res = prompt("Digite a senha: ");
    if(res != senha){
        alert("Senha INVÁLIDA! Tente novamente!");
    }
}


