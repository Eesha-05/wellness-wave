
<div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow">
                <div class="px-4 py-5 border-b border-gray-200">
                    <h3 class="text-lg font-medium">Report Waste Issue</h3>
                    <p class="text-sm text-gray-500">Submit a new waste-related problem or sanitation concern</p>
                </div>
                <div class="p-4">
                    <form id="report-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label for="issue-type" class="block text-sm font-medium text-gray-700">Issue Type</label>
                                <select id="issue-type" name="issue_type" required class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                    <option value="">Select issue type</option>
                                    <option value="illegal-dumping">Illegal Dumping</option>
                                    <option value="missed-collection">Missed Collection</option>
                                    <option value="bin-damage">Bin Damage</option>
                                    <option value="hazardous-waste">Hazardous Waste</option>
                                    <option value="sewage-issue">Sewage Issue</option>
                                    <option value="drainage-problem">Drainage Problem</option>
                                    <option value="contaminated-water">Contaminated Water</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div class="space-y-2">
                                <label for="date" class="block text-sm font-medium text-gray-700">Date of Observation</label>
                                <input type="date" id="date" name="date" required class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        
                        <div class="space-y-2">
                            <label for="address" class="block text-sm font-medium text-gray-700">Address/Location</label>
                            <div class="flex space-x-2">
                                <input type="text" id="address" name="location" placeholder="Enter location details" required class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <button type="button" id="get-location" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div class="space-y-2">
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea id="description" name="description" rows="4" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Describe the issue in detail" required></textarea>
                        </div>
                        
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700">Add Photos</label>
                            <div class="grid grid-cols-4 gap-4" id="image-preview-container">
                                <div class="border-2 border-gray-300 border-dashed rounded-md p-2 flex flex-col items-center justify-center h-24">
                                    <label for="file-upload" class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span class="mt-1 text-xs text-gray-500">Add Photo</span>
                                        <input id="file-upload" name="file" type="file" accept="image/*" class="sr-only">
                                    </label>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500">
                                Up to 4 photos. Each photo should be under 5MB.
                            </p>
                        </div>
                        
                        <div class="flex justify-end space-x-2">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Cancel
                            </button>
                            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Submit Report
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow">
                <div class="px-4 py-5 border-b border-gray-200">
                    <h3 class="text-lg font-medium">Your Recent Reports</h3>
                    <p class="text-sm text-gray-500">Track the status of your reports</p>
                </div>
                <div class="p-4">
                    <div id="user-complaints-container" class="space-y-4">
                        <!-- User complaints will be loaded here via JavaScript -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get location button
    document.getElementById('get-location').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    document.getElementById('address').value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    showToast('Location detected', 'success');
                },
                function() {
                    showToast('Unable to get your current location', 'error');
                }
            );
        } else {
            showToast("Your browser doesn't support geolocation", 'error');
        }
    });
    
    // Handle image upload and preview
    const fileUpload = document.getElementById('file-upload');
    const previewContainer = document.getElementById('image-preview-container');
    let uploadedFiles = [];
    
    fileUpload.addEventListener('change', function() {
        if (this.files && this.files[0] && uploadedFiles.length < 4) {
            const file = this.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                uploadedFiles.push({
                    file: file,
                    dataUrl: e.target.result
                });
                
                // Create preview element
                const previewDiv = document.createElement('div');
                previewDiv.className = 'relative rounded-md overflow-hidden h-24 bg-gray-100';
                previewDiv.innerHTML = `
                    <img src="${e.target.result}" alt="Report" class="w-full h-full object-cover">
                    <button type="button" class="absolute top-1 right-1 bg-black bg-opacity-50 p-1 rounded-full delete-img" data-index="${uploadedFiles.length - 1}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                `;
                
                // Insert before the upload button
                previewContainer.insertBefore(previewDiv, previewContainer.firstChild);
                
                // Remove upload button if 4 images are uploaded
                if (uploadedFiles.length >= 4) {
                    document.querySelector('.border-dashed').style.display = 'none';
                }
                
                // Clear file input
                fileUpload.value = '';
                
                // Add event listener to delete button
                previewDiv.querySelector('.delete-img').addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    uploadedFiles.splice(index, 1);
                    previewDiv.remove();
                    
                    // Show upload button if less than 4 images
                    if (uploadedFiles.length < 4) {
                        document.querySelector('.border-dashed').style.display = 'flex';
                    }
                    
                    // Update indices of remaining delete buttons
                    document.querySelectorAll('.delete-img').forEach((btn, i) => {
                        btn.setAttribute('data-index', i);
                    });
                });
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Handle form submission
    document.getElementById('report-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const issueType = document.getElementById('issue-type').value;
        const location = document.getElementById('address').value;
        const description = document.getElementById('description').value;
        
        if (!issueType) {
            showToast('Please select an issue type', 'error');
            return;
        }
        
        // Get form data
        const formData = new FormData(this);
        formData.append('action', 'submit_report');
        
        // Add file data if any
        uploadedFiles.forEach((file, index) => {
            formData.append(`image_${index}`, file.file);
            formData.append(`image_data_${index}`, file.dataUrl);
        });
        
        // Submit report via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/reports.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        // Reset form
                        document.getElementById('report-form').reset();
                        uploadedFiles = [];
                        
                        // Clear image previews
                        document.querySelectorAll('#image-preview-container > div:not(.border-dashed)').forEach(div => {
                            div.remove();
                        });
                        document.querySelector('.border-dashed').style.display = 'flex';
                        
                        // Show success message
                        showToast('Your report has been submitted successfully', 'success');
                        
                        // Reload user complaints
                        loadUserComplaints();
                    } else {
                        showToast(response.message || 'Error submitting report', 'error');
                    }
                } catch (e) {
                    showToast('Error processing server response', 'error');
                }
            } else {
                showToast('Error submitting report. Please try again.', 'error');
            }
        };
        xhr.onerror = function() {
            showToast('Network error. Please try again.', 'error');
        };
        xhr.send(formData);
    });
    
    // Load user complaints
    function loadUserComplaints() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'api/reports.php?action=get_user_reports', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    const container = document.getElementById('user-complaints-container');
                    const response = JSON.parse(xhr.responseText);
                    
                    if (response.success && response.reports.length > 0) {
                        container.innerHTML = '';
                        
                        response.reports.forEach(report => {
                            const statusClass = getStatusClass(report.status);
                            const formattedType = report.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                            
                            container.innerHTML += `
                                <div class="p-3 border rounded-lg space-y-2">
                                    <div class="flex justify-between">
                                        <h4 class="font-medium text-sm">${formattedType}</h4>
                                        <span class="${statusClass}">${report.status}</span>
                                    </div>
                                    <p class="text-xs text-gray-500">${report.location}</p>
                                    <p class="text-xs text-gray-500">Reported: ${report.date}</p>
                                    <button type="button" class="w-full text-xs mt-1 text-blue-600 hover:text-blue-800" onclick="viewReportDetails(${report.id})">
                                        View Details
                                    </button>
                                </div>
                            `;
                        });
                    } else {
                        container.innerHTML = `
                            <div class="text-center py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <h3 class="mt-2 text-lg font-medium text-gray-900">No reports yet</h3>
                                <p class="mt-1 text-sm text-gray-500">
                                    You haven't submitted any reports yet
                                </p>
                            </div>
                        `;
                    }
                } catch (e) {
                    console.error('Error parsing response', e);
                }
            }
        };
        xhr.send();
    }
    
    function getStatusClass(status) {
        switch (status) {
            case 'completed':
                return 'px-2 py-1 text-xs rounded-full bg-green-100 text-green-800';
            case 'in-progress':
                return 'px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800';
            default:
                return 'px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800';
        }
    }
    
    // Initial load of user complaints
    loadUserComplaints();
});

// Global function to view report details
function viewReportDetails(reportId) {
    // Implement detail view functionality
    console.log('View details for report', reportId);
}
</script>
