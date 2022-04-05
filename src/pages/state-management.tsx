import { PageProps } from 'gatsby'
import React from 'react'
import Container from '../components/container/container'

import Layout from '../components/layout/layout'
import StateButton from '../components/state-button/state-button'

const StateManagement: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <StateButton />
      </Container>
    </Layout>
  )
}

export default StateManagement
