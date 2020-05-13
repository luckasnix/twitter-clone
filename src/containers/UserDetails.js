import React, { useContext } from 'react'
import UserButton from '../components/UserButton'
import UserContext from '../contexts/user/Context'
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
        <img src={user.coverUrl} alt='Foto de capa'/>
        <img src={user.profileUrl} alt='Foto de perfil'/>
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