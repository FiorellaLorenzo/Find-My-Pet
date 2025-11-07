<!-- 🔹 JS FUNCIONALIDAD -->
  <script>
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "✅ ¡Gracias por tu mensaje! Te responderemos pronto.";
        form.reset();
      } else {
        status.textContent = "❌ Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.";
      }
    });
  </script>
</body>
</html>
