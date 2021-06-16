import React, {useEffect, useState} from 'react'
import withTitle from "../../Common/HOC/WithTitle"
import SubComponent from "./SubComponent"
import './index.scss'

function HOC(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    return (
        <div className="hoc-root-container">
            <SubComponent loading={loading}/>
        </div>
    )
}

export default withTitle(HOC)("HOC | Application")