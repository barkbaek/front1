import React from 'react'
import withTitle from "../../Common/HOC/withTitle"

function Class(props) {
    return (
        <div>
            Class - React.createRef 사용해보기
        </div>
    )
}

export default withTitle(Class)("Class | Application")