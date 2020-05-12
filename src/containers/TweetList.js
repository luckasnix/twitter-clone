import React, { useContext } from 'react'
import TweetItem from '../components/TweetItem'
import TweetsContext from '../contexts/tweets/Context'
import styles from './TweetList.module.css'

function TweetList({ id, className, style }) {
  const { tweets } = useContext(TweetsContext)
  return (
    <ul
      id={id}
      className={[className, styles.tweetList].join(' ')}
      style={style}
    >
      {tweets.map((tweet) => {
        return <TweetItem key={tweet.id} tweet={tweet}/>
      })}
    </ul>
  )
}

export default TweetList