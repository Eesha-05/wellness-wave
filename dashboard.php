
<div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg shadow overflow-hidden">
            <div class="flex justify-between items-start pb-2">
                <h3 class="text-sm font-medium text-gray-500">Next Collection</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="text-2xl font-bold">Tomorrow, 9:00 AM</div>
            <p class="text-xs text-gray-500 mt-1">Regular Waste</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow overflow-hidden">
            <div class="flex justify-between items-start pb-2">
                <h3 class="text-sm font-medium text-gray-500">Monthly Waste</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
            <div class="text-2xl font-bold">1,240 kg</div>
            <p class="text-xs text-gray-500 mt-1">12% less than last month</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow overflow-hidden">
            <div class="flex justify-between items-start pb-2">
                <h3 class="text-sm font-medium text-gray-500">Recycling Rate</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>
            <div class="text-2xl font-bold">42%</div>
            <p class="text-xs text-gray-500 mt-1">5% increase from last month</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow overflow-hidden">
            <div class="flex justify-between items-start pb-2">
                <h3 class="text-sm font-medium text-gray-500">Active Alerts</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="text-2xl font-bold">2</div>
            <p class="text-xs text-gray-500 mt-1">Pending resolution</p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow">
            <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg font-medium">Waste Composition</h3>
                <p class="text-sm text-gray-500">Distribution of waste by type</p>
            </div>
            <div class="p-4 h-80">
                <canvas id="wasteCompositionChart"></canvas>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow">
            <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg font-medium">Weekly Collection Stats</h3>
                <p class="text-sm text-gray-500">Waste collected over the week</p>
            </div>
            <div class="p-4 h-80">
                <canvas id="weeklyCollectionChart"></canvas>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-lg shadow">
        <div class="px-4 py-5 border-b border-gray-200">
            <h3 class="text-lg font-medium">Recent Collections</h3>
            <p class="text-sm text-gray-500">Latest waste pickups</p>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php
                    $recentCollections = [
                        ['date' => 'Oct 15, 2023', 'type' => 'Regular Waste', 'amount' => '85 kg', 'status' => 'Completed'],
                        ['date' => 'Oct 12, 2023', 'type' => 'Recyclables', 'amount' => '32 kg', 'status' => 'Completed'],
                        ['date' => 'Oct 10, 2023', 'type' => 'Regular Waste', 'amount' => '78 kg', 'status' => 'Completed'],
                        ['date' => 'Oct 8, 2023', 'type' => 'Hazardous', 'amount' => '5 kg', 'status' => 'Completed'],
                    ];

                    foreach ($recentCollections as $collection) {
                        echo '<tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">' . $collection['date'] . '</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">' . $collection['type'] . '</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">' . $collection['amount'] . '</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm">
                                    <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        ' . $collection['status'] . '
                                    </span>
                                </td>
                            </tr>';
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Waste composition chart
    const wasteData = [
        { name: "Organic", value: 35, color: "#4ade80" },
        { name: "Recyclable", value: 25, color: "#60a5fa" },
        { name: "Non-Recyclable", value: 30, color: "#f87171" },
        { name: "Hazardous", value: 10, color: "#fbbf24" },
    ];
    
    const wasteCtx = document.getElementById('wasteCompositionChart').getContext('2d');
    new Chart(wasteCtx, {
        type: 'doughnut',
        data: {
            labels: wasteData.map(d => d.name),
            datasets: [{
                data: wasteData.map(d => d.value),
                backgroundColor: wasteData.map(d => d.color),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
    
    // Weekly collection stats chart
    const collectionData = [
        { name: "Mon", regular: 12, recyclable: 8 },
        { name: "Tue", regular: 8, recyclable: 10 },
        { name: "Wed", regular: 15, recyclable: 12 },
        { name: "Thu", regular: 10, recyclable: 7 },
        { name: "Fri", regular: 13, recyclable: 9 },
        { name: "Sat", regular: 18, recyclable: 14 },
        { name: "Sun", regular: 5, recyclable: 3 },
    ];
    
    const collectionCtx = document.getElementById('weeklyCollectionChart').getContext('2d');
    new Chart(collectionCtx, {
        type: 'bar',
        data: {
            labels: collectionData.map(d => d.name),
            datasets: [
                {
                    label: 'Regular Waste',
                    data: collectionData.map(d => d.regular),
                    backgroundColor: '#f87171',
                },
                {
                    label: 'Recyclable',
                    data: collectionData.map(d => d.recyclable),
                    backgroundColor: '#60a5fa',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: false,
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
</script>
