import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg'
import styles from './UserForm.module.css'

function UserForm({
  id,
  className,
  style,
  usernameValue,
  onUsernameChange,
  onUsernameSubmit,
  nicknameValue,
  onNicknameChange,
  onNicknameSubmit,
  onProfileChange,
  onCoverChange,
  onClose,
}) {
  return (
    <div
      id={id}
      className={[className, styles.userForm].join(' ')}
      style={style}
    >
      <div className={styles.controls}>
        <button onClick={onClose}>
          <CloseIcon/>
        </button>
      </div>
      <form onSubmit={onUsernameSubmit}>
        <input
          value={usernameValue}
          onChange={onUsernameChange}
          autoComplete='off'
        />
        <button type='submit'>Update Username</button>
      </form>
      <form onSubmit={onNicknameSubmit}>
        <input
          value={nicknameValue}
          onChange={onNicknameChange}
          autoComplete='off'
        />
        <button type='submit'>Update Nickname</button>
      </form>
      <input id='profile-file' type='file' onChange={onProfileChange}/>
      <label htmlFor='profile-file'>Choose a profile</label>
      <input id='cover-file' type='file' onChange={onCoverChange}/>
      <label htmlFor='cover-file'>Choose a cover</label>
    </div>
  )
}

export default UserForm