import React from 'react';
import {store} from '../store';
import {INCREASE,DECREASE} from '../action'


//action也可以写成函数---这个就是action Creator 是用来返回action
let increase  = (amount) =>(  //用() 表示retrun，就不用写return了
    {
        type:INCREASE,amount
    }
)
let decrease  = (amount) =>(
    {
        type:DECREASE,amount
    }
)


export default class Counter extends React.Component{
    constructor(){
        super();
        this.state={number: store.getState().counter.number}        //设定number等于store中最新的state中的number
    }
    //组件加载的时候监听
    componentWillMount(){
        //订阅才会实时检测更新state
        //订阅状态改变事件，谁需要订阅。就将函数写进去
        //把subscribe返回值，返回给this.unsubscribe，订阅事件，返回取消订阅
        this.unsubscribe = store.subscribe(()=>{
            //监听时，更新初始number为最新的state的number
            this.setState({
                number: store.getState().counter.number  
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
                {/* 点击事件发送指令 */}
                <button onClick={()=>store.dispatch(increase(2))}>+</button>
                <button onClick={()=>store.dispatch(decrease(1))}>-</button>
            </div>
        )
    }
}


