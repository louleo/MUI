import React, {Component} from 'react';
import CucumberHeader from "./CucumberHeader";
import CucumberHeaderLogo from "./CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./CucumberHeaderLinkContainer";
import CucumberHeaderLink from "./CucumberHeaderLink";
import CucumberHeaderButton from "./CucumberHeaderButton";

class CucumberHeaderWrapper extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state={
            mobileClass:'',
            navOpen:false,
        }
    }

    onMobileButtonClick() {
        if (this.state.navOpen){
            this.setState({
                mobileClass:'cucumber-header-nav-out-animated',
                navOpen:false
            });
        }else{
            this.setState({
                mobileClass:'cucumber-header-nav-in-animated',
                navOpen:true
            });
        }
    }


    windowSizeMonitor(){
        const width = window.innerWidth;
        if (width < 1200){
            this.setState({
                mobileClass:'cucumber-header-nav-out-animated',
                navOpen:false
            });
        }else {
            this.setState({
                mobileClass:'',
                navOpen:false
            });
        }
    }

    componentDidMount() {
        this.windowSizeMonitor();
        window.addEventListener('resize', ()=>this.windowSizeMonitor());
    }
    componentWillUnmount() {
        window.removeEventListener('resize', ()=>this.windowSizeMonitor());
    }

    render() {
        return (
            <CucumberHeader mobileNavBtnClick={()=>this.onMobileButtonClick()} mobileNavOpen={this.state.navOpen}>
                <CucumberHeaderLogo></CucumberHeaderLogo>
                <CucumberHeaderLinkContainer mobileClass={this.state.mobileClass}>
                    <CucumberHeaderLink href={"/services"} title={"Services"} />
                    <CucumberHeaderLink href={"/clients"} title={"Clients"} />
                    <CucumberHeaderLink href={"/about"} title={"About"} />
                    <CucumberHeaderLink href={"/resources"} title={"Resources"} />
                    <CucumberHeaderLink href={"/blog"} title={"Blog"} />
                </CucumberHeaderLinkContainer>
                <CucumberHeaderButton title={"Contact Us"} href={"/contact"}/>
            </CucumberHeader>
        );
    }
}

export default CucumberHeaderWrapper;
