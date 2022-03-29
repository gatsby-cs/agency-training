import React from 'react'
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

import Layout from '../components/layout/layout'

import * as styles from '../styles/pages/login.module.scss'

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </div>
    </Layout>
  )
}
