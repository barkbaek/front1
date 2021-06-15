import RightBottom from "../../Class/RightBottom"
import {connect} from 'react-redux'
function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    };
}

export default connect(mapReduxStateToReactProps, null)(RightBottom)