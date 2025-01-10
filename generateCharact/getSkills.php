<?php
$servername = "localhost";
$username = "mario";
$password = "mario2001";
$dbname = "call_of_cthulhu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar habilidades
$sql = "SELECT id, name, base_percentage FROM skills";
$result = $conn->query($sql);

$skills = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $skills[] = $row;
    }
}
$conn->close();

echo json_encode($skills);
?>
