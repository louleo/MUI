import React, {Component} from "react";
import styles from './modules/cucumber-header.module.css';
import CucumberHeaderLogo from "./CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./CucumberHeaderLinkContainer";


export default class CucumberHeader extends Component<any, any>{
    private scrollTop:number;
    private showStyle:{};
    private hideStyle:{};

    constructor(props:any) {
        super(props);
        this.state = {
            navClass:"cucumber-nav-show",
            mobileClass:'',
            navOpen:false,
            navStyle:{}
        };
        this.scrollTop = 0;
        this.showStyle={
            transform: 'translateY(0px)',
            backgroundColor: 'rgb(255, 255, 255)',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px',
            padding: '25px 26px'
        };
        this.hideStyle = {
            transform: 'translateY(-100%)',
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
        window.addEventListener('scroll',(e)=>{
            let direction = true;
            if ((document.body.getBoundingClientRect()).top > this.scrollTop){
                this.scrollTop = (document.body.getBoundingClientRect()).top;
                direction = true;
            }else{
                this.scrollTop = (document.body.getBoundingClientRect()).top;
                direction = false;
            }
            if (this.scrollTop == 0){
                this.setState({
                    navStyle:{}
                });
                return false;
            }
            if (direction){
                this.setState({
                    navStyle:this.showStyle
                });
            }else{
                this.setState({
                    navStyle:this.hideStyle
                });
            }
        });
    }


    componentWillUnmount() {
        window.removeEventListener('resize', ()=>this.windowSizeMonitor());
    }

    render(){
        return(
            <nav className={"cucumber-header " + styles[this.state.navClass]} style={this.state.navStyle}>
                <CucumberHeaderLogo></CucumberHeaderLogo>
                <CucumberHeaderLinkContainer mobileClass={this.state.mobileClass}>
                {this.props.children}
                </CucumberHeaderLinkContainer>
                <button className={"cucumber-header-nav-hamburger-btn hamburger hamburger--slider-r "+(this.state.navOpen?'is-active':'')} onClick={()=>this.onMobileButtonClick()}>
                            <span className="hamburger-box cucumber-header-nav-hamburger-btn-span">
                                <span className="hamburger-inner"></span>
                              </span>
                </button>
            </nav>
        );
    }
}
