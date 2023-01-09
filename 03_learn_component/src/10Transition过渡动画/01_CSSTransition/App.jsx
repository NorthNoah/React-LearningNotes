import React, { createRef, PureComponent } from 'react'
import './style.css'
import { CSSTransition } from "react-transition-group";
export class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isShow: true
        }

        this.sectionRef = createRef()
    }
    render() {
        const { isShow } = this.state

        return (
            <>
                <button onClick={e => this.setState({isShow: !isShow})}>切换</button>
                {/* { isShow && <h2>哈哈哈</h2> } */}
                <CSSTransition 
                    nodeRef={this.sectionRef}
                    in={isShow} 
                    unmountOnExit={true}
                    classNames="noah" 
                    timeout={2000}
                    appear
                >
                    <div className='section' ref={this.sectionRef}>
                        <h2>哈哈哈</h2>
                    </div>
                </CSSTransition>
            </>
        )
    }
}

export default App