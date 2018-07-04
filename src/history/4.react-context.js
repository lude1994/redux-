
import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

class Container extends React.Component{
    //父组件设置样式
    getChildContext() {
        return {color: "purple"};
    }
    render(){
        return(
            <MessageList message={this.props.message}/>   //this.props.message  message拿的是传过来的属性名
               
            
        )
    }
}
    Container.childContextTypes = {
        color: PropTypes.string
    };

class MessageList extends React.Component{
    render(){
        return(
            //这里获取的背景颜色是拿不到的，因为组件没有contextTypes去接收，如下
            <ul style={{background: this.context.color}}>
                {
                    this.props.message.map((message,index)=><Message message={message} key={index}/>)
                }
            </ul>
        )
    }
}

class Message extends React.Component{
    render(){
        return(
            //父组件设置的color，用this.context.color接收
            <li  style={{background: this.context.color}}>
                {this.props.message}
                    
                
            </li>
        )
    }
}
//写哪个子组件，这个子组件就能拿到父级组件设置的样式，否则哪怕是另外一个组件设置this.context.color去获取父组件设置的样式也显示不出来，因为只有接收的子组件才能最终显示
Message.contextTypes = {   //现在是Message组件能显示背景色，MessageList设置了背景色也拿不到，因为contextTypes的是Message组件
    color: PropTypes.string
};
//也可以多个组件去接收父级组件的样式
MessageList.contextTypes = {   //现在是Message组件能显示背景色，MessageList设置了背景色也拿不到，因为contextTypes的是Message组件
    color: PropTypes.string
};
let messages = [1,2,3]
ReactDOM.render(<Container message = {messages}></Container>,document.querySelector('#root'))
    

    
