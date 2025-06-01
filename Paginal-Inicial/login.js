document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const email = document.getElementById('input-email');
    const senha = document.getElementById('input-passaword');
    const cadastroLink = document.querySelector('.cadastro-link');

    // ✅ Mostrar/ocultar senha
    document.querySelectorAll('.toggle-password').forEach(function (icon) {
        icon.addEventListener('click', function () {
            const targetInput = document.getElementById(this.getAttribute('data-target'));
            const isPassword = targetInput.getAttribute('type') === 'password';

            targetInput.setAttribute('type', isPassword ? 'text' : 'password');

            // Alternar ícone
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validação do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validação da senha preenchida
        if (senha.value.trim() === '') {
            alert('Por favor, insira sua senha.');
            return;
        }

        const senhaValor = senha.value;

        // Critérios de senha forte
        const temMaiuscula = /[A-Z]/.test(senhaValor);
        const temMinuscula = /[a-z]/.test(senhaValor);
        const temNumero = /[0-9]/.test(senhaValor);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(senhaValor);

        if (senhaValor.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        if (!temMaiuscula) {
            alert('A senha deve conter pelo menos uma letra MAIÚSCULA.');
            return;
        }

        if (!temMinuscula) {
            alert('A senha deve conter pelo menos uma letra minúscula.');
            return;
        }

        if (!temNumero) {
            alert('A senha deve conter pelo menos um número.');
            return;
        }

        if (!temEspecial) {
            alert('A senha deve conter pelo menos um caractere especial (ex: @, #, $, etc.).');
            return;
        }

        // Se tudo estiver certo
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';  // redireciona para a página de troca
    });

    // Redirecionamento ao clicar no link de cadastro
    cadastroLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'cadastro.html';
    });
});
