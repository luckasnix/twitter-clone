import React, { useState, useCallback } from 'react'
import SideBar from '../containers/SideBar'
import Header from '../containers/Header'
import TopicList from '../containers/TopicList'
import TweetModal from '../containers/TweetModal'
import styles from './Profile.module.css'

function Profile() {
  const [showModal, setShowModal] = useState(false)
  const handleModalOpen = useCallback(() => {
    setShowModal(true)
  }, [])
  const handleModalClose = useCallback(() => {
    setShowModal(false)
  }, [])
  return (
    <>
      <SideBar className={styles.sideBar} onOpen={handleModalOpen}/>
      <Header className={styles.header}/>
      <TopicList className={styles.topicList}/>
      {showModal && <TweetModal onClose={handleModalClose}/>}
    </>
  )
}

export default Profile