import React from 'react';
import AgaLouvre from '../resources/aga-in-louvre.jpg'
import {ScrollToTop} from "../components/ReactUtils";

const AboutPage = () => {
    return (
        <div className="about-page">
            <ScrollToTop/>
            <img className="about-picture" src={AgaLouvre} alt=""/>
            <div className="about-text">
                <h3 className="about-title">About</h3>

                <p>I'm a beginner UX designer with a passion to learn and improve myself and my work.</p>

                <p>Based in St. Albans, UK.</p>

                <p>I love conducting user research, as it provides me guidance when refining my designs. This means
                    they become more functional, clear and pleasing to the eye.</p>
                <p>I'm a modern art enthusiast.</p>

                <p>Coffee lover.</p>

                <p>I spend my free time travelling and exploring the globe.</p>
            </div>

        </div>
    );
};

export default AboutPage;