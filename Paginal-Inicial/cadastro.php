<?php
include("conexao.php");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$nome = $_POST['input-nome'];
$email = $_POST['input-email'];
$estado = $_POST['estado'];
$senha = password_hash($_POST['input-senha'], PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (nome, email, estado, senha) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $estado, $senha);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "erro: " . $conn->error;
}

$conn->close();
?>