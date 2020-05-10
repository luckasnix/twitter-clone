import React, { useState, useCallback } from 'react'
import Search from '../components/Search'
import TrendList from '../components/TrendList'
import styles from './TopicList.module.css'

function TopicList({ id, className, style}) {
  const [terms, setTerms] = useState('')
  const handleTermsChange = useCallback((evt) => {
    setTerms(evt.target.value)
  }, [])
  const handleSearchSubmit = useCallback((evt) => {
    evt.preventDefault()
    window.alert(terms)
    setTerms('')
  }, [terms])
  return (
    <aside
      id={id}
      className={[className, styles.topicList].join(' ')}
      style={style}
    >
      <Search
        value={terms}
        onChange={handleTermsChange}
        onSubmit={handleSearchSubmit}
      />
      <TrendList/>
    </aside>
  )
}

export default TopicList