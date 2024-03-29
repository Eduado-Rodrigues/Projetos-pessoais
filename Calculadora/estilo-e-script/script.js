function displaynum(n1) {
    Calculator.text.value = Calculator.text1.value + n1;
}

function apagarUltimoCaractere() {
    var text = document.getElementById('caixa');
    text.value = text.value.slice(0, 1);
}