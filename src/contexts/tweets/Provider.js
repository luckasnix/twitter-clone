import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducer'

function Provider({ children }) {
  const [tweets, dispatchToTweets] = useReducer(reducer, [])
  return (
    <Context.Provider value={{ tweets, dispatchToTweets }}>
      {children}
    </Context.Provider>
  )
}

export default Provider