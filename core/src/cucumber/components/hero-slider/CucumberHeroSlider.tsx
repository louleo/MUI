import React, {Component} from 'react';
import CucumberHeroSliderBackground from "./CucumberHeroSliderBackground";
import CucumberHeroSliderButton from "./CucumberHeroSliderButton";
import CucumberHeroSliderContent from "./CucumberHeroSliderContent";

class CucumberHeroSlider extends Component<any,any> {

    constructor(props:any){
        super(props);
        const sliders = props.contents;
        if (sliders.length >=3 ){
            this.state = {
                current: 0,
                leftStyle: sliders[sliders.length - 1].style,
                rightStyle: sliders[1].style,
                centerStyle: sliders[0].style,
                direction:true,
                show:true,
                left:0,
                right:0
            }
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
                <div className={'cucumber-hero-slider-contents-wrapper'}>
                    {
                            <CucumberHeroSliderContent
                                show={this.state.show}
                                contents={this.props.contents[this.state.current]}
                            ></CucumberHeroSliderContent>
                    }
                </div>

                <CucumberHeroSliderButton
                    show={this.state.show}
                    buttonLeftClick={()=>this.onLeftClick()}
                    buttonRightClick={()=>this.onRightClick()}
                    leftTitle={this.props.contents[this.state.left].button.title}
                    rightTitle={this.props.contents[this.state.right].button.title}
                    leftContent={this.props.contents[this.state.left].button.content}
                    rightContent={this.props.contents[this.state.right].button.content}
                ></CucumberHeroSliderButton>
            </div>
        );
    }

    onLeftClick(){
        let newCenter = this.state.current - 1;
        if (newCenter < 0){
            newCenter = this.props.contents.length -1
        }
        let newLeft = newCenter - 1;
        if(newLeft < 0){
            newLeft = this.props.contents.length - 1;
        }
        let newRight = this.state.current;
        this.updateSlider(newCenter,newLeft,newRight,false);
    }

    updateSlider(current:number,left:number,right:number,direction:boolean){
        setTimeout(()=>{
            this.setState({
                show:true
            });
        },2000);
        this.setState({
            current:current,
            show:false,
            leftStyle:this.props.contents[left].style,
            rightStyle:this.props.contents[right].style,
            centerStyle:this.props.contents[current].style,
            direction:direction,
            left:left,
            right:right
        })
    }

    onRightClick(){
        let newCenter = this.state.current + 1;
        if (newCenter >= this.props.contents.length){
            newCenter = 0;
        }
        let newRight = newCenter + 1;
        if(newRight >= this.props.contents.length){
             newRight = 0;
        }
        let newLeft = this.state.current;
        this.updateSlider(newCenter,newLeft,newRight,true);
    }
}

export default CucumberHeroSlider;
