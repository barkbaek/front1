import React, {useContext} from 'react'
import { Context } from "../@Context"

function LeftBottom(props) {
    const {
        state: {
            number
        },
        actions: {
            setNumber
        }
    } = useContext(Context)

    const onChange = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className="left-bottom">
            <h4>LeftBottom</h4>
            <h4>Send number to Right</h4>
            <input
                type="number"
                value={number}
                onChange={onChange}
            />
        </div>
    )
}

export default LeftBottom