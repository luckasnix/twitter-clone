import React from 'react'
import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg'
import styles from './Search.module.css'

function Search({ id, className, style, value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}
      id={id}
      className={[className, styles.search].join(' ')}
      style={style}
    >
      <SearchIcon/>
      <input
        value={value}
        onChange={onChange}
        placeholder='Search Twitter'
        autoComplete='off'
      />
    </form>
  )
}

export default Search