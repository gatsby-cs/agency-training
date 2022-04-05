import React from 'react'
// import { RootState } from '../../state/redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { set } from '../../state/slice'

import * as styles from './state-button.module.scss'
import useStore from '../../state/zustand'

const StateButton: React.FC = () => {
  // Redux
  //   const data = useSelector((state: RootState) => state.data.value)
  //   const dispatch = useDispatch()

  // Zustand
  const setDataZustand = useStore((state) => state.set)
  const data = useStore((state) => state.value)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={setDataZustand}
          className={styles.button}
        >
          Set Data
        </button>
        <div className={styles.code}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}

export default StateButton
