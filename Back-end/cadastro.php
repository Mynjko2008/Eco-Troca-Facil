<?php
include("conexao.php");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Função para validar senha com os mesmos critérios do JS
function validarSenha($senha) {
    if (strlen($senha) < 8 || strlen($senha) > 15) return false;
    if (!preg_match('/[A-Z]/', $senha)) return false;
    if (!preg_match('/[a-z]/', $senha)) return false;
    if (!preg_match('/[0-9]/', $senha)) return false;
    if (!preg_match('/[!@#$%^&*(),.?":{}|<>_\-+=\/\\[\]]/', $senha)) return false;
    return true;
}

// Captura os dados
$nome   = trim($_POST['input-nome']);
$email  = trim($_POST['input-email']);
$estado = trim($_POST['estado']);
$senha  = $_POST['input-senha'];

// Validação de senha no back-end
if (!validarSenha($senha)) {
    echo "senha_invalida";
    exit;
}

// Hash da senha
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

// Inserção segura com prepared statement
$sql = "INSERT INTO usuarios (nome, email, estado, senha) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $estado, $senhaHash);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "erro: " . $conn->error;
}

$conn->close();
?>
