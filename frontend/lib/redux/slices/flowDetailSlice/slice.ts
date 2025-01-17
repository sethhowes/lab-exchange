import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tool } from '../toolListSlice/slice'

export interface Job {
  BacalhauJobID: string
  State: string
  Error: string
  Tool: Tool
  FlowId: string
}

export interface FlowDetail {
  CID: string,
  Jobs: Job[],
  Name: string,
  WalletAddress: string,
}

interface FlowDetailSliceState {
  flow: FlowDetail
  loading: boolean
  error: string | null
  success: boolean
}

const initialState: FlowDetailSliceState = {
  flow: { CID: '', Jobs: [], Name: '', WalletAddress: '' },
  loading: false,
  error: null,
  success: false,
}

export const flowDetailSlice = createSlice({
  name: 'flowDetail',
  initialState,
  reducers: {
    setFlowDetail: (state, action: PayloadAction<FlowDetail>) => {
      state.flow = action.payload
    },
    setFlowDetailLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setFlowDetailError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setFlowDetailSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload
    }
  }
})

export const {
  setFlowDetail,
  setFlowDetailLoading,
  setFlowDetailError,
  setFlowDetailSuccess
} = flowDetailSlice.actions

export default flowDetailSlice.reducer
