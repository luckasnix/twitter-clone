import React, { useState, useCallback, useContext, useEffect } from 'react'
import SideBar from '../containers/SideBar'
import Header from '../containers/Header'
import UserDetails from '../containers/UserDetails'
import TweetList from '../containers/TweetList'
import TopicList from '../containers/TopicList'
import TweetModal from '../containers/TweetModal'
import UserModal from '../containers/UserModal'
import firebase from '../services/firebase'
import TweetsContext from '../contexts/tweets/Context'
import UserContext from '../contexts/user/Context'
import * as tweetsActions from '../contexts/tweets/actions'
import * as userActions from '../contexts/user/actions'
import styles from './Profile.module.css'

function Profile() {
  const { dispatchToTweets } = useContext(TweetsContext)
  const { dispatchToUser } = useContext(UserContext)
  // controling TweetModal visibility
  const [showTweetModal, setShowTweetModal] = useState(false)
  const handleTweetModalOpen = useCallback(() => {
    setShowTweetModal(true)
  }, [])
  const handleTweetModalClose = useCallback(() => {
    setShowTweetModal(false)
  }, [])
  // controling UserModal visibility
  const [showUserModal, setShowUserModal] = useState(false)
  const handleUserModalOpen = useCallback(() => {
    setShowUserModal(true)
  }, [])
  const handleUserModalClose = useCallback(() => {
    setShowUserModal(false)
  }, [])
  useEffect(() => {
    // useEffect running once and watching changes
    firebase.database().ref('tweets').on('child_added', (snapshot) => {
      const tweet = {
        id: snapshot.key,
        ...snapshot.val()
      }
      dispatchToTweets(tweetsActions.addTweet(tweet))
    })
    firebase.database().ref('user').on('value', (snapshot) => {
      dispatchToUser(userActions.updateUsername(snapshot.val().username))
      dispatchToUser(userActions.updateNickname(snapshot.val().nickname))
    })
    firebase.storage().ref('user').child('profile').getDownloadURL()
      .then((url) => {
        dispatchToUser(userActions.updateProfileUrl(url))
      })
    firebase.storage().ref('user').child('cover').getDownloadURL()
      .then((url) => {
        dispatchToUser(userActions.updateCoverUrl(url))
      })
  }, [dispatchToTweets, dispatchToUser])
  return (
    <>
      <SideBar className={styles.sideBar} onOpen={handleTweetModalOpen}/>
      <Header className={styles.header}/>
      <UserDetails className={styles.userDetails} onOpen={handleUserModalOpen}/>
      <TweetList className={styles.tweetList}/>
      <TopicList className={styles.topicList}/>
      {showTweetModal && <TweetModal className={styles.tweetModal} onClose={handleTweetModalClose}/>}
      {showUserModal && <UserModal className={styles.userModal} onClose={handleUserModalClose}/>}
    </>
  )
}

export default Profile