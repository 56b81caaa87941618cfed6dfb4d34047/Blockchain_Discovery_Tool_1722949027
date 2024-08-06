/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722949029", {
    template: `
    <section id="cta-component" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-magenta-600 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex mb-4">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">Discover Blockchain's Latest Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-6">
                    <p id="cta-subtitle" class="flex-1 font-light text-white md:text-lg">Stay ahead of the curve with our cutting-edge blockchain news and analysis platform.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Updates</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
