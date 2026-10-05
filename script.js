const intro = document.getElementById("intro");
const roseButton = document.getElementById("roseButton");
const journey = document.getElementById("journey");
const travelLayer = document.getElementById("travel-layer");
const lightLines = document.getElementById("light-lines");
const lyric = document.getElementById("lyric");
const music = document.getElementById("music");
const ending = document.getElementById("ending");
const replay = document.getElementById("replay");
const noAudio = document.getElementById("noAudio");
const songStatus = document.getElementById("songStatus");
const stars = document.getElementById("stars");

const phrases = [
  "por siempre tu",
  "eres pura luz",
  "contigo todo",
  "qué bonito encontrarte",
  "mi lugar favorito",
  "te volvería a elegir",
  "hasta coincidir otra vez",
  "siempre tú",
  "quédate un poquito más",
  "me gusta encontrarte aquí",
  "donde estés, voy",
  "en todas las vidas",
  "me elevas alto",
  "sin prisa",
  "eres mi primera vez"
];

/*
  Cuando tengas la letra de la canción, reemplaza este arreglo por tus
  propias líneas y tiempos.
*/
const lyrics = [
  { time: 0, text: "Con mucho amor, para ti." },
  { time: 13.5, text: "Pensé que mi corazón ya lo había sentido todo" },
  { time: 22.0, text: "Nadé millas a través del océano, nunca encontré la orilla" },
  { time: 29.0, text: "Mis ojos estaban cerrados" },
  { time: 33.0, text: "mis subidas me llevan al fondo" },
  { time: 37.0, text: "Perdiendome en pastillas y tragos"},
  { time: 41.0, text: "Anhelando algo más "},
  { time: 44.5, text: "Viajé por el mundo, pero no me llevó a ningún lado" },
  { time: 48.0, text: "Nada podría jamás compararse" },
  { time: 52.0, text: "Un beso, una caricia" },
  { time: 54.0, text: "Una canción que me hizo llorar" },
  { time: 55.7, text: "Y todas las drogas que he consumido" },
  { time: 57.7, text: "Nunca me elevaron más alto" },
  { time: 59.0, text: "Que la primera vez que nos conocimos" },
  { time: 62.0, text: "No hay nada como la primera vez que nos conocimos" },
  { time: 67.0, text: "Choqué mi auto " },
  { time: 69.0, text: "Oh bebé, pero estaba volando" },
  { time: 71.0, text: "Y hablé con Dios, el no pudo llevarme tan alto" },
  { time: 75.0, text: "Que la primera vez que nos conocimos" },
  { time: 78.0, text: "No hay nada como la primera vez" },
  { time: 81.0, text: "La primera vez que nos conocimos" },
  { time: 85.0, text: "Esa noche, las estrellas se alinearon" },
  { time: 91.0, text: "El cielo envío una señal" },
  { time: 94.0, text: "Antes de ti, solo era una bengala en el cielo" },
  { time: 98.0, text: "Un chico demasiado asustado como para jugar en la luz" },
  { time: 102.0, text: "Un pintor sin colores" },
  { time: 103.5, text: "Un hombre sin vista" },
  { time: 105.0, text: "Antes de ti, yo no era nada" },
  { time: 107.0, text: "No tenia nada" },
  { time: 109.0, text: "Solo tenía un beso, una caricia" },
  { time: 112.0, text: "Una canción que me hizo llorar" },
  { time: 113.5, text: "Y todas las drogas que me he consumido" },
  { time: 115.0, text: "Nunca me elevaron más alto" },
  { time: 117.0, text: "Que la primera vez que nos conocimos" },
  { time: 121.0, text: "No hay nada como la primera vez que nos conocimos" },
  { time: 125.0, text: "Choqué mi auto" },
  { time: 127.0, text: "Oh bebé, pero estaba volando" },
  { time: 129.0, text: "Y hablé con Dios, el no pudo llevarme tan alto" },
  { time: 132.0, text: "Que la primera vez que nos conocimos" },
  { time: 136.0, text: "No hay nada como la primera vez" },
  { time: 139.0, text: "La primera vez que nos conocimos" },
  { time: 145.0, text: "Incendiaste la habitación" },
  { time: 149.0, text: "Llevaste a los angeles más alto" },
  { time: 152.0, text: "Escuché mil coros cantar" },
  { time: 157.0, text: "Oh bebé, aún no has visto nada" },
  { time: 160.0, text: "Viaje por el mundo, pero no me llevó a ningún lado" },
  { time: 164.0, text: "Nada podría jamas compararse" },
  { time: 166.0, text: "Un beso, una caricia" },
  { time: 168.0, text: "Una canción que me hizo llorar" },
  { time: 170.0, text: "Y todas las drogas que he consumido" },
  { time: 172.0, text: "Nunca me elevaron más alto" },
  { time: 174.0, text: "Que la primera vez que nos conocimos" },
  { time: 177.0, text: "No hay nada como la primera vez que nos conocimos" },
  { time: 181.0, text: "Choqué mi auto" },
  { time: 183.0, text: "Oh bebé, pero estaba volando" },
  { time: 185.0, text: "Y hablé con Dios, el no pudo llevarme tan alto" },
  { time: 189.0, text: "Que la primera vez que nos conocimos" },
  { time: 192.0, text: "No hay nada como la primera vez" },
  { time: 195.0, text: "La primera vez que nos conocimos" },
  { time: 198.0, text: "La primera vez que nos conocimos" },
  { time: 207.0, text: "No hay nada como la primera vez" },
  { time: 210.0, text: "La primera vez que nos conocimos" },
  { time: 213.0, text: "Nada me haría sentir más especial" },
  { time: 215.0, text: "Que volver a descubrir tus ojitos, por eso..." }
];

