import React,{Component} from 'react';
import {createStore} from '../redux';
import counter from '../reducers/counter';      //可以复用reducer
import {INCREASE,DECREASE} from '../action'
import connect from '../connect'

let store = createStore(counter);

class Counter2 extends Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        )
    }
}

//state参数是store里的state
//映射函数  映射出来的属性，UI组件都是用this.props去接收
//把state映射成UI组件的属性
let mapStateToProps = (state) =>(
    {
        number:state.number
    }
)
//把dispacth映射成UI组件的属性
let mapDispatchToProps  = (dispatch) =>(
    {
        onIncrease:()=>dispatch({type:INCREASE}),
        onDecrease:()=>dispatch({type:DECREASE})
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Counter2);

