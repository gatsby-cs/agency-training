import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import React from 'react'
import ContentfulRichText from '../rich-text/rich-text'
import renderRichText from '../rich-text/rich-text'
type ParagraphProps = {
  title: string
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

const Paragraph: React.FC<ParagraphProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ContentfulRichText richText={content} />
    </div>
  )
}

export default Paragraph
