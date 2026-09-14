function textScrambleEffect(element, text) {
  const chars = "ÉäÉäÉCÅEÉVÉÖÉVÉÖÇÃÇ∑Ç◊Çƒ";
  let frame = 0;

  function update() {
    let output = "";
    for (let i = 0; i < text.length; i++) {
      if (i < frame) {
        output += text[i];
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.innerHTML = output;
    frame++;
    if (frame <= text.length) {
      requestAnimationFrame(update);
    }
  }

  update();
}

// Selecciona cada línea y aplica el efecto
const el1 = document.getElementById("scramble1");
const el2 = document.getElementById("scramble2");

textScrambleEffect(el1, el1.textContent);
setTimeout(() => {
  textScrambleEffect(el2, el2.textContent);
}, 1000); // Aplica el segundo efecto con un pequeño retraso

