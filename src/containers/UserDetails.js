import React, { useContext } from 'react'
import UserButton from '../components/UserButton'
import UserContext from '../contexts/user/Context'
import coverImg from '../assets/images/cover.jpg'
import profileImg from '../assets/images/profile.jpg'
import styles from './UserDetails.module.css'

function UserDetails({ id, className, style, onOpen }) {
  const { user } = useContext(UserContext)
  return (
    <div
      id={id}
      className={[className, styles.userDetails].join(' ')}
      style={style}
    >
      <div className={styles.userImgs}>
        <img src={coverImg} alt='Foto de capa'/>
        <img src={profileImg} alt='Foto de perfil'/>
      </div>
      <div className={styles.userInfo}>
        <p>{user.username}</p>
        <span>{user.nickname}</span>
      </div>
      <UserButton className={styles.userButton} onOpen={onOpen}/>
    </div>
  )
}

export default UserDetails