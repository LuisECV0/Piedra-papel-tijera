document.addEventListener("DOMContentLoaded", function() {
    const elecciones = document.querySelectorAll(".eleccion");
    const tuResultadoDiv = document.getElementById("tuResultado");
    const eleccionComputadoraImg = document.getElementById("eleccionComputadora");
    const computadoraResultadoDiv = document.getElementById("computadoraResultado");
    const scoreDiv = document.getElementById("score");

    let scoreJugador = 0;
    let scoreComputadora = 0;
    function jugadaComputadora() {
        const opciones = ["piedra", "papel", "tijeras"];
        const indice = Math.floor(Math.random() * 3);
        return opciones[indice];
    }
    function jugar(eleccionJugador) {
        const eleccionComputadora = jugadaComputadora();
        eleccionComputadoraImg.src = `./imgs/${eleccionComputadora}.png`;
        if (eleccionJugador === eleccionComputadora) {
            tuResultadoDiv.textContent = "¡Es un empate!";
        } else if (
            (eleccionJugador === "piedra" && eleccionComputadora === "tijeras") ||
            (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
            (eleccionJugador === "tijeras" && eleccionComputadora === "papel")
        ) {
            tuResultadoDiv.textContent = "¡Ganaste!";
            scoreJugador++;
        } else {
            tuResultadoDiv.textContent = "La computadora ganó.";
            scoreComputadora++;
        }
        scoreDiv.textContent = `${scoreJugador} - ${scoreComputadora}`;
    }
    elecciones.forEach(function(eleccion) {
        eleccion.addEventListener("click", function() {
            const eleccionJugador = eleccion.alt.toLowerCase();
            jugar(eleccionJugador);
        });
    });
    eleccionComputadoraImg.src = `./imgs/${jugadaComputadora()}.png`;
});



