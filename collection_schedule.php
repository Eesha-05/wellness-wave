
<div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-1 space-y-4">
            <div class="bg-white rounded-lg shadow">
                <div class="px-4 py-5 border-b border-gray-200">
                    <h3 class="text-lg font-medium">Calendar</h3>
                    <p class="text-sm text-gray-500">Select a date to view scheduled collections</p>
                </div>
                <div class="p-4">
                    <div id="calendar-container" class="border rounded-md overflow-hidden">
                        <!-- Calendar will be rendered here by JavaScript -->
                    </div>
                </div>
            </div>
            
            <button id="schedule-btn" class="w-full flex justify-center items-center gap-1 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Schedule New Collection
            </button>
            
            <!-- Dialog for scheduling -->
            <div id="schedule-dialog" class="fixed inset-0 z-10 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Schedule Collection
                                    </h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Set up a new waste collection. Click save when you're done.
                                        </p>
                                    </div>
                                    <form id="schedule-form" class="mt-4 space-y-4">
                                        <div class="grid gap-2">
                                            <label for="collection-date" class="block text-sm font-medium text-gray-700">Collection Date</label>
                                            <div class="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <input id="collection-date" name="collection_date" type="date" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                            </div>
                                        </div>
                                        <div class="grid gap-2">
                                            <label for="collection-time" class="block text-sm font-medium text-gray-700">Collection Time</label>
                                            <input id="collection-time" name="collection_time" type="time" value="09:00" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                        <div class="grid gap-2">
                                            <label for="waste-type" class="block text-sm font-medium text-gray-700">Waste Type</label>
                                            <select id="waste-type" name="waste_type" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                                <option value="regular">Regular Waste</option>
                                                <option value="recyclable">Recyclables</option>
                                                <option value="hazardous">Hazardous Waste</option>
                                                <option value="organic">Organic Waste</option>
                                            </select>
                                        </div>
                                        <div class="grid gap-2">
                                            <label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
                                            <input id="notes" name="notes" placeholder="Any special instructions" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button id="save-schedule-btn" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Save Schedule
                            </button>
                            <button id="cancel-schedule-btn" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow">
                <div class="px-4 py-5 border-b border-gray-200">
                    <h3 class="text-lg font-medium">Upcoming Collections</h3>
                    <p class="text-sm text-gray-500">All scheduled waste pickups</p>
                </div>
                <div class="p-4">
                    <div id="schedules-container" class="space-y-4">
                        <!-- Schedule items will be loaded via JavaScript -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.1/dist/js/datepicker-full.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.1/dist/css/datepicker.min.css" rel="stylesheet">

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Sample schedule data - in a real app, this would come from the server
    const scheduleItems = [
        { id: 1, date: "Monday, Oct 16", time: "9:00 AM", type: "Regular Waste", status: "Scheduled", icon: "trash" },
        { id: 2, date: "Thursday, Oct 19", time: "10:00 AM", type: "Recyclables", status: "Scheduled", icon: "recycle" },
        { id: 3, date: "Saturday, Oct 21", time: "8:30 AM", type: "Regular Waste", status: "Scheduled", icon: "trash" },
        { id: 4, date: "Monday, Oct 23", time: "9:00 AM", type: "Hazardous Waste", status: "Scheduled", icon: "alert-triangle" },
        { id: 5, date: "Thursday, Oct 26", time: "10:00 AM", type: "Recyclables", status: "Scheduled", icon: "recycle" },
    ];
    
    // Initialize datepicker
    const calendarEl = document.getElementById('calendar-container');
    const datepicker = new Datepicker(calendarEl, {
        autohide: true,
        format: 'mm/dd/yyyy',
        todayBtn: true,
        todayHighlight: true
    });
    
    // Set today's date initially
    datepicker.setDate(new Date());
    
    // Create schedule dialog control
    const scheduleDialog = document.getElementById('schedule-dialog');
    const scheduleBtn = document.getElementById('schedule-btn');
    const cancelScheduleBtn = document.getElementById('cancel-schedule-btn');
    const saveScheduleBtn = document.getElementById('save-schedule-btn');
    
    // Show dialog
    scheduleBtn.addEventListener('click', function() {
        scheduleDialog.classList.remove('hidden');
        // Set default date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.getElementById('collection-date').valueAsDate = tomorrow;
    });
    
    // Hide dialog on cancel
    cancelScheduleBtn.addEventListener('click', function() {
        scheduleDialog.classList.add('hidden');
    });
    
    // Handle schedule form submission
    saveScheduleBtn.addEventListener('click', function() {
        const form = document.getElementById('schedule-form');
        const formData = new FormData(form);
        
        // In a real app, you would send this to the server
        // For demo, we'll just add to the local list
        
        // Get form values
        const date = formData.get('collection_date');
        const time = formData.get('collection_time');
        const type = formData.get('waste_type');
        const notes = formData.get('notes');
        
        // Format date
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
        });
        
        // Format time
        const timeObj = new Date(`1970-01-01T${time}`);
        const formattedTime = timeObj.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit' 
        });
        
        // Get icon based on type
        let icon = 'trash';
        if (type === 'recyclable') icon = 'recycle';
        if (type === 'hazardous') icon = 'alert-triangle';
        if (type === 'organic') icon = 'leaf';
        
        // Format type name
        const typeMap = {
            'regular': 'Regular Waste',
            'recyclable': 'Recyclables',
            'hazardous': 'Hazardous Waste',
            'organic': 'Organic Waste'
        };
        
        // Create new schedule item
        const newItem = {
            id: Date.now(),
            date: formattedDate,
            time: formattedTime,
            type: typeMap[type] || type,
            status: 'Scheduled',
            icon: icon,
            notes: notes
        };
        
        // Add to schedules
        scheduleItems.push(newItem);
        
        // Refresh display
        renderSchedules();
        
        // Show success message
        showToast('Collection scheduled successfully', 'success');
        
        // Hide dialog
        scheduleDialog.classList.add('hidden');
        
        // Reset form
        form.reset();
    });
    
    function getIconSvg(icon) {
        switch(icon) {
            case 'trash':
                return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>`;
            case 'recycle':
                return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>`;
            case 'alert-triangle':
                return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>`;
            case 'leaf':
                return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>`;
            default:
                return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>`;
        }
    }
    
    // Render schedules
    function renderSchedules() {
        const container = document.getElementById('schedules-container');
        
        if (scheduleItems.length === 0) {
            container.innerHTML = `
                <div class="text-center py-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 class="mt-2 text-lg font-medium text-gray-900">No collections scheduled</h3>
                    <p class="mt-1 text-sm text-gray-500">
                        Create a new collection schedule by clicking the button.
                    </p>
                </div>
            `;
        } else {
            container.innerHTML = scheduleItems.map(item => `
                <div class="flex justify-between items-center p-4 border rounded-lg">
                    <div class="flex items-start gap-3">
                        <div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            ${getIconSvg(item.icon)}
                        </div>
                        <div>
                            <h4 class="font-medium">${item.type}</h4>
                            <div class="text-sm text-gray-500 flex items-center gap-2">
                                <span>${item.date}</span>
                                <span class="inline-block h-1 w-1 rounded-full bg-gray-300"></span>
                                <span>${item.time}</span>
                            </div>
                            ${item.notes ? `<p class="text-xs text-gray-500 mt-1">Note: ${item.notes}</p>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                            ${item.status}
                        </span>
                        <button type="button" class="reschedule-btn inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500" data-id="${item.id}">
                            Reschedule
                        </button>
                        <button type="button" class="cancel-btn inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500" data-id="${item.id}">
                            Cancel
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners for reschedule and cancel buttons
            document.querySelectorAll('.reschedule-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    showToast('Reschedule functionality would open a dialog', 'info');
                });
            });
            
            document.querySelectorAll('.cancel-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const index = scheduleItems.findIndex(item => item.id === id);
                    if (index !== -1) {
                        scheduleItems.splice(index, 1);
                        renderSchedules();
                        showToast('Collection canceled successfully', 'success');
                    }
                });
            });
        }
    }
    
    // Initial render
    renderSchedules();
});
</script>
