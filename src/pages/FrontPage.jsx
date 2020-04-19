import React from 'react';
import giftGiverCoverPhoto from '../resources/giftgiver/cover.png';
import machiningCoverPhoto from '../resources/machining/cover.png';
import ieltsEssaysCoverPhoto from '../resources/ieltsessays/cover.png';
import uiChallengesCoverPhoto from '../resources/uichallenges/cover.png';
import PortfolioItem from "../components/PortfolioItem";
import PortfolioPage from "../components/PortfolioPage";
import OverlayBox from "../components/OverlayBox";
import Image from 'react-bootstrap/Image'
import CoverImage from '../resources/aga-frontpage.jpg'
import PortfolioPageTitle from "../components/PortfolioPageTitle";

const FrontPage = () => {
    return (
        <>
            <div className="background-with-aga">
                <Image src={CoverImage} fluid style={{position: "relative"}}/>
                <OverlayBox
                    title="Hi, I’m Aga!"
                    subtitle="A UX designer."
                    description="I design websites and mobile applications on the basis of solid user research. I live by
                    the rule: There is no UI without UX."
                    buttonText="SEE MY PORTFOLIO"
                    link="#my-portfolio"
                />
            </div>
            <PortfolioPage centered>

                <PortfolioPageTitle id="my-portfolio" title="My Portfolio"/>
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
        </>
    );
};

export default FrontPage;