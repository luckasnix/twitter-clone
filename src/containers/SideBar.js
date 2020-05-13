import React from 'react'
import NavItem from '../components/NavItem'
import TweetButton from '../components/TweetButton'
import { ReactComponent as HomeIcon } from '../assets/svgs/home.svg'
import { ReactComponent as ExploreIcon } from '../assets/svgs/explore.svg'
import { ReactComponent as NotificationsIcon } from '../assets/svgs/notifications.svg'
import { ReactComponent as MessagesIcon } from '../assets/svgs/messages.svg'
import { ReactComponent as BookmarksIcon } from '../assets/svgs/bookmarks.svg'
import { ReactComponent as ListsIcon } from '../assets/svgs/lists.svg'
import { ReactComponent as ProfileIcon } from '../assets/svgs/profile.svg'
import { ReactComponent as MoreIcon } from '../assets/svgs/more.svg'
import styles from './SideBar.module.css'

// fake items in the side bar
const navItems = [
  { label: 'Home', icon: HomeIcon, active: false },
  { label: 'Explore', icon: ExploreIcon, active: false },
  { label: 'Notifications', icon: NotificationsIcon, active: false },
  { label: 'Messages', icon: MessagesIcon, active: false },
  { label: 'Favorites', icon: BookmarksIcon, active: false },
  { label: 'Lists', icon: ListsIcon, active: false },
  { label: 'Profile', icon: ProfileIcon, active: true },
  { label: 'More', icon: MoreIcon, active: false },
]

function SideBar({ id, className, style, onOpen }) {
  return (
    <aside
      id={id}
      className={[className, styles.sideBar].join(' ')}
      style={style}
    >
      <ul className={styles.navList}>
        {navItems.map((navItem) => {
          return <NavItem key={navItem.label} {...navItem}/>
        })}
      </ul>
      <TweetButton onOpen={onOpen}/>
    </aside>
  )
}

export default SideBar