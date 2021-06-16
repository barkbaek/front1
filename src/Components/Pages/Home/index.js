import withTitle from "../../Common/HOC/WithTitle"
import './index.scss'

function Home(props) {
    return (
        <div className="home-root-container">
            Hello. Welcome to React World!
        </div>
    )
}

export default withTitle(Home)("Home | Application")