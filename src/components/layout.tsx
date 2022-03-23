import React from 'react'

import './variables.scss'
import './global.scss'
import Seo, { SeoProps } from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { PageProps } from 'gatsby'

type DataProps = {
  children: React.ReactNode
  location: PageProps['location']
  seo?: SeoProps
}

const Template: React.FC<DataProps> = ({ children, location, seo }) => {
  console.log(location)

  return (
    <>
      <Seo {...seo} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Template