const flowers = ["🌸", "🌺", "🌷", "🪻", "🌼", "💠", "🌹", "🩵"];

let running = false;
let phraseTimer = null;
let travelTimer = null;
let flowerCount = 0;
let rayCount = 0;
// Las trayectorias se reparten por todo el campo visual para que no haya
// ráfagas que salgan solamente de abajo, arriba o de un solo lado.
let directionIndex = 0;

// Mantener pocos elementos vivos evita que el teléfono tenga que animar
// decenas de emojis, filtros y nodos al mismo tiempo.
const MAX_FLOWERS = 50;
const MAX_RAYS = 80;

// Ocho corredores alrededor del punto de fuga: izquierda, derecha, arriba,
// abajo y las cuatro esquinas. Se recorren de forma equilibrada.
const travelDirections = [
  { x: -1.00, y:  0.00 },
  { x:  1.00, y:  0.00 },
  { x:  0.00, y: -1.00 },
  { x:  0.00, y:  1.00 },
  { x: -0.78, y: -0.78 },
  { x:  0.78, y: -0.78 },
  { x: -0.78, y:  0.78 },
  { x:  0.78, y:  0.78 }
];

function createStars() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 55; i++) {
    const s = document.createElement("span");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.setProperty("--twinkle", (2 + Math.random() * 4) + "s");
    s.style.animationDelay = (-Math.random() * 5) + "s";
    fragment.appendChild(s);
  }
  stars.appendChild(fragment);
}

function removeOldestFlower() {
  const oldest = travelLayer.querySelector(".flower");
  if (oldest) oldest.remove();
}

