import React, {Component} from 'react';

class CucumberMainFooter extends Component<any,any> {
    render() {
        return (
            <div className={"container my-xl-5 my-lg-4 my-3"}>
                {this.props.children}
            </div>
        );
    }
}

export default CucumberMainFooter;
