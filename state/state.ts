import { createSlice ,configureStore} from "@reduxjs/toolkit";

import { userreducer } from "./reducers/user";




const userslice=createSlice({name:'user',initialState:{likes:[] as string[],saves:[] as string[]},reducers:userreducer})
export const useractions=userslice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store=configureStore({reducer:{user:userslice.reducer}})