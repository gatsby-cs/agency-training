import React from 'react'

import './variables.scss'
import './global.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { PageProps } from 'gatsby'

type DataProps = {
  children: React.ReactNode
  location: PageProps['location']
}

const Template: React.FC<DataProps> = ({ children, location }) => {
  console.log(location)

  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Template
