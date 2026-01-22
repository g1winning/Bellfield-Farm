class CustomVisits extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section id="visits" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row items-center gap-12">
                        <div class="lg:w-1/2">
                            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-soil-800">Visit Our Farm</h2>
                            <p class="text-lg mb-6 text-gray-700">We love welcoming visitors to see our regenerative practices firsthand. Come meet the cattle and understand where your food comes from.</p>
                            <p class="text-lg mb-8 text-gray-700">Our farm is located in the beautiful Muckleford Creek area, between Castlemaine and Maldon in Central Victoria.</p>
                            <a href="#buy" class="bg-pasture-600 hover:bg-pasture-700 text-white px-8 py-4 rounded-lg text-lg font-medium btn-transition inline-block">Book a Farm Visit</a>
                        </div>
                        <div class="lg:w-1/2">
                            <div class="rounded-xl overflow-hidden shadow-xl">
                                <img src="http://static.photos/outdoor/640x360/5" alt="Muckleford Creek landscape" class="w-full h-96 object-cover">
                                <div class="p-6 bg-soil-50">
                                    <h3 class="text-xl font-bold mb-2 text-soil-800">Location</h3>
                                    <p class="text-gray-700 mb-4">Muckleford Creek, between Castlemaine and Maldon, Central Victoria, Australia</p>
                                    <div class="aspect-w-16 aspect-h-9">
                                        <iframe class="w-full h-64 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12604.692120081086!2d144.1507248!3d-37.1100034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad7d9c9e8e7f9d5%3A0x1a5e418b3f5b1b0!2sMuckleford%20Creek!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-visits', CustomVisits);