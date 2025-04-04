
<div class="space-y-6">
    <div class="bg-white rounded-lg shadow">
        <div class="px-4 py-5 border-b border-gray-200">
            <h3 class="text-lg font-medium">Recycling Guidelines</h3>
            <p class="text-sm text-gray-500">Learn how to properly recycle different materials</p>
        </div>
        <div class="p-4">
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                <div class="relative flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" id="search-materials" placeholder="Search materials..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="flex overflow-x-auto pb-2 md:pb-0 gap-2" id="category-filters">
                    <button type="button" data-category="all" class="category-btn active whitespace-nowrap inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        All Materials
                    </button>
                    <button type="button" data-category="plastic" class="category-btn whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Plastics
                    </button>
                    <button type="button" data-category="paper" class="category-btn whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Paper & Cardboard
                    </button>
                    <button type="button" data-category="metal" class="category-btn whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Metals
                    </button>
                    <button type="button" data-category="glass" class="category-btn whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Glass
                    </button>
                    <button type="button" data-category="hazardous" class="category-btn whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Hazardous
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="materials-container">
                <!-- Materials will be loaded dynamically using JavaScript -->
            </div>

            <div id="no-results" class="hidden text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p class="text-gray-500 mt-2">No materials found. Try adjusting your search.</p>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 bg-white rounded-lg shadow">
            <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg font-medium">Do's and Don'ts</h3>
                <p class="text-sm text-gray-500">Quick reference guide for proper recycling</p>
            </div>
            <div class="p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                        <h3 class="text-green-600 font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Do Recycle
                        </h3>
                        <ul class="space-y-2">
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                                <span>Clean plastic bottles and containers</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                                <span>Paper, newspaper, and magazines</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                                <span>Flattened cardboard and paperboard</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                                <span>Metal food cans (tin, aluminum, steel)</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                                <span>Glass bottles and jars</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="space-y-3">
                        <h3 class="text-red-600 font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Don't Recycle
                        </h3>
                        <ul class="space-y-2">
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                                <span>Food-soiled paper or cardboard</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                                <span>Plastic bags and film</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                                <span>Styrofoam and packing peanuts</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                                <span>Electronics and batteries</span>
                            </li>
                            <li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                                <span>Medical waste and diapers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow">
            <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg font-medium">Tips for Better Recycling</h3>
                <p class="text-sm text-gray-500">Improve your recycling habits</p>
            </div>
            <div class="p-4">
                <ul class="space-y-3">
                    <?php
                    $recyclingTips = [
                        "Rinse containers to remove food residue.",
                        "Remove lids and caps from bottles before recycling.",
                        "Flatten cardboard boxes to save space.",
                        "Don't bag recyclables unless required by your local program.",
                        "Check local guidelines as recycling rules vary by location.",
                        "Don't wishcycle - when in doubt, check or leave it out."
                    ];
                    
                    foreach ($recyclingTips as $index => $tip) {
                        echo '<li class="flex items-start text-sm">
                                <div class="h-5 w-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    ' . ($index + 1) . '
                                </div>
                                <span>' . $tip . '</span>
                            </li>';
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Material data
    const materials = [
        {
            id: 1,
            name: "Plastic Bottles",
            category: "plastic",
            recyclable: true,
            preparation: "Rinse, remove caps, flatten if possible",
            notes: "Check for recycling symbol (usually #1 PET or #2 HDPE)",
            image: "https://placehold.co/80x80/4ade80/FFFFFF?text=PET"
        },
        {
            id: 2,
            name: "Cardboard",
            category: "paper",
            recyclable: true,
            preparation: "Remove tape, flatten boxes",
            notes: "Keep dry and clean",
            image: "https://placehold.co/80x80/f59e0b/FFFFFF?text=CARD"
        },
        {
            id: 3,
            name: "Aluminum Cans",
            category: "metal",
            recyclable: true,
            preparation: "Rinse, crush if possible to save space",
            notes: "One of the most efficient materials to recycle",
            image: "https://placehold.co/80x80/60a5fa/FFFFFF?text=ALU"
        },
        {
            id: 4,
            name: "Glass Bottles",
            category: "glass",
            recyclable: true,
            preparation: "Rinse, remove caps and lids",
            notes: "Sort by color if required in your area",
            image: "https://placehold.co/80x80/a78bfa/FFFFFF?text=GLASS"
        },
        {
            id: 5,
            name: "Styrofoam",
            category: "plastic",
            recyclable: false,
            preparation: "Not typically recyclable in most programs",
            notes: "Check for specialized drop-off locations",
            image: "https://placehold.co/80x80/f87171/FFFFFF?text=FOAM"
        },
        {
            id: 6,
            name: "Pizza Boxes",
            category: "paper",
            recyclable: false,
            preparation: "Soiled with food and grease cannot be recycled",
            notes: "Clean portions can be torn off and recycled",
            image: "https://placehold.co/80x80/f87171/FFFFFF?text=PIZZA"
        },
        {
            id: 7,
            name: "Batteries",
            category: "hazardous",
            recyclable: true,
            preparation: "Never place in regular recycling or trash",
            notes: "Requires special handling at hazardous waste collection points",
            image: "https://placehold.co/80x80/fbbf24/FFFFFF?text=BATT"
        },
        {
            id: 8,
            name: "Aluminum Foil",
            category: "metal",
            recyclable: true,
            preparation: "Clean thoroughly, ball up multiple pieces",
            notes: "Must be clean of food residue",
            image: "https://placehold.co/80x80/60a5fa/FFFFFF?text=FOIL"
        }
    ];
    
    const searchInput = document.getElementById('search-materials');
    const materialsContainer = document.getElementById('materials-container');
    const noResults = document.getElementById('no-results');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    let selectedCategory = 'all';
    let searchTerm = '';
    
    // Render materials based on filters
    function renderMaterials() {
        const filteredMaterials = materials.filter(material => {
            const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        
        if (filteredMaterials.length === 0) {
            materialsContainer.innerHTML = '';
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            materialsContainer.innerHTML = filteredMaterials.map(material => `
                <div class="bg-white overflow-hidden rounded-lg border">
                    <div class="flex p-4">
                        <div class="mr-4 flex-shrink-0">
                            <img src="${material.image}" alt="${material.name}" class="h-16 w-16 rounded-md object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium mb-1">${material.name}</h4>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${material.recyclable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} mb-2">
                                ${material.recyclable ? 'Recyclable' : 'Not Recyclable'}
                            </span>
                            <p class="text-xs text-gray-500 mb-1">${material.preparation}</p>
                            <div class="flex items-center text-xs text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>${material.notes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Handle search input
    searchInput.addEventListener('input', function() {
        searchTerm = this.value;
        renderMaterials();
    });
    
    // Handle category filter clicks
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedCategory = this.getAttribute('data-category');
            
            // Update active state
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'border-gray-300');
            });
            this.classList.add('active', 'bg-blue-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700', 'border-gray-300');
            
            renderMaterials();
        });
    });
    
    // Initial render
    renderMaterials();
});
</script>
