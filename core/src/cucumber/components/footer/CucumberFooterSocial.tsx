import React, {Component} from 'react';
import CucumberSubFooter from "./CucumberSubFooter";

interface CucumberFooterSocialElement{
    name:string,
    link:string,
}


interface CucumberFooterSocialProps{
    socials:CucumberFooterSocialElement[]
}

class CucumberFooterSocialElement extends Component<any, any>{
    constructor(props:CucumberFooterSocialElement) {
        super(props);
    }

    render(){
        return(
            <div className={"cucumber-footer-social-element-wrapper"}>
                <a href={this.props.link} title={this.props.name}>
                    <span className={"material-icons"}>{this.props.name}</span>
                </a>
            </div>
        );
    }
}


class CucumberFooterSocial extends Component<any,any> {
    constructor(props:CucumberFooterSocialProps) {
        super(props);
    }

    render() {
        return (
            <div className={"cucumber-footer-social-wrapper"}>
                {this.props.socials.map((el:CucumberFooterSocialElement,index:number)=>(
                    <CucumberFooterSocialElement key={index} link={el.link} name={el.name}></CucumberFooterSocialElement>
                ))}
            </div>
        );
    }
}

export default CucumberFooterSocial;
