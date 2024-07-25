import React from 'react';
import './Hero.css';
import heropic from '../assets/designer_1.jpg'

const Hero = () => {
    return(
        <section className='hero'>
            <div className='hero-content'>
                <h1>Introduce Your Product Quickly & Effectively</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
               </p> <p>mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className='hero-button'>
                    <button className='btn primary'>Purchase UI Kit</button>
                    <button className='btn secondary'>Learn More</button>
                </div>
            </div>
            <div className='hero-pic'>
                <img src={heropic} alt='Hero'/>
            </div>

        </section>



    );
};
export default Hero;
