import React, {useState} from 'react'
import './index.scss'

function UseState(props) {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber( number - 1)
    }

    return (
        <div className="use-state-root-container">
            <div className="number">{number}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default UseState