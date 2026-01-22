class CustomStory extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section id="story" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row items-center gap-12">
                        <div class="lg:w-1/2">
                            <img src="http://static.photos/people/640x360/10" alt="Deane and Marie Belfield at Muckleford Creek" class="rounded-lg shadow-xl">
                        </div>
                        <div class="lg:w-1/2">
                            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-soil-800">Our Story</h2>
                            <p class="text-lg mb-6 text-gray-700">We're Deane and Marie Belfield, proud stewards of Muckleford Creek Beef. Our family-run regenerative farm is nestled in the beautiful countryside between Castlemaine and Maldon in Central Victoria.</p>
                            <p class="text-lg mb-6 text-gray-700">For over a decade, we've been committed to working <em>with</em> nature, not against it. Our cattle graze on lush, chemical-free pastures, following the rhythms of the seasons just as nature intended.</p>
                            <p class="text-lg text-gray-700">We believe that healthy soils create healthy plants, which create healthy animals, and ultimately healthy people. It's that simple connection that drives everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-story', CustomStory);