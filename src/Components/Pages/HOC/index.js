import React from 'react'
import withTitle from "../../Common/HOC/withTitle"

function HOC(props) {
    return (
        <div>
            HOC
        </div>
    )
}

export default withTitle(HOC)("HOC | Application")