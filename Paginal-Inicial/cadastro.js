// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nome = document.getElementById('input-nome');
    const email = document.getElementById('input-email');
    const estado = document.getElementById('estado');
    const senha = document.getElementById('input-senha');
    const confirmarSenha = document.getElementById('input-confirmar-senha');
    const loginLink = document.querySelector('.login-link');

    document.querySelectorAll('.toggle-password').forEach(function (icon) {
        icon.addEventListener('click', function () {
            const target = document.getElementById(this.dataset.target);
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

    form.addEventListener('submit', function (event) {
        // REMOVE o event.preventDefault(); para permitir o envio
        // event.preventDefault();

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

        if (senhaValor !== confirmarSenha.value) {
            alert('As senhas não coincidem.');
            confirmarSenha.focus();
            return;
        }

        // Se todas as validações passarem, o formulário será enviado para o PHP
        // Nenhuma mensagem final em JS: quem trata é o cadastro.php
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
