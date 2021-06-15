import React, {useEffect} from 'react'

function HOC2(props) {
    useEffect(() => {
        document.title = "HOC2 | Application"
    }, [])

    return (
        <div>
            HOC2
        </div>
    )
}

export default HOC2