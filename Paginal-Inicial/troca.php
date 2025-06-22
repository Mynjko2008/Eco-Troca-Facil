<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include("conexao.php");

echo "<pre>";
print_r($_POST);
echo "</pre>";

function limpar($v) {
    return htmlspecialchars(trim($v));
}

$nome = limpar($_POST['nome-usuario']);
$tipo = $_POST['tipo-acao'] === 'tr' ? 'trocar' : 'doar';
$item = limpar($_POST['item-oferecido']);
$parceiro = $_POST['usuario-parceiro'] ?? null;
$item_parceiro = $_POST['item-parceiro'] ?? null;
$categoria = $_POST['categoria-doacao'] ?? null;

$sql = "INSERT INTO objetos (nome_usuario, tipo_acao, item_oferecido, usuario_parceiro, item_parceiro, categoria_doacao)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Erro ao preparar: " . $conn->error);
}

$stmt->bind_param("ssssss", $nome, $tipo, $item, $parceiro, $item_parceiro, $categoria);

if ($stmt->execute()) {
    echo " Registro inserido com sucesso na tabela `objetos`.";
} else {
    echo " Erro ao inserir: " . $stmt->error;
}

$conn->close();
?>
