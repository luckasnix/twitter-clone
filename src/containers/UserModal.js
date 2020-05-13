import React, { useState, useCallback } from 'react'
import UserForm from '../components/UserForm'
import firebase from '../services/firebase'
import styles from './UserModal.module.css'

function UserModal({ id, className, style, onClose }) {
  // controling username changes
  const [username, setUsername] = useState('')
  const handleUsernameChange = useCallback((evt) => {
    setUsername(evt.target.value)
  }, [])
  const handleUsernameSubmit = useCallback((evt) => {
    evt.preventDefault()
    firebase.database().ref('user/username').set(username)
      .then(() => {
        onClose()
      })
  }, [username, onClose])
  // controling nickname changes
  const [nickname, setNickname] = useState('')
  const handleNicknameChange = useCallback((evt) => {
    setNickname(evt.target.value)
  }, [])
  const handleNicknameSubmit = useCallback((evt) => {
    evt.preventDefault()
    firebase.database().ref('user/nickname').set(nickname)
      .then(() => {
        onClose()
      })
  }, [nickname, onClose])
  return (
    <div
      id={id}
      className={[className, styles.userModal].join(' ')}
      style={style}
    >
      <div className={styles.backdrop} onClick={onClose}/>
      <UserForm
        usernameValue={username}
        onUsernameChange={handleUsernameChange}
        onUsernameSubmit={handleUsernameSubmit}
        nicknameValue={nickname}
        onNicknameChange={handleNicknameChange}
        onNicknameSubmit={handleNicknameSubmit}
        onClose={onClose}
      />
    </div>
  )
}

export default UserModal