
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import Todo from './components/Todo'
import TodoRedux from './components/Todo-redux'


ReactDOM.render(
    <div>
        <TodoRedux/>
        <Counter/>
    </div>,document.querySelector('#root'))

/**
 * 总结：
 * redux与react相结合时
 * 
 * 页面里需要有reducer函数、createStore(reducer)、dispatch(action)就可以改变state
 * 将初始值等于store中的state中的属性值，利用传递给reducer的指令，使监听者更新最新的state，用this.setState去改变最初的值，
 * 想要有状态改变，必须要监听，不监听是无法显示状态的更新的
 * 改变state的流程：
 *  1.dispatch(action)给reducer
 *  2.reeucer进行处理，返回最新的state
 */