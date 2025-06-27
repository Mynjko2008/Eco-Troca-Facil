<?php
include("conexao.php");

$email = $_POST['input-email'];
$senha = $_POST['input-passaword'];

$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $usuario = $result->fetch_assoc();
    if (password_verify($senha, $usuario['senha'])) {
        echo "success";
    } else {
        echo "senha_incorreta";
    }
} else {
    echo "usuario_nao_encontrado";
}

$conn->close();
?>