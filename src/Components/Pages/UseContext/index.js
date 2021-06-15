import React, {useEffect} from 'react'

function UseContext(props) {
    useEffect(() => {
        document.title = "UseContext | Application"
    }, [])

    return (
        <div>
            UseContext
        </div>
    )
}

export default UseContext