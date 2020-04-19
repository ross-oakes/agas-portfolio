import React from 'react';

import PortfolioPage from "../components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";
import ProjectSubsection from "./components/ProjectSubsection";
import SinglePicture from "./components/SinglePicture";

import BankingAppDesign from "../resources/uichallenges/banking-app.gif"
import TravelWebsiteDesign from "../resources/uichallenges/travel-website.gif"
import SignUpDesign from "../resources/uichallenges/sign-up-design.png"
import CheckoutDesign from "../resources/uichallenges/checkout-design.png"
import LandingPageDesign from "../resources/uichallenges/landing-page-design.png"
import CalculatorDesign from "../resources/uichallenges/calculator-design.png"
import FitnessAppDashboardDesign from "../resources/uichallenges/fitness-app-design.png"
import UserProfileDesign from "../resources/uichallenges/user-profile-design.png"

const UiChallenges = () => (
    <PortfolioPage>
        <ProjectTitle title="UI Challenges"
                      subtitle="everyday practice of my design skills"/>

        <ProjectSubsection>
            <p>
                I'm getting inspired everyday to practice my design skills with new UI ideas. Some of the design tasks
                are taken from UI daily challenge, and some are also my ideas. Have a look at the results of my work
                below!
            </p>
        </ProjectSubsection>

        <ProjectSubsection title="Banking App">
            <p>
                I designed an application for a bank. My leading question was what information people want to get
                from a bank. I interviewed users of banking apps and came up with these pieces of information: how
                much money they have and on which card, latest transactions, how much they've spent so far this
                month. These questions served as a basis for my design.
            </p>
            <SinglePicture picture={{src: BankingAppDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="Travel inspiration landing page">
            <p>
                The main purpose of this landing page is to get inspired as to where to travel. That is why, different
                destinations are presented on a carousel. Text integrates with the background, making it an unusual and
                eye-catching sight. It was fun to design this page and use some After Effects magic!
            </p>
            <SinglePicture picture={{src: TravelWebsiteDesign}} xlrg/>
        </ProjectSubsection>

        <ProjectSubsection title="Sign Up Page">
            <p>
                I wanted a Sign Up page to be simple to use and clear to the user. I have included Sign up with
                Facebook and Google to save time. Sign Up buttons stand out, as they are the purpose of this page.
            </p>
            <SinglePicture picture={{src: SignUpDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="Credit Card Checkout">
            <p>
                My main aim was clarity. Page is user-friendly, as it can scan a card or explain what's CCV (when
                you hover about a question mark).
            </p>
            <SinglePicture picture={{src: CheckoutDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="Landing Page">
            <p>
                This landing page for an e-commerce website was fun to create. I chose the model and designed around it.
                I decided the CTA needs to have a different colour to that of the model’s dress, to provide clarity
                between images and clickable elements. The background and other elements of the page are kept visually
                simple. Photograph of the model: Melody Jacob, unsplash.
            </p>
            <SinglePicture picture={{src: LandingPageDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="Calculator">
            <p>
                It was hard to design, as it is hard to make such a simple thing as a calculator stand out. I
                focused on bringing clarity to the design and emphasising the most important actions (I used
                orange to emphasise the equals button).
            </p>
            <SinglePicture picture={{src: CalculatorDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="Fitness App Dashboard">
            <p>
                This is a dashboard screen for a Pilates app. It offers a personalised workout plan, so that a user does
                not have to spend time searching for a workout. They set up their preferences and are presented with a
                few workouts a week to complete.
            </p>
            <SinglePicture picture={{src: FitnessAppDashboardDesign}} fullsize/>
        </ProjectSubsection>

        <ProjectSubsection title="User Profile">
            <p>
                I designed a User profile for a travel app. The app was entirely my idea. This was super fun!
                People on this app can add pictures of their travels, complete their World Visited Map and add
                travel destinations to their Bucket Lists! It was challenging to make some elements appear visually
                secondary, but still keeping them readable, for example the comments section.
            </p>
            <SinglePicture picture={{src: UserProfileDesign}} fullsize/>
        </ProjectSubsection>
    </PortfolioPage>
);

export default UiChallenges;