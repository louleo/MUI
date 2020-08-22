import React, {Component} from 'react';

class CucumberHeroSliderBackground extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            leftTransform:0,
            rightTransform:0,
            centerStyle:props.centerStyle,
            current:props.currentIndex
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
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
//
//
    render() {
        return (
            <React.Fragment>
                <div className={"cucumber-hero-slider-background cucumber-chsb-left"} style={{...this.props.centerStyle,transform:"scale("+this.state.leftTransform+",1)"}}>

                </div>
                <div className={"cucumber-hero-slider-background"} style={{...this.state.centerStyle}}>

                </div>
                <div className={"cucumber-hero-slider-background cucumber-chsb-right"} style={{...this.props.centerStyle,transform:"scale("+this.state.rightTransform+",1)"}}>

                </div>
            </React.Fragment>
        );
    }
}

export default CucumberHeroSliderBackground;
