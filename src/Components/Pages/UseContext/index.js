import React, {useContext, useEffect} from 'react'
import withTitle from "../../Common/HOC/WithTitle"
import {withContext} from "./@Context"
import Left from "./Left"
import Right from "./Right"
import './index.scss'

function UseContext(props) {

    return (
        <div className="use-context-root-container">
            <h3>UseContext</h3>
            <div className="line-container">
                <Left />
                <Right />
            </div>
        </div>
    )
}

export default withTitle( withContext(UseContext) )("UseContext | Application")