function createFlower() {
  if (!running) return;

  if (flowerCount >= MAX_FLOWERS) removeOldestFlower();
  else flowerCount++;

  const flower = document.createElement("div");
  flower.className = "flower";

  const emoji = document.createElement("span");
  emoji.className = "flower-emoji";
  emoji.textContent = flowers[Math.floor(Math.random() * flowers.length)];

  const message = document.createElement("span");
  message.className = "flower-message";
  message.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  /*
    La clave del nuevo efecto:
    todos nacen cerca del mismo punto de fuga, pero cada uno recibe una
    trayectoria distinta hacia un lado de la pantalla. Así pasan por los
    costados en lugar de regresar/converger al centro.
  */
  // En vez de una dirección totalmente aleatoria, usamos corredores
  // equilibrados. Así siempre hay movimiento en varias zonas de la pantalla
  // y se conserva la sensación de "túnel" de la referencia.
  const base = travelDirections[directionIndex % travelDirections.length];
  directionIndex++;

  // Variación lateral para que no parezcan líneas rígidas.
  const jitter = 0.18;
  const dx = base.x + (Math.random() - 0.5) * jitter;
  const dy = base.y + (Math.random() - 0.5) * jitter;

  const distance = Math.max(window.innerWidth, window.innerHeight) *
  (0.60 + Math.random() * 0.50);

  const length = Math.hypot(dx, dy) || 1;
  const tx = (dx / length) * distance;
  const ty = (dy / length) * distance;

  // Profundidad: algunas flores pasan lejos y otras mucho más cerca.
  const size = 22 + Math.random() * 38;
  const duration = 14 + Math.random() * 9;
  const opacity = (0.52 + Math.random() * 0.38).toFixed(2);
  const startScale = (0.055 + Math.random() * 0.045).toFixed(3);
  const endScale = (1.25 + Math.random() * 1.85).toFixed(2);
  const rotation = Math.random() * 50 - 25;
  const spin = Math.random() * 18 - 9;

  flower.style.setProperty("--tx", tx.toFixed(1) + "px");
  flower.style.setProperty("--ty", ty.toFixed(1) + "px");
  flower.style.setProperty("--size", size.toFixed(1) + "px");
  flower.style.setProperty("--duration", duration.toFixed(2) + "s");
  flower.style.setProperty("--opacity", opacity);
  flower.style.setProperty("--start-scale", startScale);
  flower.style.setProperty("--end-scale", endScale);
  flower.style.setProperty("--r", rotation.toFixed(1) + "deg");
  flower.style.setProperty("--spin", spin.toFixed(1) + "deg");
  flower.style.animationDelay = (Math.random() * 70) + "ms";

  flower.addEventListener("animationend", () => {
    flower.remove();
    flowerCount = Math.max(0, flowerCount - 1);
  }, { once: true });

  flower.appendChild(emoji);
  flower.appendChild(message);
  travelLayer.appendChild(flower);
}

function createRay() {
  if (!running || rayCount >= MAX_RAYS) return;

  rayCount++;

  const ray = document.createElement("span");
  ray.className = "light-ray";

  /*
    Los rayos utilizan los mismos 8 corredores generales
    que las flores, pero con peque�as variaciones.
  */
  const rayBase =
    travelDirections[
      (directionIndex + rayCount) % travelDirections.length
    ];

  const jitter = 0.24;

  const dx = rayBase.x + (Math.random() - 0.5) * jitter;
  const dy = rayBase.y + (Math.random() - 0.5) * jitter;

  const length = Math.hypot(dx, dy) || 1;

  /*
    Distancia propia del rayo.
    Es menor que la de las flores para que parezca
    un peque�o trazo que pasa r�pidamente por el campo.
  */
  const distance =
    Math.min(window.innerWidth, window.innerHeight) *
    (0.45 + Math.random() * 0.65);

  const tx = (dx / length) * distance;
  const ty = (dy / length) * distance;

  /*
    Direcci�n del movimiento.
  */
  const angle =
    Math.atan2(dy, dx) * 180 / Math.PI;

  /*
    Cada rayo tiene una personalidad diferente.
  */
  const rayLength =
  12 + Math.random() * 48;

  const rayWidth =
    Math.random() < 0.75
      ? 1
      : 2;

  const opacity =
  (0.45 + Math.random() * 0.50).toFixed(2);

  const duration =
  (2.4 + Math.random() * 2.2).toFixed(2);

  const startScale =
    (0.45 + Math.random() * 0.35).toFixed(2);

  const endScale =
    (0.75 + Math.random() * 0.75).toFixed(2);

  ray.style.setProperty(
    "--ray-tx",
    tx.toFixed(1) + "px"
  );

  ray.style.setProperty(
    "--ray-ty",
    ty.toFixed(1) + "px"
  );

  ray.style.setProperty(
    "--angle",
    angle.toFixed(1) + "deg"
  );

  ray.style.setProperty(
    "--ray-length",
    rayLength.toFixed(1) + "px"
  );

  ray.style.setProperty(
    "--ray-width",
    rayWidth + "px"
  );

  ray.style.setProperty(
    "--ray-opacity",
    opacity
  );

  ray.style.setProperty(
    "--ray-duration",
    duration + "s"
  );

  ray.style.setProperty(
    "--ray-start",
    startScale
  );

  ray.style.setProperty(
    "--ray-end",
    endScale
  );

  /*
    Peque�as diferencias de inicio para que no aparezcan
    todos juntos como una r�faga artificial.
  */
  ray.style.animationDelay =
    (Math.random() * 60) + "ms";

  ray.addEventListener("animationend", () => {
    ray.remove();
    rayCount = Math.max(0, rayCount - 1);
  }, { once: true });

  lightLines.appendChild(ray);
}

