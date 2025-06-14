document.addEventListener('DOMContentLoaded', function () {
    const tipoAcao = document.getElementById('tipo-acao');

    // Campos e labels da TROCA
    const campoUsuarioParceiro = document.getElementById('usuario-parceiro');
    const labelUsuarioParceiro = document.querySelector('label[for="usuario-parceiro"]');

    const campoItemParceiro = document.getElementById('item-parceiro');
    const labelItemParceiro = document.querySelector('label[for="item-parceiro"]');

    const botaoTrocar = document.querySelector('input[value="Trocar"]');

    // Campos e labels da DOAÇÃO
    const campoCategoriaDoacao = document.getElementById('categoria-doacao');
    const labelCategoriaDoacao = document.querySelector('label[for="categoria-doacao"]');

    const botaoDoar = document.querySelector('input[value="Doar"]');

    function esconderTodos() {
        // TROCA
        campoUsuarioParceiro.style.display = 'none';
        labelUsuarioParceiro.style.display = 'none';

        campoItemParceiro.style.display = 'none';
        labelItemParceiro.style.display = 'none';

        botaoTrocar.style.display = 'none';

        // DOAÇÃO
        campoCategoriaDoacao.style.display = 'none';
        labelCategoriaDoacao.style.display = 'none';

        botaoDoar.style.display = 'none';
    }

    function mostrarTroca() {
        campoUsuarioParceiro.style.display = 'block';
        labelUsuarioParceiro.style.display = 'block';

        campoItemParceiro.style.display = 'block';
        labelItemParceiro.style.display = 'block';

        botaoTrocar.style.display = 'inline-block';
    }

    function mostrarDoacao() {
        campoCategoriaDoacao.style.display = 'block';
        labelCategoriaDoacao.style.display = 'block';

        botaoDoar.style.display = 'inline-block';
    }

    tipoAcao.addEventListener('change', function () {
        esconderTodos();

        if (this.value === 'tr') {
            mostrarTroca();
        } else if (this.value === 'do') {
            mostrarDoacao();
        }
    });

    // Ocultar ao iniciar
    esconderTodos();
});
