document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const question = icon.closest('.faq-question');
    const answer = question.nextElementSibling;

    answer.classList.toggle('open');


    if (answer.classList.contains('open')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      icon.style.color = 'hsl(0, 94%, 66%)'; 
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      icon.style.color = 'hsl(231, 69%, 60%)';
    }
  });
});
