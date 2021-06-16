import React, { Component } from "react"
import withRequest from '../../../Common/HOC/WithRequest'
import withText from '../../../Common/HOC/WithText'
import RightBottom from "../Containers/RightBottom"

const URL = "https://jsonplaceholder.typicode.com/posts/2"

class Right extends Component {
    render() {
        const { value, text } = this.props;
        return (
            <div className="right">
                <h4>Right</h4>
                <hr />
                <div><strong>value</strong> {value}</div>
                <hr />
                <div><strong>text</strong> {text}</div>
                <RightBottom />
            </div>
        )
    }
}

export default withText(withRequest(Right)(URL))