<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include("conexao.php");

function limpar($v) {
    return htmlspecialchars(trim($v));
}

$nome = limpar($_POST['nome-usuario']);
$tipo = $_POST['tipo-acao'] === 'tr' ? 'trocar' : 'doar';
$item = limpar($_POST['item-oferecido']);
$parceiro = $_POST['usuario-parceiro'] ?? null;
$item_parceiro = $_POST['item-parceiro'] ?? null;
$categoria = $_POST['categoria-doacao'] ?? null;

// Se for troca, verificar se o parceiro existe
if ($tipo === 'trocar') {
    $verifica = $conn->prepare("SELECT id FROM usuarios WHERE nome = ?");
    $verifica->bind_param("s", $parceiro);
    $verifica->execute();
    $res = $verifica->get_result();

    if ($res->num_rows === 0) {
        echo "parceiro_nao_encontrado";
        exit;
    }
}

$sql = "INSERT INTO objetos (nome_usuario, tipo_acao, item_oferecido, usuario_parceiro, item_parceiro, categoria_doacao)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo "erro_preparar";
    exit;
}

$stmt->bind_param("ssssss", $nome, $tipo, $item, $parceiro, $item_parceiro, $categoria);

if ($stmt->execute()) {
    echo "sucesso";
} else {
    echo "erro_inserir";
}

$conn->close();
?>
