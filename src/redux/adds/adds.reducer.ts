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

    /* pridedant type [] prie action types ismeta error kuris crashina programa, noriu, kad action.payload butu naujas masyvas, per kuri mappina programa ir rodo tik filtruotus skelbimus. beda tame, kad mano action.payload yra masyvas masyve, todel rasant i search-bar programa crashina, nes funkcija .toLowerCase neveikia su undefined.
    jeigu action.payload 35 eiluteje isimu is masyvo remu programa crashina
    */

type Action = {type : "ADD_NEW_ITEM" | 'FILTER', payload: newItemType | string}

const addsReducer = (state: itemsListState = INITIAL_STATE, action: Action) =>{
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return {
                ...state, items:[ action.payload, ...state.items]
            }
        case 'FILTER':
            return{
                ...state, items: [action.payload]
            }
            default:
                return state
    }
}

export default addsReducer