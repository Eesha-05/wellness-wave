
<div class="tabs mb-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white p-1 rounded-lg shadow-sm border">
        <a href="index.php?tab=dashboard" class="tab-item <?php echo (!isset($_GET['tab']) || $_GET['tab'] == 'dashboard') ? 'active' : ''; ?>">Dashboard</a>
        <a href="index.php?tab=schedule" class="tab-item <?php echo (isset($_GET['tab']) && $_GET['tab'] == 'schedule') ? 'active' : ''; ?>">Collection</a>
        <a href="index.php?tab=reporting" class="tab-item <?php echo (isset($_GET['tab']) && $_GET['tab'] == 'reporting') ? 'active' : ''; ?>">Reporting</a>
        <a href="index.php?tab=recycling" class="tab-item <?php echo (isset($_GET['tab']) && $_GET['tab'] == 'recycling') ? 'active' : ''; ?>">Recycling</a>
    </div>
    <div class="flex justify-between items-center mt-4 mb-2">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            <span>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?></span>
        </div>
        <a href="logout.php" class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
        </a>
    </div>
</div>
