// Calculos

function insert(numero) {
    var num = document.querySelector('.texto').innerHTML;
    document.querySelector('.texto').innerHTML = num + numero;
}

function clean() {
    document.querySelector('.texto').innerHTML = "";
}

function back() {
    var resultado = document.querySelector('.texto').innerHTML;
    document.querySelector('.texto').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var res = document.querySelector('.texto').innerHTML;
    if (res) {
        document.querySelector('.texto').innerHTML = eval(res);
    } else {
        document.querySelector('.texto').innerHTML = "Por favor, inserir um cálculo";
    }
}