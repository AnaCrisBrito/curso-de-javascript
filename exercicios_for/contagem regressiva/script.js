function time(){
    var res = document.getElementById("res");
    res.innerHTML = '';

    for (let c = 10; c >= 1; c--) {
        setTimeout(function () {
            res.innerHTML += c + "<br>";
        }, (10 - c) * 1000); 
    }
}setTimeout(time, 3000);