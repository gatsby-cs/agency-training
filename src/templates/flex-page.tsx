//@ts-nocheck

import { graphql, PageProps } from 'gatsby'
import React, { Suspense } from 'react'

import Container from '../components/container/container'
import Layout from '../components/layout/layout'
import Paragraph from '../components/paragraph/paragraph'
import Hero from '../components/hero/hero'
import Callout from '../components/callout/callout'

type FlexPageProps = {
  contentfulPageFlexPage: GatsbyTypes.ContentfulPageFlexPage
}

const FlexPage: React.FC<PageProps<FlexPageProps>> = ({ data }) => {
  const page = data.contentfulPageFlexPage
  return (
    <Layout>
      <Container>
        <h1>{page.slug}</h1>

        {page.content?.map((c) => {
          console.log(c?.internal.type)
          if (c?.internal.type === 'ContentfulComponentHero') {
            return <Hero title={c.title} image={c.image.gatsbyImageData} />
          }
          if (c?.internal.type === 'ContentfulComponentCallout') {
            return <Callout {...c} />
          }
          if (c?.internal.type === 'ContentfulComponentParagraph') {
            return <Paragraph {...c} />
          }
        })}
      </Container>
    </Layout>
  )
}

export default FlexPage

export const pageQuery = graphql`
  query FlexPageBySlug($slug: String!) {
    contentfulPageFlexPage(slug: { eq: $slug }) {
      slug
      content {
        ... on ContentfulComponentCallout {
          internal {
            type
          }
          heading
          body {
            body
          }
        }
        ... on ContentfulComponentHero {
          internal {
            type
          }
          title
          image {
            gatsbyImageData(width: 1200)
          }
        }
        ... on ContentfulComponentParagraph {
          internal {
            type
          }
          title
          content {
            raw
          }
        }
      }
    }
  }
`
