import {INCREASE,DECREASE} from '../action'

//state是状态树，可以是任意的结构对象、数组、、、
//action是一个纯对象 {type:'INCREASE', amount:3}  {type:'DECREASE', amount:1} action是在发送(dispatch)指令的时候传入的
let reducer = (state = {number:0}, action) =>{
    if(action === undefined) return state;       //初始化action是没有值（undefined）所以type会报错 ，初始化值的时候才做这个判断
    switch(action.type){
        case INCREASE:
            return {number:state.number + (action.amount || 2)};
        case DECREASE:
            return {number:state.number - (action.amount || 1)};
        default:
            //否则原封不动的返回老的state
            return state;
    }
}

export default reducer