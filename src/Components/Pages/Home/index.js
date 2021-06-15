import withTitle from "../../Common/HOC/withTitle"

function Home(props) {
    return (
        <div className="home-root-container">
            Hello, World
        </div>
    )
}

export default withTitle(Home)("Home | Application")