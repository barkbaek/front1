import React, { Component } from "react"

class RightBottom extends Component {
    render() {
        return (
            <div className="right-bottom">
                <h4>RightBottom</h4>
                <h4>Number from Left</h4>
                <strong>number: </strong>{this.props.number}
            </div>
        )
    }
}

export default RightBottom