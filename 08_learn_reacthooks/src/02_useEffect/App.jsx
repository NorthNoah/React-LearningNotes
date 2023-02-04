import React, { memo, useEffect } from 'react'
import { useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(200)
  useEffect(() => {
    document.title = count
  })

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
    </div>
  )
})

export default App