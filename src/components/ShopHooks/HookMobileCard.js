import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyMobile } from '../Actions/MobileAction'

function HookMobileCard() {
    const totalMobiles = useSelector(state => state.mobile.noOfMobiles)
    const dispatch = useDispatch()

// without giving any value then it will throw some error in console browser
    const[num,setNum] = useState(1)
  return (
    <div>
        <h3>Total Mobiles  {totalMobiles}</h3>
        <input type='text' value={num} onChange={e => setNum(e.target.value)}/>
        <button type='button'  onClick={() => dispatch(buyMobile(num))}>Buy Mobile</button>
    </div>
  )
}

export default HookMobileCard