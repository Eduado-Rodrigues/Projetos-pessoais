function calcularIMC() {
    var altura = parseFloat(document.getElementById("ialtura").value);
    var peso = parseFloat(document.getElementById("ipeso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = "Seu IMC é: <span class='";
    
    if (imc < 18.5) {
        resultado += "abaixo-peso";
    } else if (imc < 25) {
        resultado += "normal";
    } else if (imc < 30) {
        resultado += "acima-peso";
    } else if (imc < 40) {
        resultado += "obeso";
    } else {
        resultado += "obesidade-grave";
    }

    resultado += "'>" + imc.toFixed(2) + "</span><br>";

    if (imc < 18.5) {
        resultado += "<span class='abaixo-peso'>Você está abaixo do peso.</span>";
    } else if (imc < 25) {
        resultado += "<span class='normal'>Seu peso está normal.</span>";
    } else if (imc < 30) {
        resultado += "<span class='acima-peso'>Você está acima do peso.</span>";
    } 
    else if (imc < 40) {
        resultado += "<span class='obeso'>Você está obeso.</span>";
    } else {
        resultado += "<span class='obesidade-grave'>Você está na obesidade grave.</span>";
    }

    document.getElementById("resultado").innerHTML = resultado;
    return false;
}