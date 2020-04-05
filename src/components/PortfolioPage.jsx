import React from 'react';
import {ScrollToTop} from "./ReactUtils";
import Footer from "./Footer";

const PortfolioPage = (props) => {
    const centeredStyling = props.centered ? "center" : "left";

    return <>
        <div className="portfolio-page" style={{textAlign: centeredStyling}}>
            <ScrollToTop/>
            {props.children}
        </div>
        <hr className="solid"/>
        <Footer/>
    </>
};

export default PortfolioPage;