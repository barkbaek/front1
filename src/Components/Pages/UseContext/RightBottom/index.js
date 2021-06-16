import React, {useContext} from 'react'
import { Context } from "../@Context"

function RightBottom(props) {
    const {
        state: {
            number
        }
    } = useContext(Context)

    return (
        <div className="right-bottom">
            <h4>RightBottom</h4>
            <h4>Number from Left</h4>
            <strong>number: </strong>{number}
        </div>
    )
}

export default RightBottom