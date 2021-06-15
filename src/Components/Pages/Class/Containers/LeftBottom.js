import LeftBottom from '../../Class/LeftBottom'
import {connect} from 'react-redux'
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function(number){
            dispatch({type: 'NUMBER', number: number});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(LeftBottom)