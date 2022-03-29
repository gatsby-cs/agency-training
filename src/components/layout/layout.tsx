import React from 'react'

import '../../styles/variables.scss'
import '../../styles/global.scss'
import Seo, { SeoProps } from '../seo/seo'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import { PageProps } from 'gatsby'

type DataProps = {
  children: React.ReactNode
  location?: PageProps['location']
  seo?: SeoProps
}

const Template: React.FC<DataProps> = ({ children, location, seo }) => {
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
