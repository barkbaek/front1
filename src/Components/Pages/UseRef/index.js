import React, {useEffect, useRef, useState} from 'react'

function UseRef(props) {
    const nameInput = useRef()
    const localVar = useRef(0)

    const [number, setNumber] = useState(0);

    useEffect(() => {
        document.title = "UseRef | Application"
        nameInput.current.focus();
    }, [])

    const increaseLocalVar = () => {
        localVar.current = localVar.current + 1
        console.log(`increaseLocalVar - ${localVar.current}`)
        setNumber(localVar.current)
    }

    return (
        <div>
            UseRef
            <p>변수로 ref를 선언하면 Unmount 될 때까지 값을 유지한다.</p>
            <p>input의 ref로 설정하면 해당 태그를 참조할 수 있다. </p>
            <div>
                <input
                    name="name"
                    placeholder="이름"
                    ref={nameInput}
                />
                <div>{number}</div>
                <button onClick={increaseLocalVar}>숫자업!</button>
            </div>
        </div>
    )
}

export default UseRef