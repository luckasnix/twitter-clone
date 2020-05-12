import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg'
import styles from './TweetForm.module.css'

function TweetForm({ id, className, style, value, onChange, onSubmit, onClose }) {
  return (
    <div
      id={id}
      className={[className, styles.tweetForm].join(' ')}
      style={style}
    >
      <div className={styles.controls}>
        <button onClick={onClose}>
          <CloseIcon/>
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder={`What's happening?`}
          rows={5}
          cols={50}
          maxLength={130}
          value={value}
          onChange={onChange}
        />
        <button type='submit' disabled={!value.length}>Tweet</button>
      </form>
    </div>
  )
}

export default TweetForm