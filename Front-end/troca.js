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
        campos.usuarioParceiro.value = ''; // limpa o campo

        campos.itemParceiro.style.display = 'none';
        labels.itemParceiro.style.display = 'none';
        campos.itemParceiro.value = ''; // limpa o campo

        campos.categoriaDoacao.style.display = 'none';
        labels.categoriaDoacao.style.display = 'none';
        campos.categoriaDoacao.value = ''; // limpa o select
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

        // Limpa campos de troca por precaução
        campos.usuarioParceiro.value = '';
        campos.itemParceiro.value = '';
    }

    tipoAcao.addEventListener('change', function () {
        esconderCampos();
        if (this.value === 'tr') mostrarTroca();
        else if (this.value === 'do') mostrarDoacao();
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // controla o envio

        const formData = new FormData(form);

        fetch('../Back-end/troca.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                const resposta = data.trim();

                if (resposta === 'sucesso') {
                    alert("✅ Operação registrada com sucesso!");
                } else if (resposta === 'parceiro_nao_encontrado') {
                    alert("❌ O usuário parceiro informado não existe.");
                    return;
                } else {
                    alert("⚠️ Erro ao registrar. Código: " + resposta);
                    return;
                }

                setTimeout(() => {
                    if (confirm("Deseja voltar à tela de início?")) {
                        window.location.href = "home.html";
                    }
                }, 500);
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
                alert("Erro de conexão com o servidor.");
            });
    });

    esconderCampos(); // esconde tudo no início
});
