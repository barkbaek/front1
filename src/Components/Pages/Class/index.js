import React, {Component} from 'react'
import withTitle from "../../Common/HOC/WithTitle"
import Left from './Left'
import Right from './Right'
import './index.scss'
import { Provider } from "react-redux"
import store from "./store"
class Class extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="class-root-container">
                    <h3>Class - Redux와 HOC사용</h3>
                    <div className="line-container">
                        <Left />
                        <Right />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default withTitle(Class)("Class | Application")