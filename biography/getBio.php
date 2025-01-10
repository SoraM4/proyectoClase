<?php
$servername = "localhost";
$username = "mario";
$password = "mario2001";
$dbname = "call_of_cthulhu";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM biography";
$result = $conn->query($sql);

$bio = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $bio[] = $row;
    }
}

$conn->close();

// Devolver datos en formato JSON
echo json_encode($bio);
?>