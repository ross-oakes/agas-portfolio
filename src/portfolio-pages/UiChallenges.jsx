import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import SubsectionWithPictures from "./components/SubsectionWithPictures";
import {ScrollToTop} from "../components/ReactUtils";
import SubsectionWithoutTitle from "./components/SubsectionWithoutTitle";
import SignUpDesign from "../resources/signup-design.png"
import CheckoutDesign from "../resources/checkout-design.png"
import LandingPageDesign from "../resources/landing-page-design.png"

const UiChallenges = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="UI Challenges"
                      subtitle="everyday inspiration for UI designs"/>
        <SubsectionWithoutTitle description={[
            "I'm taking part in Daily UI challenge - I receive a new design challenge " +
            "every day. Have a look at the results of my work below!"
        ]}/>

        <SubsectionWithPictures
            title="Challenge 1"
            description={[
                "Design a Sign Up page."
            ]}
            pictures={[SignUpDesign]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Challenge 2"
            description={[
                "Design a credit card checkout."
            ]}
            pictures={[CheckoutDesign]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Challenge 3"
            description={[
                "Design a landing page."
            ]}
            pictures={[LandingPageDesign]}
            horizontal={true}
            lrg/>

    </div>
);

export default UiChallenges;