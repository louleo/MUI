import React, {Component} from 'react';

const Fade = require('react-reveal/Fade');

class CucumberHeroSliderButton extends Component<any,any> {
    render() {
        return (
            <Fade bottom opposite when={this.props.show}>
                <div className={"cucumber-hero-slider-button-wrapper"}>
                    <button onClick={()=>this.props.buttonLeftClick()} className={"cucumber-hero-slider-button-left"}>
                        <div>
                            <h2>{this.props.leftTitle}</h2>
                            <p>{this.props.leftContent}</p>
                        </div>
                    </button>
                    <button onClick={()=>this.props.buttonRightClick()} className={"cucumber-hero-slider-button-right"}>
                        <div>
                            <h2>{this.props.rightTitle}</h2>
                            <p>{this.props.rightContent}</p>
                        </div>
                    </button>
                </div>
            </Fade>
        );
    }
}

export default CucumberHeroSliderButton;
