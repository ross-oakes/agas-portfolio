import React from 'react';
import PortfolioPage from "./components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";

import IELTSEssaysCover from "../resources/ieltsessays/cover.png"

const IELTSEssays = () => (
    <PortfolioPage>
        <ProjectTitle title="IELTS Essays"
                      subtitle="an app to help students prepare for IELTS English exam"
                      picture={IELTSEssaysCover}/>
    </PortfolioPage>
);

export default IELTSEssays;