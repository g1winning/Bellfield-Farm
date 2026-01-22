class CustomDifference extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section id="difference" class="py-20 bg-amber-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center text-soil-800">What We Do Differently</h2>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="leaf" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">Regenerative Agriculture</h3>
                            <p class="text-gray-700">We build healthy soil that captures carbon, improves water retention, and supports biodiversity — creating healthier pastures, healthier cattle, and healthier people.</p>
                        </div>
                        
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="sun" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">100% Grass-Fed</h3>
                            <p class="text-gray-700">Our Hereford/Angus cattle eat only pasture — never grain. This natural diet results in beef that's richer in omega-3s and conjugated linoleic acid (CLA).</p>
                        </div>
                        
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="heart" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">No Medical Interventions</h3>
                            <p class="text-gray-700">No growth hormones, routine antibiotics, food dyes, preservatives, Bovaer, or mRNA vaccines — ever. Just pure, natural beef as nature intended.</p>
                        </div>
                        
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="award" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">Organic Certified</h3>
                            <p class="text-gray-700">Third-party certified under the National Organic Standard — no synthetic chemicals or fertilisers touch our land or animals.</p>
                        </div>
                        
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="globe" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">Biodynamic Practices</h3>
                            <p class="text-gray-700">Goes beyond organic — treats the farm as a living ecosystem, using natural preparations to enhance soil vitality and produce nutrient-dense food.</p>
                        </div>
                        
                        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-pasture-100 rounded-full flex items-center justify-center mb-4">
                                <i data-feather="cloud" class="text-pasture-600 w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-soil-800">Beyond Carbon Neutral</h3>
                            <p class="text-gray-700">First Victorian farm registered under the Emissions Reduction Fund for soil carbon sequestration. We draw down more CO₂ than we emit.</p>
</div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-difference', CustomDifference);