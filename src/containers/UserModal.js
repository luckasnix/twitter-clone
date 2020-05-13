import React, { useState, useCallback, useContext } from 'react'
import UserForm from '../components/UserForm'
import firebase from '../services/firebase'
import UserContext from '../contexts/user/Context'
import styles from './UserModal.module.css'

function UserModal({ id, className, style, onClose }) {
  const { user } = useContext(UserContext)
  // controlling username changes
  const [username, setUsername] = useState(user.username)
  const handleUsernameChange = useCallback((evt) => {
    setUsername(evt.target.value)
  }, [])
  const handleUsernameSubmit = useCallback((evt) => {
    evt.preventDefault()
    firebase.database().ref('user').child('username').set(username)
      .then(() => {
        onClose()
      })
  }, [username, onClose])
  // controlling nickname changes
  const [nickname, setNickname] = useState(user.nickname)
  const handleNicknameChange = useCallback((evt) => {
    setNickname(evt.target.value)
  }, [])
  const handleNicknameSubmit = useCallback((evt) => {
    evt.preventDefault()
    firebase.database().ref('user').child('nickname').set(nickname)
      .then(() => {
        onClose()
      })
  }, [nickname, onClose])
  // controlling profile image upload
  const handleProfileChange = useCallback((evt) => {
    firebase.storage().ref('user').child('profile').put(evt.target.files[0])
      .then(() => {
        window.location.reload(false)
      })
  }, [])
  // controlling cover image upload
  const handleCoverChange = useCallback((evt) => {
    firebase.storage().ref('user').child('cover').put(evt.target.files[0])
      .then(() => {
        window.location.reload(false)
      })
  }, [])
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
        onProfileChange={handleProfileChange}
        onCoverChange={handleCoverChange}
        onClose={onClose}
      />
    </div>
  )
}

export default UserModal