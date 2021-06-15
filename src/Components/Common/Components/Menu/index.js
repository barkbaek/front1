import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

function Menu (props) {
    const location = useLocation();

    const links = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/use-state',
            name: 'UseState'
        },
        {
            path: '/use-effect',
            name: 'UseEffect'
        },
        {
            path: '/use-memo',
            name: 'UseMemo'
        },
        {
            path: '/use-ref',
            name: 'UseRef'
        },
        {
            path: '/use-custom',
            name: 'UseCustom'
        },
        {
            path: '/use-context',
            name: 'UseContext'
        },
        {
            path: '/hoc',
            name: 'HOC'
        },
        {
            path: '/hoc-with-context',
            name: 'HOCwithContext'
        },
        {
            path: '/class',
            name: 'Class'
        }
    ];

    const [selectedMenu, setSelectedMenu] = useState('Home');

    useEffect(() => {
        setSelectedMenu(location.pathname);
    }, [location.pathname]);

    return (
        <div className="menu-root-container">
            <div className="menu-item-container">
                {links.map(({ path, name }) => (
                    <Link key={path} to={path} className={`menu-item ${path === selectedMenu ? 'selected' : ''}`}>{name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Menu