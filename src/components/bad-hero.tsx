import React from 'react'

import * as styles from './hero.module.scss'

type HeroProps = {
  image?: string
  title: string
  content?: string
}

const BadHero: React.FC<HeroProps> = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && <img className={styles.image} alt={title} src={image} />}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default BadHero
