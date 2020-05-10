import React from 'react'
import NavItem from '../components/NavItem'
import PostButton from '../components/PostButton'
import { ReactComponent as HomeIcon } from '../assets/svgs/home.svg'
import { ReactComponent as ExploreIcon } from '../assets/svgs/explore.svg'
import { ReactComponent as NotificationsIcon } from '../assets/svgs/notifications.svg'
import { ReactComponent as MessagesIcon } from '../assets/svgs/messages.svg'
import { ReactComponent as BookmarksIcon } from '../assets/svgs/bookmarks.svg'
import { ReactComponent as ListsIcon } from '../assets/svgs/lists.svg'
import { ReactComponent as ProfileIcon } from '../assets/svgs/profile.svg'
import { ReactComponent as MoreIcon } from '../assets/svgs/more.svg'
import styles from './SideBar.module.css'

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

function SideBar({ id, className, style }) {
  return (
    <aside
      id={id}
      className={[className, styles.sideBar].join(' ')}
      style={style}
    >
      <ul className={styles.navList}>
        {navItems.map((navItem) => {
          return <NavItem {...navItem}/>
        })}
      </ul>
      <PostButton/>
    </aside>
  )
}

export default SideBar