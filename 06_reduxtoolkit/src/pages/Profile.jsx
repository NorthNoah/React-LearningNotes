import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { subNumber } from "../store/features/counter";
export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num)
  }
  render() {
      const { counter } = this.props
      return (
          <div>
              <h2>Profile Counter: {counter}</h2>
              <div>
                  <button onClick={e => this.subNumber(1)}>-1</button>
                  <button onClick={e => this.subNumber(5)}>-5</button>
                  <button onClick={e => this.subNumber(8)}>-8</button>
              </div>
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
  // 注意此时是counter模块中的counter变量
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  // 把dispatch的方法注入到props中
  subNumber(num) {
    // 派发slice中的action
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)