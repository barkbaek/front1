import React, {useEffect} from 'react'
import withTitle from "../../Common/HOC/withTitle"

function HOCwithContext(props) {
    return (
        <div>
            HOCwithContext
        </div>
    )
}

export default withTitle(HOCwithContext)("HOCwithContext | Application")