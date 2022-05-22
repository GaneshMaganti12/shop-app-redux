import React from 'react'
import {connect} from 'react-redux'
import { buyMobile } from '../Actions/MobileAction'

function MobileCard(props) {
  return (
    <div>
        <h3>Total Mobile  {props.totalMobile}</h3>
        <button type='button' onClick={props.buy}>Buy Mobile</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        totalMobile: state.mobile.noOfMobiles
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buy: () => dispatch(buyMobile())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MobileCard)