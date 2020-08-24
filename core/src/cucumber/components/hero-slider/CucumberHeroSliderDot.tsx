import React, {Component} from 'react';

class CucumberHeroSliderDot extends Component<any,any> {
    render() {
        return (
            <button className={'cucumber-hero-slider-dot '+ (this.props.active?'active':'')} onClick={()=>this.props.handleClick(this.props.index)}>
            </button>
        );
    }
}

export default CucumberHeroSliderDot;
