import React, {Component} from "react";

export default class ButtonOne extends Component<any, any>{

    constructor(props:any) {
        super(props);
    }

    render() {

        return (
            <a className={"cucumber-link-one"}><span className={"cucumber-link-one-span"}>{this.props.children}</span></a>
        );
    }


}
