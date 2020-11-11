import { newItemType } from '../adds/adds.reducer'

interface itemsListState {
    item: 
        {id: number, 
        title: string, 
        subtitle: string, 
        price:number, 
        imgUrl: string}
}

const INITIAL_STATE = {
    cart : []
}

type Action = {type : 'NEW_ITEM_ADDED', payload: newItemType}

const shoppingCartReducer = (state = INITIAL_STATE , action : Action ) =>{
    switch(action.type){
        case "NEW_ITEM_ADDED":
            return{
                ...state, cart: [...state.cart, action.payload]
            }
            default:
                return state
        }

}

export default shoppingCartReducer;