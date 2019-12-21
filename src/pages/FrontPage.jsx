import React from 'react';
import giftGiverCoverPhoto from '../resources/gift-giver-cover.png';
import PortfolioItem from "../components/PortfolioItem";

const FrontPage = () => {
    return (
        <div className="front-page">
            <div className="background-with-aga">
                <div className="picture-title">
                    <p>Hi! I'm Aga!</p>
                    <p>A passionate UX designer</p>
                </div>
                <div className="picture-extra-information">
                    <p>Scroll down to see my portfolio</p>
                </div>
            </div>
            <h1 id="my-portfolio" className="portfolio-title">My Portfolio</h1>
                <PortfolioItem
                    title="Gift Giver"
                    details="a mobile app helping to select a perfect gift"
                    image={giftGiverCoverPhoto}
                    endpoint="/gift-giver/"/>

        </div>
    );
};

export default FrontPage;