import React, { useContext } from 'react'
import TweetItem from '../components/TweetItem'
import TweetsContext from '../contexts/tweets/Context'
import UserContext from '../contexts/user/Context'
import styles from './TweetList.module.css'

function TweetList({ id, className, style }) {
  //fetching tweets data in the context
  const { tweets } = useContext(TweetsContext)
  // fetching user data in the context
  const { user } = useContext(UserContext)
  return (
    <ul
      id={id}
      className={[className, styles.tweetList].join(' ')}
      style={style}
    >
      {tweets.map((tweet) => {
        return <TweetItem key={tweet.id} tweet={tweet} user={user}/>
      })}
    </ul>
  )
}

export default TweetList