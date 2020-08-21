import React, {Component} from 'react';

class CucumberHeaderLinkContainer extends Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className={"cucumber-header-link-list-wrapper"}>
                <ul className={"cucumber-header-link-list"}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default CucumberHeaderLinkContainer;
