import React from 'react';

import PortfolioPage from "../components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";
import ProjectSection from "./components/ProjectSection";
import ProjectSubsection from "./components/ProjectSubsection";
import SinglePicture from "./components/SinglePicture";
import MultiplePictures from "./components/MultiplePictures";
import NielsenHeuristicDescription from "./components/NielsenHeuristicDescriptions";

import GiftGiverPic from "../resources/giftgiver/cover.png"
import Rachel from "../resources/giftgiver/personas-rachel.png"
import Ben from "../resources/giftgiver/personas-ben.png"
import originalDesign from "../resources/giftgiver/original-design.png"
import PaperPrototype from "../resources/giftgiver/paper-prototype.jpg"
import giftGiverDesign1 from "../resources/giftgiver/gift-giver-new-1.png"
import giftGiverDesign2 from "../resources/giftgiver/gift-giver-new-2.png"
import giftGiverDesign3 from "../resources/giftgiver/gift-giver-new-3.png"
import giftGiverDesign4 from "../resources/giftgiver/gift-giver-new-4.png"
import giftGiverDesign5 from "../resources/giftgiver/gift-giver-new-5.png"
import giftGiverDesign6 from "../resources/giftgiver/gift-giver-new-6.png"
import giftGiverDesign7 from "../resources/giftgiver/gift-giver-new-7.png"
import SkipButton from "./components/SkipButton";
import Recommendations from "./components/Recommendations";
import MachiningCover from "../resources/machining-recommendation.png"
import IeltsEssaysCover from "../resources/ielts-recommendation.png"

