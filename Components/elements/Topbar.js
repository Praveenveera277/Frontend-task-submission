import React from 'react'
import './topbar.css'

const topbar = () => {
  return (
    <div className="top-bar">
      <img className="icon menu-icon" alt="" src={require("../../icons/menu.png")}></img>
      <div className="float-right">
        <img className="icon shopping-cart-icon" alt="" src={require("../../icons/shopping-cart.png")}></img>
        <img className="icon bell-icon" alt="" src={require("../../icons/bell.png")}></img>
      </div>
    </div>
  )
}

export default topbar