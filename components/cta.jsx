import React from "react";
import './Cta.css';
import ctapic from '../assets/designer_5.jpg';

const Cta = () => {
    return (
    <section className="cta">
        <div className="cta-text">
        <h1>Light, Fast & Powerful</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <button className='cta-button'>Purchase Now</button>
        </div>
        <div className="cta-pic">
        <img src={ctapic} alt="cta" />
    </div>
    </section>
    )
}
export default Cta;