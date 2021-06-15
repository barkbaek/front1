import React, {useEffect} from 'react'
import useInput from "../../Hooks/useInput"

function UseCustom(props) {
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        document.title = "UseCustom | Application"
    }, [])

    return (
        <div className="use-custom-root-container">
            UseCustom
            <p>
                useState와 useCallback을 사용하여 만든 useInput Custom Hook 사용.
            </p>
            <input
                type="text"
                value={text}
                onChange={onChangeText}
            />
            <button onClick={() => setText("")}>리셋</button>
        </div>
    )
}

export default UseCustom