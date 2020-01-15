import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import GiftGiverPic from "../resources/gift-giver-cover.png"
import Subsection from "./components/Subsection";
import SubsectionWithTable from "./components/SubsectionWithTable";
import SubsectionWithPictures from "./components/SubsectionWithPictures";

import Rachel from "../resources/personas-rachel.png"
import Ben from "../resources/personas-ben.png"
import PaperPrototype from "../resources/paper-prototype.jpg"
import GiftGiverMainPage from "../resources/gift-giver-main-page.png"
import GiftGiverSubPage from "../resources/gift-giver-sub-page.png"
import {ScrollToTop} from "../components/ReactUtils";
import Section from "./components/Section";

const GiftGiver = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="Gift Giver"
                      subtitle="a mobile app helping to select a perfect gift"/>
        <img className="portfolio-item" src={GiftGiverPic} alt=""/>

        <Subsection
            title="The brief"
            description={[
                "Create an app where users will be recommended what gifts to choose for their loved ones based on " +
                "the person’s preferred things. Users should be able to enter numerous items a person already owns. " +
                "The app should then provide a selection of gifts ideal for this person. For the purposes of this " +
                "project, the algorithm for deciding what gifts to suggest can be considered as a black box.",

                "This brief was provided by a UX course (David Travis 'User Experience (UX): The Ultimate Guide to " +
                "Usability and UX').  However, the implementation of the project is my own."
            ]}/>

        <Section title="Research and Analysis"/>

        <Subsection
            title="What I did"
            description={[
                "I conducted contextual research with 15 users. Then, I designed user journey maps and used affinity " +
                "mapping to create personas. I used red routes to determine the key functions of my application. " +
                "Next, I designed and tested paper prototypes. These prototypes helped to improve my design. " +
                "Afterwards I built wireframes, giving me some suggestions for improvement again. The last stage was " +
                "building a High Fidelity Prototype and testing it with real users."
            ]}/>

        <SubsectionWithTable title="Key tools and deliverables"
                             tableComponents={[
                              ["Contextual research", "Paper prototype"],
                              ["Affinity mapping", "Wireframes"],
                              ["Personas", "Usability testing"],
                              ["Red routes", "High fidelity UI"]
                          ]}/>

        <SubsectionWithPictures
            title="Personas"
            description={[
                "I conducted contextual research: I spoke to 15 users and asked them to show me how they went about " +
                "finding a gift for someone. Next, I analysed my findings and looked for reoccurring patterns, which " +
                "led to the development of personas and user stories. Rachel, the most demanding persona, was " +
                "identified as the primary target."
            ]}
            pictures={[Rachel, Ben]}/>

        <SubsectionWithPictures
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

        <SubsectionWithPictures
            title="The result"
            description={[
                "I have user tested my paper prototypes and wireframes with 7 different users. Results of the test " +
                "allowed me to improve my design and arrive at the final version - High Fidelity Mockup of the app, " +
                "which I have tested to make sure it was usable, functional and clear. Some of the Usability Problems " +
                "with HF Mockups included the fact that some of the users didn't know that they can click on the " +
                "picture of the item to see more details and how to shop. As a result of this finding, I have added " +
                "a 'See More' button to highlight the interactivity of the picture."
            ]}
            pictures={[GiftGiverMainPage, GiftGiverSubPage]}/>

        <Subsection
            title="What went well:"
            description={[
                "People were interested in using this app - it reduces time spent choosing the 'ideal' gift."
            ]}/>

        <Subsection
            title="What could have been better:"
            description={[
                "Some of the design options might be changed, for example, 'Stuff they like' could have been moved " +
                "to a separate page in order to give each page a single task. Also, some of the users were not sure " +
                "what to type in 'Stuff they like' section (for example, should they type in an activity the " +
                "person likes or a personal possession the person has). A question mark sign might be added there " +
                "to offer additional explanation, if needed."
            ]}/>
    </div>
);

export default GiftGiver;