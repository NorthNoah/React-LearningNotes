import React, { PureComponent } from 'react'
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import store from './store';
import "./style.css";
import Category from './pages/Category';


export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      // 注意初始化需要取store中的数据
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    // 组件挂载后，订阅store中数据的变化，并更新
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state.counter
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className="pages">
          <Home/>
          <Profile/>
          <About/>
          <Category/>
        </div>

      </div>
    )
  }
}

export default App