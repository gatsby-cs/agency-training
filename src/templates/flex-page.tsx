//@ts-nocheck
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import loadable from '@loadable/component'
import Container from '../components/container/container'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'

const Callout = loadable(() => import('../components/callout/callout'))
const Hero = loadable(() => import('../components/hero/hero'))
const Paragraph = loadable(() => import('../components/paragraph/paragraph'))

type FlexPageProps = {
  contentfulPageFlexPage: GatsbyTypes.ContentfulPageFlexPage
}

const FlexPage: React.FC<PageProps<FlexPageProps>> = ({ data }) => {
  const page = data.contentfulPageFlexPage
  return (
    <Layout>
      <Seo />
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
