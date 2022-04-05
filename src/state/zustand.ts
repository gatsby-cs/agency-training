import create, { SetState } from 'zustand'
import data from './data'

type StoreState = {
  value: Array<any>
  length: number
  set: Function
}

const useStore = create((set: SetState<StoreState>) => ({
  value: [],
  length: 0,
  set: () => set(() => ({ value: data.data, length: data.data.length })),
}))

export default useStore
