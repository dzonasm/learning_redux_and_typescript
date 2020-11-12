import {shopItemArray, shoppingCartAction, NEW_ITEM_ADDED, ITEM_REMOVED} from '../types/types'

export interface emptyCart {
    items: []
}

const INITIAL_STATE = {
    items : []
}

const shoppingCartReducer = (
    state: shopItemArray | emptyCart = INITIAL_STATE, 
    action : shoppingCartAction ) =>{
        
    switch(action.type){
        case NEW_ITEM_ADDED:
            return{
                ...state, items: [...state!.items, action.payload]
            }
        case ITEM_REMOVED:
            return{
                ...state, items: state.items.filter(item =>{
                    return(item !== action.payload)
                })
            }

        default:
            return state
        }
}

export default shoppingCartReducer;