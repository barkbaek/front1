import React, {useEffect} from 'react'
import withTitle from "../../Common/HOC/withTitle"

function HOC2(props) {
    return (
        <div>
            HOC2
        </div>
    )
}

export default withTitle(HOC2)("HOC2 | Application")