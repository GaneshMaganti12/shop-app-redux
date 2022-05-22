import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyLaptop } from '../Actions/LaptopActions'

function LaptopCard(props) {
    const [number, setNumber] = useState(1)   // without giving any value then it will throw some error in console browser
  return (
    <div>
        <h3>Total Laptops {props.totalLaptops}</h3>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
        <button type='button' onClick={() => props.buy(number)}>Buy Laptop</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        totalLaptops: state.laptop.noOfLaptops
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buy: (number) => dispatch(buyLaptop(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LaptopCard)