import React, { Component } from "react";

const withRequest = WrappedComponent => url => {
    return class extends Component {
        state = {
            value: ""
        };

        componentDidMount() {
            fetch(url)
                .then(res => res.json())
                .then(result => this.setState({ value: result.title }));
        }

        render() {
            const { value } = this.state;
            return <WrappedComponent {...this.props} value={value} />;
        }
    };
};

export default withRequest;