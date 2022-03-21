import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as styles from './hero.module.scss'

type HeroProps = {
  image: IGatsbyImageData
  title: string
  content: string
}

const Hero: React.FC<HeroProps> = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default Hero
