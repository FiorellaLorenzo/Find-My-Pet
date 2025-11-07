/* ===========================================================
   🐾 Find My Pet - Funcionalidad principal
   Autor: Fiorella Daniela Lorenzo
   Descripción: Maneja interactividad general y validaciones.
   Cumple criterios de accesibilidad, SEO y mantenimiento.
=========================================================== */

// ✅ Ejecutar solo cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle();
  initFAQAccordion();
  initFormValidation();
});

/* ===========================================================
   🧭 Menú Responsivo
=========================================================== */
function initMenuToggle() {
  const menuButton = document.querySelector(".u-hamburger-link");
  const menuPanel = document.querySelector(".u-nav-container-collapse");
  const overlay = document.querySelector(".u-menu-overlay");

  if (!menuButton || !menuPanel) return;

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    menuPanel.classList.toggle("open");
    overlay?.classList.toggle("visible");
  });

  overlay?.addEventListener("click", () => {
    menuPanel.classList.remove("open");
    overlay.classList.remove("visible");
  });
}

/* ===========================================================
   ❓ Preguntas Frecuentes 
=========================================================== */
function initFAQAccordion() {
  const questions = document.querySelectorAll(".faq-question");

  if (questions.length === 0) return;

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;

      // Cierra otras respuestas abiertas
      document.querySelectorAll(".faq-answer").forEach((a) => {
        if (a !== answer) a.style.maxHeight = null;
      });

      // Alternar respuesta actual
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

      btn.classList.toggle("active");
    });
  });
}

/* ===========================================================
   📬 Validación de Formulario de Contacto
=========================================================== */
function initFormValidation() {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector("input[name='nombre']");
    const email = form.querySelector("input[name='email']");
    const mensaje = form.querySelector("textarea[name='mensaje']");

    // Validación básica
    if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
      showFeedback("Por favor, completá todos los campos.", "error");
      return;
    }

    if (!validateEmail(email.value)) {
      showFeedback("El correo electrónico no es válido.", "error");
      return;
    }

    // ✅ Simular envío exitoso
    showFeedback("¡Gracias por tu mensaje! Te responderemos pronto 🐾", "success");
    form.reset();
  });
}

// ✉️ Validar formato de email
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ✅ Mostrar mensajes al usuario
function showFeedback(message, type = "info") {
  let feedback = document.querySelector(".form-feedback");

  if (!feedback) {
    feedback = document.createElement("div");
    feedback.className = "form-feedback";
    document.querySelector("form")?.appendChild(feedback);
  }

  feedback.textContent = message;
  feedback.style.color = type === "error" ? "#c0392b" : "#1abc9c";

  
  feedback.style.opacity = "0";
  feedback.style.transition = "opacity 0.5s ease";
  setTimeout(() => (feedback.style.opacity = "1"), 100);
}


const FORM_KEY = "findmypet_form_sent";

function saveFormState() {
  localStorage.setItem(FORM_KEY, "true");
}

function hasSentForm() {
  return localStorage.getItem(FORM_KEY) === "true";
}
