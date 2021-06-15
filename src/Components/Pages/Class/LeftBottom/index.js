import React, { Component } from "react"

class LeftBottom extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    state = {
        number: 0
    }

    onClick () {
        this.props.onClick(this.state.number)
    }
    onChange (e) {
        this.setState({ number: e.target.value})
    }

    render() {
        return (
            <div className="left-bottom">
                <h4>LeftBottom</h4>
                <h4>Send number to Right</h4>
                <input
                    type="number"
                    value={this.state.number}
                    onChange={this.onChange}
                />
                <button onClick={this.onClick}>전송</button>
            </div>
        )
    }
}

export default LeftBottom