import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import MachiningCover from "../resources/machining/cover.png"

import {ScrollToTop} from "../components/ReactUtils";
import Subsection from "./components/Subsection";

const Machining = () => (
    <div className="portfolio-page">
        <ScrollToTop/>
        <ProjectTitle title="Precision in Machining"
                      subtitle="a website created for a client"/>
        <img className="portfolio-item" src={MachiningCover} alt=""/>

        <Subsection
            title="The brief"
            description={[
                "The brief was to redesign an existing website. It needed a general refreshment to become more " +
                "appealing to the customers. The website's function is informative - information about the company " +
                "and their services and the way of contacting them or requesting a quote.",

                "The client was Polish and their website was also in Polish. My completed design was also in Polish. " +
                "However, for the purposes of my portfolio, I have translated the project into English."
            ]}/>
    </div>
);

export default Machining;