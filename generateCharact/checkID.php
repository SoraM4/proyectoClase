<?php
$mysqli = new mysqli("localhost", "mario", "mario2001", "call_of_cthulhu");

$id = intval($_GET['id']);
$query = $mysqli->prepare("SELECT COUNT(*) FROM characters WHERE ID = ?");
$query->bind_param("i", $id);
$query->execute();
$query->bind_result($count);
$query->fetch();

echo json_encode(["exists" => $count > 0]);

$query->close();
$mysqli->close();
?>
