//Peça um nome de usuário e uma senha. Se forem "admin" e "1234", mostre "Login bem-sucedido", senão "Usuário ou senha inválidos".

function enviar() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var res = document.getElementById("res");

    if (nome == "admin" && senha == 1234) {
        res.innerHTML += "Login bem-sucedido!";
    } else {
        res.innerHTML += "Usuário ou senha inválidos!"
    };
};
