import React from 'react';
import './About.css';
import jakayla from '../../images/jakayla-toney-LmF4eBYs08c-unsplash.jpg';

const About = () => {
    return (
        <figure className="about">
            <img className="about__image" src={jakayla} alt="Author" />
            <figcaption className='about__content'>
                <h2 className="about__title">About the author</h2>
                <p className="about__description">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
                <p className="about__description-blank"></p>
                <p className="about__description">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
            </figcaption>
        </figure>
    );
};

export default About;
