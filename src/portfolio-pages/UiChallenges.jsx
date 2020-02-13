import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import SubsectionWithPictures from "./components/SubsectionWithPictures";
import {ScrollToTop} from "../components/ReactUtils";
import SubsectionWithoutTitle from "./components/SubsectionWithoutTitle";
import BankingAppDesign from "../resources/uichallenges/banking-app.gif"
import SignUpDesign from "../resources/uichallenges/sign-up-design.png"
import CheckoutDesign from "../resources/uichallenges/checkout-design.png"
import LandingPageDesign from "../resources/uichallenges/landing-page-design.png"
import CalculatorDesign from "../resources/uichallenges/calculator-design.png"
import AppIconDesign from "../resources/uichallenges/app-icon-design.png"
import UserProfileDesign from "../resources/uichallenges/user-profile-design.png"

const UiChallenges = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="UI Challenges"
                      subtitle="everyday practice of my design skills"/>
        <SubsectionWithoutTitle description={[
            "I'm getting inspired everyday to practice my design skills with new UI ideas. Some of the design tasks " +
            "are taken from UI daily challenge, and some are also my ideas. Have a look at the results of my work " +
            "below!"
        ]}/>

        <SubsectionWithPictures
            title="Banking App"
            description={[
                "I designed an application for a bank. My leading question was what information people want to get " +
                "from a bank. I interviewed users of banking apps and came up with these pieces of information: how " +
                "much money they have and on which card, latest transactions, how much they've spent so far this " +
                "month. These questions served as a basis for my design."
            ]}
            pictures={[{src: BankingAppDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Sign Up Page"
            description={[
                "I wanted a Sign Up page to be simple to use and clear to the user. I have included Sign up with " +
                "Facebook and Google to save time. Sign Up buttons stand out, as they are the purpose of this page."
            ]}
            pictures={[{src: SignUpDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Credit Card Checkout"
            description={[
                "My main aim was clarity. Page is user-friendly, as it can scan a card or explain what's CCV (when " +
                "you hover about a question mark)."
            ]}
            pictures={[{src: CheckoutDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Landing Page"
            description={[
                "I chose a striking hero image first and then designed around it. I based the colour of the logo on " +
                "the model's dress. I decided to include black and white ‘Shop Now’ button to add contrast to it and " +
                "make it stand out on the page. It was fun to design!"
            ]}
            pictures={[{src: LandingPageDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="Calculator"
            description={[
                "It was hard to design, as it is hard to make such a simple thing as a calculator stand out. I " +
                "focused on bringing clarity to the design and emphasising the most important actions (I used " +
                "orange to emphasise the equals button)."
            ]}
            pictures={[{src: CalculatorDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="App Icon"
            description={[
                "I've created an icon for my own app (If I ever have one). I've included brand colours, letter 'a' " +
                "for my name and 'x' for ux. Plus, I checked how it looks on the phone next to other icons."
            ]}
            pictures={[{src: AppIconDesign}]}
            horizontal={true}
            lrg/>

        <SubsectionWithPictures
            title="User Profile"
            description={[
                "I designed a User profile for a travel app. The app was entirely my idea. This was super fun! " +
                "People on this app can add pictures of their travels, complete their World Visited Map and add " +
                "travel destinations to their Bucket Lists! It was challenging to make some elements appear visually " +
                "secondary, but still keeping them readable, for example the comments section."
            ]}
            pictures={[{src: UserProfileDesign}]}
            horizontal={true}
            lrg/>

    </div>
);

export default UiChallenges;