function travelLoop() {
  if (!running) return;

  //  FLORES
  const burst = Math.random() < 0.58 ? 2 : 3;

  for (let i = 0; i < burst; i++) {
    createFlower();
  }

  travelTimer = setTimeout(
    travelLoop,
    180 + Math.random() * 90
  );
}

function rayLoop() {
  if (!running) return;

  // Muchos rayos por ráfaga
  const burst =
    Math.random() < 0.25 ? 7 :
    Math.random() < 0.65 ? 6 : 5;

  for (let i = 0; i < burst; i++) {
    createRay();
  }

  // Nueva ráfaga muy rápidamente
  setTimeout(
    rayLoop,
    45 + Math.random() * 55
  );
}

function showLyric(text) {
  lyric.classList.remove("show");
  setTimeout(() => {
    if (!running) return;
    lyric.textContent = text;
    lyric.classList.add("show");
  }, 220);
}

function startLyrics() {
  let i = 0;

  const tick = () => {
    if (!running) return;

    const currentTime = music.currentTime || 0;

    while (i < lyrics.length - 1 && currentTime >= lyrics[i + 1].time) {
      i++;
    }

    if (currentTime >= lyrics[i].time && currentTime < lyrics[i].time + 4.8) {
      if (lyric.textContent !== lyrics[i].text) showLyric(lyrics[i].text);
    }

    if (i === lyrics.length - 1 && currentTime > lyrics[i].time + 5) {
      showEnding();
      return;
    }

    phraseTimer = requestAnimationFrame(tick);
  };

  tick();
}

function showEnding() {
  if (!running) return;
  running = false;
  cancelAnimationFrame(phraseTimer);
  clearTimeout(travelTimer);

  lyric.classList.remove("show");
  songStatus.textContent = "fin del viaje";

  const flash = document.createElement("div");
  flash.className = "blue-flash";
  document.getElementById("app").appendChild(flash);

  setTimeout(() => {
    ending.classList.add("visible");
    ending.setAttribute("aria-hidden", "false");
    flash.remove();
  }, 2500);
}

function startJourney() {
  if (running) return;
  running = true;

  intro.classList.add("leaving");
  journey.setAttribute("aria-hidden", "false");
  noAudio.hidden = true;

  // Dejamos que la pantalla de inicio se retire y luego arrancamos la
  // corriente de flores. El audio comienza inmediatamente por el gesto.
  setTimeout(() => {
  travelLoop();
  rayLoop();
  startLyrics();
}, 520);

  music.currentTime = 0;
  const playAttempt = music.play();

  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      noAudio.hidden = false;
      songStatus.textContent = "modo visual";
    });
  }

  setTimeout(() => {
    if (music.readyState < 2 || music.duration === 0 || Number.isNaN(music.duration)) {
      noAudio.hidden = false;
      songStatus.textContent = "modo visual";
    }
  }, 900);

  music.addEventListener("ended", showEnding, { once: true });
}

function reset() {
  running = false;
  cancelAnimationFrame(phraseTimer);
  clearTimeout(travelTimer);

  music.pause();
  music.currentTime = 0;

  travelLayer.innerHTML = "";
  lightLines.innerHTML = "";
  flowerCount = 0;
  rayCount = 0;
  ending.classList.remove("visible");
  ending.setAttribute("aria-hidden", "true");
  noAudio.hidden = true;

  lyric.classList.remove("show");
  lyric.textContent = "";
  songStatus.textContent = "viajando...";

  intro.classList.remove("leaving");
}

roseButton.addEventListener("click", startJourney);
replay.addEventListener("click", reset);
createStars();
