import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import {
  useUser,
  SignedOut,
  SignedIn,
  RedirectToSignIn,
} from '@clerk/clerk-react'
import { withServerSideAuth } from '@clerk/nextjs/ssr'

import Layout from '../../components/layout/layout'

import * as styles from '../../styles/pages/profile.module.scss'
import { userInfo } from 'os'
type ClientPageProps = {
  path: string
}

type DefaultPageProps = {
  path: string
  fullName?: string | null
  avatar?: string
  email?: string
}

type DetailsPageProps = {
  path: string
  dateCreated?: Date | null
  passwordEnabled?: boolean
}

const Default: React.FC<DefaultPageProps> = ({ fullName, avatar, email }) => {
  return (
    <>
      <h2>Profile</h2>
      <img src={avatar} className={styles.avatar} />
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
    </>
  )
}

const Details: React.FC<DetailsPageProps> = ({
  dateCreated,
  passwordEnabled,
}) => {
  return (
    <>
      <h2>Details</h2>
      <p>Date created: {dateCreated?.toLocaleDateString('en-US')}</p>
      <p>Password enabled: {passwordEnabled ? 'true' : 'false'}</p>
    </>
  )
}

const Account: React.FC<ClientPageProps> = (props) => {
  return (
    <>
      <h2>Account</h2>
      <p>
        <button className={styles.button}>Reset password</button>
      </p>
      <p>
        <button className={styles.button}>Change email</button>
      </p>
    </>
  )
}

export default function Profile({ serverData }) {
  const user = useUser()
  console.log(user)

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Layout>
          <div className={styles.container}>
            <h1>Profile</h1>
            <Link className={styles.link} to="/profile/">
              Profile Page
            </Link>
            <Link className={styles.link} to="/profile/details">
              Details Page
            </Link>
            <Link className={styles.link} to="/profile/account">
              Account Page
            </Link>
            <Router basepath="/profile">
              <Default
                path="/"
                fullName={user.user?.fullName}
                avatar={user.user?.profileImageUrl}
                email={user.user?.primaryEmailAddress?.emailAddress}
              />
              <Details
                path="/details"
                dateCreated={user.user?.createdAt}
                passwordEnabled={user.user?.passwordEnabled}
              />
              <Account path="/account" />
            </Router>
          </div>
        </Layout>
      </SignedIn>
    </>
  )
}

//@ts-ignore
// export async function getServerData(context) {
//   try {
//     withServerSideAuth(context)

//     return {
//       status: 200,
//       props: {
//         test: 'foo',
//       },
//       headers: {},
//     }
//   } catch (err) {
//     console.log(err)
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     }
//   }
// }
