import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import GiftGiverPic from "../resources/gift-giver-cover.png"
import Section from "./components/Section";
import SectionWithTable from "./components/SectionWithTable";
import SectionWithPictures from "./components/SectionWithPictures";

import Rachel from "../resources/personas-rachel.png"
import Ben from "../resources/personas-ben.png"
import PaperPrototype from "../resources/paper-prototype.jpg"
import GiftGiverMainPage from "../resources/gift-giver-main-page.png"
import GiftGiverSubPage from "../resources/gift-giver-sub-page.png"

const GiftGiver = () => {
    return (
        <div className="portfolio-page">
            <ProjectTitle title="Gift Giver"
                          subtitle="a mobile app helping to select a perfect gift"/>
            <img className="portfolio-item" src={GiftGiverPic} alt=""/>
            <Section
                title="The brief"
                description="To create an app where users will be recommended what gifts to choose for their loved ones
                based on the person's preferred things. Users will enter the things a person already has and the app
                will come up with a selection of gifts ideal for this person. This project was completed as part of a
                UX course"/>

            <Section
                title="What I did"
                description="I conducted contextual research with 15 users. I've designed user journey maps and used
                affinity mapping to crea personas. I used red routes to determine the key functions of my application.
                I designed and tested paper prototypes, improved on my design, then tested wireframes and improved
                again. The last stage was building a High Fidelity Prototype and testing it with users."/>

            <SectionWithTable title="Key tools and deliverables"
                              tableComponents={[
                                ["Contextual research", "Paper prototype"],
                                ["Affinity mapping", "Wireframes"],
                                ["Personas", "Usability testing"],
                                ["Red routes", "High fidelity UI"]
                            ]}/>

            <SectionWithPictures
                title="Personas"
                description="Analysis of contextual research led to the development of personas and user stories.
                Rachel, the most demanding persona, was identified as a target"
                pictures={[Rachel, Ben]}/>

            <SectionWithPictures
                title="Paper prototypes"
                description="I developed paper prototypes of the app and tested it with users, which allowed for the
                classification of crucial improvements needed."
                pictures={[PaperPrototype]}
                horizontal="750"/>

            <SectionWithPictures
                title="The result"
                description="I have user tested my paper prototypes and wireframes with 7 different users. Results of
                the test allowed me to improve my design and arrive at the final version - High Fidelity Mockup of the
                app, which I have tested to make sure it was usable, functional and clear."
                pictures={[GiftGiverMainPage, GiftGiverSubPage]}/>

            <Section
                title="What went well:"
                description='People were interested in using this app - it reduces time spent choosing the "ideal" gift.' />

            <Section
                title="What could have been better:"
                description='Some of the design options might be changes, for example, "Stuff they like" could have
                been moved to a separate page in order to give each page a single task'/>
        </div>
    );
};

export default GiftGiver;