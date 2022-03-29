import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import {
  useUser,
  SignedOut,
  SignedIn,
  RedirectToSignIn,
} from '@clerk/clerk-react'

import Layout from '../../components/layout/layout'

import * as styles from '../../styles/pages/profile.module.scss'
type ClientPageProps = {
  path: string
}

const Details: React.FC<ClientPageProps> = (props) => {
  return <h2>Details!</h2>
}

const Account: React.FC<ClientPageProps> = (props) => {
  return <h2>Account!</h2>
}

export default function Profile() {
  const user = useUser()

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Layout>
          <div className={styles.container}>
            <h1>Profile!</h1>
            <Link to="/profile/">Profile Page</Link>
            <Link to="/profile/details">Details Page</Link>
            <Link to="/profile/account">Account Page</Link>
            <Router basepath="/profile">
              <Details path="/details" />
              <Account path="/account" />
            </Router>
          </div>
        </Layout>
      </SignedIn>
    </>
  )
}
