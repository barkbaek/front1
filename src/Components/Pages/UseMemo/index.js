import React, {useEffect, useState} from 'react'
import SubComponent from "./SubComponent"

function UseMemo(props) {
    const [color, setColor] = useState("")
    const [movieType, setMovieType] = useState("")

    useEffect(() => {
        document.title = "UseMemo | Application"
    }, [])

    const onChange = e => {
        if (e.target.name === "color") setColor(e.target.value)
        else setMovieType(e.target.value)
    }

    return (
        <div>
            UseMemo<br />
            <p>
                메모리제이션된 값을 반환한다는 것이 핵심이다.
            </p>
            <div>
                <h3>색상</h3>
                <label htmlFor="red">
                    <input
                        type="radio"
                        value="red"
                        id="red"
                        name="color"
                        onChange={onChange}
                    />
                    빨강
                </label>
                <label htmlFor="green">
                    <input
                        type="radio"
                        value="green"
                        id="green"
                        name="color"
                        onChange={onChange}
                    />
                    초록
                </label>
                <label htmlFor="blue">
                    <input
                        type="radio"
                        value="blue"
                        id="blue"
                        name="color"
                        onChange={onChange}
                    />
                    파랑
                </label>

                <h3>영화장르</h3>
                <label htmlFor="drama">
                    <input
                        type="radio"
                        value="drama"
                        id="drama"
                        name="movie-type"
                        onChange={onChange}
                    />
                    드라마
                </label>
                <label htmlFor="action">
                    <input
                        type="radio"
                        value="action"
                        id="action"
                        name="movie-type"
                        onChange={onChange}
                    />
                    액션
                </label>
                <label htmlFor="sf">
                    <input
                        type="radio"
                        value="sf"
                        id="sf"
                        name="movie-type"
                        onChange={onChange}
                    />
                    SF
                </label>
            </div>
            <hr />
            <SubComponent color={color} movieType={movieType} />
        </div>
    )
}

export default UseMemo