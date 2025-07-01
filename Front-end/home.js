const boxes = document.querySelectorAll('.box');

const observar = new IntersectionObserver(entries => { // Essas setas é uma função, inveis de usar fuction, usa a =>. Código mais limpo e curto

  entries.forEach(entry => {
    if (entry.isIntersecting) { // É uma propriedade booleana (true ou false)
      entry.target.classList.add('appear');
    } else {
      entry.target.classList.remove('appear');
    }
  });
}, {
  threshold: 0.4 // 40% visível já dispara a animação

})

boxes.forEach(box => { observar.observe(box); }); //pense no => no seu código como "execute esta função com estes parâmetros". Ele aponta para o bloco de código que será executado.

// Menu Hambúrguer
function clickMenu() {

  const ul = document.querySelector('#itens ul');
  ul.classList.toggle('show');
};


// Verificar se está em mobile, carrousel
if (window.innerWidth <= 768) {
  const swiper = new Swiper('.mySwiperCategorias', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
