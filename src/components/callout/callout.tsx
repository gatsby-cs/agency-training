import React from 'react'

import * as styles from './callout.module.scss'

type CalloutProps = {
  heading: string
  body: {
    body: string
  }
}

const Callout: React.FC<CalloutProps> = ({ heading, body }) => {
  return (
    <div className={styles.callout}>
      <h2 className={styles.heading}>{heading}</h2>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: body.body }}
      />
    </div>
  )
}

export default Callout
