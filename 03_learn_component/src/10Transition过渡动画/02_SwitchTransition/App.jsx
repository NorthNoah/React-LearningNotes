import React, { PureComponent } from 'react'
import './style.css'
import { CSSTransition,SwitchTransition } from "react-transition-group";
export class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: true
        }

    }
    render() {
        const { isLogin } = this.state
        return (
            <>  
                <SwitchTransition mode='out-in'>
                    <CSSTransition 
                        key={isLogin ? "exit" : "login"}
                        classNames="login"
                        timeout={1000}
                    >
                        <button onClick={e => this.setState({ isLogin: !isLogin })}>
                            { isLogin ? "退出" : "登录" }
                        </button>
                    </CSSTransition>

                </SwitchTransition>
                
                {/* { isShow && <h2>哈哈哈</h2> } */}
               
            </>
        )
    }
}

export default App