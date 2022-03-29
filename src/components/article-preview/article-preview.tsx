import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from '../container/container'
import Tags from '../tags/tags'
import * as styles from './article-preview.module.scss'

const ArticlePreview = ({
  posts,
}: {
  posts: GatsbyTypes.ContentfulPageBlogPost[]
}) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                {post?.heroImage?.gatsbyImageData && (
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                )}
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.description?.childMarkdownRemark?.html!,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
