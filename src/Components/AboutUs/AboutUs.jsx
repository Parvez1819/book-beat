

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="p-6">
                    <h2 className="text-5xl font-bold">Binding Words and Aromas</h2>
                    <p className="text-xl mt-8 text-justify">At <span >Book BEAT</span>, we believe every great story deserves a perfect companion—a cup of coffee. Our journey began with a simple idea: to create a space where book lovers and coffee enthusiasts could come together to celebrate their passions. Whether you’re losing yourself in the pages of a gripping novel or savoring the aroma of freshly brewed coffee, we aim to make every moment memorable. From handpicked books to curated blends, our goal is to inspire connection, creativity, and comfort—one sip, one page, one story at a time.</p>
                </div>
                <div className="p-6">
                    <img src={`https://i.ibb.co.com/87ZyqNf/tracy-adams-k-Nymij-Dtc-V4-unsplash-2.jpg`} className="rounded-2xl " alt="" />
                </div>
            </div>
            <div className="space-y-6 mt-6">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Why choose Us?</div>
                    <div className="collapse-content">
                        <p className="text-xl">Choose us for a perfect blend of curated books and premium books, creating a cozy haven where stories come alive, and every sip inspires connection, comfort, and creativity.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What Makes Us Unique?</div>
                    <div className="collapse-content">
                        <p className="text-xl">We combine the warmth of freshly brewed coffee with the joy of discovering handpicked books, creating a one-of-a-kind experience that nurtures both your mind and soul.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How Do We Inspire Your Reading Journey?</div>
                    <div className="collapse-content">
                        <p className="text-xl">By curating captivating reads, offering a serene space, and pairing it all with aromatic coffee, we help you immerse fully into the stories that fuel your imagination.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;