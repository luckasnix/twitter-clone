import React from 'react'
import styles from './TrendList.module.css'

const trendList = [
  { subject: 'Music', term: '#Grammy', tweetsQty: 264975 },
  { subject: 'Sports', term: '#FIFA', tweetsQty: 8547096 },
  { subject: 'Cinema', term: '#Oscar', tweetsQty: 985405 },
  { subject: 'Politics', term: '#ONU', tweetsQty: 10842 },
]

function TrendList({ id, className, style }) {
  return (
    <div
      id={id}
      className={[className, styles.trendList].join(' ')}
      style={style}
    >
      <h1>Trends for you</h1>
      <ul>
        {trendList.map(({ subject, term, tweetsQty }) => {
          return (
            <li key={`${subject}-${term}`} className={styles.trendItem}>
              <p>{subject} - Trending</p>
              <p>{term}</p>
              <p>{tweetsQty} Tweets</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TrendList