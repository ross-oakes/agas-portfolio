import React from 'react';
import ProjectTitle from "./components/ProjectTitle";
import MachiningCover from "../resources/machining/cover.png"
import oldWebsite1 from "../resources/machining/old-website-1.png"
import oldWebsite2 from "../resources/machining/old-website-2.png"
import oldWebsite3 from "../resources/machining/old-website-3.png"
import oldWebsite4 from "../resources/machining/old-website-4.png"
import adaPersona from "../resources/machining/ada-persona.png"
import davidPersona from "../resources/machining/david-persona.png"

import {ScrollToTop} from "../components/ReactUtils";
import Subsection from "./components/Subsection";
import SubsectionWithPictures from "./components/SubsectionWithPictures";

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

        <SubsectionWithPictures
            title="Existing Website"
            description={[]}
            pictures={[{src: oldWebsite1, description: "Landing Page"}]}
            lrg/>

        <SubsectionWithPictures
            description={[]}
            pictures={[{src: oldWebsite2, description: "About Us Page"}]}
            lrg/>

        <SubsectionWithPictures
            description={[]}
            pictures={[{src: oldWebsite3, description: "Contact Page (Before page fold)"}]}
            lrg/>

        <SubsectionWithPictures
            description={[]}
            pictures={[{src: oldWebsite4, description: "Contact Page (After page fold)"}]}
            lrg/>

        <SubsectionWithPictures
            title="User research and competitive analysis"
            description={[
                "I interviewed the customers of four companys and two other participants who use machining services. " +
                "I asked them what they look for on machining websites, what information is useful for them, what " +
                "services they want to use and how they select which company to use. On the basis of this research, " +
                "I organised information on the website. I also looked at other similar websites and their way of " +
                "organising the content and appealing to the customer.",

                "Analysing the user research allowed me to find common patterns and organise personas around them. " +
                "I created a primary persona Ada, a company manager who looks for machining services online. A " +
                "secondary persona is David, who mostly orders from companies he already knows or has heard through " +
                "word of mouth. Only then, he'd look them up on the internet. Ada was selected as a target because " +
                "she was most likely to use the website."
            ]}
            pictures={[
                {src: adaPersona},
                {src: davidPersona}
            ]}/>
    </div>
);

export default Machining;