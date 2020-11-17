import itemsList from '../../resources/itemsList'
import {shopItemArray, addsReducerAction, ADD_NEW_ITEM} from '../types/types'

const INITIAL_STATE = {
    items: itemsList
}


const addsReducer = (
    state: shopItemArray = INITIAL_STATE, 
    action: addsReducerAction) =>{

    switch(action.type) {
        case ADD_NEW_ITEM:
            return {
                ...state, items:[ action.payload, ...state.items]
            }
        default:
            return state
    }
}

export default addsReducer