import { combineReducers} from 'redux'

import addsReducer from '../adds/adds.reducer'

export default combineReducers({
    items: addsReducer
})