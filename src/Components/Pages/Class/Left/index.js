import React, { Component } from "react"
import withRequest from '../../../Common/HOC/withRequest'
import withText from '../../../Common/HOC/withText'
import LeftBottom from "../Containers/LeftBottom"

const URL = "https://jsonplaceholder.typicode.com/posts/1"

class Left extends Component {
    render() {
        const { value, text } = this.props;
        return (
            <div className="left">
                <h4>Left</h4>
                <hr />
                <div><strong>value</strong> {value}</div>
                <hr />
                <div><strong>text</strong> {text}</div>
                <LeftBottom />
            </div>
        )
    }
}

export default withText(withRequest(Left)(URL))