import {createStore} from 'redux';
import counter from './reducers/counter';      //可以复用reducer

let store = createStore(counter);

export default store