import {createStore} from 'redux'
export default createStore(function (state, action) {
    if (state === undefined) {
        return {number : 0}
    }
    if (action.type === 'NUMBER') {
        return {...state, number: action.number }
    }
    return state
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())