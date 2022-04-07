import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../state/redux'

import * as styles from './navigation.module.scss'
import useStore from '../../state/zustand'

const Navigation: React.FC = (nav_id) => {
  // Redux
  // const length = useSelector((state: RootState) => state.data.length)

  // Zustand
  const length = useStore((state) => state.length)

  const navigationData = useStaticQuery(graphql`
    {
      contentfulComponentNavigation(
        contentful_id: { eq: "5Iw1Oniy99MTjCmAKiJ2r0" }
      ) {
        title
      }
    }
  `)

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <span className={styles.navigationItem}>
          {navigationData.contentfulComponentNavigation.title}
        </span>
      </Link>
      <ul className={styles.navigation}>
        {/* <li className={styles.navigationItem}>Global Data Length: {length}</li> */}
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <SignedIn>
          <li className={styles.navigationItem}>
            <Link to="/profile/" activeClassName="active">
              Profile
            </Link>
          </li>
        </SignedIn>
        <SignedIn>
          <li className={styles.navigationItem}>
            <UserButton />
          </li>
        </SignedIn>
        <li className={styles.navigationItem}>
          <SignedOut>
            <Link to="/login/" activeClassName="active">
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <button className={styles.logout}>Logout</button>
            </SignOutButton>
          </SignedIn>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
