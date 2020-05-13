import React from 'react'
import styles from './UserButton.module.css'

function UserButton({ id, className, style, onOpen }) {
  return (
    <button
      id={id}
      className={[className, styles.userButton].join(' ')}
      style={style}
      onClick={onOpen}
    >
      <p>Edit profile</p>
    </button>
  )
}

export default UserButton