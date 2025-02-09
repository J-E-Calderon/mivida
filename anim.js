// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I want to hold the hand inside you", time: 21 },
  { text: "I want to take a breath that's true", time: 30 },
  { text: "I look to you and I see nothing", time: 39 },
  { text: "I look to you to see the truth", time: 49 },
  { text: "You live your life, you go in shadows", time: 58 },
  { text: "You'll come apart and you'll go black", time: 67 },
  { text: "Some kind of night into your darkness", time: 76 },
  { text: "Colors your eyes with what's not there", time: 85 },
  { text: "Fade into you", time: 94 },
  { text: "Strange you never knew", time: 103 },
  { text: "Fade into you", time: 113 },
  { text: "I think it's strange you never knew", time: 122 },
  { text: "I wanna hold the hand inside you", time: 132 },
  { text: "I think it's strange you never knew", time: 142 },
  { text: "I wanna take the breath that's true", time: 152 },
  { text: "I look to you, and I see nothing", time: 162 },
  { text: "I look to you to see the truth", time: 172 },
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