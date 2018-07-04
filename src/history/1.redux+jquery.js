import {createStore} from './redux';
import $ from 'jquery';
const INCREASE = 'INCREASE';  // +
const DECREASE = 'DECREASE';  // -

$('document.body').append(`
    <p id="counter"></p>
    <button id="increaseBtn">+</button>
    <button id="decreaseBtn">-</button>
`)
//state是状态树，可以是任意的结构对象、数组、、、
//action是一个纯对象 {type:'INCREASE', amount:3}  {type:'DECREASE', amount:1} action是在发送(dispatch)指令的时候传入的
let reducer = (state = {number:0}, action) =>{
    if(action === undefined) return state;       //初始化action是没有值（undefined）所以type会报错 ，初始化值的时候才做这个判断
    switch(action.type){
        case 'INCREASE':
        //state.number是老的state中的number属性
        //action.amount是action指令中的属性amount
            return {number:state.number + action.amount};
        case 'DECREASE':
            return {number:state.number - action.amount};
        default:
            //否则原封不动的返回老的state
            return state;
    }
}
let store = createStore(reducer)
let render = () =>{
    $('#counter').html(store.getState().number);
}
//当仓库里的state发生变化时，会重新执行render方法，读取最新的数据状态并更新视图
store.subscribe(render)
$('#increaseBtn').click(()=>{store.dispatch({type:INCREASE,amount:3})})  //{type:INCREASE,amount:3})}是传入的action
$('#decreaseBtn').click(()=>{store.dispatch({type:DECREASE,amount:1})})  //点击的时候向仓库发送指令，然后指令到达reducer返回新的state
render();