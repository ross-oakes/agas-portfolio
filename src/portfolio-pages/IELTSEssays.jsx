import React from 'react';
import PortfolioPage from "./components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";

import IELTSEssaysCover from "../resources/ieltsessays/cover.png"
import ProjectSubsection from "./components/ProjectSubsection";
import MultiplePictures from "./components/MultiplePictures";
import old1 from "../resources/ieltsessays/old-homepage.jpg"
import old2 from "../resources/ieltsessays/old-essays1.jpg"
import old3 from "../resources/ieltsessays/old-essays2.jpg"
import old4 from "../resources/ieltsessays/old-collocations1.jpg"
import old5 from "../resources/ieltsessays/old-collocations2.jpg"
import affinityMap from "../resources/ieltsessays/affinity-map.jpg"
import ProjectSection from "./components/ProjectSection";
import SinglePicture from "./components/SinglePicture";

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
        </ProjectSubsection>

        <ProjectSubsection title="Original app">
            <MultiplePictures pictures={[
                {src: old1, description: "Homepage"},
                {src: old2, description: "Essay collection 1"},
                {src: old3, description: "Essay collection 2"},
                {src: old4, description: "Vocabulary collection 1"},
                {src: old5, description: "Vocubulary collection 2"},
            ]}/>
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

        </ProjectSection>
    </PortfolioPage>
);

export default IELTSEssays;