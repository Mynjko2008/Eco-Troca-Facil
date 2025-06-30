<?php
// Inclui o arquivo de conexão com o banco de dados
include("conexao.php");

$categoria = $_GET['categoria'] ?? null; // pega a categoria da URL, exemplo: catalogo.php?categoria=roupas

// Se a variável $categoria existir, faz um SELECT filtrando pela categoria
if ($categoria) {
    $sql = "SELECT * FROM objetos WHERE categoria_doacao = ?";
    $stmt = $conn->prepare($sql); // prepara a query para evitar SQL Injection
    $stmt->bind_param("s", $categoria); // substitui o ? pela variável $categoria (s = string)
} else {
     // Se não houver categoria na URL, seleciona todos os itens
    $sql = "SELECT * FROM objetos";
    $stmt = $conn->prepare($sql);
}

// Executa a consulta preparada acima
$stmt->execute();

// Pega o resultado da execução da consulta
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Catálogo</title>
    <link rel="stylesheet" href="../Front-end/home.css">
</head>
<body>


       <!-- Exibe o título com o nome da categoria filtrada ou "Todos os Itens" -->
    <h1>Catálogo de <?php echo $categoria ?? 'Todos os Itens'; ?></h1>

    <div class="catalogo">
           <!-- Loop para percorrer cada linha retornada pelo banco -->
        <?php while($row = $result->fetch_assoc()) { ?>
            <div class="item">
                <h3><?php echo $row['item_oferecido']; ?></h3>
                <p>Categoria: <?php echo $row['categoria_doacao']; ?></p>
                <p>Tipo: <?php echo $row['tipo_acao']; ?></p>
                <p>Usuário: <?php echo $row['nome_usuario']; ?></p>
            </div>
        <?php } ?>
    </div>
</body>
</html>

<?php
// Fecha a conexão com o banco de dados após terminar tudo
$conn->close();
?>