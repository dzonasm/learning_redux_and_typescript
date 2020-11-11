import {createStore } from 'redux'
import addsReducer from '../adds/adds.reducer'

export const store = createStore(addsReducer)