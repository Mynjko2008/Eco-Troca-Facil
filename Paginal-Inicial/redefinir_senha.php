<?php
include("conexao.php");

$email = $_POST['input-email'] ?? '';
$nome = $_POST['input-nome'] ?? '';
$senhaNova = $_POST['input-senha'] ?? '';

if (empty($email) || empty($nome) || empty($senhaNova)) {
    echo "faltando_dados";
    exit;
}

$hash = password_hash($senhaNova, PASSWORD_DEFAULT);

// Verifica se o usuário existe
$sqlCheck = "SELECT * FROM usuarios WHERE email = ? AND nome = ?";
$stmtCheck = $conn->prepare($sqlCheck);
$stmtCheck->bind_param("ss", $email, $nome);
$stmtCheck->execute();
$result = $stmtCheck->get_result();

if ($result->num_rows === 1) {
    // Atualiza a senha
    $sqlUpdate = "UPDATE usuarios SET senha = ? WHERE email = ? AND nome = ?";
    $stmtUpdate = $conn->prepare($sqlUpdate);
    $stmtUpdate->bind_param("sss", $hash, $email, $nome);
    $stmtUpdate->execute();

    if ($stmtUpdate->affected_rows > 0) {
        echo "success";
    } else {
        echo "nenhuma_alteracao";
    }

    $stmtUpdate->close();
} else {
    echo "usuario_nao_encontrado";
}

$stmtCheck->close();
$conn->close();
