import itemsList from '../../resources/itemsList'

export interface itemsListState {
    items: {id: number, 
        title: string, 
        subtitle: string, 
        price:number, 
        imgUrl: string}[]
}

const INITIAL_STATE = {
    items: itemsList
}

interface newItemType  {id: number, 
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string}

type Action = {type : "ADD_NEW_ITEM" | 'FILTER_BY_NAME', payload: newItemType}

const addsReducer = (state: itemsListState = INITIAL_STATE, action: Action) =>{
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return {
                ...state, items:[ action.payload, ...state.items]
            }
        case 'FILTER_BY_NAME':
            return{
                ...state, items:[action.payload]
            }
            default:
                return state
    }
}

export default addsReducer