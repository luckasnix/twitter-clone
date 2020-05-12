import React, { useState, useCallback } from 'react'
import TweetForm from '../components/TweetForm'
import firebase from '../services/firebase'
import styles from './TweetModal.module.css'

function TweetModal({ onClose }) {
  const [msg, setMsg] = useState('')
  const handleMsgChange = useCallback((evt) => {
    setMsg(evt.target.value)
  }, [])
  const handleMsgSubmit = useCallback((evt) => {
    evt.preventDefault()
    const tweet = {
      content: msg,
      comments: 0,
      retweets: 0,
      likes: 0,
    }
    firebase.database().ref('tweets').push(tweet)
      .then(() => {
        onClose()
      })
  }, [msg, onClose])
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}/>
      <TweetForm
        value={msg}
        onChange={handleMsgChange}
        onSubmit={handleMsgSubmit}
        onClose={onClose}
      />
    </>
  )
}

export default TweetModal