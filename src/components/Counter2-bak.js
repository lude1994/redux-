import React,{Component} from 'react';
import {createStore} from '../redux';
import counter from '../reducers/counter';      //可以复用reducer

let store = createStore(counter);

export default class Counter2 extends Component{
    constructor(){
        super();
        this.state={
            //其实就是建立了从store中的state对象到当前组件状态对象的映射
            number:store.getState().number   //即state的值不一定要和store中的属性名一一对应
        }
    }
    componentWillMount(){
        this.unSubscibe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unSubscibe()
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}