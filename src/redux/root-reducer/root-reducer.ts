import { combineReducers} from 'redux'

import addsReducer from '../adds/adds.reducer'
import shoppingCartReducer from '../shopping-cart/shopping-cart.reducer'
import cartWidgetReducer from '../widget-reducer/widget.reducer'

const rootReducer = combineReducers({
    items: addsReducer,
    shoppingCart: shoppingCartReducer,
    widget: cartWidgetReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>