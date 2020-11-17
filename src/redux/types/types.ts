

//menu item props for components, that dont require the id to be passed
export interface shopItem{
    id:string,
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string,
    quantity: number
    } 

export interface menuItem{
    item: shopItem,
    id:string,
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string,
    quantity: number
}


//newItemType
export interface shopItemArray{
    items: shopItem[]
}

//types of
export const NEW_ITEM_ADDED = 'NEW_ITEM_ADDED'
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const ITEM_REMOVED = 'ITEM_REMOVED'
export const TOGGLE_CART_WIDGET_VISIBLE = 'TOGGLE_CART_WIDGET_VISIBLE'


// action type in shopping cart
export type shoppingCartAction = {type : typeof NEW_ITEM_ADDED | typeof ITEM_REMOVED, payload: shopItem}

//action type for the adds reducer
export type addsReducerAction = {type : typeof ADD_NEW_ITEM , payload: shopItem}


//action type for widget reducer
export type widgetReducerAction = { type: typeof TOGGLE_CART_WIDGET_VISIBLE, payload: boolean}




