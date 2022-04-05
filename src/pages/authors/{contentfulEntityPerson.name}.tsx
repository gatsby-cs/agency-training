import { PageProps, graphql } from 'gatsby'
import React from 'react'

type AuthorProps = {
  author: GatsbyTypes.ContentfulEntityPerson
}

const AuthorPage: React.FC<PageProps<AuthorProps>> = ({ data }) => {
  const { author } = data
  return <h1>{author.name}</h1>
}

export default AuthorPage

export const query = graphql`
  query ($id: String) {
    author: contentfulEntityPerson(id: { eq: $id }) {
      name
    }
  }
`
