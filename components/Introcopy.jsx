import React from "react";
import './Introcopy.css';
import introcopypic from '../assets/designer_4.jpg';

const Introcopy = () => {
    return (
    <section className="introcopy">
        <div className="introcopy-text">
        <h1>Light, Fast & Powerful</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
        <div className="introcopy-pic">
        <img src={introcopypic} alt="introcopy" />
    </div>
    </section>
    )
}
export default Introcopy;