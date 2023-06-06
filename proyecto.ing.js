// Definir variable global para almacenar las respuestas
var respuestas = {};

// Función para registrar la respuesta seleccionada por el usuario
function registrarRespuesta(pregunta, respuesta) {
    respuestas[pregunta] = respuesta;
}

// Función para mostrar el resultado final
function mostrarResultado() {
    var contadorRespuestas = 0;

    // Calcular el número de respuestas correctas
    if (respuestas['pregunta1'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta2'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta3'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta4'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta5'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta6'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta7'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta8'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta9'] === 'a') {
        contadorRespuestas++;
    }
    if (respuestas['pregunta10'] === 'a') {
        contadorRespuestas++;
    }

    // Mostrar el resultado final
    alert("Respuestas correctas: " + contadorRespuestas + " de 10");

    // Mostrar todas las respuestas seleccionadas por el usuario
    var resultadoRespuestas = "Respuestas seleccionadas:\n";
    for (var pregunta in respuestas) {
        resultadoRespuestas += pregunta + ": " + respuestas[pregunta] + "\n";
    }
    alert(resultadoRespuestas);
}
