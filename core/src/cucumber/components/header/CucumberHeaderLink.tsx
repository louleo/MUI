import React, {Component} from 'react';

class CucumberHeaderLink extends Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <li className={"cucumber-header-link-list-li-wrapper"}>
                <a href={this.props.href} className="cucumber-link-one">
                    <span className={"cucumber-link-one-span"}>
                        {this.props.title}
                    </span>
                </a>
            </li>

        );
    }
}

export default CucumberHeaderLink;
