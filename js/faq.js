document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;

      if (answer.classList.contains('open')) {
        answer.classList.remove('open');
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        answer.classList.add('open');
      }
    });
  });
});

