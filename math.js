console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado *4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado){
    return{
        perimetro:(lado*4),
        area:(lado*lado),
    }
}

console.groupEnd("Fin cuadrado")

console.group('Triangulo')

const ladoTriangulo1=6;
const ladoTriangulo2=6;
const ladoTrianguloBase=4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const alturaTriangulo = 5.5;

const  areaTriangulo= (ladoTrianguloBase*alturaTriangulo)/2;

function calcularTriangulo(lado1, lado2,base,altura){
    return{
        perimetro:(lado1+lado2+base),
        area:((base*altura)/2),
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

console.groupEnd("Fin triangulo")


console.group('Circulo')


const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416

const circunferencia = diametroCirculo * PI;

const areaCirculo = (radioCirculo**2) * PI;

console.log({
    radioCirculo,
    radioCirculo,
    PI,
    circunferencia,
    areaCirculo,
    

});

function calcularCirculo(radio){
    const diametro = radio *2
    const radioAlCuadrado = Math.pow(radio,2) //elevar un numero a determinada potencia Math.pow
    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}



console.groupEnd("Fin circulo")