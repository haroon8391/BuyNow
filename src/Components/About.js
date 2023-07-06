import React from 'react';

const About = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div>
                    <h1 className="section-title text-center my-4">About Us</h1>
                    <div className="card text-bg-dark border-0 my-4">
                        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="card-img" alt="Background" height="400px" width="300px" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <p className="section-description" style={{ width: '60vw' }}>
                            At My E-commerce App, our utmost commitment lies in delivering an unparalleled online shopping experience to our valued customers. Our unwavering dedication is fueled by the desire to offer nothing short of excellence, as we continuously strive to optimize every facet of your shopping journey for utmost convenience and delight. One of our core principles revolves around meticulously handpicking a vast assortment of top-notch products from renowned brands, assuring you of unparalleled quality. Whether your quest is for the latest fashion trends, cutting-edge electronics, captivating home decor, or beyond, rest assured that our diverse selection caters to every discerning taste and preference.
                        </p>
                        <p className="section-description" style={{ width: '60vw' }}>
                            Moreover, we wholeheartedly recognize the significance of safeguarding your security and privacy in the realm of online shopping. To ensure your peace of mind, we have implemented stringent measures that leave no room for compromise. Through robust protocols and advanced safeguards, we pledge to protect your personal information with utmost vigilance and ensure that each transaction you undertake remains entirely secure. By entrusting us with your shopping needs, you embark on an unforgettable journey filled with seamless experiences, exceptional products, and unwavering dedication to your satisfaction. Join us today and discover a realm where convenience, enjoyment, and peace of mind seamlessly intertwine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
