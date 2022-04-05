// import wrapWithProvider from './src/state/wrap-with-provider'
// export const wrapRootElement = wrapWithProvider

import React from 'react'

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />,
  ])
}
