const {useEffect} = require("react");

const withTitle = WrappedComponent => {
    return props => {
        if (props.loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <WrappedComponent {...props} />
            )
        }
    }
}

export default withTitle
