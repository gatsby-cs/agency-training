import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { PageProps } from 'gatsby'

type DataProps = {
  children: React.ReactNode
  location: PageProps['location']
}

function Template({ children, location }: DataProps) {
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
