import React from 'react'
import SideBar from '../containers/SideBar'
import styles from './Profile.module.css'

function Profile() {
  return (
    <>
      <SideBar className={styles.sidebar}/>
    </>
  )
}

export default Profile