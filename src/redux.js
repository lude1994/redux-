// 创建仓库---仓库里就只有reducer和state
const createStore = (reducer) =>{
    //reducer是外部传进来的，会有不同的逻辑操作，但内部会保存一份
    let state;  //默认值是undefined
    //监听函数数组，有多个组件订阅一个state时，要写多个监听函数,每个组件对应一个监听函数，可以将这些监听函数放在一个数组中
    let listeners = [];
    //用来获取最新的状态
    let getState = () => state;

    //向仓库发送action---这个是很重要的部分，进行更新state的流程
    let dispatch = (action) => {
        //指令到达store中的reducer进行处理，从而返回新的state
        //传入老的state和action，返回新的state
        state = reducer(state, action);
        //状态更新了，通知所有的监听者,更新状态
        // listener()  执行所有监听函数
        listeners.forEach(listener=>listener())
    }
    
    //订阅仓库内的状态变化事件，当状态发生变化之后，会调用相应的监听(listener)函数.
    //订阅方法执行后会返回取消订阅的函数，调用它可以取消订阅
    let subscribe = (listener) => {
        //将监听组件的监听函数放在listeners数组中
        listeners.push(listener)
        //取消订阅
        return () =>{
            listeners.filter(l => listener != l)
        }
    }
    dispatch();         //调用dispatch
    //return 返回对象，这个对象就是一个仓库，其功能1：让外边能够访问到仓库里的状态
    return{
        //对象属性
        getState,    //返回state
        subscribe,   //订阅状态变化事件
        dispatch
    }
}

export {createStore}