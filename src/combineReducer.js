
/**
 * 旧状态的格式：{number:0} {list:[]}
 * 新状态的格式：{counter:{number:0},todo:{list:[]}}        //我们想要合并后的格式
 */
//合并reducer方法
let combineReducers = (reducers)=>
    (state={},action)=>{//返回一个reducer
        let newState = {};
        for(var key in reducers){  //key 指counter和todo
            newState[key] = reducers[key](state[key],action)
        }

        //{counter:{number:0},todo:{list:[]}}
        return newState;
    }



export default combineReducers;