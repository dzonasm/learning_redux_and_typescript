import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import WidgetItem from './widget-items/widget-items'
import {v4 as uuuidv4} from 'uuid'
import CustomButton from '../custom-button/custom-button.component'
import {useDispatch} from 'react-redux'
import {TOGGLE_CART_WIDGET_VISIBLE} from '../../redux/types/types'
import {withRouter} from 'react-router-dom'

import './shopping-cart-widget.styles.scss'

function CartWidget(props:any) {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)    

    const dispatch = useDispatch()

    return(
        <div className='shopping-cart-widget'>
            <div className="cart-items">
            {
                cartState.length > 0? cartState.map((item) =>{
                    return(
                        <div key={uuuidv4()} className='cart-item-and-button'>
                            <WidgetItem
                                id={item.id}
                                title={item.title} 
                                subtitle={item.subtitle} 
                                imgUrl={item.imgUrl} 
                                price={item.price}
                                quantity={item.quantity}
                            />
                            <RemoveFromCartButton buttonText='pašalinti' item={item}/> 
                        </div>
                    )}) : <h3 className='cart-empty-text'>Krepšelis tuščias</h3>
            }
            </div>
            <div className='cart-button-container'>
            <CustomButton handleClick={()=>{
                props.history.push('/cart')
                dispatch({type:TOGGLE_CART_WIDGET_VISIBLE})
                }} 
            buttonText="Atsiskaityti"/>

            </div>
        </div>
        )
    }

    export default  withRouter(CartWidget);
