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
let store = createStore(reducer);       //用来获取getState()最新的state、dispatch(action)发送指令等等

class Counter extends React.Component{
    constructor(){
        super();
        this.state={number: store.getState().number}        //设定number等于store中最新的state中的number
    }
    //组件加载的时候监听
    componentWillMount(){
        //订阅才会实时检测更新state
        //订阅状态改变事件，谁需要订阅。就将函数写进去
        //把subscribe返回值，返回给this.unsubscribe，订阅事件，返回取消订阅
        this.unsubscribe = store.subscribe(()=>{
            //监听时，更新初始number为最新的state的number
            this.setState({
              number: store.getState().number  
            })
            
        })
    }
    //组件卸载的时候，取消监听，否则会报错
    componentWillUnmount(){
        this.unsubscribe();     //这里调用取消订阅函数
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                {/* //点击事件发送指令 */}
                <button onClick={()=>store.dispatch({type:INCREASE,amount:3})}>+</button>
                <button onClick={()=>store.dispatch({type:DECREASE,amount:2})}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.querySelector('#root'))

/**
 * 总结：
 * redux与react相结合时
 * 
 * 页面里需要有reducer函数、createStore(reducer)、dispatch(action)就可以改变state
 * 将初始值等于store中最新的state中的属性值，利用传递给reducer的指令，使监听者更新最新的state
 */