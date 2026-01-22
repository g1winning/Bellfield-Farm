class CustomBuy extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <section id="buy" class="py-20 bg-amber-50">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                        <div class="md:flex">
                            <div class="md:w-1/2 bg-pasture-600 p-8 flex items-center">
                                <div>
                                    <h2 class="text-3xl font-bold mb-4 text-white">Ready to Order Premium Regenerative Beef?</h2>
                                    <p class="text-pasture-100 mb-6">We currently sell in 20kg mixed boxes (price on application). Melbourne delivery by arrangement. Share a box with family or friends if needed.</p>
                                    <div class="flex items-center">
                                        <i data-feather="phone" class="text-white mr-2"></i>
                                        <a href="tel:0414617542" class="text-white font-medium hover:underline">0414 617 542</a>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-1/2 p-8">
                                <h3 class="text-2xl font-bold mb-6 text-soil-800">Pre-Order or Enquire</h3>
                                <form id="contactForm" class="space-y-4">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pasture-500 focus:border-pasture-500">
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pasture-500 focus:border-pasture-500">
                                    </div>
                                    <div>
                                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                        <input type="tel" id="phone" name="phone" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pasture-500 focus:border-pasture-500">
                                    </div>
                                    <div>
                                        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" name="message" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pasture-500 focus:border-pasture-500" placeholder="Interested in a 20kg box / delivery options / farm visit"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="w-full bg-pasture-600 hover:bg-pasture-700 text-white py-2 px-4 rounded-md btn-transition">Send Enquiry</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div class="max-w-3xl mx-auto mt-16 text-center">
                        <h3 class="text-2xl font-bold mb-4 text-soil-800">Join Our Waitlist</h3>
                        <p class="text-gray-700 mb-6">Be the first to know when we launch our online ordering and loyalty program.</p>
                        <form class="flex flex-col sm:flex-row gap-2 justify-center">
                            <input type="email" placeholder="Your email address" class="flex-grow max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-pasture-500 focus:border-pasture-500">
                            <button type="submit" class="bg-pasture-600 hover:bg-pasture-700 text-white px-6 py-2 rounded-md btn-transition">Join</button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('custom-buy', CustomBuy);