import React, {useEffect} from 'react'

function HOC(props) {
    useEffect(() => {
        document.title = "HOC | Application"
    }, [])

    return (
        <div>
            HOC
        </div>
    )
}

export default HOC