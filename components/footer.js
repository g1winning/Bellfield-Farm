class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <footer class="bg-soil-800 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <img src="https://huggingface.co/spaces/g1winner/pasture-to-plate-perfection/resolve/main/images/Screenshot%202026-01-22%20at%208.13.23%E2%80%AFam.png" alt="Muckleford Creek Beef Logo" class="h-16 mb-4">
<p class="mb-4">Regenerative, organic and biodynamic beef from Central Victoria.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-white hover:text-pasture-400"><i data-feather="facebook"></i></a>
                                <a href="#" class="text-white hover:text-pasture-400"><i data-feather="instagram"></i></a>
                                <a href="#" class="text-white hover:text-pasture-400"><i data-feather="twitter"></i></a>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="#home" class="hover:text-pasture-400">Home</a></li>
                                <li><a href="#story" class="hover:text-pasture-400">Our Story</a></li>
                                <li><a href="#difference" class="hover:text-pasture-400">Our Difference</a></li>
                                <li><a href="#beef" class="hover:text-pasture-400">Our Beef</a></li>
                                <li><a href="#buy" class="hover:text-pasture-400">How to Buy</a></li>
                                <li><a href="#visits" class="hover:text-pasture-400">Farm Visits</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i data-feather="map-pin" class="mr-2 mt-1"></i>
                                    <span>Muckleford Creek,<br>Between Castlemaine & Maldon,<br>Victoria, Australia</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="phone" class="mr-2"></i>
                                    <a href="tel:0414617542" class="hover:text-pasture-400">0414 617 542</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold mb-4">Certifications</h3>
                            <div class="flex flex-wrap gap-4">
                                <div class="bg-white p-2 rounded-md w-20 h-20 flex items-center justify-center">
                                    <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Organic Certification" class="max-w-full max-h-full">
                                </div>
                                <div class="bg-white p-2 rounded-md w-20 h-20 flex items-center justify-center">
                                    <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Biodynamic Certification" class="max-w-full max-h-full">
                                </div>
                                <div class="bg-white p-2 rounded-md w-20 h-20 flex items-center justify-center">
                                    <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Carbon Neutral Certification" class="max-w-full max-h-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-soil-700 mt-8 pt-8 text-center text-soil-400">
                        <p>&copy; 2026 Muckleford Creek Beef. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);