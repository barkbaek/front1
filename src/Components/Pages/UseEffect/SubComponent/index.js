import React, {useEffect} from 'react'

function SubComponent (props) {
    useEffect(() => {
        console.log('컴포넌트 렌더링 완료되었습니다.')
        return () => {
            console.log('컴포넌트가 화면에서 사라졌습니다.')
        }
    }, [])
    return (
        <div>SubComponent</div>
    )
}

export default SubComponent