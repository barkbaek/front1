import React, {useState} from 'react'
import SubComponent from "./SubComponent"
import withTitle from "../../Common/HOC/withTitle"
import './index.scss'

function UseEffect(props) {
    const [render, setRender] = useState(true);

    return (
        <div className="use-effect-root-container">
            <h3>UseEffect</h3>
            <p>Console을 확인하세요.</p>
            <hr/>
            {render ? <SubComponent /> : null}
            <button onClick={() => { setRender(!render) }}>{ render? '숨기기' : '보이기' }</button>
        </div>
    )
}

export default withTitle(UseEffect)("UseEffect | Application")