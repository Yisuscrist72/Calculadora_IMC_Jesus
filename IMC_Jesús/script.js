document.getElementById("calcularIMC").addEventListener("click", calcularIMC);

function calcularIMC() {
    let peso = document.getElementById("campoPeso").value;
    let altura = document.getElementById("campoAltura").value;
    let edad = document.getElementById("campoEdad").value;

    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores válidos.";
        return;
    }

    if (edad < 2) {
        document.getElementById("resultado").innerHTML = "La calculadora no está diseñada para menores de 2 años.";
        return;
    }

    if (altura < 0.5 || altura > 2.5) {
        document.getElementById("resultado").innerHTML = "Introduce una altura en metros válida (entre 0.5 y 2.5).";
        return;
    }

    // Validación del peso mínimo basado en la edad y altura
    let pesoMinimo;
    if (edad >= 2 && edad <= 10) {
        pesoMinimo = altura * 10; // Aproximación para niños (10 kg por metro de altura)
    } else if (edad > 10 && edad <= 18) {
        pesoMinimo = altura * 15; // Aproximación para adolescentes (15 kg por metro de altura)
    } else {
        pesoMinimo = altura * 18.5; // Aproximación para adultos (IMC mínimo saludable de 18.5)
    }

    if (peso < pesoMinimo) {
        document.getElementById("resultado").innerHTML = "Tu peso es insuficiente. El peso mínimo recomendado para tu altura (" + altura + " m) y edad (" + edad + " años) es " + pesoMinimo.toFixed(1) + " kg.";        return;
    }

    let imc = Number(peso) / Math.pow(Number(altura), 2);
    let resultado = "";
    if(imc < 18.5){
        resultado = "Bajo de peso";
    }else if(imc >= 18.5 && imc < 24.9){
        resultado = "Peso normal";
    }else if(imc >= 25 && imc < 29.9){
        resultado = "Sobrepeso";
    }else if(imc >=30){
        resultado = "Obesidad";
    }

    document.getElementById("resultado").innerHTML = resultado;
}