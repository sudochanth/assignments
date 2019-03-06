import React from 'react';

class Toggle extends React.Component {
    constructor() {
        super();
        this.state = {
            on: true
        }
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
};

export default Toggle;

export function withToggler(C) {
    return function(props) {
        return <Toggle component={C}{...props} />
    }
}