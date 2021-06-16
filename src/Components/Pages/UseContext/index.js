import React, {useContext, useEffect} from 'react'
import withTitle from "../../Common/HOC/withTitle"
import { Context } from '../../@Context'

function UseContext(props) {
    const { state: {
        value1
    },
        actions: {
            setValue1
        }} = useContext(Context)

    const onClick = () => {
        setValue1(value1 + 1);
    };

    return (
        <div>
            UseContext
            <div>{value1}</div>
            <button onClick={onClick}>증가</button>
        </div>
    )
}

export default withTitle(UseContext)("UseContext | Application")