const GiftGiver = () => (
    <PortfolioPage>
        <ProjectTitle title="Gift Giver"
                      subtitle="a mobile app helping to select a perfect gift"
                      picture={GiftGiverPic}/>

        <ProjectSection title="The brief">
            <p>
                Create an app where users will be recommended what gifts to choose for their loved ones based on the
                person’s preferred things. Users should be able to enter 1-5 items a person already owns. The app should
                then provide a selection of gifts ideal for this person. For the purposes of this project, the algorithm
                for deciding what gifts to suggest can be considered as a black box
            </p>
            <p>
                This brief was provided by a UX course (David Travis 'User Experience (UX): The Ultimate Guide to
                Usability and UX'). However, the implementation of the project is my own.
            </p>
            <SkipButton link="#final-design"/>
        </ProjectSection>
        <ProjectSection title="Personas">
            <p>
                To start the project I decided to conduct some contextual research. I visited/called 15 participants and
                asked them to show me how they go about finding a gift for someone. My questions were open-ended and
                objective and so I did not ask 'What do you like about...?' as it would suggest a positive answer.
                Instead, I started by saying 'Show me how you go about selecting a gift for someone.' Then, I asked
                follow-up questions based on what they told me. For example, one person told me they would most likely
                look for inspiration on the internet; so I asked the participant to imagine they wanted to buy a present
                for their mum and to show me how they would do it now. I was interested in which websites they used and
                what they liked and disliked about a particular website. Again, I phrased this as an open question not
                to bias any responses from the participants.
            </p>
            <p>
                I analysed my findings and looked for the most common patterns, which led to the development of personas
                and user stories. I found that most people came under two categories:
                <ol>
                    <li>
                        People who mostly shop for gifts online;
                    </li>
                    <li>
                        People who almost never shop online, as they don't know where to look.
                    </li>
                </ol>
                I personified both categories as Rachel and Ben respectively.
            </p>
            <p>
                <b>Rachel</b>, was identified as a primary target, as she is most likely to use the app - she already
                shops and looks for inspiration online, but none of the other websites she uses offer her gift ideas
                suited to someone's needs.
            </p>
            <MultiplePictures
                pictures={[
                    {src: Rachel},
                    {src: Ben}
                ]}/>
        </ProjectSection>
        <ProjectSection title="Competitor analysis">
            <p>
                I decided that it was an important step to complete some competitor analysis. I needed to know what
                existing websites and apps offered to make sure mine would stand out. What I found was that most
                websites and apps offered ideas for gifts which were for a generic person, for example, gifts for
                mums or friends or brothers, however, they are not specific to any particular person. This was
                where Gift Giver was different, as it would offer more personalised ideas by using items the gift
                recipient already had.
            </p>
        </ProjectSection>
        <ProjectSection title="User pain points">
            <p>
                The main problem users were facing when trying to find gifts was the fact that they needed to <b>go to
                many stores / websites to look for inspiration.</b> This took a long time as there were lots of <b>irrelevant
                options</b> provided to them. They needed someway of reducing this selection to make their
                decision easier. I decided the way I would tackle this issue would be to use a combination of user input
                and categories buttons.
            </p>
        </ProjectSection>
        <ProjectSection title="Paper prototypes">
            <p>
                I developed paper prototypes of the app and tested it with users. Users were given a landing page and
                they could interact with it as they would with a phone app - click on any interactive element and
                complete any text boxes. <b>The tasks were based on the red routes</b> of the application, e.g. find a
                perfect gift for your mum for her birthday. The participants were asked to <b>think aloud</b> while they
                were doing tasks, which allowed me to understand each participants' actions better.
            </p>
            <p>
                Paper prototypes testing allowed for the classification of <b>crucial improvements</b> needed:
                <ul>
                    <li>
                        I deleted the section 'Name' to improve clarity for the participants. They didn't know whether
                        they should type their name or type the name of the person who they were trying to buy a gift
                        for.
                    </li>
                    <li>
                        The search field on the page with entering the data was not needed and confused the
                        participants. A better option was to delete it from this page, but keep it on the results page
                        to allow users to search for products.
                    </li>
                </ul>
            </p>
            <SinglePicture picture={{src: PaperPrototype}} xlrg/>
        </ProjectSection>
        <ProjectSection title="First Hi-Fi design">
            <SinglePicture picture={{src: originalDesign}} fullsize/>
        </ProjectSection>
        <ProjectSection title="Key Findings">
            <NielsenHeuristicDescription
                title="Input in 'Stuff they like' section"
                description={"Some users weren't sure what to type in the 'Stuff they like' section (for " +
                "example, should they type in an activity the person likes or a personal possession of this " +
                "person)."}
                heuristicViolation="Visibility of system status. System is not clear to the user."
                severity="4"
                recommendation={"Include a question mark sign to offer additional explanation, if needed (when " +
                "users hover over a sign, the explanation will appear)."}
            />
            <NielsenHeuristicDescription
                title="‘Stuff they like’ and ‘Gift for’ on one screen"
                description={"The participants didn’t have enough space to write down their input to ‘Stuff they like" +
                "’. As ‘Stuff they like’ and ‘Gift for’ are two separate steps, they can be separated into two " +
                "subsequent screens."}
                heuristicViolation="Flexibility and efficiency of use."
                severity="4"
                recommendation={"Separate ‘Stuff they like’ and ‘Gift for’ into two subsequent screens."}
            />
            <NielsenHeuristicDescription
                title="'Saving' a recipient of the gift"
                description={"One of the participants told me they would like to save this recipient (the " +
                "preferences of this particular recipient) for the future, so that they would be able to buy " +
                "other gifts for the same person, rather than entering their information again. I thought " +
                "this was a brilliant idea for the improvement of the app. It makes sure participants will " +
                "come back more often as it decreases their cognitive load (they don’t need to type in the " +
                "person’s preferred things again)."}
                heuristicViolation="Flexibility and efficiency of use."
                severity="2"
                recommendation={"Add a ‘Save this gift recipient’ button or prompt the user to save the " +
                "recipient with a pop up window."}
            />
        </ProjectSection>
        <ProjectSection id="final-design" title="Final design">
            <SinglePicture picture={{src: giftGiverDesign1}} fullsize/>
            <ProjectSubsection>
                <p>
                    The user needs to type in things a recipient likes. If not, the error message appears, asking them
                    to complete this section.
                </p>
                <SinglePicture picture={{src: giftGiverDesign2}} fullsize/>
            </ProjectSubsection>
            <ProjectSubsection>
                <p>
                    When the user clicks on 'See suggestions', they are prompted to save the gift recipient.
                </p>
                <SinglePicture picture={{src: giftGiverDesign3}} fullsize/>
                <SinglePicture picture={{src: giftGiverDesign4}} fullsize/>
            </ProjectSubsection>
            <ProjectSubsection>
                <p>
                    Next, the results page appears. Users can click on the item card to see the individual item. They
                    can then either add the item to the cart and continue browsing or just go straight to buying it.
                </p>
                <SinglePicture picture={{src: giftGiverDesign5}} fullsize/>
                <SinglePicture picture={{src: giftGiverDesign6}} fullsize/>
                <SinglePicture picture={{src: giftGiverDesign7}} fullsize/>
            </ProjectSubsection>
        </ProjectSection>
        <ProjectSection title="The result">
            <p>
                I conducted a usability test of my final design with seven participants. <b>Task completion rate was
                100%.</b> I asked the participant to complete a <b>SUS test</b>, plus survey questions about overall
                attractiveness, loyalty and trust. I was careful to follow rules to make sure not to bias responses. For
                example, a question stem should ask 'How likely or unlikely', rather than 'How likely'.
            </p>
            <p>
                Participants found the application <b>easy to use</b> (71% strongly agree, 29% agree). <b>43% of
                participants said they were ‘very likely’ to recommend</b> the website to a friend or colleague, and <b>57%
                were 'likely'</b> to do so. It does not prove they will recommend it, as people in general can't predict
                their future actions accurately. It does, however, show their positive feelings about the experience.
            </p>
        </ProjectSection>
        <ProjectSection title="What could have been better">
            <p>
                A possible avenue to explore in the future would be to send users <b>notifications</b> when their
                recipient's birthday is due, reminding the user about getting a gift for the upcoming event.
                Notifications can be also sent before other occasions, such as Valentine's Day or Mother's Day.
            </p>
        </ProjectSection>
        <Recommendations
            recommendation1={{src: MachiningCover, link: "/machining"}}
            recommendation2={{src: IeltsEssaysCover, link: "/ielts-essays"}}/>
    </PortfolioPage>
);

export default GiftGiver;