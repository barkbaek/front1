import React, {useEffect, useState} from 'react'
import SubComponent from "./SubComponent"
import './index.scss'

function UseEffect(props) {
    const [render, setRender] = useState(true);

    useEffect(() => {
        document.title = "UseEffect | Application"
    }, [])

    return (
        <div className="use-effect-root-container">
            UseEffect
            <hr/>
            {render ? <SubComponent /> : null}
            <button onClick={() => { setRender(!render) }}>변경</button>
        </div>
    )
}

export default UseEffect