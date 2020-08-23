import React, {Component} from 'react';
const Fade =require('react-reveal/Fade');

class CucumberHeroSliderContent extends Component<any,any> {
    constructor(props:any){
        super(props);
    }


    render() {
        return (
            <Fade bottom opposite when={this.props.show}>
                <div className={"cucumber-hero-slider-content-wrapper"}>
                    <h1 className={"cucumber-hero-slider-content-title"}>
                        {this.props.contents.title}
                    </h1>
                    <p className={"cucumber-hero-slider-content-content"}>
                        {this.props.contents.content}
                    </p>
                </div>
            </Fade>
        );
    }
}

export default CucumberHeroSliderContent;
