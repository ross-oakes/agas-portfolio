import * as React from "react";
import {Link} from "react-router-dom";

const PortfolioItem = ({ title, image, details, endpoint}) => (
     <div className="portfolio-cover">
         <Link to={endpoint}>
            <img alt={title} src={image} className="portfolio-item"/>
            <div className="hovered-filter">
                <div className="portfolio-text">
                    <b>{title}</b>
                    <p className="portfolio-details">{details}</p>
                </div>
            </div>
         </Link>
     </div>
);

export default PortfolioItem;