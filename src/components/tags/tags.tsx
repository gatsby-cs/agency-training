import React from 'react'

import * as styles from './tags.module.scss'

const Tags: React.FC<{ tags: GatsbyTypes.ContentfulPageBlogPost['tags'] }> = ({
  tags = [],
}) => {
  return tags?.length > 0 ? (
    <small className={styles.tags}>
      {tags!.map((tag, i) => (
        <div key={i} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  ) : null
}

export default Tags
