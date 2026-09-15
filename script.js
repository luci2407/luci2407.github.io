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



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalLink = document.getElementById("modal-link");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll(".project-pic").forEach(pic => {
    pic.addEventListener("click", () => {
      modalImg.src = pic.dataset.img || pic.src;
      modalTitle.textContent = pic.dataset.title || "";
      modalDesc.textContent = pic.dataset.desc || "";

      if (pic.dataset.link) {
        modalLink.href = pic.dataset.link;
        modalLink.style.display = "inline-block";
      } else {
        modalLink.style.display = "none";
      }

      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // evita scroll de fondo
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  // cerrar al hacer click fuera de la caja
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

