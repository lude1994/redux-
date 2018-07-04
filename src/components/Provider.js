import React, { Component } from 'react'
import {PropTypes} from 'prop-types'

export default class Provider extends Component {
    //context写法
    getChhildContext(){
        return{store:this.props.store}
    }
    render() {
        return (
        this.props.children
        )
    }
}
Provider.chilrContextTypes = {
    store:PropTypes.object
}
