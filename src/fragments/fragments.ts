import { graphql } from 'gatsby'

export const CalloutFragment = graphql`
  fragment CalloutFragment on ContentfulComponentCallout {
    internal {
      type
    }
    heading
    body {
      body
    }
  }
`

export const HeroFragment = graphql`
  fragment HeroFragment on ContentfulComponentHero {
    internal {
      type
    }
    title
    image {
      gatsbyImageData(width: 1200)
    }
  }
`

export const ParagraphFragment = graphql`
  fragment ParagraphFragment on ContentfulComponentParagraph {
    internal {
      type
    }
    title
    content {
      raw
    }
  }
`
