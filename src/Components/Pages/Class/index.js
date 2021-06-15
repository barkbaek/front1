import React, {Component} from 'react'
import withTitle from "../../Common/HOC/withTitle"
import Left from './Left'
import Right from './Right'
import './index.scss'

class Class extends Component {
    render() {
        return (
            <div className="class-root-container">
                <h3>Class - Redux와 HOC사용</h3>
                <div className="line-container">
                    <Left />
                    <Right />
                </div>
            </div>
        )
    }
}

export default withTitle(Class)("Class | Application")