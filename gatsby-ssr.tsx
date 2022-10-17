// import wrapWithProvider from './src/state/wrap-with-provider'
// export const wrapRootElement = wrapWithProvider

import React from 'react'

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <script
      key="jquery"
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    />,
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
  ])
}
