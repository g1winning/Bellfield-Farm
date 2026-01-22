class CustomHero extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .hero {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('http://static.photos/nature/1200x630/42');
                    min-height: 90vh;
                }
            </style>
            <section id="home" class="hero parallax flex items-center justify-center text-center text-white pt-20">
                <div class="container mx-auto px-4">
                    <div class="max-w-3xl mx-auto fade-in">
                        <h1 class="text-4xl md:text-6xl font-bold mb-6">Pure Grass-Fed Beef from Healthy Soils to Healthy People</h1>
                        <p class="text-xl md:text-2xl mb-10">Regenerative, Organic & Biodynamic beef raised on Muckleford Creek, Central Victoria. No chemicals, no hormones, no antibiotics — ever.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#buy" class="bg-pasture-600 hover:bg-pasture-700 text-white px-8 py-4 rounded-lg text-lg font-medium btn-transition">Order or Enquire Now</a>
                            <a href="#visits" class="bg-white hover:bg-gray-100 text-soil-800 px-8 py-4 rounded-lg text-lg font-medium btn-transition">Visit the Farm</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-hero', CustomHero);