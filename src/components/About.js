import React from "react";
import paints from "../assets/paints.jpeg"
import pigments from "../assets/pigments.jpeg"
import water_colours from "../assets/water_colours.jpeg"

function About(){
    return(
        <div className="AboutUs">
            <p style={{textAlign: "center"}}>
                Welcome to Athul Colours, the leading paint factory in the beautiful state of Kerala.
            </p>

            <br />

            <img src={paints} alt="paint factory" className="middle"/>

            <p> 
                We take immense pride in our wide range of high-quality products, including coir coatings, 
                decorative paints, water-based artist paints, and an extensive selection of paint pigments.
            </p>

            <br />

            <p>
                At Athul Colours, we are committed to delivering exceptional products that not only beautify 
                your surroundings but also protect and enhance them. Our coir coatings provide a durable and 
                eco-friendly solution, adding a touch of elegance to various surfaces. With our decorative paints, 
                you can transform any space into a masterpiece, expressing your unique style and personality.
            </p>
            
            <br />

            <img src={water_colours} alt="water colours" className="middle"/>

            <p>
                For the artistic souls out there, our water-based artist paints offer a vibrant palette of colors, 
                allowing you to unleash your creativity on canvas. Whether you are a professional artist or an 
                enthusiastic beginner, our artist paints are designed to meet your needs and inspire your imagination.
            </p>

            <br />

            <img src={pigments} alt="yellow pigments" className="middle"/>

            <p>
                As a trusted paint factory, we understand the importance of color and its impact on the environment. 
                That's why we take special care in producing our paint pigments. Our range includes Yellow-1, Yellow-12, 
                and Yellow-24, meticulously crafted to deliver rich and consistent hues for your painting projects.
            </p>

            <br />

            <p>
                What sets Athul Colours apart is our unwavering commitment to quality, innovation, and customer 
                satisfaction.We continuously strive to exceed industry standards, ensuring that our products meet the 
                highest levels of performance, durability, and environmental sustainability.
            </p>

            <br />

            <p>
            With our state-of-the-art manufacturing facilities and a team of skilled professionals, we have earned 
            a reputation as the best paint factory in Kerala. We take pride in our heritage and the trust our 
            customers place in us. At Athul Colours, we are dedicated to providing you with exceptional paint 
            solutions that bring color, beauty, and joy to your life.
            </p>

            <br />

            <div className="product-container">
                <h3>Our Products</h3>
                <ul>
                    <li>Decorative Paints</li>
                    <li>Coir Coatings</li>
                    <li>Artist Paintings</li>
                    <li>Product Pigment fine pastes</li>
                </ul>
            </div>

            <br />

            <p>
                Explore our range of products and experience the Athul Colours difference. Transform your spaces, unleash 
                your creativity, and join us in creating a more colorful world.
            </p>


            <div className="address-container">
                <h3>Our Address</h3>
                <p>Varanam P.O., Cheruvaranam</p>
                <p>Cherthala, Alapphuzha, Kerala-688555</p>
                <p>India</p>
            </div>

        </div>
    )
}

export default About;