document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nome = document.getElementById('input-nome');
    const email = document.getElementById('input-email');
    const estado = document.getElementById('estado');
    const senha = document.getElementById('input-senha');
    const confirmarSenha = document.getElementById('input-confirmar-senha');
    const loginLink = document.querySelector('.login-link');

    // Mostrar/ocultar senha
    document.querySelectorAll('.toggle-password').forEach(function (icon) {
        icon.addEventListener('click', function () {
            const target = document.getElementById(this.dataset.target);
            const isPassword = target.type === 'password';
            target.type = isPassword ? 'text' : 'password';
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Validação e envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Agora vamos usar fetch

        // Validações no front-end
        if (nome.value.trim() === '') {
            alert('Por favor, preencha o nome completo.');
            nome.focus();
            return;
        }

        if (!validarEmail(email.value)) {
            alert('Por favor, insira um e-mail válido.');
            email.focus();
            return;
        }

        if (estado.value === '') {
            alert('Por favor, selecione um estado.');
            estado.focus();
            return;
        }

        const senhaValor = senha.value;

        if (senhaValor.length < 8 || senhaValor.length > 15) {
            alert('A senha deve ter entre 8 e 15 caracteres.');
            senha.focus();
            return;
        }

        if (!/[A-Z]/.test(senhaValor)) {
            alert('A senha deve conter pelo menos uma letra MAIÚSCULA.');
            senha.focus();
            return;
        }

        if (!/[a-z]/.test(senhaValor)) {
            alert('A senha deve conter pelo menos uma letra minúscula.');
            senha.focus();
            return;
        }

        if (!/[0-9]/.test(senhaValor)) {
            alert('A senha deve conter pelo menos um número.');
            senha.focus();
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(senhaValor)) {
            alert('A senha deve conter pelo menos um caractere especial.');
            senha.focus();
            return;
        }

        if (senhaValor !== confirmarSenha.value) {
            alert('As senhas não coincidem.');
            confirmarSenha.focus();
            return;
        }

        // Envio via fetch
        const formData = new FormData(form);

        fetch('../Back-end/cadastro.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            const resposta = data.trim();

            if (resposta === 'success') {
                alert('✅ Cadastro realizado com sucesso!');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1000);
            } else if (resposta === 'senha_invalida') {
                alert('❌ A senha não atende aos critérios de segurança.');
            } else {
                alert('Erro inesperado no cadastro: ' + resposta);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro de conexão com o servidor.');
        });
    });

    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });
});
