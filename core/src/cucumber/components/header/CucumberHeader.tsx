import React, {Component} from "react";
import styles from './modules/cucumber-header.module.css';
import CucumberHeaderLogo from "./CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./CucumberHeaderLinkContainer";


export default class CucumberHeader extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            navClass:"cucumber-nav-show",
            mobileClass:'',
            navOpen:false,
        };
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

    render(){
        return(
            <nav className={"cucumber-header " + styles[this.state.navClass]}>
                <CucumberHeaderLogo></CucumberHeaderLogo>
                <CucumberHeaderLinkContainer mobileClass={this.state.mobileClass}>
                {this.props.children}
                </CucumberHeaderLinkContainer>
                <button className={"cucumber-header-nav-hamburger-btn"} onClick={()=>this.onMobileButtonClick()}><span className={"material-icons cucumber-header-nav-hamburger-btn-span"}>{this.state.navOpen?'menu_open':'menu'}</span></button>
            </nav>
        );
    }
}
