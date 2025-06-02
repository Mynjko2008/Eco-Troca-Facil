// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário
    const form = document.querySelector('form');
    // Seleciona o campo de nome
    const nome = document.getElementById('input-nome');
    // Seleciona o campo de email
    const email = document.getElementById('input-email');
    // Seleciona o campo de estado
    const estado = document.getElementById('estado');
    // Seleciona o campo de senha
    const senha = document.getElementById('input-senha');
    // Seleciona o campo de confirmação de senha
    const confirmarSenha = document.getElementById('input-confirmar-senha');
    // Seleciona o link de login
    const loginLink = document.querySelector('.login-link');

    // Adiciona evento de clique a cada ícone de "mostrar/ocultar senha"
    document.querySelectorAll('.toggle-password').forEach(function (icon) {
        icon.addEventListener('click', function () {
            // Obtém o campo de senha associado ao ícone clicado
            const target = document.getElementById(this.dataset.target);
            // Alterna entre mostrar e ocultar a senha
            if (target.type === 'password') {
                target.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                target.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Adiciona evento de envio ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        // Verifica se o campo de nome está preenchido
        if (nome.value.trim() === '') {
            alert('Por favor, preencha o nome completo.');
            nome.focus();
            return;
        }

        // Valida o formato do e-mail
        if (!validarEmail(email.value)) {
            alert('Por favor, insira um e-mail válido.');
            email.focus();
            return;
        }

        // Verifica se um estado foi selecionado
        if (estado.value === '') {
            alert('Por favor, selecione um estado.');
            estado.focus();
            return;
        }

        // Armazena o valor da senha
        const senhaValor = senha.value;

        // Validação da senha
        if (senhaValor.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres.');
            senha.focus();
            return;
        }

        if (senhaValor.length > 15) {
            alert('A senha não pode ter mais que 15 caracteres.');
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

        // Verifica se a confirmação de senha é igual à senha
        if (senhaValor !== confirmarSenha.value) {
            alert('As senhas não coincidem.');
            confirmarSenha.focus();
            return;
        }

        // Exibe mensagem de sucesso
        alert('Cadastro realizado com sucesso! Redirecionando para a tela de login...');

        // Redireciona para a página de login após 1,5 segundos
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 1500);
    });

    // Função para validar o formato do e-mail
    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Adiciona evento de clique ao link de login para redirecionar
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();  // Impede o comportamento padrão do link
        window.location.href = 'login.html';
    });
});
