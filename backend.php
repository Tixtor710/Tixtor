<?php
// Connect to the database
$host = 'localhost';
$dbname = 'forum';
$username = 'your_username';
$password = 'your_password';
$dsn = "mysql:host=$host;dbname=$dbname";
$pdo = new PDO($dsn, $username, $password);

// Check for form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Insert new post into database
  $author = $_POST['author'];
  $title = $_POST['title'];
  $body = $_POST['body'];
  $stmt = $pdo->prepare("INSERT INTO posts (author, title, body) VALUES (?, ?, ?)");
  $stmt->execute([$author, $title, $body]);
}

// Display existing posts
$stmt = $pdo->query("SELECT * FROM posts ORDER BY created_at DESC");
while ($row = $stmt->fetch()) {
  echo '<div>';
  echo '<h2>' . $row['title'] . '</h2>';
  echo '<p>Posted by ' . $row['author'] . ' on ' . $row['created_at'] . '</p>';
  echo '<p>' . $row['body'] . '</p>';
  echo '</div>';
}

// Display form to add new post
echo '<form method="post">';
echo '<label for="author">Name:</label><br>';
echo '<input type="text" id="author" name="author"><br>';
echo '<label for="title">Title:</label><br>';
echo '<input type="text" id="title" name="title"><br>';
echo '<label for="body">Body:</label><br>';
echo '<textarea id="body" name="body"></textarea><br>';
echo '<input type="submit" value="Submit">';
echo '</form>';
?>
