function verificarParidad() {
    const numero = parseInt(document.getElementById('numIfElse').value);
    const resultado = numero % 2 === 0 ? "El número es par." : "El número es impar.";
    document.getElementById('resultadoIfElse').innerText = resultado;
}

function mostrarDiaSemana() {
    const dia = parseInt(document.getElementById('numSwitch').value);
    let resultado;
    switch (dia) {
        case 1: resultado = "Lunes"; break;
        case 2: resultado = "Martes"; break;
        case 3: resultado = "Miércoles"; break;
        case 4: resultado = "Jueves"; break;
        case 5: resultado = "Viernes"; break;
        case 6: resultado = "Sábado"; break;
        case 7: resultado = "Domingo"; break;
        default: resultado = "Día no válido";
    }
    document.getElementById('resultadoSwitch').innerText = resultado;
}

function generarError() {
    try {
        throw new Error("Este es un error personalizado.");
    } catch (e) {
        document.getElementById('resultadoTryCatch').innerText = e.message;
    }
}

function mostrarNumerosFor() {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += i + " ";
    }
    document.getElementById('resultadoFor').innerText = resultado;
}

function mostrarNumerosWhile() {
    let i = 1;
    let resultado = "";
    while (i <= 3) {
        resultado += i + " ";
        i++;
    }
    document.getElementById('resultadoWhile').innerText = resultado;
}

function sumarNumeros() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const suma = num1 + num2;
    document.getElementById('resultadoSuma').innerText = "Resultado: " + suma;
}

function calcularOperacion() {
    const resultado = (2 + 3) * 4;
    document.getElementById('resultadoOperacion').innerText = "Resultado: " + resultado;
}

function mostrarFecha() {
    const hoy = new Date();
    document.getElementById('resultadoFecha').innerText = hoy.toLocaleString();
}

function modificarTexto() {
    document.getElementById('parrafoDOM').innerText = "¡Texto modificado!";
}
