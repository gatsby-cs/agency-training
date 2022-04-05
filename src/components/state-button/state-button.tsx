import React from 'react'
import { RootState } from '../../state/redux'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../state/slice'

import * as styles from './state-button.module.scss'

const StateButton: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(set())}
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
