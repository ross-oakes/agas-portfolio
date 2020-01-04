import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import titlePic from "../resources/ui-challenges.png"
import Section from "./components/Section";
import SectionWithTable from "./components/SectionWithTable";
import SectionWithPictures from "./components/SectionWithPictures";

import Rachel from "../resources/personas-rachel.png"
import Ben from "../resources/personas-ben.png"
import PaperPrototype from "../resources/paper-prototype.jpg"
import GiftGiverMainPage from "../resources/gift-giver-main-page.png"
import GiftGiverSubPage from "../resources/gift-giver-sub-page.png"
import {ScrollToTop} from "../components/ReactUtils";

const UiChallenges = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="UI Challenges"
                      subtitle="everyday inspiration for UI designs"/>
        <img className="portfolio-item" src={titlePic} alt=""/>
    </div>
);

export default UiChallenges;