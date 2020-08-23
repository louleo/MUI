import React, {Component} from "react";
import styles from './modules/cucumber-header.module.css';


export default class CucumberHeader extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            navClass:"cucumber-nav-show"
        };
    }

    render(){
        return(
            <nav className={"cucumber-header " + styles[this.state.navClass]}>
                {this.props.children}
                <button className={"cucumber-header-nav-hamburger-btn"} onClick={()=>this.props.mobileNavBtnClick()}>Open</button>
            </nav>
        );
    }
}
