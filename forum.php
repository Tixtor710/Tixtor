<?php
    // Connect to the database
    $host = 'localhost';
    $dbname = 'forum';
    $username = 'your_username';
    $password = 'your_password';
    $dsn = "mysql:host=$host;dbname=$dbname";
    $pdo = new PDO($dsn, $username, $password);

    // Display existing posts
    $stmt = $pdo->query("SELECT * FROM posts ORDER BY created_at DESC");
    while ($row = $stmt->fetch()) {
      echo '<div class="post">';
      echo '<h2>' . $row['title'] . '</h2>';
      echo '<p>Posted by ' . $row['author'] . ' on ' . $row['created_at'] . '</p>';
      echo '<p>' . $row['body'] . '</p>';
      echo '</div>';
    }
    ?>