import React from 'react'
import SideBar from '../containers/SideBar'
import Header from '../containers/Header'
import styles from './Profile.module.css'

function Profile() {
  return (
    <>
      <SideBar className={styles.sideBar}/>
      <Header className={styles.header}/>
    </>
  )
}

export default Profile