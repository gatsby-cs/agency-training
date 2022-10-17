//@ts-nocheck

import { graphql, PageProps } from 'gatsby'
import React, { Suspense } from 'react'

import Container from '../components/container/container'
import Layout from '../components/layout/layout'
import Paragraph from '../components/paragraph/paragraph'
import Hero from '../components/hero/hero'
import Callout from '../components/callout/callout'
import Seo from '../components/seo/seo'

type FlexPageProps = {
  contentfulPageFlexPage: GatsbyTypes.ContentfulPageFlexPage
}

const FlexPage: React.FC<PageProps<FlexPageProps>> = ({ data }) => {
  const page = data.contentfulPageFlexPage
  return (
    <Layout>
      <Seo />
      <script
        src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
        crossorigin="anonymous"
      ></script>
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
      title
      content {
        ... on ContentfulComponentCallout {
          ...CalloutFragment
        }
        ... on ContentfulComponentHero {
          ...HeroFragment
        }
        ... on ContentfulComponentParagraph {
          ...ParagraphFragment
        }
      }
    }
  }
`
