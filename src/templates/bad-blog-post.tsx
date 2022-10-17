import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import Seo from '../components/seo/seo'
import Layout from '../components/layout/layout'
import Tags from '../components/tags/tags'
import Hero from '../components/hero/bad-hero'

import * as styles from './blog-post.module.scss'

interface PostWithRawDate extends GatsbyTypes.ContentfulPageBlogPost {
  rawDate: string
}
interface DataProps {
  contentfulPageBlogPost: PostWithRawDate
  previous: GatsbyTypes.ContentfulPageBlogPost
  next: GatsbyTypes.ContentfulPageBlogPost
}

function BlogPostTemplate({ data, location }: PageProps<DataProps>) {
  const post = data.contentfulPageBlogPost
  const previous = data.previous
  const next = data.next

  return (
    <Layout location={location}>
      <Seo
        title={post.title}
        description={post?.description?.childMarkdownRemark?.excerpt}
        image={`http:${post?.heroImage?.resize?.src}`}
      />
      <Hero
        image={post.heroImage?.file?.url!}
        title={post.title!}
        content={post.description?.childMarkdownRemark?.excerpt}
      />
      <div className={styles.container}>
        <span className={styles.meta}>
          {post.author?.name} &middot;{' '}
          <time dateTime={post?.rawDate}>{post.publishDate}</time> –{' '}
          {post.body?.childMarkdownRemark?.timeToRead} minute read
        </span>
        <div className={styles.article}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: post.body?.childMarkdownRemark?.html!,
            }}
          />
          <Tags tags={post.tags} />
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BadBlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulPageBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        resize(height: 630, width: 1200) {
          src
        }
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulPageBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPageBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
