document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const email = document.getElementById('input-email');
    const senha = document.getElementById('input-passaword');
    const cadastroLink = document.querySelector('.cadastro-link');

    // Mostrar/ocultar senha
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

        // Cria uma expressão regular (Regex) para validar o formato do e-mail.
        // ^ -> início da string
        // [^\s@]+ -> um ou mais caracteres que NÃO sejam espaço (\s) ou @
        // @ -> obrigatório ter um "@" depois
        // [^\s@]+ -> novamente, um ou mais caracteres que NÃO sejam espaço ou @ (parte do domínio)
        // \. -> o ponto literal, separando o domínio da extensão (ex: ".com")
        // [^\s@]+ -> a extensão deve ter um ou mais caracteres, sem espaço ou @
        // $ -> fim da string
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Testa se o valor digitado no campo de e-mail NÃO corresponde ao padrão da expressão regular
        if (!emailRegex.test(email.value)) {
            // Se não corresponder, exibe um alerta para o usuário informando que o e-mail é inválido
            alert('Por favor, insira um e-mail válido.');
            // Interrompe a execução da função, impedindo que o formulário seja enviado
            return;
        }

        // Validação da senha preenchida
        if (senha.value.trim() === '') {
            alert('Por favor, insira sua senha.');
            return;
        }

        const senhaValor = senha.value;

        // Limite mínimo
        if (senhaValor.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        // Limite máximo
        if (senhaValor.length > 15) {
            alert('A senha não pode ter mais que 15 caracteres.');
            return;
        }

        // Critérios de senha forte
        const temMaiuscula = /[A-Z]/.test(senhaValor);
        const temMinuscula = /[a-z]/.test(senhaValor);
        const temNumero = /[1-9]/.test(senhaValor);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(senhaValor);

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
        window.location.href = '';  // redireciona para a página de troca
    });

    // Redirecionamento ao clicar no link de cadastro
    cadastroLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'cadastro.html';
    });
});
