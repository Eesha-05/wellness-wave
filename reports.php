
<?php
session_start();
header('Content-Type: application/json');

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Authentication required'
    ]);
    exit;
}

// Connect to database - in a full implementation, use proper DB connection
// For this demo, we'll use a JSON file to store the reports
$reportsFile = '../data/reports.json';

// Make sure the data directory exists
if (!file_exists('../data')) {
    mkdir('../data', 0777, true);
}

// Create the reports file if it doesn't exist
if (!file_exists($reportsFile)) {
    file_put_contents($reportsFile, json_encode([]));
}

// Handle different actions
$action = isset($_GET['action']) ? $_GET['action'] : (isset($_POST['action']) ? $_POST['action'] : '');

switch ($action) {
    case 'submit_report':
        submitReport();
        break;
    case 'get_user_reports':
        getUserReports();
        break;
    case 'get_all_reports':
        getAllReports();
        break;
    case 'update_report_status':
        updateReportStatus();
        break;
    default:
        echo json_encode([
            'success' => false,
            'message' => 'Invalid action'
        ]);
}

function submitReport() {
    global $reportsFile;
    
    // Get form data
    $issueType = $_POST['issue_type'] ?? '';
    $date = $_POST['date'] ?? date('Y-m-d');
    $location = $_POST['location'] ?? '';
    $description = $_POST['description'] ?? '';
    
    // Validate required fields
    if (empty($issueType) || empty($location) || empty($description)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required'
        ]);
        return;
    }
    
    // Process images if any
    $images = [];
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'image_data_') === 0) {
            $images[] = $value;
        }
    }
    
    // Create new report
    $newReport = [
        'id' => time() . rand(100, 999),
        'type' => $issueType,
        'date' => date('M d, Y', strtotime($date)),
        'location' => $location,
        'description' => $description,
        'status' => 'pending',
        'images' => $images,
        'user_id' => $_SESSION['user_id'],
        'reportedBy' => $_SESSION['username'],
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    // Load existing reports
    $reports = json_decode(file_get_contents($reportsFile), true);
    
    // Add new report
    $reports[] = $newReport;
    
    // Save reports
    file_put_contents($reportsFile, json_encode($reports));
    
    echo json_encode([
        'success' => true,
        'message' => 'Report submitted successfully',
        'report' => $newReport
    ]);
}

function getUserReports() {
    global $reportsFile;
    
    // Load reports
    $reports = json_decode(file_get_contents($reportsFile), true);
    
    // Filter reports for current user
    $userReports = array_filter($reports, function($report) {
        return $report['user_id'] == $_SESSION['user_id'];
    });
    
    // Sort by date (newest first)
    usort($userReports, function($a, $b) {
        return strtotime($b['created_at']) - strtotime($a['created_at']);
    });
    
    echo json_encode([
        'success' => true,
        'reports' => array_values($userReports)
    ]);
}

function getAllReports() {
    global $reportsFile;
    
    // Check if user is admin
    if ($_SESSION['role'] !== 'admin') {
        echo json_encode([
            'success' => false,
            'message' => 'Access denied'
        ]);
        return;
    }
    
    // Load reports
    $reports = json_decode(file_get_contents($reportsFile), true);
    
    // Sort by date (newest first)
    usort($reports, function($a, $b) {
        return strtotime($b['created_at']) - strtotime($a['created_at']);
    });
    
    echo json_encode([
        'success' => true,
        'reports' => $reports
    ]);
}

function updateReportStatus() {
    global $reportsFile;
    
    // Check if user is admin
    if ($_SESSION['role'] !== 'admin') {
        echo json_encode([
            'success' => false,
            'message' => 'Access denied'
        ]);
        return;
    }
    
    $reportId = $_POST['report_id'] ?? '';
    $status = $_POST['status'] ?? '';
    
    if (empty($reportId) || empty($status)) {
        echo json_encode([
            'success' => false,
            'message' => 'Report ID and status are required'
        ]);
        return;
    }
    
    // Load reports
    $reports = json_decode(file_get_contents($reportsFile), true);
    
    // Find and update report
    $updated = false;
    foreach ($reports as &$report) {
        if ($report['id'] == $reportId) {
            $report['status'] = $status;
            $report['updated_at'] = date('Y-m-d H:i:s');
            $updated = true;
            break;
        }
    }
    
    if (!$updated) {
        echo json_encode([
            'success' => false,
            'message' => 'Report not found'
        ]);
        return;
    }
    
    // Save reports
    file_put_contents($reportsFile, json_encode($reports));
    
    echo json_encode([
        'success' => true,
        'message' => 'Report status updated successfully'
    ]);
}
?>
