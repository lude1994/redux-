import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';

const INCREASE = 'INCREASE';  // +
const DECREASE = 'DECREASE';  // -

//state是状态树，可以是任意的结构对象、数组、、、
//action是一个纯对象 {type:'INCREASE', amount:3}  {type:'DECREASE', amount:1} action是在发送(dispatch)指令的时候传入的
let reducer = (state = {number:0}, action) =>{
    if(action === undefined) return state;       //初始化action是没有值（undefined）所以type会报错 ，初始化值的时候才做这个判断
    switch(action.type){
        case 'INCREASE':
            return {number:state.number + action.amount};
        case 'DECREASE':
            return {number:state.number - action.amount};
        default:
            //否则原封不动的返回老的state
            return state;
    }
}
let store = createStore(reducer)

class Counter extends React.Component{
    render(){
        return(
            <div>
                <p>{store.getState().number}</p>
                <button onClick={()=>store.dispatch({type:INCREASE,amount:3})}>+</button>
                <button onClick={()=>store.dispatch({type:DECREASE,amount:2})}>-</button>
            </div>
        )
    }
}
let render = () =>{
    ReactDOM.render(<Counter/>,document.querySelector('#root'))
}
//渲染页面的方法。如上
render();
//渲染的页面订阅state，不订阅，无法根据state的变化而渲染页面
store.subscribe(render);