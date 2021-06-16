import React from 'react'
import withLoading from "../../../Common/HOC/withLoading"

function SubComponent(props) {
    return (
        <div>
            Thank you for waiting. This is SubComponent.
        </div>
    )
}

export default withLoading(SubComponent)