function calcularIMC() {
    var altura = parseFloat(document.getElementById("ialtura").value);
    var peso = parseFloat(document.getElementById("ipeso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }
}