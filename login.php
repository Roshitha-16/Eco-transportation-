<?php
require 'db_connection.php';

// Get user input
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and execute the query
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User found, fetch the data
    $row = $result->fetch_assoc();

    // Verify the password
    if (password_verify($password, $row['password'])) {
        // Password is correct, redirect to dashboard
        header("Location: ../dashboard.html");
        exit();
    } else {
        echo "Invalid email or password.";
    }
} else {
    echo "User not found.";
}

$stmt->close();
$conn->close();
?>
