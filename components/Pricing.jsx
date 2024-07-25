import React from "react";
import './Pricing.css';

const Pricing = () => {
    return (

        <div className="pricing">
            <div className="pricing-text">
            <h2>
            A Price To Suit Everyone
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            </div>
            <div className="price-text">
            <h1>
            $40
            </h1>
            <p>
            UI Design Kit
            </p>
            </div>
            <div className="comment">
                <p>
                See, One price. Simple.
                </p>
                <button className="cta-button">Purchase Now</button>
            </div>

         </div>
    );
};
export default Pricing;
