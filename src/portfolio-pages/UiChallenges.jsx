import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import SubsectionWithPictures from "./components/SubsectionWithPictures";
import {ScrollToTop} from "../components/ReactUtils";
import SubsectionWithoutTitle from "./components/SubsectionWithoutTitle";
import SignUpDesign from "../resources/sign-up-design.png"
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
            title="Challenge 1 - Sign Up Page"
            description={[
                "I wanted a Sign Up page to be simple to use and clear to the user. I have included Sign up with " +
                "Facebook and Google to save time. Sign Up buttons stand out, as they are the purpose of this page."
            ]}
            pictures={[SignUpDesign]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Challenge 2 - Credit Card Checkout"
            description={[
                "My main aim was clarity. Page is user-friendly, as it can scan a card or explain what's CCV (when " +
                "you hover about a question mark)."
            ]}
            pictures={[CheckoutDesign]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Challenge 3 - A Landing Page"
            description={[
                "I chose a striking hero image first and then designed around it. I based the colour of the logo on " +
                "the model's dress. I decided to include black and white ‘Shop Now’ button to add contrast to it and " +
                "make it stand out on the page. It was fun to design!"
            ]}
            pictures={[LandingPageDesign]}
            horizontal={true}
            lrg/>

    </div>
);

export default UiChallenges;