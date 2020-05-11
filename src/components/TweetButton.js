import React from 'react'
import styles from './TweetButton.module.css'

function TweetButton({ id, className, style, onOpen }) {
  return (
    <button
      id={id}
      className={[className, styles.tweetButton].join(' ')}
      style={style}
      onClick={onOpen}
    >
      <p>Tweet</p>
    </button>
  )
}

export default TweetButton