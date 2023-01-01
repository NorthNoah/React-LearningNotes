import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmitClick(event) {
        // 1.阻止默认事件
        event.preventDefault()

        // 2.获取到表单数据
        console.log("获取所有的输入内容")
        console.log(this.state.username, this.state.password)

    }

    handleInputChange(event) {
        // 动态设置[属性名]
        this.setState({ 
            //动态获取组件内绑定的name
            [event.target.name]: event.target.value 
        })
    }


    render() {
        // 将input的数据源变更为state中的username
        const { username, password } = this.state
        return (
        <div>
            {/* 不需要默认action,因为会刷新页面提交 */}
            <form onSubmit={e => this.handleSubmitClick(e)}>
                <label htmlFor="username">
                    用户:<input id="username" 
                        name="username" 
                        type="text" 
                        value={username} 
                        onChange={e => this.handleInputChange(e)}/>
                </label>
                <label htmlFor="password">
                    密码:<input id="password" 
                    name='password'
                    type="password" 
                    value={password} 
                    onChange={e => this.handleInputChange(e)}/>
                </label>
                <button type='submit'>注册</button>
            </form>
        </div>
        )
    }
}

export default App