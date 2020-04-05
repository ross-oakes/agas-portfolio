import React from 'react';
import giftGiverCoverPhoto from '../resources/giftgiver/cover.png';
import machiningCoverPhoto from '../resources/machining/cover.png';
import ieltsEssaysCoverPhoto from '../resources/ieltsessays/cover.png';
import uiChallengesCoverPhoto from '../resources/uichallenges/cover.png';
import PortfolioItem from "../components/PortfolioItem";
import {ScrollToTop} from "../components/ReactUtils";
import {Button} from "reactstrap";
import PortfolioPage from "../components/PortfolioPage";

const FrontPage = () => {
    return (
        <div>
            <div className="background-with-aga">
                <div className="picture-title">
                    <p>Hi! I'm Aga!</p>
                    <p>A passionate UX designer</p>
                </div>
                <div className="picture-extra-information">
                    <a href="#my-portfolio">
                        <Button className="primary-button-display"><b>SEE MY PORTFOLIO</b></Button>
                    </a>
                </div>
            </div>

            <PortfolioPage centered>
                <h1 id="my-portfolio">My Portfolio</h1>
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

            </PortfolioPage>
        </div>
    );
};

export default FrontPage;