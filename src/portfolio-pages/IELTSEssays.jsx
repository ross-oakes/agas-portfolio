import React from 'react';
import PortfolioPage from "./components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";

import IELTSEssaysCover from "../resources/ieltsessays/cover.png"
import ProjectSubsection from "./components/ProjectSubsection";

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
    </PortfolioPage>
);

export default IELTSEssays;