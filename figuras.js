
// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();

// Código del círculo

console.group("Círculo");

// Diámetro

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunsferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El área del círculo es de: ${areaCirculo} cm^2`);

console.groupEnd();

// Código del triángulo isósceles

console.group("Triángulo");

function alturaTriangulo(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base){
        alert('isosceles')
        return altura = Math.sqrt(lado1**2 - base**2/ 4)

    }
    else{
        alert('no es isosceles')
    }

}
altura (6,6,4)




console.groupEnd();


// Botones

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}
// Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("Input1");
    const value1 = Number (input1.value);

    const input2 = document.getElementById("Input2");
    const value2 = Number (input2.value);

    const input3 = document.getElementById("Input3");
    const value3 = Number (input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("Input3");
    const value3 = Number(input3.value);

    const altura = document.getElementById("altura");
    const value4 = Number(altura.value);

    const area = areaTriangulo(value3, value4);
    alert(area);

}

// Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const diametro = perimetroCirculo(value);
    alert(diametro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const area = areaCirculo(value);
    alert(area);
}


//Isósceles


function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("lado1");
    const value1 = Number (lado1.value);

    const lado2 = document.getElementById("lado2");
    const value2 = Number (lado2.value);

    const base = document.getElementById("base");
    const value3 = Number (base.value);

    const altura = alturaTriangulo(value1, value2, value3);
    alert(altura);

}
