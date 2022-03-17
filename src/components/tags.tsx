import React from 'react'

import * as styles from './tags.module.css'

function Tags({ tags }: { tags: GatsbyTypes.ContentfulBlogPost['tags'][] }) {
  return tags?.length > 0 ? (
    <small className={styles.tags}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  ) : null
}

export default Tags
