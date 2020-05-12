import React from 'react'
import TweetsProvider from './contexts/tweets/Provider'
import Profile from './pages/Profile'

function App() {
  return (
    <TweetsProvider>
      <Profile/>
    </TweetsProvider>
  )
}

export default App