import React, {useMemo} from 'react'

const getColor = color => {
    console.log('getColor()')
    switch (color) {
        case "red":
            return "빨강"
        case "blue":
            return "파랑"
        case "green":
            return "초록"
        default:
            return "없음"
    }
}

const getMovieType = movieType => {
    console.log('getMovieType()')
    switch (movieType) {
        case "drama":
            return "드라마"
        case "action":
            return "액션"
        case "sf":
            return "SF"
        default:
            return "없음"
    }
}

function SubComponent ({ color, movieType }) {
    const selectedColor = useMemo(() => {
        return getColor(color)
    }, [color])
    const selectedMovieType = useMemo(() => {
        return getMovieType(movieType)
    }, [movieType])

    return (
        <>
            <div>색깔: {selectedColor}</div>
            <div>영화장르: {selectedMovieType}</div>
        </>
    )
}

export default SubComponent