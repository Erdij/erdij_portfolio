import "./index.scss"

import React from "react"
import { Link } from "react-router-dom"
import LogoS from "../../assets/images/logos.jpg"
import LogoSubtitle from "../../assets/images/LogoSubtitle.png"

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img src={LogoSubtitle} alt='erdij' />
      </Link>
    </div>
  )
}

export default Sidebar
