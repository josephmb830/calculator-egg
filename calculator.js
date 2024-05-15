class Calculator {
    // Constructor
    constructor() {
        // Inicializa la calculadora
        // Aquí podrías, por ejemplo, configurar el estado inicial de la calculadora
    }

    // Método para realizar la operación seleccionada
    operate(operation) {
        let result;
        switch (operation) {
            case 'suma':
                let sumaA = parseFloat(prompt("Introduce el primer número:"));
                let sumaB = parseFloat(prompt("Introduce el segundo número:"));
                result = sumaA + sumaB;
                alert("Resultado de la suma: " + result);
                break;
            case 'resta':
                let restaA = parseFloat(prompt("Introduce el primer número:"));
                let restaB = parseFloat(prompt("Introduce el segundo número:"));
                result = restaA - restaB;
                alert("Resultado de la resta: " + result);
                break;
            case 'multiplicacion':
                let multA = parseFloat(prompt("Introduce el primer número:"));
                let multB = parseFloat(prompt("Introduce el segundo número:"));
                result = multA * multB;
                alert("Resultado de la multiplicación: " + result);
                break;
            case 'division':
                let divA = parseFloat(prompt("Introduce el primer número:"));
                let divB = parseFloat(prompt("Introduce el segundo número:"));
                if (divB === 0) {
                    alert("No se puede dividir por cero.");
                } else {
                    result = divA / divB;
                    alert("Resultado de la división: " + result);
                }
                break;
            case 'potencia':
                let base = parseFloat(prompt("Introduce la base:"));
                let exponente = parseFloat(prompt("Introduce el exponente:"));
                result = Math.pow(base, exponente);
                alert("Resultado de la potencia: " + result);
                break;
            case 'raizcuadrada':
                let raiz = parseFloat(prompt("Introduce el número para calcular la raíz cuadrada:"));
                if (raiz < 0) {
                    alert("No se puede calcular la raíz cuadrada de un número negativo.");
                } else {
                    result = Math.sqrt(raiz);
                    alert("Resultado de la raíz cuadrada: " + result);
                }
                break;
            case 'raizcubica':
                let raizCubica = parseFloat(prompt("Introduce el número para calcular la raíz cúbica:"));
                result = Math.cbrt(raizCubica);
                alert("Resultado de la raíz cúbica: " + result);
                break;
            default:
                alert("Operación no válida. Por favor, elige una operación válida.");
                break;
        }
    }
}

// Función de inicialización
function initCalculator() {
    const calculator = new Calculator();
    let operation = prompt("¿Qué operación quieres realizar? (suma, resta, multiplicacion, division, potencia, raizcuadrada, raizcubica)").toLowerCase();
    calculator.operate(operation);
}

// Llamada a la función de inicialización
initCalculator();