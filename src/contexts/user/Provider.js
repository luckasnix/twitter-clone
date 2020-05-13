import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducer'

function Provider({ children }) {
  const [user, dispatchToUser] = useReducer(reducer, {
    username: '',
    nickname: '',
  })
  return (
    <Context.Provider value={{ user, dispatchToUser }}>
      {children}
    </Context.Provider>
  )
}

export default Provider