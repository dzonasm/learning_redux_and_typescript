import React from 'react'
import {InputLabel, Select, MenuItem} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import './sorting-selector.styles.scss'
import{SORT_BY_PRICE} from '../../redux/types/types'

export const SortingSelector = () =>{


    const dispatch= useDispatch()
    const handleChange = ((e: any)=>{
        console.log(e.target.value)
        dispatch({type: SORT_BY_PRICE, payload: e.target.value })
    })

    

    return(
    <div className='selector'>
        <InputLabel id="selector-label">Sort By Price</InputLabel>
        <Select style={{minWidth: 120}} onChange={handleChange} labelId='label' id='sorting-selector' value=''>
            <MenuItem value='no-sort'> --- </MenuItem>
            <MenuItem value='asc'>Low to High</MenuItem>
            <MenuItem value='dsc'>High to Low</MenuItem>
        </Select>
    </div>
)
}