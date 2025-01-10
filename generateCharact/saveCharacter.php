<?php
$mysqli = new mysqli("localhost", "mario", "mario2001", "call_of_cthulhu");

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['ID'];
$character_data = json_encode($data);

$query = $mysqli->prepare("INSERT INTO characters (ID, character_data) VALUES (?, ?)");
$query->bind_param("is", $id, $character_data);

$response = $query->execute();
echo json_encode(["success" => $response]);

$query->close();
$mysqli->close();
?>
