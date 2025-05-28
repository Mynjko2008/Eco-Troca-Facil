// ========== CADASTRO ==========
if (window.location.pathname.includes("cadastro.html")) {
    const cadastroForm = document.querySelector("form");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("input-nome").value.trim();
        const email = document.getElementById("input-email").value.trim();
        const estado = document.getElementById("estado").value;
        const senha = document.getElementById("input-senha").value;
        const confirmarSenha = document.getElementById("input-confirmar-senha").value;

        if (nome === "" || email === "" || estado === "" || senha === "" || confirmarSenha === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Aqui poderia ser uma chamada AJAX ou Fetch para o backend
        console.log("Cadastro realizado com sucesso!");
        alert("Cadastro realizado com sucesso!");

        // Redirecionamento simulado
        window.location.href = "login.html";
    });

    function validarEmail(email) {
        // Expressão regular simples para validar email
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
