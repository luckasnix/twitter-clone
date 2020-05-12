import React, { useContext } from 'react'
import TweetsContext from '../contexts/tweets/Context'
import styles from './Header.module.css'

function Header({ id, className, style }) {
  const { tweets } = useContext(TweetsContext)
  return (
    <header
      id={id}
      className={[className, styles.header].join(' ')}
      style={style}
    >
      <h1>Lucas</h1>
      <p>{tweets.length} {tweets.length === 1 ? 'Tweet' : 'Tweets'}</p>
    </header>
  )
}

export default Header