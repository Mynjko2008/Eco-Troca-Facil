// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário
    const form = document.querySelector('form');
    // Seleciona o campo de e-mail
    const email = document.getElementById('input-email');
    // Seleciona o campo de senha
    const senha = document.getElementById('input-passaword');
    // Seleciona o link de cadastro
    const cadastroLink = document.querySelector('.cadastro-link');

    // Mostrar/ocultar senha
    document.querySelectorAll('.toggle-password').forEach(function (icon) {
        // Adiciona evento de clique a cada ícone de mostrar/ocultar senha
        icon.addEventListener('click', function () {
            // Obtém o campo de senha associado ao ícone clicado
            const targetInput = document.getElementById(this.getAttribute('data-target'));
            // Verifica se o tipo atual do campo é "password"
            const isPassword = targetInput.getAttribute('type') === 'password';

            // Alterna entre 'text' e 'password'
            targetInput.setAttribute('type', isPassword ? 'text' : 'password');

            // Alternar ícone
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Adiciona evento de envio ao formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

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
            // Se o campo de senha estiver vazio, exibe um alerta
            alert('Por favor, insira sua senha.');
            return;
        }

        // Armazena o valor da senha
        const senhaValor = senha.value;

        // Limite mínimo
        if (senhaValor.length < 8) {
            // Se a senha tiver menos de 8 caracteres, exibe um alerta
            alert('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        // Limite máximo
        if (senhaValor.length > 15) {
            // Se a senha tiver mais de 15 caracteres, exibe um alerta
            alert('A senha não pode ter mais que 15 caracteres.');
            return;
        }

        // Critérios de senha forte
        const temMaiuscula = /[A-Z]/.test(senhaValor);  // Verifica se há ao menos uma letra maiúscula
        const temMinuscula = /[a-z]/.test(senhaValor);  // Verifica se há ao menos uma letra minúscula
        const temNumero = /[1-9]/.test(senhaValor);     // Verifica se há ao menos um número
        const temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(senhaValor); // Verifica se há caractere especial

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
        // Redireciona para a página de troca (preencha o link correto)
        window.location.href = 'cadastroitens.html';  
    });

    // Redirecionamento ao clicar no link de cadastro
    cadastroLink.addEventListener('click', function (e) {
        e.preventDefault();  // Impede o comportamento padrão do link
        // Redireciona para a página de cadastro
        window.location.href = 'cadastro.html';
    });
});
