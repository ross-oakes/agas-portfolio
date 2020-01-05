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
import {ScrollToTop} from "../components/ReactUtils";

const GiftGiver = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="Gift Giver"
                      subtitle="a mobile app helping to select a perfect gift"/>
        <img className="portfolio-item" src={GiftGiverPic} alt=""/>
        <Section
            title="The brief"
            description={[
                "To create an app. The idea of the app was to recommend users gifts to buy for their " +
                "loved ones. These recommendations were based on that person's preexisting preferences. Users will " +
                "enter the items a person already owns and the app will provide a list of gifts ideal for this " +
                "person. This project was part of a UX course I have completed."
            ]}/>

        <Section
            title="What I did"
            description={[
                "I conducted contextual research with 15 users. Then, I designed user journey maps and used affinity " +
                "mapping to create personas. I used red routes to determine the key functions of my application. " +
                "Next, I designed and tested paper prototypes. These prototypes helped to improve my design. " +
                "Afterwards I built wireframes, giving me some suggestions for improvement again. The last stage was " +
                "building a High Fidelity Prototype and testing it with real users."
            ]}/>

        <SectionWithTable title="Key tools and deliverables"
                          tableComponents={[
                              ["Contextual research", "Paper prototype"],
                              ["Affinity mapping", "Wireframes"],
                              ["Personas", "Usability testing"],
                              ["Red routes", "High fidelity UI"]
                          ]}/>

        <SectionWithPictures
            title="Personas"
            description={[
                "Analysis of contextual research led to the development of personas and user stories. Rachel, the " +
                "most demanding persona, was identified as the main target for my app."
            ]}
            pictures={[Rachel, Ben]}/>

        <SectionWithPictures
            title="Paper prototypes"
            description={[
                "I developed paper prototypes of the app and tested it with users. Users were given a landing page " +
                "and they could interact with it as they would with a phone app - click on any interactive element " +
                "and complete any text boxes. The tasks they were given were based on the red routes of the " +
                "application, e.g. find a perfect gift for your mum for her birthday. The participants were asked to " +
                "think aloud while they were doing tasks, which allowed me to understand each participants' actions " +
                "better.",

                "Paper prototypes testing allowed for the classification of crucial improvements needed. For " +
                "instance, I deleted the section 'Name' to improve clarity for the participants. They didn't know " +
                "whether they should type their name or type the name of the person who they were trying to buy a " +
                "gift for. Also, the search field on the landing page was not needed and confused the participants. " +
                "A better option was to delete it from the landing page, but keep it on the results page to allow " +
                "users to search through the page."
            ]}
            pictures={[PaperPrototype]}
            horizontal={true}/>

        <SectionWithPictures
            title="The result"
            description={[
                "I have user tested my paper prototypes and wireframes with 7 different users. Results of the test " +
                "allowed me to improve my designs and arrive at the final version. A High Fidelity Mockup of the app. " +
                "I have used this HF mockup to make sure it was usable, functional and clear."
            ]}
            pictures={[GiftGiverMainPage, GiftGiverSubPage]}/>

        <Section
            title="What went well:"
            description={[
                'People were interested in using this app - it reduces time spent choosing the "ideal" ' +
                'gift.'
            ]}/>

        <Section
            title="What could have been better:"
            description={[
                'Some of the elements could have been redesigned. For example, moving "Stuff they like" ' +
                'onto a separate page, would have given each page a single task. This would have reduce the complexity ' +
                'of any given page, and made the app even easier to use.'
            ]}/>
    </div>
);

export default GiftGiver;