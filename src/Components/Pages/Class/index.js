import React, {useEffect} from 'react'

function Class(props) {
    useEffect(() => {
        document.title = "Class | Application"
    }, [])

    return (
        <div>
            Class - React.createRef 사용해보기
        </div>
    )
}

export default Class