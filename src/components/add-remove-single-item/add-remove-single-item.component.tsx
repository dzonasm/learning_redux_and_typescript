import React from 'react'
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { SINGLE_ITEM_REMOVED, addRemoveComponentProps, NEW_ITEM_ADDED} from '../../redux/types/types'


const AddRemoveSingleItem =({item}: addRemoveComponentProps) => {


    const dispatch=useDispatch()
    const removeItem= ()=>{
        dispatch({type: SINGLE_ITEM_REMOVED, payload: item})
    }


    const addItem= ()=>{
        dispatch({type: NEW_ITEM_ADDED, payload: item})
    }

    return(
        <div className='add-remove-items-container'>
            <Button 
            size='small' 
            variant='contained'
            color='secondary'
            onClick={removeItem}>
                -1
            </Button>
            <Button 
            size='small' 
            variant='contained'
            color='primary'
            onClick={addItem}>
                +1
            </Button>
        </div>
    )
}

export default AddRemoveSingleItem