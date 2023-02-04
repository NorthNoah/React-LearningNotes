import React, { memo, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2>{user.name}-{user.level}</h2>
      <h2>{theme.color}-{theme.font}</h2>
    </div>
  )
})

export default App