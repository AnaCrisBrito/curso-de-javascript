function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas `;
    if(hora >= 0 && hora <12){
        img.src ="images/manha.jpg";
        document.body.style.background = '#fdec6a';
      
    }else if(hora >= 12 && hora < 18){
        img.src = "images/tarde.jpg";
        document.body.style.background = '#4195c4';
        
    }else{ 
        img.src ="images/noite.jpg";
        document.body.style.background = '#2f3b47';
        
    };
};