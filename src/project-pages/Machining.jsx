import React from 'react';

import PortfolioPage from "../components/PortfolioPage";
import ProjectTitle from "./components/ProjectTitle";
import ProjectSection from "./components/ProjectSection";
import ProjectSubsection from "./components/ProjectSubsection";
import SinglePicture from "./components/SinglePicture";
import MultiplePictures from "./components/MultiplePictures";

import MachiningCover from "../resources/machining/cover.png"
import oldWebsite1 from "../resources/machining/old-website-1.png"
import oldWebsite2 from "../resources/machining/old-website-2.png"
import oldWebsite3 from "../resources/machining/old-website-3.png"
import oldWebsite4 from "../resources/machining/old-website-4.png"
import adaPersona from "../resources/machining/ada-persona.png"
import davidPersona from "../resources/machining/david-persona.png"
import landingPage from "../resources/machining/landing-page.png"
import aboutUsPage from "../resources/machining/about-us.png"
import servicesOldPage from "../resources/machining/services-old.png"
import servicesPage from "../resources/machining/services.png"
import workWithUsPage from "../resources/machining/work-with-us.png"
import galleryPage from "../resources/machining/gallery.png"
import contactPage from "../resources/machining/contact.png"
import Recommendations from "./components/Recommendations";
import GiftGiverCover from "../resources/giftgiver/cover.png"
import IeltsEssaysCover from "../resources/ieltsessays/cover.png"


const Machining = () => (
    <PortfolioPage>
        <ProjectTitle title="Machining"
                      subtitle="a website created for a client"
                      picture={MachiningCover}/>

        <ProjectSubsection title="The brief">
            <p>
                The brief was to redesign an existing website. It needed a general refreshment to become more appealing
                to the customers. The website's function is informative - information about the company and their
                services and the way of contacting them or requesting a quote.
            </p>
            <p>
                The client was Polish and their website was also in Polish. My completed design was also in Polish.
                However, for the purposes of my portfolio, I have translated the project into English.
            </p>
        </ProjectSubsection>

        <ProjectSubsection title="Existing Website">
            <MultiplePictures horizontal pictures={[
                {src: oldWebsite1, description: "Landing Page"},
                {src: oldWebsite2, description: "About Us Page"},
                {src: oldWebsite3, description: "Contact Page (Before page fold)"},
                {src: oldWebsite4, description: "Contact Page (After page fold)"}
            ]}/>
        </ProjectSubsection>

        <ProjectSubsection title="User research and competitive analysis">
            <p>
                I interviewed four company’s clients and two other participants who use machining services. I asked them
                what they look for on machining websites, what information is useful for them, what services they want
                to use and how they select which company to use. On the basis of this research, I organised information
                on the website. I also looked at other similar websites and their way of organising the content and
                appealing to the customer.
            </p>
            <p>
                Analysing the user research allowed me to find common patterns and organise personas around them. I
                created a primary persona Ada, a company manager who looks for machining services online. A secondary
                persona is David, who mostly orders from companies he already knows or has heard through word of mouth.
                Only then, he'd look them up on the internet. Ada was selected as a target because she was most likely
                to use the website.
            </p>
            <MultiplePictures horizontal pictures={[
                {src: adaPersona},
                {src: davidPersona}
            ]}/>
        </ProjectSubsection>

        <ProjectSection title="Redesign and usability testing">
            <ProjectSubsection>
                <p>
                    User research provided me with useful insights, which led to the development of the Low-Fi
                    prototype,
                    usability testing, Hi-Fi prototype, and more usability testing. I will present pictures of the final
                    design and discuss the process of arriving at this version.
                </p>
            </ProjectSubsection>
            <ProjectSubsection title="Landing Page">
                <p>
                    Words that I often heard during interviews were 'precise', 'good quality', 'perfect execution'.
                    Clients were after brilliantly well-made items. That is why, I decided to include it on the landing
                    page as a hero message. I also included testimonials, as it is very important for clients such as
                    David to trust the company.
                </p>
                <p>
                    Previously, the landing page didn't have a call to action. It had a button with a phone number,
                    which might be considered as a sort of call to action. It didn't have any text asking the user to
                    take action, though. In my redesign, I included 'Request a free quote' call to action. It is direct
                    and specific.
                </p>
                <SinglePicture picture={{src: landingPage}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="About Us Page">
                <p>
                    For both Ada and David it is important to find out about the company before taking the risk of
                    contracting them. It is, therefore, very important to have a page about the company, providing
                    additional information as to how and when it originated, where it is based etc.
                </p>
                <SinglePicture picture={{src: aboutUsPage}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="Services Page">
                <p>
                    This page was created to give Ada an overview of services this company offers. The user can click on
                    a submenu and see the description and pictures of services offered.
                </p>
                <p>
                    My first design of this page did not make clear that tabs 'Turning', 'Milling', 'Grinding', and
                    'Drilling' are clickable. During the usability testing, participants didn't perceive these tabs as
                    clickable in my first design. I redesigned them. I moved the tabs down to associate them with the
                    lower part of the website and dissociate them from the title - in this way, it didn't look like a
                    subtitle anymore. I also made the font smaller to further stress its difference from the title.
                    Finally, I added a background rectangle behind the text to make it look like this is the pressed
                    state of the submenu.
                </p>
                <SinglePicture picture={{src: servicesOldPage, description: "My first design"}} xlrg/>
                <SinglePicture picture={{src: servicesPage, description: "My final design"}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="Work With Us Page">
                <p>
                    This is a page inviting clients to work with the company, also showing them the possibility of
                    requesting a free quote again.
                </p>
                <SinglePicture picture={{src: workWithUsPage}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="Gallery Page">
                <p>
                    This page increases the company's credibility by showcasing the products that they made in the past.
                </p>
                <SinglePicture picture={{src: galleryPage}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="Contact Page">
                <p>
                    This page has 'Request a Free Quote' on the right to prompt clients to action. It also contains
                    contact information and a map. The call to action button is above the fold.
                </p>
                <SinglePicture picture={{src: contactPage}} xlrg/>
            </ProjectSubsection>
            <ProjectSubsection title="The result and next steps">
                <p>
                    The final usability test was conducted with seven participants. They were selected from my social
                    network. SUS questionnaire results stated that participants found the website 'easy to use' (100%).
                    72% found it 'attractive', 14% 'very attractive' and 14% 'neither attractive nor unattractive' (none
                    found it 'unattractive' or 'very unattractive').
                </p>
                <p>
                    Possible future improvements to the website might include making the top nav tabs bigger or adding a
                    different picture to the About us page. The website can include some pictures of the owners/workers
                    and of the company inside.
                </p>
            </ProjectSubsection>
        </ProjectSection>
        <Recommendations
            recommendation1={{src:GiftGiverCover, link:"/gift-giver"}}
            recommendation2={{src:IeltsEssaysCover, link:"/ielts-essays"}}/>
    </PortfolioPage>
);

export default Machining;