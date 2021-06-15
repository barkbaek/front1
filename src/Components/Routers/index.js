import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom'

import Menu from '../Common/Menu'
import Home from './Home'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseRef from './UseRef'
import UseCustom from "./UseCustom"
import UseContext from "./UseContext"
import HOC from './HOC'
import HOC2 from './HOC2'
import Class from './Class'

function DetectPageViews() {
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [ location ])
}

function Routers(props) {
    const allRoutes = [
        ...Home,
        ...UseState,
        ...UseEffect,
        ...UseMemo,
        ...UseRef,
        ...UseCustom,
        ...UseContext,
        ...HOC,
        ...HOC2,
        ...Class
    ]

    DetectPageViews()
    return (
        <>
            <Menu />
            <Switch>
            {
                allRoutes.map(({ path, exact, component: Component }) => (
                    <Route key={path} exact={exact} path={path}>
                        <Component />
                    </Route>
                ))
            }
        </Switch>
        </>
    )
}

export default Routers