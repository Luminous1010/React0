import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'

const log = console.log.bind(console)

// 程序的主入口
// class 是 es6 的语法
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTimer: true,
        }
    }

    render() {
        // 用一个变量来决定是否显示 timer 组件
        // 这是一个三元表达式, 意思是如果 this.state.showTimer 的值为 true 那么把 <Timer /> 赋值给 timer 变量
        // 否则把 null 赋值给 timer 变量

        let timer = this.state.showTimer ? <Timer/> : null
        return (
            // className 表示 HTML 里面的 class 属性
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and reload.
                </p>
                {/* 父组件调用子组件的时候, 通过 key=value 的形式传递数据 */}
                <Message name='World' />
                {/*会被替换成下面的内容 */}
                {/*<div className="message-div">*/}
                    {/*<div>Hello {this.props.name}</div>*/}
                    {/*<div>大写 {this.props.name.toUpperCase()}</div>*/}
                {/*</div>*/}
                <Message name='世界' />
                <button onClick={this.handleToggleTimer}>开关 timer</button>
                {/* 如果一个组件的值为 null, 那么就不会渲染到页面中 */}
                {timer}
                <TodoApp/>
                <MarkdownEditor/>
            </div>
        )
        // *** 组件必须 /> 结尾
    }

    handleToggleTimer = (e) => {
        let show = !this.state.showTimer
        // this.setState 是用来改变 state 的值, 这个方法是一个异步方法
        // 当 state 发生变化, 会自动调用 render 方法
        log('show before set state', show)
        this.setState({
            showTimer: show
        })
        log('show after', show)
    }
}

export default App
