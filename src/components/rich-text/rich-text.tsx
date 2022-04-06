import React, { ReactNode } from 'react'
import slugify from '@sindresorhus/slugify'

import {
  INLINES,
  BLOCKS,
  MARKS,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hyperlink,
  Paragraph,
  ListItem,
  UnorderedList,
  Quote,
} from '@contentful/rich-text-types'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const createJumpLink = (children: string) => {
  return (
    <a
      href={`#${slugify(children[0])}`}
      className="
        relative
        before:md:content-['#']
        before:absolute 
        before:inset-x-hash 
        before:text-md 
        before:text-gray-300
        hover:md:before:content-['#']
        hover:before:text-brand-default"
    >
      {children}
    </a>
  )
}

type Asset = {
  data: {
    target: {
      gatsbyImageData: IGatsbyImageData
      description: string
    }
  }
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text: string) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text: string) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: string) => (
      <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
        {text}
      </code>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: Hyperlink, children: string) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-brand-default underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node: Heading1, children: string) => (
      <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (node: Heading2, children: string) => {
      return (
        <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
          {createJumpLink(children)}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node: Heading3, children: string) => (
      <h3 className="text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: Heading4, children: string) => (
      <h4 className="text-xl sm:text-2xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: Heading5, children: string) => (
      <h5 className="text-lg sm:text-xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: Heading6, children: string) => (
      <h6 className="text-md sm:text-lg text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h6>
    ),

    [BLOCKS.OL_LIST]: (node: ReactNode, children: string) => (
      <ol className="list-decimal pl-4">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node: UnorderedList, children: string) => (
      <ul className="list-disc pl-4">{children}</ul>
    ),

    [BLOCKS.LIST_ITEM]: (node: ListItem, children: string) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: string) => {
      if (node?.content[0].value === '') {
        return <br />
      } else {
        return <p className="leading-loose">{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (children: any) => (
      <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: Asset) => {
      const { gatsbyImageData, description } = node.data.target

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)!}
          alt={description}
          className="mb-10"
        />
      )
    },
  },
}

const ContentfulRichText = ({
  richText,
}: {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}) => {
  return <div>{renderRichText(richText, options as any)}</div>
}

export default ContentfulRichText
