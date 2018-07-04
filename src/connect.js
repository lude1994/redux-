//mapStateToProps 把store里的状态对象state映射成组件属性（如number属性），如：  number:store.getState().number
//_component是老组件
import React,{Component} from 'react';
import {PropTypes} from 'prop-types'


//connect方法是公共方法可以导出
let connect = (mapStateToProps,mapDispatchToProps) =>(_component)=>{
    //返回新的组件 Proxy就是容器组件
    class Proxy extends Component{
        constructor(){
            super();
            this.state = {} //把store.getState()映射成新对象，然后展开赋给this.state
        }
        componentWillMount(){
            this.context.store.subscribe(()=>{
                //监听时，更新初始number为最新的state的number
               this.unsubscribe =  this.setState(
                    mapStateToProps(this.context.store.getState())
                )
                
            })
        }
        componentWillUnmount(){
            this.unsubscribe
        }
        //组件卸载的时候，取消监听，否则会报错
        componentWillUnmount(){
            this.unsubscribe();     //这里调用取消订阅函数
        }
        render(){
            return<_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }
    //context写法
    Proxy.contextTypes = {
        store: PropTypes.object
    }

    return Proxy;
}
connect.childContextTypes = {
    store:PropTypes.object  //规定类型
}
export default connect;