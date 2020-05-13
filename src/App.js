import React from 'react'
import TweetsProvider from './contexts/tweets/Provider'
import UserProvider from './contexts/user/Provider'
import Profile from './pages/Profile'

function App() {
  return (
    <TweetsProvider>
      <UserProvider>
        <Profile/>
      </UserProvider>
    </TweetsProvider>
  )
}

export default App