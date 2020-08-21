import React from 'react';
import './index.scss';
import ButtonOne from "./components/utils/button-one/ButtonOne";
import CucumberHeaderLogo from "./components/header/CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./components/header/CucumberHeaderLinkContainer";
import CucumberHeaderLink from "./components/header/CucumberHeaderLink";
import CucumberHeaderButton from "./components/header/CucumberHeaderButton";
import CucumberHeader from './components/header/CucumberHeader';

function CucumberApp() {
    return (
        <div className="">
            <CucumberHeader>
                <CucumberHeaderLogo></CucumberHeaderLogo>
                <CucumberHeaderLinkContainer>
                    <CucumberHeaderLink href={"/services"} title={"Services"} />
                    <CucumberHeaderLink href={"/clients"} title={"Clients"} />
                    <CucumberHeaderLink href={"/about"} title={"About"} />
                    <CucumberHeaderLink href={"/resources"} title={"Resources"} />
                    <CucumberHeaderLink href={"/blog"} title={"Blog"} />
                </CucumberHeaderLinkContainer>
                <CucumberHeaderButton title={"Contact Us"} href={"/contact"}/>
            </CucumberHeader>
        </div>
    );
}

export default CucumberApp;
