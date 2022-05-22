import React from 'react'
import { buyLaptop } from '../Actions/LaptopActions'
import {useSelector, useDispatch} from 'react-redux'

function HookLaptopCard() {
    const totalLaptops = useSelector(state => state.laptop.noOfLaptops)
    const dispatch = useDispatch() 
  return (
    <div>
        <h3>Total Laptops  {totalLaptops}</h3>
        <button type='button'  onClick={() => dispatch(buyLaptop())}>Buy Laptop</button>
    </div>
  )
}

export default HookLaptopCard