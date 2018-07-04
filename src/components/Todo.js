import React, { Component } from 'react'

export default class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:['吃饭']
        }
    }
    handleKeyDown = (event) =>{
        //判断是否是回车键
        if(event.keyCode == 13 && event.target.value.length > 0){
            let list = this.state.list;
            list.push(event.target.value);
            this.setState({
                list
            })
            event.target.value = ""
        }
    }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
            {
                this.state.list.map((todo,index)=>(
                    <li>{todo}</li>
                ))
                
            }
        </ul>
      </div>
    )
  }
}
