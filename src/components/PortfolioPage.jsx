import React from 'react';
import {ScrollToTop} from "../../components/ReactUtils";

const PortfolioPage = (props) => (
    <div className="portfolio-page">
        <ScrollToTop/>
        {props.children}
    </div>
);

export default PortfolioPage;