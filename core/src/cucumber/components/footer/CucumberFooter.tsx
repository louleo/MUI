import React, {Component} from 'react';

class CucumberFooter extends Component<any,any> {
    render() {
        return (
            <footer>
                {this.props.children}
            </footer>
        );
    }
}

export default CucumberFooter;
