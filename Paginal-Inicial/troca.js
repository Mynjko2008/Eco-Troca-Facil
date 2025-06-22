document.addEventListener('DOMContentLoaded', function () {
    const tipoAcao = document.getElementById('tipo-acao');
    const form = document.querySelector('form');
    const enviarBtn = document.getElementById('enviar-btn');

    const campos = {
        usuarioParceiro: document.getElementById('usuario-parceiro'),
        itemParceiro: document.getElementById('item-parceiro'),
        categoriaDoacao: document.getElementById('categoria-doacao')
    };

    const labels = {
        usuarioParceiro: document.querySelector('label[for="usuario-parceiro"]'),
        itemParceiro: document.querySelector('label[for="item-parceiro"]'),
        categoriaDoacao: document.querySelector('label[for="categoria-doacao"]')
    };

    function esconderCampos() {
        campos.usuarioParceiro.style.display = 'none';
        labels.usuarioParceiro.style.display = 'none';

        campos.itemParceiro.style.display = 'none';
        labels.itemParceiro.style.display = 'none';

        campos.categoriaDoacao.style.display = 'none';
        labels.categoriaDoacao.style.display = 'none';
    }

    function mostrarTroca() {
        campos.usuarioParceiro.style.display = 'block';
        labels.usuarioParceiro.style.display = 'block';

        campos.itemParceiro.style.display = 'block';
        labels.itemParceiro.style.display = 'block';
    }

    function mostrarDoacao() {
        campos.categoriaDoacao.style.display = 'block';
        labels.categoriaDoacao.style.display = 'block';
    }

    tipoAcao.addEventListener('change', function () {
        esconderCampos();
        if (this.value === 'tr') mostrarTroca();
        else if (this.value === 'do') mostrarDoacao();
    });

    form.addEventListener('submit', function () {
        const acao = tipoAcao.value;

        if (acao === 'tr') {
            alert("Troca realizada com sucesso!");
        } else if (acao === 'do') {
            alert("Doação realizada com sucesso!");
        }

        setTimeout(() => {
            if (confirm("Deseja voltar à tela de início?")) {
                window.location.href = "home.html";
            }
        }, 500);

        // Não usamos preventDefault — deixamos o form ser enviado normalmente
    });

    esconderCampos();
});
