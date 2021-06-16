import React, {useEffect} from 'react'
import useInput from "../../Common/CustomHooks/UseInput"
import withTitle from "../../Common/HOC/WithTitle"

function UseCustom(props) {
    const [text, onChangeText, setText] = useInput('');

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

export default withTitle(UseCustom)("UseCustom | Application")