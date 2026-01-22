class CustomBeef extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section id="beef" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center text-soil-800">Our Premium Beef</h2>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <img src="http://static.photos/food/640x360/1" alt="Grass-fed beef steaks" class="w-full h-64 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2 text-soil-800">Steaks</h3>
                                <p class="text-gray-700">Tender, flavorful cuts perfect for grilling. Includes ribeye, sirloin, and rump steaks.</p>
                            </div>
                        </div>
                        
                        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <img src="http://static.photos/food/640x360/2" alt="Grass-fed beef roasts" class="w-full h-64 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2 text-soil-800">Roasts</h3>
                                <p class="text-gray-700">Perfect for slow cooking. Includes blade, chuck, and round roasts.</p>
                            </div>
                        </div>
                        
                        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <img src="http://static.photos/food/640x360/3" alt="Grass-fed beef mince and sausages" class="w-full h-64 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2 text-soil-800">Mince & Sausages</h3>
                                <p class="text-gray-700">Versatile and flavorful. Perfect for family meals and BBQs.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="max-w-3xl mx-auto text-center">
                        <p class="text-xl mb-8 text-gray-700">Premium beef sold in convenient ~20kg mixed boxes prepared by our master butcher. Customers consistently say it's the best-tasting beef they've ever had.</p>
                        <a href="#buy" class="bg-pasture-600 hover:bg-pasture-700 text-white px-8 py-4 rounded-lg text-lg font-medium btn-transition inline-block">Order Now</a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-beef', CustomBeef);