import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

type ClientPageProps = {
  path: string
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <h1>Profile!</h1>
      <Link to="/profile/">Profile Page</Link>
      <Link to="/profile/details">Details Page</Link>
      <Link to="/profile/account">Account Page</Link>
      {children}
    </>
  )
}

const Details: React.FC<ClientPageProps> = (props) => {
  return <h2>Details!</h2>
}

const Account: React.FC<ClientPageProps> = (props) => {
  return <h2>Account!</h2>
}

export default function Profile() {
  return (
    <div>
      <Layout>
        <Router basepath="/profile">
          <Details path="/details" />
          <Account path="/account" />
        </Router>
      </Layout>
    </div>
  )
}
