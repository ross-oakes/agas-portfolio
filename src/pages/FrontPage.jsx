import React from 'react';
import giftGiverCoverPhoto from '../resources/gift-giver-cover.png';
import uiChallengesCoverPhoto from '../resources/ui-challenges-cover.png';
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
                title="UI challenges"
                details="everyday inspiration for UI designs"
                image={uiChallengesCoverPhoto}
                endpoint="/ui-challenges"/>

        </div>
    );
};

export default FrontPage;