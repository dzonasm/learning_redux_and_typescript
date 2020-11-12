
//itemsListState
export interface shopItem{
    id: number, 
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string
    } 

//menu item props for components, that dont require the id to be passed
export interface shopItemWithoutId{
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
export const ITEM_REMOVED = 'ITEM_REMOVED'
export const TOGGLE_CART_WIDGET_VISIBLE = 'TOGGLE_CART_WIDGET_VISIBLE'


// action type in shopping cart
export type shoppingCartAction = {type : typeof NEW_ITEM_ADDED | typeof ITEM_REMOVED, payload: shopItem}

//action type for the adds reducer
export type addsReducerAction = {type : typeof ADD_NEW_ITEM | typeof FILTER, payload: any}

//action type for widget reducer
export type widgetReducerAction = { type: typeof TOGGLE_CART_WIDGET_VISIBLE, payload: boolean}





