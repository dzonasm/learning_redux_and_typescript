
//itemsListState
export interface shopItem{
    id: number, 
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string
    } 


//newItemType
export interface shopItemArray{
    items: shopItem[]
}

//types of
export const NEW_ITEM_ADDED = 'NEW_ITEM_ADDED'
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const FILTER = 'FILTER'


// action type in shopping cart
export type shoppingCartAction = {type : typeof NEW_ITEM_ADDED, payload: shopItem}

//action type for the adds reducer
export type addsReducerAction = {type : typeof ADD_NEW_ITEM | 'FILTER', payload: any}





