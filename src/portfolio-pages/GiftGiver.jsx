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

        <SubsectionWithPictures
            title="Personas"
            description={[
                "To start the project I decided to conduct some contextual research. I visited/called 15 " +
                "participants and asked them to show me how they go about finding a gift for someone. My questions " +
                "were open-ended and objective and so I did not ask 'What do you like about...?' as it would suggest " +
                "a positive answer. Instead, I started by saying 'Show me how you go about selecting a gift for " +
                "someone.' Then I asked follow-up questions based on what they told me. For example, one person told " +
                "me they would most likely look for inspiration on the internet; so I asked the participant to " +
                "imagine they wanted to buy a present for their mum and to show me how they would do it now. I was " +
                "interested in which websites they used and what they liked and disliked about a particular website. " +
                "Again, I phrased this as an open question not to bias any responses from the participant.",

                "I analysed my findings and looked for the most common patterns, which led to the development of " +
                "personas and user stories. I found that most people came under two categories: 1) People who mostly " +
                "shop for gifts online; 2) People who almost never shop online, as they don't know where to look. I " +
                "personified both categories as Rachel and Ben respectively. Rachel, was identified as a primary " +
                "target, as she is most likely to use the app - she already shops and looks for inspiration online, " +
                "but none of the other websites she uses offer her gift ideas suited to someone's needs."
            ]}
            pictures={[Rachel, Ben]}/>

        <Subsection
            title="Competitor analysis"
            description={[
                "I decided that it was an important step to complete some competitor analysis. I needed to know what " +
                "existing websites and apps offered to make sure mine would stand out. What I found was that most " +
                "websites and apps offered ideas for gifts which were for a generic person, for example, gifts for " +
                "mums or friends or brothers, however, they are not specific to any particular person. This was " +
                "where Gift Giver was different, as it would offer more personalised ideas by using items the gift " +
                "recipient already had."
            ]}/>


        <Section title="Prototyping and testing"/>

        <Subsection
            title="Functionality design decisions"
            description={[
                "The main problem users were facing when trying to find gifts was the fact that they needed to go to " +
                "many stores / websites to look for inspiration. This took a long time as there were lots of " +
                "irrelevant options provided to them. They needed someway of reducing this selection to make their " +
                "decision easier. I decided the way I would tackle this issue would be to use a combination of user " +
                "input and categories buttons.",

                "The decision of which categories to include stemmed from the user research and competitors " +
                "analysis. I asked participants to tell me who they bought presents for and found that the most " +
                "common answers were their mum, boyfriend, son, friends, etc; thus, providing me with a start to my " +
                "list. Other websites offered a similar classification, for instance, Him / Her / Mum / Son. The " +
                "problem with this classification is that it is gender binary. The issues will arise if, for example" +
                ", a man likes makeup and dresses. With such classification, the user could be lost as to which " +
                "category to select. However, with my categorisation, the items users already have will decide on " +
                "the most suitable gifts, rather than their gender. Overall, I decided to use three categories " +
                "'Partner', 'Family' and 'Friend', so that they will include gifts specific to a person's " +
                "relationship to another person. For example, a partner category will also include romantic gifts.",

                "I was thinking what is the best idea for users to input the person's favourite things. First of all" +
                ", I came up with as many as possible on my own. Then, I asked a few friends for their ideas as well" +
                ". At this stage I wanted to collect as many ideas as possible, therefore I asked them to think " +
                "freely, elimination would come later. Some of the ideas included: a list of categories and " +
                "subcategories, a text box, voice recognition, a dropdown. Typing in a text box seemed to be the " +
                "most appropriate, as it is the least time consuming. As the possibilities of things a person can " +
                "own are endless, the input would not work as a dropdown, and it would be tedious to click through " +
                "a hierarchy of categories too for every item. Furthermore, it would be beneficial if the input box " +
                "could provide autofill suggestions when users began to type. This would help to make the text input " +
                "quicker, avoid typos and prompt users to type in things that are already in the system. If users " +
                "type in an unrecognisable item, the system should come up with similar suggestions and inform the " +
                "user that the item is not in the database ('Oops! Sorry, this item is not in our database. " +
                "Did you mean...?').",

                "Once the user lands at the results page, they should be able to sort and filter results. The " +
                "choice of what to sort by should be done by swiping through a list of available options. The " +
                "default sort should be by 'Recommended', but users should also be able to choose to sort by 'Most " +
                "Popular', 'Lowest Price' or 'Highest Price'. Filtering can be done by 'Product Category', 'Occasion'" +
                ", 'Relationship', 'Price', and 'Rating'. The first four options should be sorts, which should be " +
                "applied automatically after the user clicks the option. Further options should be filters, so that " +
                "if a user clicks on 'Product Category' a pop-up screen would allow a user to customise the category " +
                "of product they are looking for. These options stemmed from user research and competitors analysis. " +
                "I conducted a card sorting exercise, where participants had to sort different items into their own " +
                "categories and name them. Then, I asked them to add their own items and come up with their own " +
                "categories for an e-commerce app. This exercise allowed me to understand participants' process of " +
                "thinking while selecting sorting or filtering options.",

                "Some users wanted to choose a personalised present for their mum, but the main category was a " +
                "general term 'Family'. Therefore, I have applied the additional filter of 'Relationship' at the " +
                "results page (e.g. the recipient can choose 'Mum' relationship and will be shown a filtered list of " +
                "personalised presents for Mums). Multiple filters can be applied simultaneously."
            ]}/>

        <SubsectionWithPictures
            title="Paper prototypes"
            description={[
                "I developed paper prototypes of the app and tested it with users. Users were given a landing page " +
                "and they could interact with it as they would with a phone app - click on any interactive element " +
                "and complete any text boxes. The tasks they were given were based on the red routes of the " +
                "application, e.g. find a perfect gift for your mum for her birthday. The participants were asked " +
                "to think aloud while they were doing tasks, which allowed me  to understand each participants' " +
                "actions better.",

                "Paper prototypes testing allowed for the classification of crucial improvements needed. For " +
                "instance, I deleted the section 'Name' to improve clarity for the participants. They didn't know " +
                "whether they should type their name or type the name of the person who they were trying to buy a " +
                "gift for. Also, the search field on the landing page was not needed and confused the participants. " +
                "A better option was to delete it from the landing page, but keep it on the results page to allow " +
                "users to search for products."
            ]}
            pictures={[PaperPrototype]}
            horizontal={true}/>

        <Section title="Final design"/>

        <SubsectionWithPictures
            description={[]}
            pictures={[GiftGiverMainPage, GiftGiverSubPage]}/>

        <Subsection
            title="The result"
            description={[
                "I have user tested my paper prototypes and wireframes with 7 different users. Results of the test " +
                "allowed me to improve my design and arrive at the final version - High Fidelity Mockup of the app, " +
                "which I have tested to make sure it was usable, functional and clear.",

                "I discovered a major usability problem with HF Mockups, mainly that some users didn't know that " +
                "they could click on the picture of the item to see more details and shopping options. Therefore, " +
                "I added a 'See More' button to the product card."
            ]}/>

        <Subsection
            title="What could have been better:"
            description={[
                "Some of the design options might be changed. Some users weren't sure what to type in 'Things they " +
                "like' section (for example, should they type in an activity the person likes or a personal " +
                "possession of this person). A question mark sign might be added there to offer additional " +
                "explanation, if needed.",

                "A possible avenue to explore in the future would be to add a 'Save' button to the homepage, so that " +
                "users could save their gift recipients for future reference and more shopping,"
            ]}/>
    </div>
);

export default GiftGiver;