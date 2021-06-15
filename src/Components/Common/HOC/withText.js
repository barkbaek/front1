import React, { Component } from "react";

const withText = WrappedComponent => {
    return class extends Component {
        render() {
            return <WrappedComponent text={"withText HOC"} />;
        }
    };
};

export default withText;