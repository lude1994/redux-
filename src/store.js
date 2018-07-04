import {createStore} from './redux';
import counter from './reducers/counter'
import todo from './reducers/todo'
import combineReducers from './combineReducer'

//传递2个reducer进行合并    
let reducer  = combineReducers({
    counter,
    todo
})
let store = createStore(reducer);       //用来获取getState()最新的state、dispatch(action)发送指令等等



export {store}