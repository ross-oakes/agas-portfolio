import React from 'react';
import giftGiverCoverPhoto from '../resources/giftgiver/cover.png';
import machiningCoverPhoto from '../resources/machining/cover.png';
import ieltsEssaysCoverPhoto from '../resources/ieltsessays/cover.png';
import uiChallengesCoverPhoto from '../resources/uichallenges/cover.png';
import PortfolioItem from "../components/PortfolioItem";
import {ScrollToTop} from "../components/ReactUtils";
import {Button} from "reactstrap";

const FrontPage = () => {
    return (
        <div className="front-page">
            <ScrollToTop/>
            <div className="background-with-aga">
                <div className="picture-title">
                    <p>Hi! I'm Aga!</p>
                    <p>A passionate UX designer</p>
                </div>
                <div className="picture-extra-information">
                    <a href="#my-portfolio">
                        <Button className="frontpage-button-display"><b>SEE MY PORTFOLIO</b></Button>
                    </a>
                </div>
            </div>
            <h1 id="my-portfolio" className="portfolio-title">My Portfolio</h1>
            <PortfolioItem
                title="Gift Giver"
                details="a mobile app helping to select a perfect gift"
                image={giftGiverCoverPhoto}
                endpoint="/gift-giver"/>
            <PortfolioItem
                title="Machining"
                details="a website created for a client"
                image={machiningCoverPhoto}
                endpoint="/machining"/>
            <PortfolioItem
                title="IELTS Essays"
                details="an app to help students prepare for IELTS English exam"
                image={ieltsEssaysCoverPhoto}
                endpoint="/ielts-essays"/>
            <PortfolioItem
                title="UI challenges"
                details="everyday practice of my design skills"
                image={uiChallengesCoverPhoto}
                endpoint="/ui-challenges"/>

        </div>
    );
};

export default FrontPage;