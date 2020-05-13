import React, { useContext } from 'react'
import TweetsContext from '../contexts/tweets/Context'
import UserContext from '../contexts/user/Context'
import styles from './Header.module.css'

function Header({ id, className, style }) {
  const { tweets } = useContext(TweetsContext)
  const { user } = useContext(UserContext)
  return (
    <header
      id={id}
      className={[className, styles.header].join(' ')}
      style={style}
    >
      <h1>{user.username}</h1>
      <p>{tweets.length} {tweets.length === 1 ? 'Tweet' : 'Tweets'}</p>
    </header>
  )
}

export default Header