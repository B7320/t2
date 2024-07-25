import React from "react";
import './Page.css';
import pagepic from '../assets/designer_2.jpg';
import pageimg from '../assets/shape.jpg';

const PageSection = () => {
return (
<section className="page-section">
   <div className="page-content">
    <h1>Light, Fast & Powerful</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    <div className="page-features">
        <div className="feature">
            <img src={pageimg} alt="Feature" />
            <h2>Title Goes Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
        <div className="feature">
            <img src={pageimg} alt="Feature" />
            <h2>Title Goes Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
    </div>
    </div>
    <div className="page-pic">
        <img src={pagepic} alt="page" />
    </div>
</section>


)





}
export default PageSection;