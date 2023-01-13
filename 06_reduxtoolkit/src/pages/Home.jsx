import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num)
  }
  render() {
      const { counter } = this.props
      return (
          <div>
              <h2>Home Counter: {counter}</h2>
              <div>
                  <button onClick={e => this.addNumber(1)}>+1</button>
                  <button onClick={e => this.addNumber(5)}>+5</button>
                  <button onClick={e => this.addNumber(8)}>+8</button>
              </div>
          </div>
      )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter
})
const mapDispatchToPorps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToPorps)(Home)