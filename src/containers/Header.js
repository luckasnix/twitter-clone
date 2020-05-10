import React from 'react'
import styles from './Header.module.css'

function Header({ id, className, style }) {
  return (
    <header
      id={id}
      className={[className, styles.header].join(' ')}
      style={style}
    >
      <h1>Lucas</h1>
      <p>190 Tweets</p>
    </header>
  )
}

export default Header