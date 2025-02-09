// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I want to hold the hand inside you", time: 15 },
  { text: "I want to take a breath that's true", time: 19 },
  { text: "I look to you and I see nothing", time: 26 },
  { text: "I look to you to see the truth", time: 30 },
  { text: "You live your life, you go your way", time: 37 },
  { text: "I'll live my life and dream of you", time: 41 },
  { text: "Fade into you", time: 48 },
  { text: "Strange how you come and go so quick", time: 55 },
  { text: "Strange how you linger in my mind", time: 59 },
  { text: "I look to you and I see nothing", time: 66 },
  { text: "I look to you to see the truth", time: 70 },
  { text: "You live your life, you go your way", time: 77 },
  { text: "I'll live my life and dream of you", time: 81 },
  { text: "Fade into you", time: 88 },
  { text: "I want to hold the hand inside you", time: 102 },
  { text: "I want to take a breath that's true", time: 106 },
  { text: "I look to you and I see nothing", time: 113 },
  { text: "I look to you to see the truth", time: 117 },
  { text: "You live your life, you go your way", time: 124 },
  { text: "I'll live my life and dream of you", time: 128 },
  { text: "Fade into you", time: 135 },
  { text: "You live your life, you go your way", time: 156 },
  { text: "I'll live my life and dream of you", time: 160 },
  { text: "Fade into you", time: 167 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);