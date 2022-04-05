import { PageProps } from 'gatsby'
import React from 'react'
import Container from '../components/container/container'

import Layout from '../components/layout/layout'

const Form: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1>Form</h1>
        <form></form>
      </Container>
    </Layout>
  )
}

export default Form
