import React, { useState, useCallback, useContext, useEffect } from 'react'
import SideBar from '../containers/SideBar'
import Header from '../containers/Header'
import TweetList from '../containers/TweetList'
import TopicList from '../containers/TopicList'
import TweetModal from '../containers/TweetModal'
import firebase from '../services/firebase'
import TweetsContext from '../contexts/tweets/Context'
import * as tweetsActions from '../contexts/tweets/actions'
import styles from './Profile.module.css'

function Profile() {
  const { dispatchToTweets } = useContext(TweetsContext)
  const [showModal, setShowModal] = useState(false)
  const handleModalOpen = useCallback(() => {
    setShowModal(true)
  }, [])
  const handleModalClose = useCallback(() => {
    setShowModal(false)
  }, [])
  useEffect(() => {
    firebase.database().ref('tweets').on('child_added', (snapshot) => {
      const tweet = {
        id: snapshot.key,
        ...snapshot.val()
      }
      dispatchToTweets(tweetsActions.addTweet(tweet))
    })
  }, [dispatchToTweets])
  return (
    <>
      <SideBar className={styles.sideBar} onOpen={handleModalOpen}/>
      <Header className={styles.header}/>
      <TweetList className={styles.tweetList}/>
      <TopicList className={styles.topicList}/>
      {showModal && <TweetModal onClose={handleModalClose}/>}
    </>
  )
}

export default Profile