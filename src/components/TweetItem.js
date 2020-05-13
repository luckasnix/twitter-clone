import React from 'react'
import { ReactComponent as CommentsIcon } from '../assets/svgs/comments.svg'
import { ReactComponent as RetweetsIcon } from '../assets/svgs/retweets.svg'
import { ReactComponent as LikesIcon } from '../assets/svgs/likes.svg'
import profileImg from '../assets/images/profile.jpg'
import styles from './TweetItem.module.css'

function TweetItem({ id, className, style, tweet, user }) {
  return (
    <li
      id={id}
      className={[className, styles.tweetItem].join(' ')}
      style={style}
    >
      <div className={styles.avatar}>
        <img src={profileImg} alt='Imagem de perfil'/>
      </div>
      <div className={styles.content}>
        <div className={styles.author}>
          <p>{user.username}</p>
          <span>{user.nickname}</span>
        </div>
        <div className={styles.msg}>
          <p>{tweet.content}</p>
        </div>
        <div className={styles.options}>
          <div>
            <CommentsIcon/>
            <p>{tweet.comments}</p>
          </div>
          <div>
            <RetweetsIcon/>
            <p>{tweet.retweets}</p>
          </div>
          <div>
            <LikesIcon/>
            <p>{tweet.likes}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TweetItem