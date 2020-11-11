import {applyMiddleware, createStore } from 'redux'
import addsReducer from '../adds/adds.reducer'
import logger from 'redux-logger'
import shoppingCartReducer from '../shopping-cart/shopping-cart.reducer'
import rootReducer from '../root-reducer/root-reducer'

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))