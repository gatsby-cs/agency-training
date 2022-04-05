import { createSlice } from '@reduxjs/toolkit'

import data from './data'

const initialState = {
  value: [] as any,
  length: 0,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    set: (state) => {
      state.value = data.data
      state.length = data.data.length
    },
  },
})

// Action creators are generated for each case reducer function
export const { set } = dataSlice.actions

export default dataSlice.reducer
