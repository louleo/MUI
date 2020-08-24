import React, {Component} from 'react';
import CucumberHeader from "./CucumberHeader";
import CucumberHeaderLogo from "./CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./CucumberHeaderLinkContainer";
import CucumberHeaderLink from "./CucumberHeaderLink";
import CucumberHeaderButton from "./CucumberHeaderButton";

class CucumberHeaderWrapper extends Component<any,any> {
    constructor(props:any){
        super(props);
    }


    render() {
        return (
            <CucumberHeader>
                    <CucumberHeaderLink href={"/services"} title={"header-1"} />
                    <CucumberHeaderLink href={"/clients"} title={"header-2"} />
                    <CucumberHeaderLink href={"/about"} title={"header-3"} />
                    <CucumberHeaderLink href={"/resources"} title={"header-4"} />
                    <CucumberHeaderLink href={"/blog"} title={"header-5"} />
            </CucumberHeader>
        );
    }
}

export default CucumberHeaderWrapper;
