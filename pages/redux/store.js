import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./subscription"


export const store = configureStore({
  reducer: {
    plan : counterReducer,
  },
})