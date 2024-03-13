import React from 'react';
import heroImage from "./../../../assets/img/heroImage.png"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <img src={heroImage} alt="img"/>
                    <div className="hero-text">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores consequatur debitis
                            dignissimos esse facere magni molestias nobis nostrum numquam perspiciatis praesentium
                            reprehenderit voluptas? A asperiores aspernatur hic, ipsa maxime mollitia natus odit velit.
                            Aliquam architecto, culpa debitis dolores ea maxime molestias odio officiis pariatur placeat
                            quasi quibusdam reprehenderit sapiente suscipit voluptate? Asperiores assumenda at eveniet
                            ex expedita fugit ipsam placeat tempore totam unde. Ab dicta excepturi illum iste, nisi
                            nobis porro qui veritatis. Aut consectetur itaque natus nemo nobis nostrum possimus
                            provident tenetur? Aliquam autem beatae debitis dicta labore libero magnam nesciunt placeat
                            quaerat totam! Aperiam blanditiis eligendi est fugiat hic maxime nesciunt perferendis
                            quaerat quod, voluptate! Autem, deserunt earum fugit ipsum magnam nostrum quae quia quis
                            quo, rerum soluta, ullam voluptate voluptatibus? Accusamus aperiam assumenda commodi
                            delectus deserunt dolorem enim error excepturi itaque laboriosam magni, minus, nobis nostrum
                            porro quae quia similique, suscipit tenetur veritatis voluptate? Iure iusto minus mollitia
                            suscipit, ullam voluptatum. Ad at debitis dolore dolores dolorum earum error excepturi fuga
                            ipsam, magnam minima minus modi molestiae mollitia nam natus nesciunt quia quibusdam
                            repellendus sapiente, temporibus totam, vel voluptatum! Debitis laboriosam libero minus?
                            Architecto consectetur delectus ducimus exercitationem fugit mollitia nemo nesciunt nulla
                            repellendus, sapiente, voluptatum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;