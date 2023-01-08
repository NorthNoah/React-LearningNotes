import React, { PureComponent } from 'react'
import Detail from './pages/Detail';
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        App
        <Detail/>
      </div>
    )
  }
}

export default App