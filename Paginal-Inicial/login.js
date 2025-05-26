// ========== LOGIN ==========
if (window.location.pathname.includes("login.html")) {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("input-email").value.trim();
        const senha = document.getElementById("input-passaword").value.trim();

        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Aqui poderia ser uma chamada AJAX ou Fetch para o backend
        console.log("Login efetuado com sucesso!");
        alert("Login efetuado com sucesso!");

        // Redirecionamento simulado
        window.location.href = "dashboard.html";
    });
}
