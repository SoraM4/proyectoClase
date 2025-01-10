<?php
$mysqli = new mysqli("localhost", "mario", "mario2001", "call_of_cthulhu");

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Error de conexión con la base de datos"]);
    exit();
}

$id = intval($_GET['id']);

$query = $mysqli->prepare("SELECT character_data FROM characters WHERE ID = ?");
$query->bind_param("i", $id);
$query->execute();
$query->bind_result($character_data);
$query->fetch();

if ($character_data) {
    echo json_encode(["success" => true, "character" => json_decode($character_data)]);
} else {
    http_response_code(404);
    echo json_encode(["success" => false, "error" => "No se encontró ningún character con ese ID"]);
}

$query->close();
$mysqli->close();
?>
