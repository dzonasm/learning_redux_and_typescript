import { combineReducers} from 'redux'

import addsReducer from '../adds/adds.reducer'
import shoppingCartReducer from '../shopping-cart/shopping-cart.reducer'

const rootReducer = combineReducers({
    items: addsReducer,
    shoppingCart: shoppingCartReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>