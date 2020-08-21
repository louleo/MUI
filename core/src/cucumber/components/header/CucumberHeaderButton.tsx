import React, {Component} from 'react';

class CucumberHeaderButton extends Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className={"cucumber-header-button-wrapper"}>
                <a className={"cucumber-button-one"} title={this.props.title} href={this.props.href}>
                <span className={"cucumber-button-one-span"}>
                    {this.props.title}
                </span>
                </a>
            </div>
        );
    }
}

export default CucumberHeaderButton;
