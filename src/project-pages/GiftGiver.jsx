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
import categoriesNew from "../resources/giftgiver/categories-new-version.png"
import categoriesOld from "../resources/giftgiver/categories-old-version.png"
import filterSort from "../resources/giftgiver/filter-and-sort.png"
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
                Create an app where users will be recommended what gifts to choose for their loved ones based on
                the person’s preferred things. Users should be able to enter numerous items a person already owns.
                The app should then provide a selection of gifts ideal for this person. For the purposes of this
                project, the algorithm for deciding what gifts to suggest can be considered as a black box
            </p>
            <p>
                This brief was provided by a UX course (David Travis 'User Experience (UX): The Ultimate Guide to
                Usability and UX'). However, the implementation of the project is my own.
            </p>

            <SkipButton link="#final-design"/>
        </ProjectSection>
        <ProjectSection title="Personas">
            <p>
                To start the project I decided to conduct some contextual research. I visited/called 15
                participants and asked them to show me how they go about finding a gift for someone. My questions
                were open-ended and objective and so I did not ask 'What do you like about...?' as it would suggest
                a positive answer. Instead, I started by saying 'Show me how you go about selecting a gift for
                someone.' Then I asked follow-up questions based on what they told me. For example, one person told
                me they would most likely look for inspiration on the internet; so I asked the participant to
                imagine they wanted to buy a present for their mum and to show me how they would do it now. I was
                interested in which websites they used and what they liked and disliked about a particular website.
                Again, I phrased this as an open question not to bias any responses from the participants.
            </p>
            <p>
                I analysed my findings and looked for the most common patterns, which led to the development of
                personas and user stories. I found that most people came under two categories: 1) People who mostly
                shop for gifts online; 2) People who almost never shop online, as they don't know where to look. I
                personified both categories as Rachel and Ben respectively. Rachel, was identified as a primary
                target, as she is most likely to use the app - she already shops and looks for inspiration online,
                but none of the other websites she uses offer her gift ideas suited to someone's needs.
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
                The main problem users were facing when trying to find gifts was the fact that they needed to go to
                many stores / websites to look for inspiration. This took a long time as there were lots of
                irrelevant options provided to them. They needed someway of reducing this selection to make their
                decision easier. I decided the way I would tackle this issue would be to use a combination of user
                input and categories buttons.
            </p>
        </ProjectSection>
        <ProjectSection title="Categories">
            <p>
                The decision of which categories to include stemmed from the user research and usability testing. I
                asked participants to tell me who they bought presents for and found that the most common answers
                were their mum, boyfriend, son, friends, etc; thus, providing me with a start to my list. Other
                websites offered a similar classification, for instance, Him / Her / Mum / Son. I have included
                these categories in my first Hi-Fi Prototype.
            </p>
            <p>
                After usability testing, though, I discovered I had included too many buttons, which made it
                difficult for the participants to click on the correct one. Furthermore, it turned out to be
                distracting (too many options to choose from made the choice cumbersome). Another problem with this
                classification was that it was gender binary. The issues would arise if, for example, a man liked
                makeup and dresses. It was not necessary to state someone's gender as the items they already owned
                would decide on the most suitable gifts. Therefore, I designed a new categorisation. I decided to
                only include three categories: 'Partner', 'Family' and 'Friend'.
            </p>
            <p>
                I wanted to keep the categories, rather than get rid of them, as they will include gifts specific
                to a person's relationship to another person. For example, a partner category will also include
                romantic gifts.
            </p>
            <MultiplePictures
                pictures={[
                    {src: categoriesOld, description: "Original Design"},
                    {src: categoriesNew, description: "Improved Design"}
                ]}
                horizontal/>
        </ProjectSection>
        <ProjectSection title="Users input">
            <p>
                I was thinking what is the best idea for users to input the person's favourite things. First of all
                , I came up with as many as possible on my own. Then, I asked a few friends for their ideas as well
                . At this stage I wanted to collect as many ideas as possible, therefore I asked them to think
                freely, elimination would come later. Some of the ideas included: a list of categories and
                subcategories, a text box, voice recognition, a dropdown. Typing in a text box seemed to be the
                most appropriate, as it is the least time consuming. As the possibilities of things a person can
                own are endless, the input would not work as a dropdown, and it would be tedious to click through
                a hierarchy of categories too for every item. Furthermore, it would be beneficial if the input box
                could provide autofill suggestions when users began to type. This would help to make the text input
                quicker, avoid typos and prompt users to type in things that are already in the system. If users
                type in an unrecognisable item, the system should come up with similar suggestions and inform the
                user that the item is not in the database ('Oops! Sorry, this item is not in our database.
                Did you mean...?'.
            </p>
        </ProjectSection>
        <ProjectSection title="Filter and sort">
            <p>
                Once the user lands at the results page, they should be able to sort and filter results. The
                choice of what to sort by should be done by swiping through a list of available options. The
                default sort should be by 'Recommended', but users should also be able to choose to sort by 'Most
                Popular', 'Lowest Price' or 'Highest Price'. Filtering can be done by 'Product Category', 'Occasion'
                , 'Relationship', 'Price', and 'Rating'. The first four options should be sorts, which should be
                applied automatically after the user clicks the option. Further options should be filters, so that
                if a user clicks on 'Product Category' a pop-up screen would allow a user to customise the category
                of product they are looking for. These options stemmed from user research and competitors analysis.
                I conducted a card sorting exercise, where participants had to sort different items into their own
                categories and name them. Then, I asked them to add their own items and come up with their own
                categories for an e-commerce app. This exercise allowed me to understand participants' process of
                thinking while selecting sorting or filtering options.
            </p>
            <p>
                Some users wanted to choose a personalised present for their mum, but the main category was a
                general term 'Family'. Therefore, I have applied the additional filter of 'Relationship' at the
                results page (e.g. the recipient can choose 'Mum' relationship and will be shown a filtered list of
                personalised presents for Mums). Multiple filters can be applied simultaneously.
            </p>
            <SinglePicture picture={{src: filterSort}} fullsize/>
        </ProjectSection>
        <ProjectSection title="Paper prototypes">
            <p>I developed paper prototypes of the app and tested it with users. Users were given a landing page
                and they could interact with it as they would with a phone app - click on any interactive element
                and complete any text boxes. The tasks they were given were based on the red routes of the
                application, e.g. find a perfect gift for your mum for her birthday. The participants were asked
                to think aloud while they were doing tasks, which allowed me to understand each participants'
                actions better.</p>
            <p>
                Paper prototypes testing allowed for the classification of crucial improvements needed. For
                instance, I deleted the section 'Name' to improve clarity for the participants. They didn't know
                whether they should type their name or type the name of the person who they were trying to buy a
                gift for. Also, the search field on the landing page was not needed and confused the participants.
                A better option was to delete it from the landing page, but keep it on the results page to allow
                users to search for products.</p>
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
                I conducted a usability test of my final design with seven participants. Task completion rate was
                100%. I asked participant to complete SUS test, plus survey questions about overall attractiveness,
                loyalty and trust. I was careful to follow rules to make sure not to bias responses. For example, a
                question stem should ask 'How likely or unlikely', rather than 'How likely'.
            </p>
            <p>
                Participants found the application easy to use (71% strongly agree, 29% agree). 100% of
                participants found it visually attractive. 43% of participants said they were ‘very likely’ to
                recommend the website to a friend or colleague, and 57% were 'likely' to do so. It does not prove
                they will recommend it, as people in general can't predict their future actions accurately. It
                does, however, show their positive feelings about the experience.
            </p>
        </ProjectSection>
        <ProjectSection title="What could have been better">
            <p>
                A possible avenue to explore in the future would be to send users notifications when their
                recipient's birthday is due, reminding the user about getting a gift for the upcoming event.
                Notifications can be also sent before other occasions, such as Valentine's Day or Mother's Day.
            </p>
            <p>
                I sacrificed primary button’s appearance for aesthetics in the landing page and the payment
                confirmation page. Everywhere else, primary buttons are in a vivid purple colour. On the landing
                page, the button ‘See suggestions’ is white with a lilac border. This is because the landing page
                looked flashy when ‘See suggestions’ button was purple. It is, though, an important issue to
                consider whether the primary button consistency should have been kept over the aesthetics of the
                page. With new research linking the aesthetics to the perceived functionality of the page, the
                question of which of these two, in the case of my project, is more important, remains up to further
                investigation. I would recommend A/B testing as a further step to resolve this issue.
            </p>
        </ProjectSection>
        <Recommendations
            recommendation1={{src: MachiningCover, link: "/machining"}}
            recommendation2={{src: IeltsEssaysCover, link: "/ielts-essays"}}/>
    </PortfolioPage>
);

export default GiftGiver;