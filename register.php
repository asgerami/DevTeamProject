<?php
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $age = $_POST["age"];
    $bio = $_POST["bio"];
    $roles = $_POST["roles"];

    $sql = "INSERT INTO users (full_name, email, password, age, bio, roles)
            VALUES ('$full_name', '$email', '$password', $age, '$bio', '$roles')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
