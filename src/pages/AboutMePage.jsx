import React from 'react';
import AgaLouvre from '../resources/aga-in-louvre.jpg'
import PortfolioPage from "../components/PortfolioPage";
import PortfolioPageTitle from "../components/PortfolioPageTitle";

const AboutMePage = () => {
    return (
        <PortfolioPage centered>
            <img className="about-me-picture" src={AgaLouvre} alt=""/>
            <PortfolioPageTitle title="About Me"/>
            <div className="about-me-text">
                <p>
                    I am a UX designer with a passion to constantly learn and improve myself and my work.
                </p>
                <p>
                    I love conducting user research, as it provides me with guidance when refining my designs. I believe
                    that there is no UI without UX research.
                </p>
                <p>
                    I spend my free time learning more about UX. Whether by reading books or completing online courses.
                    I am especially interested in how psychology provides insights into user research. I also like
                    learning about universal design principles.
                </p>
                <p>
                    I love to innovate. I make sure I am up-to-date with latest technological advancements. At the
                    moment, I am a member of The Interaction Design Foundation, a UX community, which offers UX courses
                    for professionals. I’m taking part in a Virtual Reality and Augmented Reality course as I believe
                    these skills are so important for the future!
                </p>
                <p>
                    I'm a modern art enthusiast. My creativity originated with exploring the unknown and extending the
                    boundaries of what was traditionally thought of as art. My favourite painter is Mark Rothko.
                </p>
                <p>
                    As maximum productivity needs mental rest, I do Pilates, go skiing, travel the world and keep an
                    open-minded attitude, giving me the chance to absorb new knowledge. Wherever I go I keep my brain in
                    an enquiry mode - I speak to people, work with people and learn from those around me.
                </p>
            </div>
        </PortfolioPage>
    );
};

export default AboutMePage;