import {applyMiddleware, createStore } from 'redux'
import addsReducer from '../adds/adds.reducer'
import logger from 'redux-logger'

const middlewares = [logger]

export const store = createStore(addsReducer, applyMiddleware(...middlewares))