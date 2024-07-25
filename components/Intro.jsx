import React from "react";
import './Intro.css';
import intropic from '../assets/designer_3.jpg';

const Intro = () => {
    return (
    <section className="intro">
        <div className="intro-text">
        <h1>Light, Fast & Powerful</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
        <div className="intro-pic">
        <img src={intropic} alt="intro" />
    </div>
    </section>
    )
}
export default Intro;