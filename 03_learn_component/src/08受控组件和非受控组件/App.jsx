import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isAgree:"",
            hobbies: [
                {value: "sing", text: "唱", isChecked: "false"},
                {value: "dance", text: "跳", isChecked: "false"},
                {value: "rap", text: "如阿婆", isChecked: "false"},
            ],
            // fruit: "orange"
            fruit: ["orange"],
            intro: "哈哈哈"

        }
        this.introRef = createRef()
    }
    handleSubmitClick(event) {
        // 1.阻止默认事件
        event.preventDefault()

        // 2.获取到表单数据
        console.log("获取所有的输入内容")
        console.log(this.state.username, this.state.password, this.state.isAgree)

        // 对爱好进行filter筛选,然后map进行map遍历
        const hobbies = this.state.hobbies.filter(item => item.isChecked)
                                        .map(item => item.value)
        console.log("爱好:", hobbies)
        console.log("水果：", this.state.fruit)
        console.log("获取结果：", this.introRef.current.value)
    }

    handleInputChange(event) {
        // 动态设置[属性名]
        this.setState({ 
            //动态获取组件内绑定的name
            [event.target.name]: event.target.value 
        })
    }
    handleAgreeChange(event) { 
        this.setState({ 
            //动态获取组件内绑定的name
            isAgree: event.target.checked 
        })
    }
    handleHobbyChange(event, index) {
        // 复制原有state中的hobbies数组,千万别直接解构(解构获取的是原有数组)
        const newHobbies = [...this.state.hobbies]
        newHobbies[index].isChecked = event.target.checked
        this.setState({
            hobbies: newHobbies
        })
    }

    handleFruitChange(event) {
        const options = Array.from(event.target.selectedOptions)
        const values = options.map(item => item.value)
        console.log(values)
        this.setState({
            fruit: values
        })
    }

    
    render() {
        // 将input的数据源变更为state中的username
        const { username, password, isAgree, hobbies, fruit, intro } = this.state
        return (
        <div>
            {/* 不需要默认action,因为会刷新页面提交 */}
            <form onSubmit={e => this.handleSubmitClick(e)}>
                <div>
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
                </div>
                <label htmlFor="agree">
                    <input id="agree" 
                    name="agree" 
                    type="checkbox" 
                    onChange={e => this.handleAgreeChange(e)}/>同意协议
                </label>

                  {/* checkbox */}
                <div>
                    您的爱好:
                    {
                        hobbies.map((item, index) => {
                            return (
                                <label htmlFor={item.value} key={item.value}>
                                    <input type="checkbox" 
                                    id={item.value} 
                                    value={item.isChecked}
                                    onChange={e => this.handleHobbyChange(e, index)}
                                    />{item.text}
                                </label>
                            )
                        })
                    }
                </div>

                  {/* select */}
                <select name="fruit" value={fruit} onChange={e => this.handleFruitChange(e)} multiple>
                    <option value="apple">苹果</option>
                    <option value="orange">桔子</option>
                    <option value="banana">香蕉</option>
                </select>
                
                <input type="text" defaultValue={intro} ref={this.introRef}/>

                <div>
                    <button type='submit' value={isAgree}>注册</button>
                </div>
            </form>
        </div>
        )
    }
}

export default App