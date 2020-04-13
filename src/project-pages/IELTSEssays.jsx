import React from 'react';

import PortfolioPage from "../components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";
import ProjectSection from "./components/ProjectSection";
import ProjectSubsection from "./components/ProjectSubsection";
import SinglePicture from "./components/SinglePicture";

import IELTSEssaysCover from "../resources/ieltsessays/cover.png"
import old1 from "../resources/ieltsessays/old-ielts-1.png"
import old2 from "../resources/ieltsessays/old-ielts-2.png"
import affinityMap from "../resources/ieltsessays/affinity-map.jpg"
import persona from "../resources/ieltsessays/persona.png"
import paperPrototype from "../resources/ieltsessays/paper-prototype.jpg"
import first1 from "../resources/ieltsessays/first-ielts-1.png"
import first2 from "../resources/ieltsessays/first-ielts-2.png"
import new1 from "../resources/ieltsessays/ielts-new-1.png"
import new2 from "../resources/ieltsessays/ielts-new-2.png"
import new3 from "../resources/ieltsessays/ielts-new-3.png"
import SkipButton from "./components/SkipButton";
import Recommendations from "./components/Recommendations";
import GiftGiverCover from "../resources/gift-giver-recommendation.png"
import MachiningCover from "../resources/machining-recommendation.png"

const IELTSEssays = () => (
    <PortfolioPage>
        <ProjectTitle title="IELTS Essays"
                      subtitle="an app to help students prepare for IELTS English exam"
                      picture={IELTSEssaysCover}/>

        <ProjectSubsection title="The brief">
            <p>
                The brief was to redesign an existing app - IELTS Essays. This app's purpose is to help students learn
                writing essays for IELTS exam. It has a collection of essays, together with feedback on them, to help
                students understand how to improve their writing skills. Other functions of this app are to give
                students some information about the speaking part of the exam and marking criteria. The last important
                feature was to present students with a list of vocabulary, so that they can use it when they write
                their own essays.
            </p>
            <SkipButton link="#final-design"/>
        </ProjectSubsection>

        <ProjectSubsection title="Original app">
            <SinglePicture picture={{src: old1}} fullsize/>
            <SinglePicture picture={{src: old2}} fullsize/>
        </ProjectSubsection>

        <ProjectSection title="Research and Analysis">
            <ProjectSubsection title="User research">
                <p>
                    I conducted contextual inquiry with eight participants - three users of the app and five other
                    IELTS students. I asked participants to perform a number of tasks on an existing app, as well as
                    to say what they liked/disliked. An example question was to find an essay to read about education.
                    Essays weren't labelled according to categories, and there weren't any filtering options, either.
                    Participants used a search icon to filter the essays.
                </p>
                <p>
                    I asked the participants to share their opinion about the app: what they liked and what they
                    disliked, what needed an improvement, and what was working well. Next, I organised participants'
                    thoughts into an affinity map and developed a list of most pressing improvements needed: 1.
                    Organising essays according to category, e.g. ecology, family, health; 2. Filter options; 3.
                    Provide definitions for collocations/vocabulary part of the app.
                </p>
                <SinglePicture
                    picture={{src: affinityMap, description: "Affinity mapping of the key issues"}} fullsize/>
            </ProjectSubsection>
            <ProjectSubsection title="Competitive analysis and best practices">
                <p>
                    I analysed competitive apps and best practices for individual elements of the app. On the basis of
                    this research, I came up with other useful improvements. For instance, all of the competitive
                    applications split the essays into four types: Agree/Disagree, Discussion, Causes and Solutions,
                    Advantages and Disadvantages. These types stem from the exam requirements. Another improvement
                    originated from best practices for mobile design, The app only had one menu, which combined together
                    main tabs for users as well as secondary information about the creators. According to best practices
                    of app design, it is best to split up the navigation items into primary and secondary to enhance
                    clarity.
                </p>
            </ProjectSubsection>
            <ProjectSubsection title="Persona creation">
                <p>
                    As there wasn't much difference between my participants - all were young IELTS students, I decided
                    to create one persona.
                </p>
                <SinglePicture picture={{src: persona}}/>
            </ProjectSubsection>
        </ProjectSection>

        <ProjectSection title="Prototyping and Testing">
            <ProjectSubsection title="Paper prototypes">
                <p>
                    Basing on previous user research, client goals and competitive analysis, I created paper prototypes
                    and tested them with five users. Testing was conducted in order to exclude any functionality flaws
                    or issues with navigation flow.
                </p>
                <SinglePicture picture={{src: paperPrototype}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="Hi-Fi Prototype - First Design">
                <SinglePicture picture={{src: first1}} fullsize/>
                <SinglePicture picture={{src: first2}} fullsize/>
            </ProjectSubsection>
            <ProjectSubsection title="Improvements needed">
                <p>
                    After conducting usability testing on my first Hi-Fi design and liaising with my clients, we came up
                    with a list of improvements needed to the app:
                    <ul>
                        <li>
                            The 'Sign up' page needed to accommodate 'Continue as Guest', as it is not mandatory for
                            users
                            to sign up;
                        </li>
                        <li>
                            Essays tabs should not include 'Essay 1', 'Essay 2', 'Essay 3', as there are over 200
                            essays. It
                            would have made it tedious for the users to slide through 200 Essays. Rather, it should
                            include
                            'Next' and 'Previous';
                        </li>
                        <li>
                            As some users wanted a way to practice writing or/and vocabulary, I came up with a quiz for
                            vocabulary practise. It is not the purpose of this app, though, to learn vocabulary. The
                            reason
                            for 'Collocations/vocabulary' page is to use these vocabulary items while writing an essay.
                            That
                            is why, definitions are needed. Quiz, though, seen as an additional feature, may be
                            implemented
                            in a later stage;
                        </li>
                        <li>
                            Colour theme could be darker, as lighter colours decrease readability of white text.
                        </li>
                    </ul>
                </p>
            </ProjectSubsection>
        </ProjectSection>

        <ProjectSection id="final-design" title="Final design">
            <SinglePicture picture={{src: new1}} fullsize/>
            <SinglePicture picture={{src: new2}} fullsize/>
            <SinglePicture picture={{src: new3}} fullsize/>
            <ProjectSubsection title="Result and next steps">
                <p>
                    The final usability test was conducted with six participants. They were selected from IELTS students
                    and my social network.
                </p>
                <p>
                    Possible future improvements to the app might include creating some practice tasks for students, so
                    that they can work on writing small chunks of essays or practise vocabulary. It might be also useful
                    to give students an option to grade their essays. Students might write an essay, and then, for a
                    certain price, teachers might be able to grade it.
                </p>
            </ProjectSubsection>
        </ProjectSection>
        <Recommendations
            recommendation1={{src:GiftGiverCover, link:"/gift-giver"}}
            recommendation2={{src:MachiningCover, link:"/machining"}}/>
    </PortfolioPage>
);

export default IELTSEssays;