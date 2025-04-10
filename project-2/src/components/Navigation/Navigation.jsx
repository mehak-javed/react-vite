import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`} >
        <div>
            <img src="vite.svg" alt="do some xo coding" />
        </div>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navigation