import {ADD_TODO,DELETE_TODO} from '../action'
let reducer = (state={list:["吃饭"]} , action) =>{
    if(action === undefined) return state; 
    switch(action.type){
        case ADD_TODO:
            return{list:[...state.list,action.text]}  //...list  解构数组list,然后和action.text合在一起，类似于push text到数组中了
        case DELETE_TODO:
            let list = state.list;
            list.splice(action.index,1)       
            //我们的状态具有不变性，每次都要返回一个新的对象
            return{list:[...list]}  //...list  是新生成的list数组中的所有元素
        default:
            return state
    }
}

export default reducer;