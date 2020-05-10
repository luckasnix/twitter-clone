import React from 'react'
import SideBar from '../containers/SideBar'
import Header from '../containers/Header'
import TopicList from '../containers/TopicList'
import styles from './Profile.module.css'

function Profile() {
  return (
    <>
      <SideBar className={styles.sideBar}/>
      <Header className={styles.header}/>
      <TopicList className={styles.topicList}/>
    </>
  )
}

export default Profile