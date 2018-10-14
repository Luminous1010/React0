import React from 'react'
import './todo.css'


class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        // 用 bind 来绑定 this
        this.handleChange = this.handleChange.bind(this)
        // *** 注意
        // state(状态) 是一个特殊的变量, 必须叫这个名字
        // 它用来保存程序运行期间的变量
        this.state = {
            items: [],
            text: '',
        }
    }

    render() {
        // 在外面写好变量到里面去用
        let buttonTitle = '添加第 ' + (this.state.items.length + 1) + ' 个 todo'
        return (
            <div className="todo-div">
                <h2>TODO</h2>
                <TodoList todos={this.state.items}/>
                <div>
                    <input onChange={this.handleChange} value={this.state.text} placeholder="输入事项"/>
                    <button onClick={this.handleSubmit}>{buttonTitle}</button>
                </div>
            </div>
        )
    }

    // 在 input 的 value 改变的时候会被调用
    // 相当于给 input 绑定了 change 事件
    handleChange(e) {
        let state = {
            text: e.target.value
        }
        // items 没有改动, 只改动了 text, setState 只会改变 text
        this.setState(state)
    }

    // 相当于给 input 绑定了 click 事件
    // 用户点击按钮 就会调用这个函数
    handleSubmit = (e) => {
        let i = {
            // 要把一个值从一个函数传递到另一个函数
            // 可以使用 this.state 来完成
            text: this.state.text,
            id: Date.now(),
        }
        this.setState((prevState) => {
            return {
                // prevState 是上一个 state
                // items 里面存的就是很多个对象
                // 这样做的原因是 react 不希望你直接改变 state
                // 而是重新设置它
                items: prevState.items.concat(i),
                text: ''
            }
        })
    }
}


class TodoList extends React.Component {
    // 这个就是用 props 的 todos 生成一个 li 列表
    // TodoApp 的 state 传进来了, 所以是 props
    //
    // map 循环里面的每个 li 都必须有一个独特的 key 属性
    // 这个规定是 react 为了更新特定的数据的
    render() {
        console.log('this.props in todo list', this.props)
        let todos = this.props.todos
        return (
            <ul>
                {
                    todos.map(t => {
                        // react 规定数组中的元素必须要有一个独一无二的值作为 key 属性的值
                        return <li key={t.id}>{t.text}</li>
                    })
                }
            </ul>
        )
    }
}

export default TodoApp
