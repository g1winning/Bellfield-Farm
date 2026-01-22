class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .nav-link {
                    position: relative;
                }
                .nav-link:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    display: block;
                    margin-top: 2px;
                    right: 0;
                    background: #22c55e;
                    transition: width 0.3s ease;
                    -webkit-transition: width 0.3s ease;
                }
                .nav-link:hover:after {
                    width: 100%;
                    left: 0;
                    background: #22c55e;
                }
            </style>
            <nav class="bg-white shadow-md fixed w-full z-10">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center h-20">
                            <a href="#" class="flex items-center">
                            <img src="https://huggingface.co/spaces/g1winner/pasture-to-plate-perfection/resolve/main/images/Screenshot%202026-01-22%20at%208.13.23%E2%80%AFam.png" alt="Muckleford Creek Beef Logo" class="h-12">
                        </a>
<div class="hidden md:flex items-center space-x-8">
                            <a href="#home" class="nav-link text-soil-700 hover:text-pasture-600">Home</a>
                            <a href="#story" class="nav-link text-soil-700 hover:text-pasture-600">Our Story</a>
                            <a href="#difference" class="nav-link text-soil-700 hover:text-pasture-600">Our Difference</a>
                            <a href="#beef" class="nav-link text-soil-700 hover:text-pasture-600">Our Beef</a>
                            <a href="#buy" class="nav-link text-soil-700 hover:text-pasture-600">How to Buy</a>
                            <a href="#visits" class="nav-link text-soil-700 hover:text-pasture-600">Farm Visits</a>
                            <a href="tel:0414617542" class="bg-pasture-600 text-white px-4 py-2 rounded-lg btn-transition hover:bg-pasture-700">
                                <i data-feather="phone" class="inline mr-2"></i> Call Us
                            </a>
                        </div>
                        
                        <button id="mobileMenuButton" class="md:hidden text-soil-700 focus:outline-none">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                </div>
                
                <div id="mobileMenu" class="hidden md:hidden bg-white border-t border-gray-200">
                    <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        <a href="#home" class="text-soil-700 hover:text-pasture-600 py-2">Home</a>
                        <a href="#story" class="text-soil-700 hover:text-pasture-600 py-2">Our Story</a>
                        <a href="#difference" class="text-soil-700 hover:text-pasture-600 py-2">Our Difference</a>
                        <a href="#beef" class="text-soil-700 hover:text-pasture-600 py-2">Our Beef</a>
                        <a href="#buy" class="text-soil-700 hover:text-pasture-600 py-2">How to Buy</a>
                        <a href="#visits" class="text-soil-700 hover:text-pasture-600 py-2">Farm Visits</a>
                        <a href="tel:0414617542" class="bg-pasture-600 text-white px-4 py-2 rounded-lg text-center btn-transition hover:bg-pasture-700">
                            <i data-feather="phone" class="inline mr-2"></i> Call Us
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);