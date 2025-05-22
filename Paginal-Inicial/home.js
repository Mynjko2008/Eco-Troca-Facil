const boxes = document.querySelectorAll('.box');

const observar = new IntersectionObserver(entries => { // Essas setas é uma função, inveis de usar fuction, usa a =>. Código mais limpo e curto

  entries.forEach(entry => {
    if (entry.isIntersecting) { // É uma propriedade booleana (true ou false)
      entry.target.classList.add('appear');
    }
  });
}, {
  threshold: 0.4 // 20% visível já dispara a animação
});

boxes.forEach(box => {
  observar.observe(box);
});