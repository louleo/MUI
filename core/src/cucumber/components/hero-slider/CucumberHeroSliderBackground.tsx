import React, {Component} from 'react';

class CucumberHeroSliderBackground extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            leftClass:'',
            rightClass:'',
            centerStyle:props.centerStyle,
            current:props.currentIndex
        }
    }

    /*
        there are numerous ways for sliding animation. We could solely put ourselves on CSS animation or use a combination of
        CSS and JS tricks. For this one, ease function could be used for the scaleX update.

        For more information about ease functions, please go to https://easings.net/.
     */
    componentDidUpdateJSScale(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevProps.currentIndex !== this.props.currentIndex){
            let time = 0;
            if (this.props.direction){
                var intervalRight = setInterval(()=>{
                        time += 0.002485;
                        if(this.state.rightTransform >= 1){
                            this.setState({
                                rightTransform:0,
                                centerStyle:this.props.centerStyle
                            });
                            clearInterval(intervalRight);
                        }else{
                            this.setState({
                                rightTransform:this.state.rightTransform + 0.01*(Math.pow(1-time, 3))
                            });
                        }
                    }
                    ,1);
            }else{
                var intervalLeft = setInterval(()=>{
                        time += 0.002485;
                        if(this.state.leftTransform >=1){
                            this.setState({
                                leftTransform:0,
                                centerStyle:this.props.centerStyle
                            });
                            clearInterval(intervalLeft);
                        }else{
                            this.setState({
                                leftTransform:this.state.leftTransform + 0.01*(Math.pow(1-time, 3))
                            });
                        }
                    }
                    ,1);
            }

        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevProps.currentIndex !== this.props.currentIndex){
            setTimeout(()=>{
                this.setState({
                    [this.state.direction?'rightClass':'leftClass']:'',
                    centerStyle:this.props.centerStyle
                });
            },2000);
            this.setState({
                [this.state.direction?'rightClass':'leftClass']:'cucumber-hero-slider-background-animated'
            });
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className={"cucumber-hero-slider-background cucumber-chsb-left "+this.state.leftClass} style={{...this.props.centerStyle}}>

                </div>
                <div className={"cucumber-hero-slider-background"} style={{...this.state.centerStyle}}>

                </div>
                <div className={"cucumber-hero-slider-background cucumber-chsb-right "+this.state.rightClass} style={{...this.props.centerStyle}}>

                </div>
            </React.Fragment>
        );
    }
}

export default CucumberHeroSliderBackground;
