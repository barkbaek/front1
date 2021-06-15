import { useHistory, useLocation } from 'react-router-dom'
import {useEffect} from "react";

function Home(props) {

    useEffect(() => {
        document.title = "Home | Application"
    }, [])

    return (
        <div className="home-root-container">
            Hello, World
        </div>
    )
}

export default Home