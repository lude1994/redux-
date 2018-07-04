
import React from 'react';
import ReactDOM from 'react-dom'
import Counter2 from './components/Counter2';
import {createStore} from './redux';
import counter from './reducers/counter';      //可以复用reducer
import Provider from './components/Provider'

let store = createStore(counter);


ReactDOM.render(
    <Provider store={store}>
        <Counter2/>
    </Provider>,document.querySelector('#root'))   
