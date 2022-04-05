import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from './redux'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }: { element: ReactNode }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return <Provider store={store}>{element}</Provider>
}
