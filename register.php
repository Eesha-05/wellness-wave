
<?php
session_start();
header('Content-Type: application/json');

// Process registration request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirm_password'] ?? '';
    
    // Validate input
    if (empty($username) || empty($password) || empty($confirmPassword)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required'
        ]);
        exit;
    }
    
    if (strlen($username) < 3) {
        echo json_encode([
            'success' => false,
            'message' => 'Username must be at least 3 characters long'
        ]);
        exit;
    }
    
    if (strlen($password) < 6) {
        echo json_encode([
            'success' => false,
            'message' => 'Password must be at least 6 characters long'
        ]);
        exit;
    }
    
    if ($password !== $confirmPassword) {
        echo json_encode([
            'success' => false,
            'message' => 'Passwords do not match'
        ]);
        exit;
    }
    
    // Default users
    $defaultUsers = [
        ['username' => 'user', 'password' => 'password', 'role' => 'user'],
        ['username' => 'admin', 'password' => 'admin123', 'role' => 'admin']
    ];
    
    // Make sure the data directory exists
    if (!file_exists('../data')) {
        mkdir('../data', 0777, true);
    }
    
    // Load registered users
    $usersFile = '../data/users.json';
    $registeredUsers = [];
    if (file_exists($usersFile)) {
        $registeredUsers = json_decode(file_get_contents($usersFile), true);
    }
    
    // Check if username already exists
    foreach ($defaultUsers as $user) {
        if ($user['username'] === $username) {
            echo json_encode([
                'success' => false,
                'message' => 'Username already exists'
            ]);
            exit;
        }
    }
    
    foreach ($registeredUsers as $user) {
        if ($user['username'] === $username) {
            echo json_encode([
                'success' => false,
                'message' => 'Username already exists'
            ]);
            exit;
        }
    }
    
    // Create new user
    $newUser = [
        'id' => time(),
        'username' => $username,
        'password' => $password,
        'role' => 'user', // Only allow registering as user
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    // Add to registered users
    $registeredUsers[] = $newUser;
    
    // Save to file
    file_put_contents($usersFile, json_encode($registeredUsers));
    
    echo json_encode([
        'success' => true,
        'message' => 'Registration successful. You can now log in.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
