import React from 'react'
import styles from './NavItem.module.css'

function NavItem({ id, className, style, label, icon: Icon, active }) {
  return (
    <li
      id={id}
      className={[className, styles.navItem, active ? styles.active : null].join(' ')}
      style={style}
    >
      <Icon/>
      <p>{label}</p>
    </li>
  )
}

export default NavItem