import React, {Component} from 'react';

class CucumberHeroSliderButton extends Component<any,any> {
    render() {
        return (
            <div style={{marginTop:"10rem"}}>
                <button onClick={()=>this.props.buttonLeftClick()} className={"btn-primary"}>Left</button>
                <button onClick={()=>this.props.buttonRightClick()} className={"btn-primary"}>Right</button>
            </div>
        );
    }
}

export default CucumberHeroSliderButton;
