import * as React from "react";

 const PortfolioItem = ({ title, image, details, endpoint}) => (
     <div className="portfolio-cover">
         <a href={endpoint}>
            <img alt={title} src={image} className="portfolio-image"/>
            <div className="hovered-filter">
                <div className="portfolio-text">
                    <b>{title}</b>
                    <p className="portfolio-details">{details}</p>
                </div>
            </div>
         </a>
     </div>
);

export default PortfolioItem;