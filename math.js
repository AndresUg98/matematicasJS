console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd("Fin cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const alturaTriangulo = 5.5;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn("Este no es un traingulo isoceles");
  } else {
    return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4);
  }
}

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
  if (
    lado1 != lado2 &&
    lado1 != base &&
    lado2 != lado1 &&
    lado2 != base &&
    base != lado1 &&
    base != lado2
  ) {
    const semiPerimetro = (lado1 + lado2 + base) / 2;

    const area = Math.sqrt(
      semiPerimetro *
        (semiPerimetro - lado1) *
        (semiPerimetro - lado2) *
        (semiPerimetro - base)
    );

    const altura = Math.floor((2 / lado1) * area);

    return altura;
  } else {
    return false;
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  perimetroTriangulo,
  alturaTriangulo,
  areaTriangulo,
});

console.groupEnd("Fin triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;

const areaCirculo = radioCirculo ** 2 * PI;

console.log({
  radioCirculo,
  radioCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2); //elevar un numero a determinada potencia Math.pow
  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI,
  };
}

console.groupEnd("Fin circulo");
