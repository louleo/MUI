import React, {Component} from 'react';
import CucumberHeroSliderBackground from "./CucumberHeroSliderBackground";
import CucumberHeroSliderButton from "./CucumberHeroSliderButton";

class CucumberHeroSlider extends Component<any,any> {
    private styles: {}[];

    constructor(props:any){
        super(props);
        this.styles = [
            {
                background: "linear-gradient(36deg, rgb(238, 241, 253) 12%, rgb(240, 242, 254) 71%)"
            },
            {
                background: "linear-gradient(36deg, rgb(45, 77, 185) 12%, rgb(112, 119, 255) 71%)"
            },
            {
                background: "linear-gradient(36deg, rgb(209, 205, 199) 12%, rgb(237, 235, 232) 71%)"
            },
            {
                background:"rgb(55, 100, 246)"
            }
        ];
        this.state = {
            current: 0,
            leftStyle: this.styles[this.styles.length - 1],
            rightStyle: this.styles[1],
            centerStyle:this.styles[0],
            direction:true
        }
    }


    render() {
        return (
            <div className={'cucumber-hero-slider-wrapper'}>
                <CucumberHeroSliderBackground
                    centerStyle={this.state.centerStyle}
                    direction={this.state.direction}
                    currentIndex={this.state.current}
                ></CucumberHeroSliderBackground>
                <CucumberHeroSliderButton buttonLeftClick={()=>this.onLeftClick()} buttonRightClick={()=>this.onRightClick()}></CucumberHeroSliderButton>
            </div>
        );
    }

    onLeftClick(){
        let newCenter = this.state.current - 1;
        if (newCenter < 0){
            newCenter = this.styles.length -1
        }
        let newLeft = newCenter - 1;
        if(newLeft < 0){
            newLeft = this.styles.length - 1;
        }
        let newRight = this.state.current;
        this.updateSlider(newCenter,newLeft,newRight,false);
    }

    updateSlider(current:number,left:number,right:number,direction:boolean){
        this.setState({
            current:current,
            leftStyle:this.styles[left],
            rightStyle:this.styles[right],
            centerStyle:this.styles[current],
            direction:direction
        })
    }

    onRightClick(){
        let newCenter = this.state.current + 1;
        if (newCenter >= this.styles.length){
            newCenter = 0;
        }
        let newRight = newCenter + 1;
        if(newRight >= this.styles.length){
             newRight = 0;
        }
        let newLeft = this.state.current;
        this.updateSlider(newCenter,newLeft,newRight,true);
    }
}

export default CucumberHeroSlider;
