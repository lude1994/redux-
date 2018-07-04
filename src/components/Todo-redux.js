import React, { Component } from 'react'
import {store} from '../store'
import {ADD_TODO,DELETE_TODO} from '../action'
import todo from '../reducers/todo'


export default class TodoRedux extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:store.getState().todo.list
        }
    }
    //组件加载的时候监听
    componentWillMount(){
        //订阅才会实时检测更新state
        //订阅状态改变事件，谁需要订阅。就将函数写进去
        //把subscribe返回值，返回给this.unsubscribe，订阅事件，返回取消订阅
        this.unsubscribe = store.subscribe(()=>{
            //监听时，更新初始number为最新的state的number
            this.setState({
                list: store.getState().todo.list  
            })
            
        })
    }
    
    //组件卸载的时候，取消监听，否则会报错
    componentWillUnmount(){
        this.unsubscribe();     //这里调用取消订阅函数
    }
    //添加
    handleKeyDown = (event) =>{
        //判断是否是回车键
        if(event.keyCode == 13 && event.target.value.length > 0){
           store.dispatch({
               type: ADD_TODO,
               text: event.target.value
           })
           event.target.value = ""
        }
    }
    //删除
    deleteTodo = (index) =>{
        store.dispatch({type:DELETE_TODO,index})
    }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
            {
                this.state.list.map((todo,index)=>(
                    <li key={index}>{todo}<button onClick={()=>this.deleteTodo(index)}>-</button></li>
                ))
                
            }
        </ul>
      </div>
    )
  }
}



