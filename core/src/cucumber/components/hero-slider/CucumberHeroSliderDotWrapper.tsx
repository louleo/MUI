import React, {Component} from 'react';
import CucumberHeroSliderDot from "./CucumberHeroSliderDot";

class CucumberHeroSliderDotWrapper extends Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    handleDotClick(key:number){
        this.props.onJumpClick(key);
    }

    render() {
        return (
            <div className={"cucumber-hero-slider-dot-wrapper"}>
                {
                    Array.from(Array(this.props.total).keys()).map((el:any,index:number)=>(
                      <CucumberHeroSliderDot key={index} index={index} active={index == this.props.current} handleClick={(key:number)=>this.handleDotClick(key)}/>
                    ))
                }
            </div>
        );
    }
}

export default CucumberHeroSliderDotWrapper;
