import React from 'react'
import styles from './PostButton.module.css'

function PostButton({ id, className, style }) {
  return (
    <button
      id={id}
      className={[className, styles.postButton].join(' ')}
      style={style}
    >
      <p>Tweet</p>
    </button>
  )
}

export default PostButton