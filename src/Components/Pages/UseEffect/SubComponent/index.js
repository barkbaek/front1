import React, {useEffect, useState} from 'react'

function SubComponent (props) {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(`컴포넌트 렌더링 완료되었습니다.`)
        return () => {
            console.log(`컴포넌트가 화면에서 사라졌습니다.`)
        }
    }, [])

    useEffect(() => {
        console.log(`number: ${number}`)
    }, [number])

    return (
        <div>
            <h3>SubComponent</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => { setNumber(e.target.value) }}
            />
        </div>
    )
}

export default SubComponent